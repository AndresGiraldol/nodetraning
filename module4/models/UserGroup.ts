import { Model } from "sequelize";
import sequelize from "./DB";
import User from "./User";
import Group from "./Group";

class UserGroup extends Model {}
UserGroup.init(
  {},
  { sequelize, modelName: "UserGroup", freezeTableName: true }
);

User.belongsToMany(Group, { through: UserGroup, onDelete: "cascade" });
Group.belongsToMany(User, { through: UserGroup, onDelete: "cascade" });

export default UserGroup;
