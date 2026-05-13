"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Search, Filter, Eye, X, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/submissions');
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.submissions);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = submissions.filter((sub: any) => 
    sub.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pearl flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-serif text-charcoal">Admin Dashboard</h1>
              <p className="text-charcoal/50 text-sm mt-1">Manage all spiritual initiation applications</p>
            </div>
            
            <div className="flex w-full md:w-auto gap-4">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/50 border border-gold/10 rounded-xl outline-none focus:border-gold/40 transition-all text-sm"
                />
              </div>
              <button className="p-2 bg-white/50 border border-gold/10 rounded-xl hover:bg-gold/5 transition-all">
                <Filter className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>

          <GlassCard className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gold/5 border-b border-gold/10">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gold">Applicant</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gold">Location</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gold">Status</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gold">Date</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/5">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-charcoal/30">Loading submissions...</td>
                    </tr>
                  ) : filteredSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-charcoal/30">No applications found</td>
                    </tr>
                  ) : (
                    filteredSubmissions.map((sub: any) => (
                      <tr key={sub._id} className="hover:bg-gold/[0.02] transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-bold text-charcoal text-sm">{sub.fullName}</span>
                            <span className="text-xs text-charcoal/40">{sub.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-xs text-charcoal/60">
                            <MapPin className="w-3 h-3 text-gold/50" />
                            {sub.state}, {sub.country}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                            sub.status === 'Pending' ? "bg-amber-100 text-amber-700" :
                            sub.status === 'Selected' ? "bg-emerald-100 text-emerald-700" :
                            "bg-gray-100 text-gray-700"
                          )}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-charcoal/40">
                          {new Date(sub.submittedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => setSelectedSubmission(sub)}
                            className="p-2 text-gold hover:bg-gold hover:text-white rounded-lg transition-all"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSubmission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubmission(null)}
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gold/10 rounded-full transition-all"
              >
                <X className="w-6 h-6 text-gold" />
              </button>

              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 border-b border-gold/10 pb-8">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center text-3xl font-serif text-gold">
                  {selectedSubmission.fullName[0]}
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-serif text-charcoal">{selectedSubmission.fullName}</h2>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center gap-2 text-xs text-charcoal/50"><Mail className="w-3 h-3 text-gold" /> {selectedSubmission.email}</span>
                    <span className="flex items-center gap-2 text-xs text-charcoal/50"><Phone className="w-3 h-3 text-gold" /> {selectedSubmission.phone}</span>
                    <span className="flex items-center gap-2 text-xs text-charcoal/50"><MapPin className="w-3 h-3 text-gold" /> {selectedSubmission.state}, {selectedSubmission.country}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-gold mb-1">Status</span>
                  <select 
                    className="bg-gold/5 border border-gold/20 rounded-lg px-4 py-2 text-xs font-bold text-gold outline-none"
                    defaultValue={selectedSubmission.status}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" /> Personal Information
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <span className="text-charcoal/40">Age:</span> <span className="text-charcoal font-medium">{selectedSubmission.age}</span>
                      <span className="text-charcoal/40">Gender:</span> <span className="text-charcoal font-medium">{selectedSubmission.gender}</span>
                      <span className="text-charcoal/40">Marital Status:</span> <span className="text-charcoal font-medium">{selectedSubmission.maritalStatus}</span>
                      <span className="text-charcoal/40">Occupation:</span> <span className="text-charcoal font-medium">{selectedSubmission.occupation}</span>
                      <span className="text-charcoal/40">Education:</span> <span className="text-charcoal font-medium">{selectedSubmission.education}</span>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" /> Health & Lifestyle
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="block text-[10px] text-charcoal/40 mb-1">Dietary Habits</span>
                        <p className="text-charcoal">{selectedSubmission.dietaryHabits}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-charcoal/40 mb-1">Addictions</span>
                        <p className="text-charcoal">{selectedSubmission.addictions?.join(', ') || 'None'}</p>
                      </div>
                      {selectedSubmission.chronicIllnesses && (
                        <div>
                          <span className="block text-[10px] text-charcoal/40 mb-1">Chronic Illnesses</span>
                          <p className="text-charcoal italic">{selectedSubmission.chronicIllnesses}</p>
                        </div>
                      )}
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" /> Spiritual Background
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="block text-[10px] text-charcoal/40 mb-1">Motivation</span>
                        <p className="text-charcoal leading-relaxed">{selectedSubmission.whyAadhiVithai}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-charcoal/40 mb-1">Time Commitment</span>
                        <p className="text-charcoal">{selectedSubmission.timeCommitment}</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-gold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" /> Application Details
                    </h3>
                    <div className="space-y-4 text-sm bg-gold/5 p-6 rounded-2xl border border-gold/10">
                      <div>
                        <span className="block text-[10px] text-charcoal/40 mb-1">Purpose of Visit</span>
                        <p className="text-charcoal italic leading-relaxed">"{selectedSubmission.purposeOfApplication}"</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
