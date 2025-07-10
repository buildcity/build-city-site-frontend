import React, { useState } from 'react';
import { X, Send, User, Mail, MessageSquare, Link as LinkIcon } from 'lucide-react';
import { Button } from './ui/button';

interface ResearchFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  socialLink: string;
  socialPlatform: 'telegram' | 'twitter';
  projectMessage: string;
}

const ResearchForm: React.FC<ResearchFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    socialLink: '',
    socialPlatform: 'telegram',
    projectMessage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend/database
      // For now, we'll simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Research form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          socialLink: '',
          socialPlatform: 'telegram',
          projectMessage: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 ease-out animate-slide-in-left hover:scale-[1.02]">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Join Our Research</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
              Thank you for joining our research! We'll be in touch soon.
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
              Something went wrong. Please try again.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                <User className="inline h-4 w-4 mr-2" />
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-600 hover:bg-gray-750"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                <Mail className="inline h-4 w-4 mr-2" />
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-600 hover:bg-gray-750"
                placeholder="your@email.com"
              />
            </div>

            {/* Social Platform Selection */}
            <div>
              <label htmlFor="socialPlatform" className="block text-sm font-medium text-gray-300 mb-2">
                <LinkIcon className="inline h-4 w-4 mr-2" />
                Preferred Social Platform
              </label>
              <select
                id="socialPlatform"
                name="socialPlatform"
                value={formData.socialPlatform}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-600 hover:bg-gray-750"
              >
                <option value="telegram">Telegram</option>
                <option value="twitter">Twitter/X</option>
              </select>
            </div>

            {/* Social Link Field */}
            <div>
              <label htmlFor="socialLink" className="block text-sm font-medium text-gray-300 mb-2">
                {formData.socialPlatform === 'telegram' ? 'Telegram' : 'Twitter/X'} Handle/Link
              </label>
              <input
                type="text"
                id="socialLink"
                name="socialLink"
                value={formData.socialLink}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-600 hover:bg-gray-750"
                placeholder={
                  formData.socialPlatform === 'telegram' 
                    ? '@username or t.me/username' 
                    : '@username or twitter.com/username'
                }
              />
            </div>

            {/* Project Message Field */}
            <div>
              <label htmlFor="projectMessage" className="block text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-2" />
                Tell us about your project *
              </label>
              <textarea
                id="projectMessage"
                name="projectMessage"
                value={formData.projectMessage}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical transition-all duration-300 hover:border-gray-600 hover:bg-gray-750"
                placeholder="Describe your project, research interests, or how you'd like to contribute to BuildCity Labs..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-2 border-transparent hover:border-blue-400/50"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </>
              )}
            </Button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
            <p className="text-sm text-gray-400">
              By submitting this form, you're expressing interest in joining BuildCity Labs research initiatives. 
              We'll review your application and reach out to discuss potential collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchForm;
