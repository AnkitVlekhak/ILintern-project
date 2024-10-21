import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  hello,
} from "../Controllers/EventController.js";
const router = express.Router();

router.post("/", createEvent);
router.get("/hello", hello);
router.get("/:id", getEvent);
router.delete("/:id", deleteEvent);
export default router;
