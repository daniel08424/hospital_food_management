import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUnique, create } from '../models/model.js';

export const signUp = async (req, res) => {
    const { email, password} = req.body;

    const existingUser = await findUnique({
        where: { email },
    });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {

        const newUser = await create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({ message: 'User created successfully', userId: newUser.id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user.id, role: user.role },
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        res.cookie('token', token, {
            httpOnly: true, 
            maxAge: 24 * 60 * 60 * 1000, 
        }).status(200).json({
            message: 'Signed in successfully',
            email: user.email,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in', error });
    }
};

export const logOut = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid or expired token' });
                }


                if (validTokens.has(token)) {
                    validTokens.delete(token); 
                }
            });

            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', 
                sameSite: 'None', 
            });
        }

        return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ message: 'Error logging out', error });
    }
};



