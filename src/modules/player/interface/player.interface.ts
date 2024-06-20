import { Position } from "@prisma/client";

export interface IRequestPlayer {
    name: string;
    age: number;
    position: Position;
    squad_id: string;
}



