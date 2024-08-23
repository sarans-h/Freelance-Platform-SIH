import mongoose from'mongoose';

const jobSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  requirements: { type: String },
  deadline: { type: Date, required: true },
  projectStartDate: { type: Date, required: true },
  projectEndDate: { type: Date },
  amountPaid: { type: Number },
  applicants: [{
    type:{type: mongoose.Schema.Types.ObjectId, ref: 'Freelancer'}
  }],
  review:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }
  ],
  isAssigned:{
    type:Boolean,
    required:true,
    default:false
  },
  assignedFreelancer: {
    freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Freelancer' },
    assignedAt: { type: Date }
  },
  isActive: { type: Boolean, default: true },
  isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

const Job=mongoose.model.Job || mongoose.model('Job',freelancerSchema);
export default Job