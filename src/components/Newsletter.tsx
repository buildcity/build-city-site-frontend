import React, { useState } from 'react';

const Newsletter: React.FC = () => {
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

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
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
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default Newsletter;