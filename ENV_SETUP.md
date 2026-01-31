# Environment Variables Setup for Contact Form

The contact form requires email configuration to send form submissions to your email address.

## Required Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```env
# SMTP Configuration (Gmail)
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here

# Contact Form Email Recipient
CONTACT_NOTIFICATIONS_TO=your-receiving-email@gmail.com

# Contact Form Email Sender (optional - defaults to SMTP_USER if not set)
CONTACT_NOTIFICATIONS_FROM=your-email@gmail.com
```

## Setting Up Gmail App Password

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable **2-Step Verification** if not already enabled
3. Go to **Security** → **App Passwords**
4. Select **Mail** as the app and **Other (Custom name)** as the device
5. Enter "Mauna Kea Contact Form" as the name
6. Click **Generate**
7. Copy the 16-character password and use it as `SMTP_PASSWORD`

## Alternative Email Providers

If you're not using Gmail, you can modify the SMTP configuration in `lib/mailer.ts` to use other providers like:
- Outlook/Office 365
- SendGrid
- Mailgun
- AWS SES

## Testing

After setting up the environment variables:
1. Restart your development server
2. Submit a test form on the contact page
3. Check your email inbox for the submission

## Security Notes

- Never commit `.env.local` to version control
- Use different credentials for development and production
- For production, set these as environment variables in your hosting platform (Vercel, Netlify, etc.)
