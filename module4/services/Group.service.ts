import { Optional } from "sequelize";
import Group from "../models/Group";

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

  async update(newGroup: Optional<any, string>, userID: string) {
    const groupToUpdate = await Group.findByPk(userID);
    if (!groupToUpdate) {
      throw new Error("Group not found");
    }
    await groupToUpdate.update(newGroup);
  }

  async delete(userID: string) {
    const groupToDelete = await Group.findByPk(userID);
    if (!groupToDelete) {
      throw new Error("User not found");
    }
    await groupToDelete.destroy();
  }
}
