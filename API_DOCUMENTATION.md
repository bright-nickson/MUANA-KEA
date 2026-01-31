# API Reference & Integration Guide

---

## Contact Form API

### Overview

The contact form API handles submissions from the contact page and sends email notifications.

**Base URL:** `/api/contact`
**Method:** `POST`
**Response Format:** JSON

---

### Request Body

```typescript
{
  name: string;          // Required: User's full name
  email: string;         // Required: Valid email address
  company: string;       // Required: Company name
  message: string;       // Required: Contact message (min 10 chars)
  phone?: string;        // Optional: Phone number
}
```

**Example:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "I would like to discuss cloud transformation services.",
  "phone": "+1-555-0100"
}
```

---

### Response Format

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "id": "contact_123abc",
    "email": "john@example.com",
    "timestamp": "2026-01-30T10:30:00Z",
    "status": "sent"
  }
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": ["Email is invalid"]
  }
}
```

---

### Status Codes

| Code | Meaning |
|------|---------|
| 200 | Message sent successfully |
| 400 | Validation error (check message) |
| 401 | Unauthorized |
| 429 | Rate limited (too many requests) |
| 500 | Server error |

---

### Implementation

**Frontend:**
```typescript
// app/(marketing)/contact/page.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        phone: formData.phone
      })
    });

    const data = await response.json();
    
    if (data.success) {
      // Show success message
      setSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      // Show error message
      setError(data.message);
    }
  } catch (error) {
    setError('Failed to send message. Please try again.');
  }
};
```

**Backend:**
```typescript
// app/api/contact/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validation
    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Send email
    const mailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'contact@maunakeaconsulting.com',
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    });

    return Response.json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: mailResult.messageId,
        email: body.email,
        timestamp: new Date().toISOString(),
        status: 'sent'
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

---

## Supabase Integration

### Authentication Setup

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### Database Queries

**Insert Contact:**
```typescript
const { data, error } = await supabase
  .from('contacts')
  .insert([
    {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme',
      message: 'Message text',
      created_at: new Date()
    }
  ]);
```

**Fetch Contacts:**
```typescript
const { data: contacts, error } = await supabase
  .from('contacts')
  .select()
  .order('created_at', { ascending: false })
  .limit(10);
```

**Update Contact Status:**
```typescript
const { error } = await supabase
  .from('contacts')
  .update({ status: 'contacted' })
  .eq('id', contactId);
```

---

## Newsletter Subscription

### API Endpoint

**Endpoint:** `/api/newsletter`
**Method:** `POST`

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Subscribed successfully",
  "data": {
    "email": "user@example.com",
    "subscribed": true
  }
}
```

---

## Calendar Integration

### Calendly Setup

Embed Calendly for appointment booking:

```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/maunakea/discovery-call" 
     style="min-width:320px;height:650px;"></div>

<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async></script>
```

### Environment Variable
```env
NEXT_PUBLIC_CALENDAR_ID=maunakea/discovery-call
```

---

## Error Handling

### Global Error Boundary

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### API Error Responses

```typescript
// Standard error format
{
  success: false,
  error: {
    code: 'ERROR_CODE',
    message: 'Human readable message',
    details: { /* additional info */ }
  }
}
```

---

## Rate Limiting

Implement rate limiting to prevent abuse:

```typescript
// Middleware or API route
const rateLimitMap = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip) || [];
  const recentRequests = userLimit.filter(
    (time: number) => now - time < 60000 // 1 minute window
  );

  if (recentRequests.length >= 5) {
    return false; // Rate limited
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}
```

---

## Security

### Input Validation

```typescript
// Validate email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  throw new Error('Invalid email');
}

// Sanitize message
const sanitized = message.replace(/[<>]/g, '');

// Validate length
if (message.length > 5000) {
  throw new Error('Message too long');
}
```

### CORS Configuration

```typescript
// next.config.ts
const config: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
        ],
      },
    ];
  },
};
```

---

## Testing APIs

### Using cURL

```bash
# Contact form submission
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "message": "Testing the API"
  }'

# Newsletter subscription
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

### Using Postman

1. Create new request
2. Set method to POST
3. Add URL: `http://localhost:3000/api/contact`
4. Go to Body tab
5. Select raw → JSON
6. Paste request JSON
7. Click Send

---

## Webhooks

### Setup Email Webhooks

```typescript
// Handle delivery notifications
app.post('/webhooks/email-status', (req, res) => {
  const { messageId, status, error } = req.body;
  
  // Update in database
  updateMessageStatus(messageId, status);
  
  res.json({ received: true });
});
```

---

## Rate Limit Best Practices

1. **Per IP:** Limit requests per IP address
2. **Per User:** Limit requests per authenticated user
3. **Per Email:** Prevent multiple subscriptions
4. **Backoff:** Use exponential backoff for retries
5. **Headers:** Include rate limit info in response headers

---

## API Monitoring

### Key Metrics

- Response time
- Error rate
- Request volume
- Success rate
- Most common errors

### Tools

- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay
- [Datadog](https://datadog.com) - Infrastructure monitoring

---

*Last Updated: January 30, 2026*
