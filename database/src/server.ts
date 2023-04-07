import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (request, response) => {
  response.send("Running!");
});

const port = 3001;

app.listen(port, () => {
  console.log(`[SERVER]: the server is running at http://localhost:${port}`)
});
