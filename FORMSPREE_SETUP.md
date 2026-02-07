# Contact Form Setup Instructions

The contact form in the React demo uses **Formspree** to send emails. Follow these steps to complete the setup:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Sign Up"** (or "Get Started")
3. Create a free account (allows 50 submissions/month)

## Step 2: Create a New Form

1. Once logged in, click **"+ New Form"**
2. Enter these details:
   - **Form Name:** "James Jacobs Contact Form" (or any name you prefer)
   - **Email Address:** `geojimj@gmail.com`
3. Click **"Create Form"**

## Step 3: Get Your Form ID

After creating the form, Formspree will show you a **Form ID** that looks like:
```
xabc1234
```

The full endpoint will be:
```
https://formspree.io/f/xabc1234
```

## Step 4: Update the Code

Open the file: `demo-site/src/components/ContactForm.tsx`

Find line 29 and replace `YOUR_FORM_ID` with your actual Form ID:

**Before:**
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**After:**
```typescript
const response = await fetch('https://formspree.io/f/xabc1234', {
```

## Step 5: Rebuild the Demo

```bash
cd demo-site
npm run build
```

## Step 6: Test the Form

1. Visit the contact page: `https://jamesajacobs.net/demo/contact`
2. Fill out the form with test data
3. Click "Send Message"
4. Check `geojimj@gmail.com` for the email

## Form Configuration Options

In your Formspree dashboard, you can configure:

- **Email Templates** — Customize how submissions appear in your inbox
- **Auto-Reply** — Send automatic confirmations to form submitters
- **Spam Protection** — Enable reCAPTCHA or honeypot
- **File Uploads** — Allow attachment uploads (if needed)
- **Webhooks** — Send submissions to other services

## Troubleshooting

### "Form not found" error
- Double-check the Form ID is correct
- Make sure you're using `/f/` not `/e/` in the URL

### Emails not arriving
- Check spam/junk folder
- Verify `geojimj@gmail.com` is set as the recipient email
- Check Formspree dashboard for submission logs

### Rate limit errors
- Free plan allows 50 submissions/month
- Upgrade to paid plan if you exceed this

## Alternative: Using Environment Variables

For better security, you can use environment variables:

1. Create `demo-site/.env.local`:
   ```
   VITE_FORMSPREE_FORM_ID=xabc1234
   ```

2. Update ContactForm.tsx:
   ```typescript
   const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID'
   const response = await fetch(`https://formspree.io/f/${formId}`, {
   ```

3. Add `.env.local` to `.gitignore` (already included)

## Production Deployment

When deploying to Cloudflare Pages, set the environment variable:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add:
   - **Variable name:** `VITE_FORMSPREE_FORM_ID`
   - **Value:** `xabc1234` (your actual Form ID)
   - **Environment:** Production (and Preview if needed)

---

**Once configured, the contact form will send all submissions to geojimj@gmail.com**
