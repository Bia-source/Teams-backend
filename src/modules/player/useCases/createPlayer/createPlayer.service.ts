
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../../../database/prismaClient";
import { IRequestPlayer } from "../../interface/player.interface";

export class CreatePlayerService {
    async execute({ name, age, position, squad_id }: IRequestPlayer): Promise<any>{
        try {
            await prisma.$executeRaw`CALL procedure_create_player(${uuidv4()}, ${name}, ${age}, ${position}, ${squad_id});`;
            const player = await prisma.tb_player.findFirst({where: { name, squad_id}});
            return player;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}