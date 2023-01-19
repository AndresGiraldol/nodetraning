/* eslint-disable @typescript-eslint/no-explicit-any */
import { Op, Optional } from 'sequelize';
import User from '../models/User';

export class UserService {
    async create(newUser: Optional<any, string> | undefined) {
        await User.create(newUser);
    }

    async update(newUser: Optional<any, string>, userID: string) {
        const userToUpdate = await User.findByPk(userID);
        if (!userToUpdate) {
            throw new Error('User not found');
        }
        await userToUpdate.update(newUser);
    }

    async getAll() {
        return await User.findAll();
    }

    async getById(userID: string) {
        return await User.findByPk(userID);
    }

    async delete(userID: string) {
        const userToDeleted = await User.findByPk(userID);
        if (!userToDeleted) {
            throw new Error('User not found');
        }
        await userToDeleted.destroy();
    }

    async getUsersByLogin(loginSubstring: string, limit: number) {
        try {
            const users = await User.findAll({
                where: {
                    login: {
                        [Op.iLike]: `%${loginSubstring}%`
                    }
                },
                order: [['login', 'ASC']],
                limit
            });
            return users;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
