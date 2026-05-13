import mongoose, { Schema, model, models } from 'mongoose';

const SubmissionSchema = new Schema({
  // Personal Details
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  occupation: { type: String, required: true },
  education: { type: String, required: true },
  
  // Contact & Location
  email: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },

  // Background
  relationshipWithAadhiVithai: { type: String, required: true },
  purposeOfApplication: { type: String, required: true },

  // Health & Lifestyle
  chronicIllnesses: { type: String },
  surgeries: { type: String },
  psychologicalIssues: { type: String },
  dietaryHabits: { type: String, required: true },
  addictions: { type: [String] }, // Smoking, Alcohol, etc.
  
  // Spiritual Background
  previousPractices: { type: String },
  spiritualExperience: { type: String },
  whyAadhiVithai: { type: String, required: true },

  // Commitment
  timeCommitment: { type: String, required: true },
  financialContribution: { type: String },
  
  // Admin fields
  status: { 
    type: String, 
    enum: ['Pending', 'Reviewed', 'Selected', 'Rejected'], 
    default: 'Pending' 
  },
  adminNotes: { type: String },
  submittedAt: { type: Date, default: Date.now },
});

const Submission = models.Submission || model('Submission', SubmissionSchema);

export default Submission;
