import { prisma } from "../../../../database/prismaClient";
import { IRequestSquad } from "../../interface/squad.interfaces";
import { v4 as uuidv4} from "uuid"

export class CreateSquadService {
    async execute({ name_squad }: IRequestSquad){
         try {
            await prisma.$executeRaw`CALL procedure_create_squad(${uuidv4()}, ${name_squad});`;
            const squad = await prisma.tb_squad.findFirst({where:{ name_squad } })
            return squad;
         } catch (error) {
            return error;
         }
    }
}