import app from "./app";

const port = 3000;

app.listen(port, () => {
  console.log(`[SERVER]: the server is running at http://localhost:${port}`)
});
