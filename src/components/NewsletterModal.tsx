import React, { useState } from 'react';
import './NewsletterModal.css'; // Import the CSS file for styling

const NewsletterModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-substack-url.com/api/v1/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setName('');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />
          <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
            Subscribe
          </button>
        </form>
        {message && <p className="mt-2">{message}</p>}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default NewsletterModal;