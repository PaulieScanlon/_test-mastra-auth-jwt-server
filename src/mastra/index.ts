import { Mastra } from "@mastra/core/mastra";
import { MastraJwtAuth } from "@mastra/auth";
import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  agents: { weatherAgent },
  server: {
    experimental_auth: new MastraJwtAuth({
      secret: process.env.MASTRA_JWT_SECRET
    })
  }
});

// import { Mastra } from "@mastra/core/mastra";
// import { MastraJwtAuth } from "@mastra/auth";
// // import { PinoLogger } from "@mastra/loggers";
// // import { LibSQLStore } from "@mastra/libsql";
// // import { weatherWorkflow } from "./workflows/weather-workflow";
// import { weatherAgent } from "./agents/weather-agent";

// export const mastra = new Mastra({
//   // workflows: { weatherWorkflow },
//   agents: { weatherAgent },
//   // storage: new LibSQLStore({
//   //   // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
//   //   url: ":memory:"
//   // }),
//   // logger: new PinoLogger({
//   //   name: "Mastra",
//   //   level: "info"
//   // }),
//   server: {
//     experimental_auth: new MastraJwtAuth({
//       secret: process.env.MASTRA_JWT_SECRET
//     })
//   }
// });
