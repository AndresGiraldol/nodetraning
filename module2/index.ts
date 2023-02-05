import express, { Request, Response } from 'express';
import { uuid } from 'uuidv4';

interface User {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
  }


// INITIAL STORAGE FOR USER
const users: User[] = [
    {
        id: uuid(),
        login: 'user1',
        password: 'password1',
        age: 30,
        isDeleted: false
    },
    {
        id: uuid(),
        login: 'user2',
        password: 'password2',
        age: 25,
        isDeleted: false
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


// Get List of users
app.get('/users', (req: Request, res: Response) => {
    res.json(users);
});

// Get user by id
app.get('/users/:id', (req: Request, res: Response) => {
    const userFinded = users.find(user => user.id === req.params.id);
    if (!userFinded) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(userFinded);
});

// Create User

app.post('/users', (req: Request, res: Response) => {
    const user: User = { ...req.body };
    user.id = uuid();
    users.push(user);
    res.json(user);
});

// Update User
app.put('/users/:id', (req: Request, res: Response) => {
    const userIndex = users.findIndex(user => user.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
});


//  Get auto-suggest list of user
app.get('/users/suggest/:loginSubstring/:limit', (req: Request, res: Response) => {
    const loginSubstring = req.params.loginSubstring;
    const limit = parseInt(req.params.limit, 10);
    const suggestedUsers = users
        .filter(user => user.login.includes(loginSubstring))
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, limit);
    res.json(suggestedUsers);
});

// Delete User
app.delete('/users/:id', (req: Request, res: Response) => {
    const userIndex = users.findIndex(user => user.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users[userIndex].isDeleted = true;
    res.json(users[userIndex]);
});
