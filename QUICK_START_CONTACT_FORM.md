# Quick Start: Enable Contact Form (5 minutes)

The contact form is ready to use! Follow these steps to enable it:

## ⚡ Quick Setup (Recommended)

### 1. Get a Formspree Account
Visit [https://formspree.io/register](https://formspree.io/register) and create a **free account** (50 submissions/month).

### 2. Create Your Form
1. Click **"+ New Form"** in the Formspree dashboard
2. **Form Name:** "James Jacobs Contact"
3. **Email Address:** `geojimj@gmail.com`
4. Click **"Create Form"**

### 3. Copy Your Form ID
After creating the form, you'll see a Form ID like: `xabc1234`

### 4. Configure Locally
```bash
cd demo-site
echo "VITE_FORMSPREE_FORM_ID=xabc1234" > .env.local
```
*(Replace `xabc1234` with your actual Form ID)*

### 5. Test It
```bash
npm run dev
# Visit http://localhost:5173/contact and test the form
```

### 6. Deploy to Production
In Cloudflare Pages dashboard:
1. Go to **Settings → Environment Variables**
2. Add: `VITE_FORMSPREE_FORM_ID` = `xabc1234`
3. Click **Save**
4. Rebuild and deploy

---

## ✅ That's It!

All form submissions will now be sent to **geojimj@gmail.com**

## 📧 Form Fields Included
- Name (required)
- Email (required)
- Inquiry Type (required) — dropdown with options:
  - Expert Witness / Litigation Support
  - Environmental Site Assessment
  - Sewer Air Testing
  - Workshop / Training
  - Research Collaboration
  - Other
- Subject (required)
- Message (required)

## 🛡️ Spam Protection
Formspree includes built-in spam filtering. For additional protection:
1. Go to your form settings in Formspree
2. Enable **reCAPTCHA** or **Honeypot**

## 💡 Pro Tips
- **Auto-reply:** Set up automatic confirmation emails in Formspree settings
- **Notifications:** Configure Slack/Discord notifications for new submissions
- **Archives:** All submissions are archived in your Formspree dashboard
- **Exports:** Download submissions as CSV

## 🔍 Troubleshooting

**Form shows "not configured" error:**
- Make sure `VITE_FORMSPREE_FORM_ID` is set in `.env.local`
- Restart the dev server after adding the env variable

**Emails not arriving:**
- Check spam/junk folder in geojimj@gmail.com
- Verify Form ID is correct
- Check Formspree dashboard → Form → Submissions log

**Rate limit errors:**
- Free plan allows 50/month
- Upgrade to Gold ($10/month) for 1,000/month

---

For detailed setup options, see [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)
