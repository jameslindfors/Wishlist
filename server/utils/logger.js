import { createLogger, format, transports, addColors } from "winston";
import dotenv from "dotenv";
dotenv.config();

let logger = null;

// * DEVELOPMENT LOGGER * //
if (process.env.NODE_ENV !== "production") {
  const devFile = new transports.File({
    filename: "utils/logs/dev.log",
    level: "debug",
    format: format.combine(
      format.timestamp({
        format: "MM-DD HH:mm:ss",
      }),
      format.uncolorize(),
      format.simple(),
      format.prettyPrint(),
      format.printf((info) => {
        return `${info.timestamp} [${info.level}]: ${info.message}`;
      })
    ),
  });

  logger = createLogger({
    level: "debug",
    format: format.combine(
      format.timestamp({
        format: "HH:mm",
      }),
      format.colorize(),
      format.simple(),
      format.prettyPrint(),
      format.printf((info) => {
        return `${info.timestamp} [${info.level}]: ${info.message}`;
      })
    ),
    transports: [new transports.Console(), devFile],
  });
}

// ! PRODUCTION LOGGER ! //
if (process.env.NODE_ENV === "production") {
  const prodErrorFile = new transports.File({
    filename: "utils/logs/prod/prod_errors.log",
    level: "error",
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.json(),
      format.splat(),
      format.uncolorize(),
      format.printf((info) => {
        return `${info.timestamp} [${info.level.toLocaleUpperCase()}]: ${
          info.message
        } ${info.meta ? info.meta : ""}`;
      })
    ),
  });

  const prodWarningFile = new transports.File({
    filename: "utils/logs/prod/prod_warnings.log",
    level: "warn",
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.json(),
      format.splat(),
      format.uncolorize(),
      format.printf((info) => {
        return `${info.timestamp} [${info.level.toLocaleUpperCase()}]: ${
          info.message
        }`;
      })
    ),
  });

  const prodGenericFile = new transports.File({
    filename: "utils/logs/prod/prod_generic.log",
    level: "info",
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.json(),
      format.splat(),
      format.uncolorize(),
      format.printf((info) => {
        return `${info.timestamp} [${info.level.toLocaleUpperCase()}]: ${
          info.message
        }`;
      })
    ),
  });

  logger = createLogger({
    transports: [prodErrorFile, prodWarningFile, prodGenericFile],
  });
}

export default logger;
