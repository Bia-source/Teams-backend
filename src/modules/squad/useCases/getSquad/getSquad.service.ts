import { prisma } from "../../../../database/prismaClient";

export class GetSquadService{
    async getAllSquads(){
        try {
            return await prisma.tb_squad.findMany();
        } catch (error) {
            return error;
        }
    }
}