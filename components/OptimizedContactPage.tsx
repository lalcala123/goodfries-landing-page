import React, { useState, ChangeEvent, FormEvent } from 'react';

// --- Types & Interfaces ---

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// --- Components ---

const Icons = {
  MapPin: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  Phone: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Mail: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Spinner: () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
  ),
  Check: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  ),
  Exclamation: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  )
};

const OptimizedContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // --- Handlers ---

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      // Reset form on success
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-green-200">
      
      {/* --- Hero Section --- */}
      <section className="bg-green-900 text-stone-50 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let's Start a Conversation
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 opacity-90">
            Have a question about our fries, franchise opportunities, or just want to say hello? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
          
          {/* --- Left Col: Contact Info & Map --- */}
          <div className="bg-stone-100 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Contact Information</h2>
              <p className="text-stone-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-green-700">
                    <Icons.Phone />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-stone-900">Phone</p>
                    <p className="text-stone-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-green-700">
                    <Icons.Mail />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-stone-900">Email</p>
                    <p className="text-stone-600">hello@goodfries.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-green-700">
                    <Icons.MapPin />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-stone-900">Headquarters</p>
                    <p className="text-stone-600">
                      123 Potato Lane<br />
                      Boise, ID 83702
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-64 w-full bg-stone-300 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                <span className="sr-only">Interactive Map of Location</span>
                <div className="text-center p-4">
                    <div className="mx-auto h-12 w-12 text-stone-400 mb-2">
                         <Icons.MapPin />
                    </div>
                    <p className="text-stone-500 text-sm font-semibold">Map Integration Placeholder</p>
                    <p className="text-stone-400 text-xs">Google Maps API would render here</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-colors duration-300 pointer-events-none" />
            </div>
          </div>

          {/* --- Right Col: Contact Form --- */}
          <div className="col-span-1 lg:col-span-2 p-8 lg:p-12 bg-white relative">
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <Icons.Check />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                <p className="text-stone-600 max-w-md">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-md transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {status === 'error' && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6" role="alert">
                    <div className="flex">
                      <div className="flex-shrink-0 text-red-500"><Icons.Exclamation /></div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">
                          Something went wrong sending your message. Please try again later.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm transition-all duration-200 
                        ${errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-stone-300 focus:border-green-600 focus:ring-green-600'
                        }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600" id="name-error">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm transition-all duration-200 
                        ${errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-stone-300 focus:border-green-600 focus:ring-green-600'
                        }`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                      Phone Number <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-stone-300 shadow-sm focus:border-green-600 focus:ring-green-600 transition-all duration-200"
                    />
                  </div>

                  {/* Company (Optional) */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-1">
                      Company <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-stone-300 shadow-sm focus:border-green-600 focus:ring-green-600 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange as any} // Typing cast for select element
                    className={`block w-full rounded-md shadow-sm transition-all duration-200 
                      ${errors.subject
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-stone-300 focus:border-green-600 focus:ring-green-600'
                      }`}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="franchise">Franchise Opportunities</option>
                    <option value="catering">Catering & Events</option>
