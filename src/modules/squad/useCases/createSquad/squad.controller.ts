import { Request, Response } from "express";
import { CreateSquadService } from "./createSquad.service";
import { tb_squad } from "@prisma/client";


export class CreateSquadController {
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const { name_squad } = req.body;
            const createSquadService = new CreateSquadService();
            const squad = await createSquadService.execute({name_squad}) as tb_squad;
            if(squad?.id){
                return res.status(201).json({squad});
            }else{
                return res.status(400).json({messageError: squad});
            }
        } catch (error) {
            return res.status(400).json({messageError: error});
        }
    }
}