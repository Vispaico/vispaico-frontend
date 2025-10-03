"use client";

import { FormEvent, useState } from 'react';
import { useCursor } from '@/context/CursorContext';

const requestOptions = [
  '24-Hour Delivery',
  '12-Hour Delivery',
  '6-Hour Delivery',
  'Custom Service',
  'Questions',
];

const AgencyPitCrewBriefForm = () => {
  const { setIsHoveringInteractive } = useCursor();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    requestType: requestOptions[0],
    message: '',
    b_name: '',
  });
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'agency_pit_crew',
          name: formState.name,
          email: formState.email,
          requestType: formState.requestType,
          message: formState.message,
          b_name: formState.b_name,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'There was a problem submitting your request.');
      }

      setStatus('Thanks! The pit crew will reach out shortly.');
      setFormState({
        name: '',
        email: '',
        requestType: requestOptions[0],
        message: '',
        b_name: '',
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred.';
      setStatus(`Oops! ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-amber-300 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={formState.name}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-4 py-3 text-gray-100 shadow-inner transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formState.email}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-4 py-3 text-gray-100 shadow-inner transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="requestType" className="block text-sm font-medium text-amber-300 mb-2">
          What do you need?
        </label>
        <select
          id="requestType"
          name="requestType"
          value={formState.requestType}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-4 py-3 text-gray-100 shadow-inner transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {requestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-amber-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Message | Project Brief"
          value={formState.message}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={isSubmitting}
          className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-4 py-3 text-gray-100 shadow-inner transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_name"
          tabIndex={-1}
          autoComplete="off"
          value={formState.b_name}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Send to the Pit Crew'}
      </button>

      {status && (
        <p
          className={`text-center text-sm ${status.startsWith('Oops') ? 'text-red-300' : 'text-emerald-300'}`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default AgencyPitCrewBriefForm;
