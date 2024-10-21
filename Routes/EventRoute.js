import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getAllEvent,
  registerEvent,
  hello,
} from "../Controllers/EventController.js";
const router = express.Router();

router.post("/", createEvent);
router.put("/register", registerEvent);
router.get("/hello", hello);
router.get("/getallevents", getAllEvent);
router.get("/:id", getEvent);
router.delete("/:id", deleteEvent);
export default router;
