import { Model, DataTypes } from "sequelize";
import sequelize from "./DB";

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
