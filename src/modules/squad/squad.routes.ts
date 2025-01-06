import { Router } from "express";
import { CreateSquadController } from "./useCases/createSquad/squad.controller";
import { GetSquadController } from "./useCases/getSquad/getSquad.controller";
import { getCachedError } from "../../middlewares/cache";

const squadRoute = Router();

const createSquadController = new CreateSquadController();
const getSquadController = new GetSquadController();

squadRoute.post("/", createSquadController.handle);
squadRoute.get("/", getSquadController.getAllSquad);
squadRoute.get("/cache", getCachedError);


export { squadRoute }