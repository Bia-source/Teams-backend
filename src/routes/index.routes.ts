import { Router } from "express";
import { squadRoute } from "../modules/squad/squad.routes"

const routes = Router();

routes.use("/squad", squadRoute);

export { routes }