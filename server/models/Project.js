import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  highlight: { type: String },
  tags: [{ type: String }],
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);