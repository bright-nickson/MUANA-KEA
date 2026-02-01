"use client";

import { useState } from "react";

export default function MinimalContactTest() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testMinimal = async () => {
    setLoading(true);
    setResult("");
    
    try {
      console.log("TEST: Starting minimal API test");
      
      // Test 1: Simple GET request to see if API is accessible
      const getResponse = await fetch("/api/contact");
      console.log("TEST: GET Response status:", getResponse.status);
      console.log("TEST: GET Response ok:", getResponse.ok);
      
      if (!getResponse.ok) {
        throw new Error(`GET failed: ${getResponse.status}`);
      }
      
      // Test 2: Simple POST with minimal data
      const postResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          areaOfInterest: "Test",
          message: "This is a test message with more than 20 characters to validate the form submission process.",
          honeypot: ""
        }),
      });
      
      console.log("TEST: POST Response status:", postResponse.status);
      console.log("TEST: POST Response ok:", postResponse.ok);
      
      const responseText = await postResponse.text();
      console.log("TEST: POST Response text:", responseText);
      
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        responseData = { rawResponse: responseText };
      }
      
      console.log("TEST: POST Response data:", responseData);
      
      setResult(`SUCCESS: POST ${postResponse.status} - ${JSON.stringify(responseData)}`);
      
    } catch (error) {
      console.error("TEST: Error:", error);
      setResult(`ERROR: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Minimal Contact API Test</h1>
      
      <button 
        onClick={testMinimal}
        disabled={loading}
        style={{
          padding: '1rem 2rem',
          backgroundColor: loading ? '#666' : '#8b0000',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '2rem'
        }}
      >
        {loading ? 'Testing...' : 'Test Contact API'}
      </button>
      
      {result && (
        <div style={{
          padding: '1rem',
          backgroundColor: result.includes('ERROR') ? '#fee' : '#efe',
          border: `1px solid ${result.includes('ERROR') ? '#fcc' : '#cfc'}`,
          borderRadius: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          whiteSpace: 'pre-wrap'
        }}>
          <strong>Result:</strong><br/>
          {result}
        </div>
      )}
      
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '0.5rem'
      }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Open browser developer tools (F12)</li>
          <li>Go to Console tab</li>
          <li>Click "Test Contact API" button</li>
          <li>Check console logs for detailed debugging</li>
          <li>Check Network tab for request/response details</li>
        </ol>
        
        <h4>What this tests:</h4>
        <ul>
          <li>API endpoint accessibility (GET)</li>
          <li>POST request with proper headers</li>
          <li>JSON parsing on both client and server</li>
          <li>Response handling</li>
        </ul>
      </div>
    </div>
  );
}
