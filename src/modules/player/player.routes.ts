import { Router } from "express";
import { CreatePlayerController } from "./useCases/createPlayer.controller";

const playerRoutes = Router();

const createPlayerController = new CreatePlayerController();

playerRoutes.post("/", createPlayerController.handle);

export { playerRoutes }