import { Router } from "express";
import { squadRoute } from "../modules/squad/squad.routes"
import { playerRoutes } from "../modules/player/player.routes";

const routes = Router();

routes.use("/squad", squadRoute);
routes.use("/player", playerRoutes);

export { routes }