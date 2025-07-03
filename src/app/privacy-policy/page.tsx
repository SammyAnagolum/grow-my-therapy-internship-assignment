// app/privacy-policy/page.tsx
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
    title: 'Privacy Policy – Your Site',
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />

            <main className="container mx-auto px-4 exs:px-6 xs:px-8 sm:px-16 py-16 prose prose-lg font-freight-sans-pro flex flex-col max-w-5xl">
                <h1 className='font-freight-display-pro text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl'>Privacy Policy</h1>

                <section className="mt-12 flex flex-col gap-2">
                    <h2 className='text-lg sm:text-xl md:text-2xl xl:text-3xl md:mb-1 xl:mb-2'>Contact Us</h2>
                    <p className='max-sm:text-sm'>
                        If you have any questions or concerns about this privacy policy,
                        please contact me at{' '}
                        <a href="mailto:serena@blakepsychology.com" className="underline">
                            serena@blakepsychology.com
                        </a>
                        .
                    </p>
                </section>

                <section className="mt-12 flex flex-col gap-2">
                    <h2 className='text-lg sm:text-xl md:text-2xl xl:text-3xl md:mb-1 xl:mb-2'>For Website Visitors</h2>
                    <p className='max-sm:text-sm'>
                        This website is hosted by Serena Blake Psy.D. Clinical Psychology, PLLC. We collect personal
                        data when you visit this website, including:
                    </p>
                    <ul className='max-sm:text-sm'>
                        <li>— Information about your browser, network, and device</li>
                        <li>— Web pages you visited prior to coming to this website</li>
                        <li>— Your IP address</li>
                    </ul>
                    <p className='max-sm:text-sm'>
                        We need the data to run this website, and to protect and
                        improve its platform and services. We analyze the data in
                        a de-personalized form.
                    </p>
                </section>

                <section className="mt-12 flex flex-col gap-2">
                    <h3 className='text-lg sm:text-xl md:text-2xl xl:text-3xl md:mb-1 xl:mb-2'>Cookies</h3>
                    <p className='max-sm:text-sm'>
                        This website uses cookies and similar technologies, which are small
                        files or pieces of text that download to a device when a visitor
                        accesses a website or app.
                    </p>
                    <ul className='max-sm:text-sm flex flex-col gap-2'>
                        <li>
                            These functional and required cookies are always used, which allow
                            our hosting platform to securely serve this website
                            to you.
                        </li>
                        <li>
                            These analytics and performance cookies are used on this site, as
                            described above, only when you acknowledge our cookie banner. We
                            use analytics cookies to view site traffic, activity, and other
                            data.
                        </li>
                    </ul>
                </section>

                <section className="mt-12 flex flex-col gap-2">
                    <h3 className='text-lg sm:text-xl md:text-2xl xl:text-3xl md:mb-1 xl:mb-2'>Fonts</h3>
                    <p className='max-sm:text-sm'>
                        This website uses font files from Google Fonts and Adobe Fonts. To
                        properly display this site to you, servers where the font files are
                        stored may receive personal information about you, including:
                    </p>
                    <ul className='max-sm:text-sm'>
                        <li>— Information about your browser, network, or device</li>
                        <li>— Your IP address</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    )
}
