import { Request, Response } from "express";
import { GetSquadService } from "./getSquad.service";

export class GetSquadController {
    async getAllSquad(req: Request, res: Response): Promise<Response> {
        try {
            const squadService = new GetSquadService();
            const squads = await squadService.getAllSquads();
            return res.status(200).json({ squads });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}