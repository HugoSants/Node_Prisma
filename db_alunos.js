import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
 
export class Aluno {

    async list() {
      return await prisma.aluno.findMany(); 
    }
  
    async create(aluno) {
      return await prisma.aluno.create({
        data: aluno,
      })
    }
  
    async update(id, aluno) {
      return await prisma.aluno.update({
        where: { id },
        data: aluno,
      });
    }
  
    async delete(id) {
      return await prisma.aluno.delete({
        where: { id },
      })
    }
  }
  