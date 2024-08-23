import mongoose from'mongoose';

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  company: { type: String },
  postedJobs: [
    {
      jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
      postedAt: { type: Date, default: Date.now }
    }],
}, { timestamps: true });

const Client=mongoose.model.Client || mongoose.model('Client',clientSchema);
export default Client
