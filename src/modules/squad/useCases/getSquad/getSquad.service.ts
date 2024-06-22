import { prisma } from "../../../../database/prismaClient";

export class GetSquadService{
    async getAllSquads(){
        return await prisma.tb_squad.findMany();
    }
}