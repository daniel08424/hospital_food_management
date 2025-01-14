import prisma from '../lib/prisma.js';

export const findUnique = async (query) => {
    return await prisma.user.findUnique(query);
};


export const create = async (data) => {
    return await prisma.user.create(data);
};
