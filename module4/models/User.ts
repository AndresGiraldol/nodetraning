import { Model, DataTypes } from 'sequelize';
import sequelize from './DB';

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  },
  { sequelize, modelName: 'User', freezeTableName: true }
);

export default User;
