import { Request, Response } from "express";
import { CreateSquadService } from "./createSquad.service";


export class CreateSquadController {
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const { name_squad } = req.body;
            const createSquadService = new CreateSquadService();
            const squad = await createSquadService.execute({name_squad});
            return res.json({squad});
        } catch (error) {
            return res.json({messageError: error});
        }
    }
}