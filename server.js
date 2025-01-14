import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import adminPage from './routes/adminPage.js';
import dietPage from './routes/dietPage.js';
import pantryStaffRoutes from './routes/pantryStaffRoutes.js';
import mealTrackRoutes from './routes/mealTrackRoutes.js';
import customRoutes from './routes/customRoutes.js';
import pantryRoutes from './routes/pantryRoutes.js'
import deliveryRoutes from './routes/deliveryRoutes.js';

config();

const prisma = new PrismaClient();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
}));
app.use(json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/admin-page', adminPage);
app.use('/admin-page',dietPage);
app.use('/admin-page',pantryStaffRoutes);
app.use('/admin-page',mealTrackRoutes);
app.use('/api', customRoutes);
app.use('/pantry-page',pantryRoutes)
app.use('/delivery-page', deliveryRoutes);

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
