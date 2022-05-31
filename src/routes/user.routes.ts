import { Express, Router } from "express";
import {
  addUser,
  deletUser,
  getUser,
  getUsers,
  updateUser,
} from "./../controllers/user.controller";

const router = Router();

export const registerRouter = (app: Express) => {
  router.post("/", addUser);
  router.get("/", getUsers);
  router.get("/:email", getUser);
  router.put("/", updateUser);
  router.delete("/:id", deletUser);
  app.use("/api/users", router);
};
