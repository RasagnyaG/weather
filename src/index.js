import express from "express";
import { getData } from "./controller.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;

app.post("/getWeather", async (req, res) => {
  console.log(req.body);
  const { cities, unit } = req.body;

  const data = await getData(cities, unit);
  try {
    res.status(200).send({ weather: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
