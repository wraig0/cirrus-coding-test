import express, { Request, Response } from "express";
import { getMeterData } from "./db";
import cors from "cors";

const app = express();
app.use(cors());
const APP_PORT = 3000;

app.get("/meter/:id", (req: Request, res: Response) => {
  const meterId = req.params.id;

  getMeterData(meterId)
    .then((meterData) => {
      if (!meterData) {
        return res
          .status(404)
          .json({ error: `Meter not found for id ${meterId}` });
      }
      res.json(meterData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
