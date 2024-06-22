import { IRequestPlayer } from "../../modules/player/interface/player.interface";
import { CreatePlayerService } from "../../modules/player/useCases/createPlayer.service";
import { IRequestSquad } from "../../modules/squad/interface/squad.interfaces";
import { CreateSquadService } from "../../modules/squad/useCases/createSquad/createSquad.service";
import { GetSquadService } from "../../modules/squad/useCases/getSquad/getSquad.service";

const createSquad = new CreateSquadService();
const createPlayer = new CreatePlayerService();
const getSquad = new GetSquadService();

export const resolvers = {
    Query: {
       getAllSquad: async (): Promise<any> => await getSquad.getAllSquads(),
    },
    Mutation: {
        createSquad: async (_: any, { name_squad }: IRequestSquad): Promise<any> => {
            return await createSquad.execute({ name_squad });
        },
        createPlayer: async (_: any, { name, age, position, squad_id }: IRequestPlayer): Promise<any> => {
            return await createPlayer.execute({ name, age, position, squad_id });
        }
    }
}