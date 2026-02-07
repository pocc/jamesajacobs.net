import { useState, type FormEvent } from 'react'

const inquiryTypes = [
    { value: 'attorney', label: 'Attorney / Legal Team (Expert Witness)' },
    { value: 'utility', label: 'Water / Sewer Utility (Infrastructure & Testing)' },
    { value: 'property', label: 'Property Owner / Developer (Site Assessment)' },
    { value: 'regulatory', label: 'Regulatory Agency (Training & Consultation)' },
    { value: 'researcher', label: 'Researcher / Academic (Collaboration)' },
    { value: 'oil-gas', label: 'Oil & Gas Industry (Contamination Assessment)' },
    { value: 'consultant', label: 'Environmental Consultant' },
    { value: 'training', label: 'Workshop / Professional Development' },
    { value: 'speaking', label: 'Speaking Engagement' },
    { value: 'other', label: 'Other' },
]

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [inquiryType, setInquiryType] = useState<string>('')

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
        } catch {
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
                <label htmlFor="inquiry" className="block text-sm font-medium text-text mb-1">I am a... <span className="text-accent-dark">*</span></label>
                <select
                    id="inquiry"
                    name="inquiry"
                    required
                    disabled={submitting}
                    className={inputClasses}
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                >
                    <option value="" disabled>Select your role</option>
                    {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                </select>
            </div>

            {/* Attorney-specific fields */}
            {inquiryType === 'attorney' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="law-firm" className="block text-sm font-medium text-text mb-1">Law Firm</label>
                            <input type="text" id="law-firm" name="law-firm" disabled={submitting} className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="jurisdiction" className="block text-sm font-medium text-text mb-1">Jurisdiction</label>
                            <select id="jurisdiction" name="jurisdiction" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="state">State Court</option>
                                <option value="federal">Federal Court</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="case-type" className="block text-sm font-medium text-text mb-1">Case Type</label>
                            <select id="case-type" name="case-type" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="groundwater">Groundwater Contamination</option>
                                <option value="vapor-intrusion">Vapor Intrusion</option>
                                <option value="mtbe">MTBE</option>
                                <option value="chromium-vi">Chromium VI</option>
                                <option value="hydraulic-fracturing">Hydraulic Fracturing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-text mb-1">Timeline</label>
                            <select id="timeline" name="timeline" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="urgent">Urgent (&lt;2 weeks)</option>
                                <option value="standard">Standard (2-8 weeks)</option>
                                <option value="long-term">Long-term (&gt;8 weeks)</option>
                            </select>
                        </div>
                    </div>
                </>
            )}

            {/* Utility-specific fields */}
            {inquiryType === 'utility' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="utility-name" className="block text-sm font-medium text-text mb-1">Utility/District Name</label>
                            <input type="text" id="utility-name" name="utility-name" disabled={submitting} className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="service-area" className="block text-sm font-medium text-text mb-1">Service Area</label>
                            <input type="text" id="service-area" name="service-area" placeholder="City/County" disabled={submitting} className={inputClasses} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="issue-type" className="block text-sm font-medium text-text mb-1">Issue Type</label>
                            <select id="issue-type" name="issue-type" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="vapor-intrusion">Vapor Intrusion Complaint</option>
                                <option value="sea-level-rise">Sea Level Rise Planning</option>
                                <option value="compliance">Regulatory Compliance</option>
                                <option value="groundwater">Groundwater Contamination</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="urgency" className="block text-sm font-medium text-text mb-1">Urgency</label>
                            <select id="urgency" name="urgency" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="emergency">Emergency (&lt;1 week)</option>
                                <option value="urgent">Urgent (1-4 weeks)</option>
                                <option value="standard">Standard (&gt;1 month)</option>
                            </select>
                        </div>
                    </div>
                </>
            )}

            {/* Consultant-specific fields */}
            {inquiryType === 'consultant' && (
                <>
                    <div>
                        <label htmlFor="firm-name" className="block text-sm font-medium text-text mb-1">Firm Name</label>
                        <input type="text" id="firm-name" name="firm-name" disabled={submitting} className={inputClasses} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="project-type" className="block text-sm font-medium text-text mb-1">Project Type</label>
                            <select id="project-type" name="project-type" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="expert-review">Expert Review</option>
                                <option value="sub-consulting">Sub-Consulting</option>
                                <option value="expert-witness">Expert Witness Support</option>
                                <option value="training">Technical Training</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="technical-area" className="block text-sm font-medium text-text mb-1">Technical Area</label>
                            <select id="technical-area" name="technical-area" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="chromium-vi">Chromium VI</option>
                                <option value="vapor-intrusion">Vapor Intrusion</option>
                                <option value="mtbe">MTBE</option>
                                <option value="hydraulic-fracturing">Hydraulic Fracturing</option>
                                <option value="acid-mine-drainage">Acid Mine Drainage</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </>
            )}

            {/* Property Owner-specific fields */}
            {inquiryType === 'property' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="property-type" className="block text-sm font-medium text-text mb-1">Property Type</label>
                            <select id="property-type" name="property-type" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="commercial">Commercial</option>
                                <option value="industrial">Industrial</option>
                                <option value="residential">Residential</option>
                                <option value="vacant-land">Vacant Land</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="situation" className="block text-sm font-medium text-text mb-1">Situation</label>
                            <select id="situation" name="situation" disabled={submitting} className={inputClasses} defaultValue="">
                                <option value="">Select...</option>
                                <option value="buying">Buying Property</option>
                                <option value="selling">Selling Property</option>
                                <option value="developing">Developing Property</option>
                                <option value="agency-letter">Received Agency Letter</option>
                                <option value="vapor-intrusion">Vapor Intrusion Concern</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </>
            )}

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
