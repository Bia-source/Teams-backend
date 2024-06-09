import { prisma } from "../../../../database/prismaClient";
import { IRequestSquad } from "../../intefaces/squad.interfaces";
import { v4 as uuidv4} from "uuid"

export class CreateSquadService {
    async execute({ name_squad }: IRequestSquad){
         try {
            const newsquad = await prisma.$executeRaw`CALL procedure_create_squad(${uuidv4()}, ${name_squad});`;
            console.log("newsquad: ",newsquad);
         } catch (error) {
            console.log(error);
         }
    }
}