"use client";

import { FormEvent, useState, useRef } from "react";

export default function DebugContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      areaOfInterest: String(formData.get("areaOfInterest") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    console.log("DEBUG: Client payload:", payload);

    try {
      setSubmitting(true);
      
      // Test with debug endpoint first
      const response = await fetch("/api/debug-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("DEBUG: Response status:", response.status);
      console.log("DEBUG: Response ok:", response.ok);

      const json = await response.json();
      console.log("DEBUG: Response JSON:", json);

      if (!response.ok || !json.success) {
        throw new Error(json.error || "Debug submission failed");
      }

      setSuccess("Debug test successful!");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error("DEBUG: Client error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Debug submission failed.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Debug Contact Form</h1>
      
      {error && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#fee', 
          border: '1px solid #fcc', 
          borderRadius: '0.5rem', 
          marginBottom: '1rem' 
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {success && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#efe', 
          border: '1px solid #cfc', 
          borderRadius: '0.5rem', 
          marginBottom: '1rem' 
        }}>
          <strong>Success:</strong> {success}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name *</label>
          <input 
            type="text" 
            name="name" 
            required 
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email *</label>
          <input 
            type="email" 
            name="email" 
            required 
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Area of Interest *</label>
          <input 
            type="text" 
            name="areaOfInterest" 
            required 
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message *</label>
          <textarea 
            name="message" 
            required 
            rows={4}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={submitting}
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: submitting ? '#666' : '#8b0000', 
            color: 'white', 
            border: 'none', 
            borderRadius: '0.25rem',
            cursor: submitting ? 'not-allowed' : 'pointer'
          }}
        >
          {submitting ? 'Submitting...' : 'Submit Debug Test'}
        </button>
      </form>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '0.5rem' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Open browser developer tools (F12)</li>
          <li>Go to Console tab</li>
          <li>Fill out and submit this form</li>
          <li>Check console logs for debug information</li>
          <li>Also check Network tab for API request details</li>
        </ol>
      </div>
    </div>
  );
}
