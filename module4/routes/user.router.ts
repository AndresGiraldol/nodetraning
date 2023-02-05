import express, { Request, Response } from 'express';
import Joi from 'joi';
import { UserService } from '../services/User.service';
import { IUser } from '../interfaces/User.interface';

const userRouter = express.Router();
const userService = new UserService();

function validateUser(user: IUser) {
    const schema = Joi.object({
        login: Joi.string().required(),
        password: Joi.string()
            .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'))
            .required(),
        age: Joi.number()
            .strict()
            .min(4)
            .max(130)
            .required(),
        isDeleted: Joi.boolean().strict().required()
    });

    return schema.validate(user);
}

// Get List of users
userRouter.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await userService.getAll();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userService.getById(req.params.id);
        if (user) {
            res.json(user);
        }
        res.status(404).json({ err: 'User not found' });
    } catch (err) {
        res.status(500).json(err);
    }
});

userRouter.post('/', async (req: Request, res: Response) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    const user = { ...req.body };
    try {
        await userService.create(user);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

userRouter.put('/:id', async (req: Request, res: Response) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    const user = { ...req.body };
    try {
        await userService.update(user, req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//  Get auto-suggest list of user
userRouter.get('/suggest/:loginSubstring/:limit', async (req: Request, res: Response) => {
    const loginSubstring = req.params.loginSubstring;
    const limit = parseInt(req.params.limit, 10);
    try {
        const suggestedUsers = await userService.getUsersByLogin(loginSubstring, limit);
        res.json(suggestedUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

userRouter.delete('/:id', (req: Request, res: Response) => {
    const user = req.params.id;
    try {
        userService.delete(user);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
export default userRouter;
