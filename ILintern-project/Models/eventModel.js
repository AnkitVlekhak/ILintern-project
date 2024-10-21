import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    // userId: { type: String, required: true },
    name: String,
    organiserName: String,
    date: String,
    location: String,
    desc: String,
    registrations: Number,
    image: String,
  },
  {
    timestamps: true,
  }
);

var EventModel = mongoose.model("Events", eventSchema);
export default EventModel;
