const ContactDetails = () => {
    return (
        <ul className="flex flex-col items-center p-6 gap-3 max-w-sm text-center w-full text-dark font-freight-display-pro">
            <li className="mt-2">
                <p className="font-bold text-3xl">Dr. Serena Blake, PsyD</p>
                <p className="text-muted text-lg">Clinical Psychologist</p>
            </li>
            <li>
                <span className="block font-semibold text-2xl">Location:</span>
                <span className="font-freight-sans-pro">1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
            </li>
            <li>
                <span className="block font-semibold text-2xl">Phone:</span>
                <a href="tel:+13235550192" className="text-primary hover:underline font-freight-sans-pro">(323) 555-0192</a>
            </li>
            <li>
                <span className="block font-semibold text-2xl">Email:</span>
                <a href="mailto:serena@blakepsychology.com" className="text-primary hover:underline font-freight-sans-pro">serena@blakepsychology.com</a>
            </li>
            <li>
                <span className="block font-semibold text-2xl">Office Hours:</span>
                <span className="font-freight-sans-pro">
                    In-person: Tue &amp; Thu, 10 AM–6 PM<br />
                    Virtual (Zoom): Mon, Wed &amp; Fri, 1 PM–5 PM
                </span>
            </li>
            <li>
                <span className="block font-semibold text-2xl">Experience:</span>
                <span className="font-freight-sans-pro">8 years of practice, 500+ sessions</span>
            </li>
        </ul>
    );
};

export default ContactDetails;