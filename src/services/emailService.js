// Service pour l'envoi d'emails via EmailJS
// Vous devrez installer EmailJS: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

// Configuration EmailJS (à remplacer par vos vraies clés)
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  templateId: 'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Remplacez par votre Public Key
};

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'LOVASOA Heriniaina Olivier',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error.message };
  }
};

// Alternative: Service de fallback avec fetch (pour un backend personnalisé)
export const sendEmailFallback = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi');
    }

    return { success: true, data: await response.json() };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error.message };
  }
}; 