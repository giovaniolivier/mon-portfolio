import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail } from '../../services/emailService';
import LoadingSpinner from '../ui/LoadingSpinner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Effacer le message après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-32 relative" aria-labelledby="contact-title">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e1b4b,transparent_70%)]" />
      <div className="container mx-auto px-6 relative">
        <h2 id="contact-title" className="text-4xl font-bold text-white text-center mb-16">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300" />
            <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg flex items-center space-x-2" role="alert" aria-live="polite">
                  <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                  <span className="text-green-400">Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg flex items-center space-x-2" role="alert" aria-live="polite">
                  <AlertCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
                  <span className="text-red-400">Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nom <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Votre nom"
                    disabled={isSubmitting}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-sm mt-1 flex items-center" role="alert">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input 
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="votre@email.com"
                    disabled={isSubmitting}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm mt-1 flex items-center" role="alert">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    }`}
                    rows={4}
                    placeholder="Votre message..."
                    disabled={isSubmitting}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-1 flex items-center" role="alert">
                      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  aria-describedby={isSubmitting ? 'submitting-status' : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Envoyer</span>
                    </>
                  )}
                </button>
                {isSubmitting && (
                  <p id="submitting-status" className="sr-only">Envoi du message en cours...</p>
                )}
              </form>
              
              {/* Informations de contact alternatives */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-center mb-4">Ou contactez-moi directement :</p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="mailto:oliviergiovani00@gmail.com"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                    aria-label="Envoyer un email à oliviergiovani00@gmail.com"
                  >
                    oliviergiovani00@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;