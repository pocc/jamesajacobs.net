# Formspree Contact Form Setup

The contact form in `src/components/ContactForm.tsx` uses **Formspree** to send emails. This document explains how to configure it.

## Current Status

✅ **Form Implementation:** Complete (UI, validation, error handling, success states)
❌ **Backend Configuration:** Required — need to set `VITE_FORMSPREE_FORM_ID` environment variable
📧 **Email Destination:** geojimj@gmail.com
⏱️ **Setup Time:** 10-15 minutes

**What you need to do:**
1. Create a free Formspree account at [formspree.io](https://formspree.io/)
2. Create a new form that sends to `geojimj@gmail.com`
3. Copy the form ID and set it in `.env.local` (for local dev) and Cloudflare Pages environment variables (for production)

---

## Quick Setup (Recommended Method)

### Step 1: Create Free Formspree Account
1. Go to [formspree.io](https://formspree.io/)
2. Click "Get Started" and sign up (free tier allows 50 submissions/month)
3. Verify your email address

### Step 2: Create a New Form
1. After login, click **"+ New Form"**
2. Give it a name: **"James Jacobs Contact Form"**
3. Set the email to: **`geojimj@gmail.com`**
4. Click "Create Form"

### Step 3: Get Your Form ID
After creating the form, you'll see your **Form Endpoint**:
```
https://formspree.io/f/YOUR_FORM_ID
```
Copy the `YOUR_FORM_ID` part (it looks like `xpznvqro` or similar).

### Step 4: Configure Environment Variable

**For Local Development:**
1. Open `demo-site/.env.local`
2. Replace the empty `VITE_FORMSPREE_FORM_ID=` with your form ID:
   ```bash
   VITE_FORMSPREE_FORM_ID=xpznvqro  # Use your actual form ID
   ```
3. Save the file

**For Cloudflare Pages Deployment:**
1. Go to your Cloudflare Pages project settings
2. Navigate to **Settings → Environment Variables**
3. Add a new variable:
   - **Variable name:** `VITE_FORMSPREE_FORM_ID`
   - **Value:** Your form ID (e.g., `xpznvqro`)
   - **Environment:** Production (and Preview if needed)
4. Redeploy the site for changes to take effect

### Step 5: Test the Form
1. Build and run the demo site:
   ```bash
   cd demo-site
   npm run build
   cd ..
   python3 -m http.server 8000
   ```
2. Open `http://localhost:8000/demo/#/contact`
3. Fill out the form and submit
4. Check `geojimj@gmail.com` for the test email

---

## Alternative: Direct Email Method (No Account Required)

If you don't want to create a Formspree account, you can use their legacy direct email endpoint. However, this requires **one-time email confirmation**.

### Configure Environment Variable

In `.env.local`, set:
```bash
VITE_FORMSPREE_FORM_ID=geojimj@gmail.com
```

**Note:** Formspree accepts both form IDs (`xpznvqro`) and email addresses directly.

### First Submission Flow
1. First time someone submits the form, Formspree will send a confirmation email to `geojimj@gmail.com`
2. You must click the confirmation link in that email
3. After confirmation, all future form submissions will be sent to `geojimj@gmail.com`

**Downsides:**
- No dashboard to view submissions
- No spam filtering controls
- No form analytics
- Limited to 50 submissions/month

---

## Recommended: Free Tier Features

With a free Formspree account, you get:
- ✅ 50 form submissions/month
- ✅ Spam filtering (reCAPTCHA or honeypot)
- ✅ Email notifications
- ✅ Submission dashboard
- ✅ File uploads (if needed later)
- ✅ Custom "thank you" page redirects
- ✅ Webhook integrations

**Upgrade to paid ($10/month):**
- 1,000 submissions/month
- Custom email templates
- Team collaboration
- Priority support

---

## Current Configuration

**Email Destination:** `geojimj@gmail.com`

**Form Fields:**
- `name` (text, required)
- `email` (email, required)
- `inquiry` (select dropdown, required)
  - Expert Witness / Litigation Support
  - Environmental Site Assessment
  - Sewer Air Testing
  - Workshop / Training
  - Research Collaboration
  - Other
- `subject` (text, required)
- `message` (textarea, required)

**Error Handling:**
- Network errors show: "Network error. Please email directly to jjacobs@clearwatergroup.com"
- Server errors show: "Failed to send message. Please try again."
- Success shows: "Thank you for your message. We will be in touch shortly."

---

## Testing Checklist

After configuring the form ID, test these scenarios:

- [ ] Submit with all fields filled → Success message appears
- [ ] Check `geojimj@gmail.com` → Email received
- [ ] Submit with missing field → Form validation prevents submission
- [ ] Submit with invalid email → Browser validates email format
- [ ] Check Formspree dashboard → Submission logged (if using account method)
- [ ] Test "Send another message" flow → Form resets properly
- [ ] Test network error → Error message shows fallback email

---

## Troubleshooting

### "Failed to send message" Error
- **Cause:** Invalid form ID or Formspree service unavailable
- **Fix:** Double-check form ID in Formspree dashboard

### "Network error" Message
- **Cause:** CORS issue or internet connection problem
- **Fix:** Ensure fetch headers include `Accept: 'application/json'`

### Email Not Received
- **Cause:** Email in spam folder or confirmation email not clicked
- **Fix:**
  1. Check spam/junk folder in `geojimj@gmail.com`
  2. If using direct email method, check for Formspree confirmation email
  3. Whitelist `formspree.io` domain in Gmail

### Form ID Shows "YOUR_FORM_ID"
- **Cause:** Forgot to replace placeholder
- **Fix:** Follow Step 4 above to replace with actual form ID

---

## Security Notes

- Formspree automatically includes bot protection
- Client-side validation (HTML5 `required` attributes)
- Server-side validation (Formspree handles)
- No sensitive data stored in frontend code
- Email address is only revealed on form submission

---

## Migration from GoDaddy Form

The old GoDaddy form sent to:
- `jjacobs@clearwatergroup.com`
- `jaajacob@ucsc.edu`

The new Formspree form sends to:
- `geojimj@gmail.com`

If you want to receive emails at multiple addresses:
1. In Formspree dashboard → Form Settings → Email Notifications
2. Add additional CC addresses:
   - `jjacobs@clearwatergroup.com`
   - `jaajacob@ucsc.edu`

---

## Next Steps

1. ✅ Create Formspree account (5 minutes)
2. ✅ Create form and get form ID (2 minutes)
3. ✅ Update `ContactForm.tsx` with form ID (1 minute)
4. ✅ Test form submission (2 minutes)
5. ✅ Configure spam protection in Formspree settings (optional, 5 minutes)
6. ✅ Set up email forwarding rules if needed (optional)

**Total setup time: ~10-15 minutes**

---

## Support

- **Formspree Docs:** https://help.formspree.io/
- **Formspree Support:** support@formspree.io
- **Alternative Services:**
  - Netlify Forms (if deploying to Netlify)
  - SendGrid Contact Form API
  - Cloudflare Workers + Email Workers

---

**Last Updated:** February 7, 2026
**Contact Form Version:** 1.0
