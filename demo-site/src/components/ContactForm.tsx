import { useState, type FormEvent } from 'react'

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

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2.5 border border-surface-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2.5 border border-surface-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2.5 border border-surface-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2.5 border border-surface-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
            </div>
            <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-primary-dark px-6 py-3 rounded-xl font-semibold transition-colors"
            >
                Send Message
            </button>
        </form>
    )
}
