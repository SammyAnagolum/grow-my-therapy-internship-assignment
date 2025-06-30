'use client'

import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <section
            id="contact" className="py-14 flex flex-col items-center text-dark w-full">
            <h2 className="font-freight-display-pro-light text-[clamp(0px,3.7vw,48px)] mb-2">
                Contact
            </h2>
            <p className="font-freight-display-pro-light text-[clamp(0px,2.25vw,30px)] text-muted mb-10">
                Take the first step toward your healing!
            </p>
            <div className="flex flex-col md:flex-row w-full items-start justify-center gap-12">
                <ContactDetails />
                <ContactForm />
            </div>

        </section >
    );
};

export default Contact;