export const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

export const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Origin ,Content-Type, Authorization, X-Requested-With",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export const sessionOptions = {
  name: "session",
  keys: ["key1", "key2"],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: "localhost",
    path: "/",
    maxAge: Date.now() + 60 * 60 * 1000,
  },
};

export default { dbOptions, corsOptions, sessionOptions };
