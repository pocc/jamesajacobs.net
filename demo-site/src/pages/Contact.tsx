import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <div>
            <Hero title="Contact Us" />

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <div className="bg-surface rounded-lg border border-gray-200 p-6 md:p-8">
                                <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                                    Get in Touch
                                </h2>

                                <div className="space-y-5">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg">
                                            James A. Jacobs, P.G., C.H.G.
                                        </h3>
                                        <p className="text-accent-dark font-medium tracking-wide text-sm uppercase mt-1">
                                            CLEARWATER GROUP
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>229 Tewksbury Avenue<br />Point Richmond, California 94801</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <a href="tel:+15105901098" className="hover:text-primary transition-colors">
                                                (510) 590-1098
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <div>
                                                <a href="mailto:jjacobs@clearwatergroup.com" className="hover:text-primary transition-colors">
                                                    jjacobs@clearwatergroup.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            </svg>
                                            <div>
                                                <span className="text-xs text-gray-500 block">UC Santa Cruz</span>
                                                <a href="mailto:jaajacob@ucsc.edu" className="hover:text-primary transition-colors">
                                                    jaajacob@ucsc.edu
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <p>Mon-Fri: 09:00 AM - 05:00 PM</p>
                                                <p>Sat-Sun: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                                Send a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
