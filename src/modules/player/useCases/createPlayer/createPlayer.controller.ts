import { Request, Response } from "express";
import { CreatePlayerService } from "./createPlayer.service";


export class CreatePlayerController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, age, position, squad_id } = req.body;
            const createSquadService = new CreatePlayerService();
            const player = await createSquadService.execute({ name, age, position, squad_id });
            return res.status(201).json({ player });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}