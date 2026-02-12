import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  name: string;
  company: string;
  email: string;
  role: string;
  areaOfInterest: string;
  message: string;
}

interface NewsletterEmailData {
  email: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  try {
    const { name, company, email, role, areaOfInterest, message } = data;
    
    const emailContent = `
New Contact Form Submission

Name: ${name}
Company: ${company || 'Not provided'}
Email: ${email}
Role: ${role || 'Not provided'}
Area of Interest: ${areaOfInterest}

Message:
${message}

---
Submitted via Mauna Kea Consulting website
    `.trim();

    const { data: emailData, error } = await resend.emails.send({
      from: "Mauna Kea <onboarding@resend.dev>",
      to: ['brightnickson63@gmail.com'],
      subject: `New Contact: ${name} - ${areaOfInterest}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b0000; border-bottom: 2px solid #8b0000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Role:</strong> ${role || 'Not provided'}</p>
            <p><strong>Area of Interest:</strong> ${areaOfInterest}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Submitted via Mauna Kea Consulting website
          </p>
        </div>
      `,
      text: emailContent
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Email sent successfully:', emailData);
    return emailData;
  } catch (error) {
    console.error('Error sending contact notification:', error);
    throw error;
  }
}

export async function sendNewsletterConfirmation(data: NewsletterEmailData) {
  try {
    const { email } = data;
    
    const { data: emailData, error } = await resend.emails.send({
      from: "Mauna Kea <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Mauna Kea Consulting Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #8b0000; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
              Welcome to Mauna Kea Consulting
            </h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
              Your gateway to enterprise technology excellence
            </p>
          </div>
          
          <div style="padding: 40px 30px; background: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 60px; height: 60px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <span style="color: white; font-size: 24px;">✓</span>
              </div>
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
                Successfully Subscribed!
              </h2>
              <p style="color: #6b7280; margin: 0; font-size: 16px; line-height: 1.6;">
                Thank you for subscribing to our newsletter. You're now part of an exclusive community of 2,000+ tech leaders receiving cutting-edge insights.
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #8b0000;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                What to Expect:
              </h3>
              <ul style="color: #4b5563; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Latest insights on Cloud Transformation and AI</li>
                <li>Cybersecurity best practices and threat intelligence</li>
                <li>Data & Intelligence trends and strategies</li>
                <li>High Performance Computing innovations</li>
                <li>Exclusive industry reports and case studies</li>
                <li>Invitation to webinars and executive events</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://maunakeaconsulting.com/services" 
                 style="display: inline-block; background: #8b0000; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px; transition: background-color 0.2s;">
                Explore Our Services
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 25px; margin-top: 30px; text-align: center;">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                <strong>Have questions?</strong> We're here to help.
              </p>
              <a href="mailto:info@maunakeaconsulting.com" 
                 style="color: #8b0000; text-decoration: none; font-weight: 600;">
                info@maunakeaconsulting.com
              </a>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 0 0 8px 8px;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px; line-height: 1.5;">
              You're receiving this email because you subscribed to the Mauna Kea Consulting newsletter.<br>
              If you didn't subscribe or wish to unsubscribe, please <a href="#" style="color: #8b0000;">click here</a>.
            </p>
          </div>
        </div>
      `,
      text: `
Welcome to Mauna Kea Consulting Newsletter!

Thank you for subscribing to our newsletter. You're now part of an exclusive community of 2,000+ tech leaders receiving cutting-edge insights.

What to Expect:
- Latest insights on Cloud Transformation and AI
- Cybersecurity best practices and threat intelligence  
- Data & Intelligence trends and strategies
- High Performance Computing innovations
- Exclusive industry reports and case studies
- Invitation to webinars and executive events

Explore our services: https://maunakeaconsulting.com/services

Have questions? Contact us at info@maunakeaconsulting.com

---
You're receiving this email because you subscribed to the Mauna Kea Consulting newsletter.
If you didn't subscribe or wish to unsubscribe, please reply to this email.
      `.trim()
    });

    if (error) {
      console.error('Resend confirmation error:', error);
      throw new Error(`Failed to send newsletter confirmation: ${error.message}`);
    }

    console.log('Newsletter confirmation email sent successfully:', emailData);
    return emailData;
  } catch (error) {
    console.error('Error sending newsletter confirmation:', error);
    throw error;
  }
}

export async function sendNewsletterNotification(data: NewsletterEmailData) {
  try {
    const { email } = data;
    
    const { data: emailData, error } = await resend.emails.send({
      from: "Mauna Kea <onboarding@resend.dev>",
      to: ['brightnickson@gmail.com'],
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b0000; border-bottom: 2px solid #8b0000; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p>This user subscribed to receive updates and insights from Mauna Kea Consulting.</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Subscribed via Mauna Kea Consulting website
          </p>
        </div>
      `,
      text: `New Newsletter Subscription\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}\n\nSubscribed via Mauna Kea Consulting website`
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send newsletter email: ${error.message}`);
    }

    console.log('Newsletter email sent successfully:', emailData);
    return emailData;
  } catch (error) {
    console.error('Error sending newsletter notification:', error);
    throw error;
  }
}
