import { Optional, Op } from "sequelize";
import { Group, User, UserGroup, sequelize } from "../models";

export class GroupService {
  async create(group: Optional<any, string> | undefined) {
    await Group.create(group);
  }

  async getAll() {
    return await Group.findAll();
  }

  async getById(GroupId: string) {
    return await Group.findByPk(GroupId);
  }

  async update(newGroup: Optional<any, string>, GroupId: string) {
    const groupToUpdate = await Group.findByPk(GroupId);
    if (!groupToUpdate) {
      throw new Error("Group not found");
    }
    await groupToUpdate.update(newGroup);
  }

  async delete(GroupId: string) {
    const groupToDelete = await Group.findByPk(GroupId);
    if (!groupToDelete) {
      throw new Error("Group not found");
    }
    await groupToDelete.destroy();
  }

  addUsersToGroup(groupId: string, userIds: string[]) {
    return sequelize.transaction(async (transaction) => {
      const group: any = await Group.findByPk(groupId);
      if (!group) {
        throw new Error("Group not found");
      }
      const users = await User.findAll({
        where: {
          id: {
            [Op.in]: userIds,
          },
        },
        transaction,
      });

      if (users.length !== userIds.length) {
        throw new Error("Some of the users were not found.");
      }
      const mapUser = users.map((user: any) => ({
        UserId: user.id,
        GroupId: group.id,
      }));
      await UserGroup.bulkCreate(mapUser, { transaction });
    });
  }
}
