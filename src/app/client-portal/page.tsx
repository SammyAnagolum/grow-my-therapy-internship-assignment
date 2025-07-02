// app/client-portal/page.tsx
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
    title: 'Client Portal – Your Site',
}

export default function ClientPortalPage() {
    return (
        <>
            <Header />

            <main className="container mx-auto px-4 py-16 prose prose-lg font-freight-sans-pro text-center">
                <h1 className='text-xl sm:text-2xl md:text-3xl font-freight-display-pro mb-10'>Client Portal</h1>
                <p>Unavailable at the moment.</p>
            </main>

            <Footer />
        </>
    )
}
