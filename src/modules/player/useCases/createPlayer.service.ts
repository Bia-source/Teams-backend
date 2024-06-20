import { prisma } from "../../../database/prismaClient";
import { IRequestPlayer } from "../interface/player.interface";
import { v4 as uuidv4 } from "uuid";

export class CreatePlayerService {
    async handle({ name, age, position, squad_id}: IRequestPlayer): Promise<any>{
        try {
            const newPlayer = await prisma.$executeRaw`CALL procedure_create_player(${uuidv4()}, ${name}, ${age}, ${position}, ${squad_id});`;
            return newPlayer;
        } catch (error) {
            return error;
        }
    }
}