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

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <p className="text-green-800 font-medium">Thank you for your message. We will be in touch shortly.</p>
            </div>
        )
    }

    const inputClasses = "w-full px-3 py-2.5 border border-surface-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow"

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Name <span className="text-accent-dark">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
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
                    className={inputClasses}
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                    type="submit"
                    className="bg-accent hover:bg-accent-dark text-primary-dark px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                    Send Message
                </button>
                <p className="text-xs text-text-secondary">Typical response: 1–2 business days</p>
            </div>
        </form>
    )
}
