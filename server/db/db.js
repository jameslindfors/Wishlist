import mongoose from "mongoose";
import logger from "../utils/logger.js";

function connectToDB(uri, options, port, app) {
  mongoose
    .connect(uri, options)
    .then(() => {
      app.listen(port, logger.debug("Successfully Connected to Database"));
    })
    .catch((error) => {
      // throw error;
      logger.error(error);
    });
}

export default connectToDB;
