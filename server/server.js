import { graphqlHTTP } from "express-graphql";
import depthLimit from "graphql-depth-limit";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import session from "cookie-session";

import graphqlSchema from "./db/graphql/schema/schema.js";
import graphqlResolvers from "./db/graphql/resolvers/resolvers.js";

import connectToDB from "./db/db.js";
import logger from "./utils/logger.js";
import { dbOptions, corsOptions, sessionOptions } from "./utils/options.js";

dotenv.config();
const app = express();

// * MIDDLEWARE * //
app.use(cors(corsOptions));
app.use(helmet());
app.use(session(sessionOptions));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
    validationRules: [
      depthLimit(10, (depths) => {
        logger.warn(`GraphQL query depth limit reached: ${depths}`);
      }),
    ],
  })
);

// * DB CONNECTION * //
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fuz8j.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
connectToDB(uri, dbOptions, process.env.DB_PORT, app);

// * SERVER * //
app.listen(process.env.PORT, () => {
  logger.debug(`Server is running on port ${process.env.PORT}`);
  logger.debug(`GraphQL is running on port ${process.env.PORT}/graphql`);
});
