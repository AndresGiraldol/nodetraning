import { Sequelize } from 'sequelize';

export async function  getConection(): Promise<Sequelize> {
    const sequelize = new Sequelize('user_database', 'root', 'root', {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: false
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }   catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return sequelize;
}
