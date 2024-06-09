import { Router } from "express";
import { CreateSquadController } from "./useCases/createSquad/squad.controller";

const squadRoute = Router();

const createSquadController = new CreateSquadController();

squadRoute.post("/", createSquadController.handle);

export { squadRoute }