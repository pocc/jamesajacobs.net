import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import ContactForm from '../components/ContactForm'
import { contact } from '../data/siteConfig'

const trustBadges = [
    'Ph.D., UC Santa Cruz',
    'P.G., California',
    'C.H.G.',
    '4x Fulbright',
    'FGS',
    '23 Expert Witness Cases',
]

export default function Contact() {
    return (
        <div>
            <HeroPage
                title="Contact"
                subtitle="Let's discuss your project. Available for consulting, expert witness testimony, site assessment, and research collaboration."
            />

            {/* Trust Bar */}
            <section className="bg-white py-6 md:py-8 border-b border-surface-dark/30">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {trustBadges.map((badge) => (
                            <span
                                key={badge}
                                className="text-xs font-mono font-medium text-text-secondary"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                            {/* Contact Info */}
                            <div>
                                <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-5">
                                    <div>
                                        <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-1">
                                            Name
                                        </h3>
                                        <p className="text-text-secondary">{contact.name}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-1">
                                            Company
                                        </h3>
                                        <p className="text-text-secondary">{contact.company}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-1">
                                            Address
                                        </h3>
                                        <p className="text-text-secondary">{contact.address}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-text-secondary">{contact.phone}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-1">
                                            Email
                                        </h3>
                                        <p>
                                            <a href={`mailto:${contact.email}`} className="text-slate hover:text-accent-dark no-underline transition-colors">
                                                {contact.email}
                                            </a>
                                        </p>
                                        <p className="mt-1">
                                            <a href={`mailto:${contact.emailUCSC}`} className="text-slate hover:text-accent-dark no-underline transition-colors">
                                                {contact.emailUCSC}
                                            </a>
                                            <span className="text-xs text-text-secondary ml-2">(UCSC)</span>
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-1">
                                            Hours
                                        </h3>
                                        <p className="text-text-secondary">{contact.hours}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
