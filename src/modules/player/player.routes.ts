import { Router } from "express";
import { CreatePlayerController } from "./useCases/createPlayer/createPlayer.controller";
import { getCachedError } from "../../middlewares/cache";

const playerRoutes = Router();

const createPlayerController = new CreatePlayerController();

playerRoutes.post("/", createPlayerController.handle);
playerRoutes.get("/cache", getCachedError);

export { playerRoutes }