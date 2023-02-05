import { Model, DataTypes } from "sequelize";
import sequelize from "./db";

// enum Permission {
//   READ = "READ",
//   WRITE = "WRITE",
//   DELETE = "DELETE",
//   SHARE = "SHARE",
//   UPLOAD_FILES = "UPLOAD_FILES",
// }
class Group extends Model {}
Group.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    permissions: DataTypes.ARRAY(DataTypes.STRING),
  },
  { sequelize, modelName: "Group", freezeTableName: true }
);

export default Group;
