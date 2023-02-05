import express from 'express';
import sequelize from './models/db';
import { routerApi } from './routes';

const app = express();
app.use(express.json());
routerApi(app);

sequelize.sync().then(() => {
    console.log('Database connected and tables created');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => {
    console.log('Error connecting to database: ', error);
});
