import { exec, spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

// ! Python Scripts
// ? The goal is to run a datascraper on the server from a URL given by the client
// ? The client will send a URL to a graphql query
// ? The server will run the script and return the data
// ? If the script fails, the server will return an error
// ! Uninstall node-html-parser if not used (saved as a dev dependency)

// ? Example:
// * spawn new child process to call the python script
// const python = spawn("python3", ["./scripts/data_scraper.py"]);
// * collect data from script
// python.stdout.on("data", function (data) {
//   console.log("Pipe data from python script ...");
//   const dataToSend = data.toString();
//   console.log(dataToSend);
// });
// * close event we are sure that stream from child process is closed
// python.on("close", (code) => {
//   console.log(`child process close all stdio with code ${code}`);
// });
