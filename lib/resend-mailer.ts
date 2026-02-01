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
      from: 'noreply@muana-kea.com',
      to: ['brightnickson@gmail.com'],
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

export async function sendNewsletterNotification(data: NewsletterEmailData) {
  try {
    const { email } = data;
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'noreply@muana-kea.com',
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
