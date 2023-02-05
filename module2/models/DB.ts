import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('user_database', 'root', 'root', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
});

export default sequelize;
