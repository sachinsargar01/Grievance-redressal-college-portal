import mongoose from "mongoose";

const resolutionSchema = new mongoose.Schema({
  complaint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StudentComplaint",
    required: true,
  },
  status: {
    type: String,
    enum: ["In Progress", "Complete", "Pending"],
    default: "In Progress",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Resolution = mongoose.model("Resolution", resolutionSchema);
export default Resolution;
