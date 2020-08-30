import "dotenv/config";
import config from "./config/env";
import server from "./App";

const port: Number = Number(config.PORT) || 8080;

server.get("/api", (req, res) => {
  res.status(200).send({
    message: "test okk"
  })
})

server.listen(port, () => {
  console.log(`Server is up in port ${port}`);
})