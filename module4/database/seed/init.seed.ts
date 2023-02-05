import { DataTypes } from 'sequelize';
import { getConection } from '../connection';
export async function initSeedDB() {
    const conection = await getConection();
    conection.dropAllSchemas({});
    const user = conection.define(
        'User',
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
        {
            freezeTableName: true
        }
    );

    await user.sync({ force: true });

    await user.create({
        login: 'user1',
        password: 'password1',
        age: 30,
        isDeleted: false
    });

    await user.create({
        login: 'user2',
        password: 'password2',
        age: 25,
        isDeleted: false
    });
}
