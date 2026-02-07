import { useState, type FormEvent } from 'react'

const inquiryTypes = [
    'Expert Witness / Litigation Support',
    'Environmental Site Assessment',
    'Sewer Air Testing',
    'Workshop / Training',
    'Research Collaboration',
    'Other',
]

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitting(true)
        setError(null)

        const form = e.currentTarget
        const formData = new FormData(form)

        // Using Formspree direct email method
        // Configured to send to geojimj@gmail.com
        // NOTE: First submission requires one-time email confirmation from Formspree
        // For setup with dashboard and spam protection, see FORMSPREE_SETUP.md

        try {
            const response = await fetch('https://formspree.io/geojimj@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })

            if (response.ok) {
                setSubmitted(true)
            } else {
                const data = await response.json()
                setError(data.error || 'Failed to send message. Please try again.')
            }
        } catch (err) {
            setError(
                'Network error. Please email directly to geojimj@gmail.com or jjacobs@clearwatergroup.com'
            )
        } finally {
            setSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <p className="text-green-800 font-medium">
                    Thank you for your message. We will be in touch shortly.
                </p>
            </div>
        )
    }

    const inputClasses =
        'w-full px-3 py-2.5 border border-surface-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow disabled:opacity-50 disabled:cursor-not-allowed'

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
                    {error}
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Name <span className="text-accent-dark">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={submitting}
                        className={inputClasses}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email <span className="text-accent-dark">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={submitting}
                        className={inputClasses}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-text mb-1">How can I help? <span className="text-accent-dark">*</span></label>
                <select
                    id="inquiry"
                    name="inquiry"
                    required
                    disabled={submitting}
                    className={inputClasses}
                    defaultValue=""
                >
                    <option value="" disabled>Select an inquiry type</option>
                    {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Subject <span className="text-accent-dark">*</span></label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={submitting}
                    className={inputClasses}
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message <span className="text-accent-dark">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={submitting}
                    className={inputClasses}
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                    type="submit"
                    disabled={submitting}
                    className="bg-accent hover:bg-accent-dark text-primary-dark px-6 py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {submitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-xs text-text-secondary">
                    Typical response: 1–2 business days
                </p>
            </div>
        </form>
    )
}
