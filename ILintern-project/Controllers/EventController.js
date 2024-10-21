import EventModel from "../Models/eventModel.js";
import mongoose from "mongoose";

// Creat new Event
export const createEvent = async (req, res) => {
  const newEvent = new EventModel(req.body);

  try {
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a Event

export const getEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await EventModel.findById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const hello = async (req, res) => {
  console.log("KKKK");
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const event = await EventModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("POst deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
