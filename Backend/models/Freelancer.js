import mongoose from'mongoose';

const freelancerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  skills: [],
  resume: { type: String },
  portfolio: { type: String },
  appliedJobs: [{
      type:{type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
    }
  ],
  jobsDone:[{
    type:{type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
  }],
  reviewsGot: [
    {
      jobId:{type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
      clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
      reviewId:{type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
      date: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

const Freelancer=mongoose.model.Freelancer || mongoose.model('Freelancer',freelancerSchema);
export default Freelancer