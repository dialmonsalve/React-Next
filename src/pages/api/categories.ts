
import { Category } from '@/interfaces';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(_req: NextApiRequest, res: NextApiResponse<Category[] | Category>) {
  
  const prisma = new PrismaClient()

  const categories = await prisma.category.findMany({
    include:{
      products:true,
    }
  });
  res.status(200).json(categories)
}
