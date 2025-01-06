import { Request, Response } from "express";
import { GetSquadService } from "./getSquad.service";
import { tb_squad } from "@prisma/client";

export class GetSquadController {
    async getAllSquad(req: Request, res: Response): Promise<Response> {
        try {
            const squadService = new GetSquadService();
            const squads = await squadService.getAllSquads() as tb_squad[];
            if(squads[0].id){
                return res.status(200).json({ squads });
            }else{
                return res.status(400).json({messageError: squads });
            }
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}