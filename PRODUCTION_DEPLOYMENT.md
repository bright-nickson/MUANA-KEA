# Production Deployment Guide

## 📧 Gmail Configuration for Production

### Step 1: Enable Less Secure Apps
1. Go to: https://myaccount.google.com/lesssecureapps
2. Turn **ON** "Allow less secure apps"
3. This allows Node.js applications to send emails through Gmail

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select:
   - **App:** Mail
   - **Device:** Other (Custom name)
   - **Name:** Mauna Kea Website Production
3. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)
4. Update `.env.local` with the new password

### Step 3: Update Environment Variables
```bash
# Production .env.local
SMTP_USER=brightnickson@gmail.com
SMTP_PASSWORD=your_new_16_character_app_password
CONTACT_NOTIFICATIONS_TO=brightnickson@gmail.com
CONTACT_NOTIFICATIONS_FROM=brightnickson@gmail.com
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Option 2: Netlify
1. Connect repository to Netlify
2. Add environment variables in Netlify dashboard
3. Deploy with continuous integration

### Option 3: Manual Deployment
1. Build: `npm run build`
2. Start: `npm start`
3. Configure environment variables on server

## ✅ Pre-Deployment Checklist

- [ ] Gmail less secure apps enabled
- [ ] New app password generated
- [ ] Environment variables configured
- [ ] Contact form tested locally
- [ ] Responsive design verified
- [ ] All pages working correctly

## 🧪 Production Testing

After deployment:
1. Test contact form submission
2. Verify email delivery to brightnickson@gmail.com
3. Check mobile responsiveness
4. Test all navigation links
5. Verify favicon and logo display

## 🔧 Troubleshooting

### Email Not Working:
- Check app password is correct (16 characters, no spaces)
- Verify less secure apps is enabled
- Check environment variables are set correctly

### Other Issues:
- Check browser console for errors
- Verify all environment variables are set
- Test with different email addresses

## 📞 Support

If you encounter issues:
1. Check server logs for error messages
2. Verify Gmail settings
3. Test with a different email service if needed
