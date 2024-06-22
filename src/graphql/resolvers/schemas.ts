import { gql } from "apollo-server";

export const typeDefs = gql`
scalar Date

  type Squad {
    name_squad: String!
   }

   type Player {
    name: String!
    age: Int!
    position: Position!
    squad_id: String!
   }

  type ReturnSquad {
    id: String
    name_squad: String!
    created_at: Date
    tb_player: [Player]
   }

   type ReturnPlayer {
    id: String
    name: String!
    age: Int!
    squad_id: String
    created_at: Date
   }

   enum Position {
    levantador
    ponteiro
    oposto
    central
    libero
   }

   type Query {
    getAllSquad: [ReturnSquad]
   }

   type Mutation{
    createSquad(name_squad: String!): ReturnSquad,
    createPlayer(name: String!, age: Int!, position: Position!, squad_id: String!): ReturnPlayer
   }
`;