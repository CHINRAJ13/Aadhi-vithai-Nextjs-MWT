"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { GlassCard } from '@/components/GlassCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight, ChevronLeft, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Validation Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  age: z.number().min(1, "Age must be positive"),
  gender: z.string().min(1, "Gender is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  occupation: z.string().min(1, "Occupation is required"),
  education: z.string().min(1, "Education is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  relationshipWithAadhiVithai: z.string().min(1, "This field is required"),
  purposeOfApplication: z.string().min(10, "Please provide more details"),
  chronicIllnesses: z.string().optional(),
  surgeries: z.string().optional(),
  psychologicalIssues: z.string().optional(),
  dietaryHabits: z.string().min(1, "Required"),
  addictions: z.array(z.string()).optional(),
  previousPractices: z.string().optional(),
  spiritualExperience: z.string().optional(),
  whyAadhiVithai: z.string().min(10, "Please explain your motivation"),
  timeCommitment: z.string().min(1, "Required"),
  financialContribution: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 0, title: "Declaration" },
  { id: 1, title: "Personal Details" },
  { id: 2, title: "Health & Lifestyle" },
  { id: 3, title: "Spiritual Background" },
  { id: 4, title: "Commitment" },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addictions: [],
    },
  });

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || 'Something went wrong');
      }
    } catch (error) {
      alert('Error submitting application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1: return ['fullName', 'age', 'gender', 'maritalStatus', 'occupation', 'education', 'email', 'phone', 'state', 'country', 'relationshipWithAadhiVithai', 'purposeOfApplication'];
      case 2: return ['dietaryHabits'];
      case 3: return ['whyAadhiVithai'];
      case 4: return ['timeCommitment'];
      default: return [];
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-pearl flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-6">
          <GlassCard className="max-w-md w-full text-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </motion.div>
            <h2 className="text-3xl font-serif text-charcoal mb-4">Application Received</h2>
            <p className="text-charcoal/70 mb-8">
              Your application has been submitted successfully. Our team will review it and get back to you soon.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:shadow-glow transition-all"
            >
              Return Home
            </button>
          </GlassCard>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Spiritual Initiation Application</h1>
            <div className="flex justify-between max-w-2xl mx-auto mt-10 relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gold/10 -translate-y-1/2 z-0" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-gold -translate-y-1/2 z-0 transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
              
              {steps.map((step) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                      currentStep >= step.id ? "bg-gold text-white shadow-glow" : "bg-white text-gold border border-gold/20"
                    )}
                  >
                    {currentStep > step.id ? <CheckCircle2 className="w-4 h-4" /> : step.id + 1}
                  </div>
                  <span className={cn(
                    "mt-2 text-[10px] uppercase tracking-widest font-bold hidden md:block",
                    currentStep >= step.id ? "text-gold" : "text-charcoal/30"
                  )}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <GlassCard className="p-8 md:p-12">
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-charcoal border-b border-gold/10 pb-4">Declaration & Intent</h3>
                      <p className="text-charcoal/70 italic leading-relaxed">
                        "I hereby declare that the information provided is true to the best of my knowledge. I understand that spiritual initiation is a sacred commitment and I am applying with full sincerity and willingness to follow the guidance provided."
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="bg-gold text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-glow transition-all mx-auto"
                        >
                          Begin Application <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-charcoal border-b border-gold/10 pb-4">Personal Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Full Name</label>
                          <input {...register('fullName')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="Enter your full name" />
                          {errors.fullName && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.fullName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Age</label>
                          <input type="number" {...register('age', { valueAsNumber: true })} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="Your age" />
                          {errors.age && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.age.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Gender</label>
                          <select {...register('gender')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.gender && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.gender.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Marital Status</label>
                          <select {...register('maritalStatus')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all">
                            <option value="">Select Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                          </select>
                          {errors.maritalStatus && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.maritalStatus.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Email Address</label>
                          <input {...register('email')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="email@example.com" />
                          {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Phone Number</label>
                          <input {...register('phone')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="+91 ..." />
                          {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Occupation</label>
                          <input {...register('occupation')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="Current profession" />
                          {errors.occupation && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.occupation.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Education</label>
                          <input {...register('education')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="Highest degree" />
                          {errors.education && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.education.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">State</label>
                          <input {...register('state')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="e.g. Tamil Nadu" />
                          {errors.state && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.state.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Country</label>
                          <input {...register('country')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="e.g. India" />
                          {errors.country && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.country.message}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gold">Relationship with Aadhi Vithai</label>
                        <select {...register('relationshipWithAadhiVithai')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all">
                          <option value="">How do you know us?</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Friend/Family">Friend/Family</option>
                          <option value="Event">Event</option>
                          <option value="Search Engine">Search Engine</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.relationshipWithAadhiVithai && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.relationshipWithAadhiVithai.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gold">Purpose of Application</label>
                        <textarea {...register('purposeOfApplication')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-32" placeholder="What brings you to this path?" />
                        {errors.purposeOfApplication && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.purposeOfApplication.message}</p>}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-charcoal border-b border-gold/10 pb-4">Health & Lifestyle</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Any Chronic Illnesses?</label>
                          <textarea {...register('chronicIllnesses')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-20" placeholder="Describe if any..." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Major Surgeries?</label>
                          <textarea {...register('surgeries')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-20" placeholder="Describe if any..." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Psychological History?</label>
                          <textarea {...register('psychologicalIssues')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-20" placeholder="Describe if any..." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Dietary Habits</label>
                          <select {...register('dietaryHabits')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all">
                            <option value="">Select Habit</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                            <option value="Eggetarian">Eggetarian</option>
                          </select>
                          {errors.dietaryHabits && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.dietaryHabits.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Any Addictions?</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Smoking', 'Alcohol', 'Tobacco', 'Other'].map((item) => (
                              <label key={item} className="flex items-center gap-2 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  value={item} 
                                  className="w-4 h-4 accent-gold"
                                  onChange={(e) => {
                                    const current = (watch('addictions') || []) as string[];
                                    if (e.target.checked) {
                                      setValue('addictions', [...current, item]);
                                    } else {
                                      setValue('addictions', current.filter((i: string) => i !== item));
                                    }
                                  }}
                                />
                                <span className="text-sm text-charcoal/70 group-hover:text-gold transition-all">{item}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-charcoal border-b border-gold/10 pb-4">Spiritual Background</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Previous Spiritual Practices</label>
                          <textarea {...register('previousPractices')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-24" placeholder="Yoga, Meditation, etc." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Spiritual Experience (if any)</label>
                          <textarea {...register('spiritualExperience')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-24" placeholder="Share your experiences..." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Why do you want to join Aadhi Vithai?</label>
                          <textarea {...register('whyAadhiVithai')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all h-32" placeholder="Your motivation..." />
                          {errors.whyAadhiVithai && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.whyAadhiVithai.message}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-charcoal border-b border-gold/10 pb-4">Commitment</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Time Commitment for Practice</label>
                          <select {...register('timeCommitment')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all">
                            <option value="">Select Commitment</option>
                            <option value="30 mins/day">30 mins/day</option>
                            <option value="1 hour/day">1 hour/day</option>
                            <option value="2+ hours/day">2+ hours/day</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                          {errors.timeCommitment && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.timeCommitment.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gold">Willingness to contribute (Optional)</label>
                          <input {...register('financialContribution')} className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all" placeholder="Any message regarding contribution..." />
                        </div>
                        
                        <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
                          <p className="text-xs text-charcoal/60 leading-relaxed">
                            By clicking "Submit Application", you confirm that you have read and agreed to the guidelines and are ready to embark on this spiritual journey.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  {currentStep > 0 && (
                    <div className="flex justify-between mt-12 pt-8 border-t border-gold/10">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 text-charcoal/50 hover:text-gold transition-all font-bold uppercase tracking-widest text-xs"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                      
                      {currentStep < steps.length - 1 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-gold text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-glow transition-all"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gold text-white px-10 py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-glow transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"} <Send className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
