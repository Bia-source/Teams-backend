import { Position } from "@prisma/client";

export interface IRequestPlayer {
    id?: string;
    name: string;
    age: number;
    position: Position;
    squad_id: string;
}



