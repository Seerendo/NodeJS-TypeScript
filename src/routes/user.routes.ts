import { Router } from "express";
import {
  createrUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controllers";

const router = Router();

router.post("/users", createrUser);

router.get("/users", getUsers);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
