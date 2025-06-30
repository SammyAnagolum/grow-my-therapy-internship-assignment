import FAQAccordion from "../FAQAccordion/FAQAccordion"

const FAQ = () => {
    return (
        <section id="faq" className="py-10 flex flex-col items-center">
            <h2 className="font-freight-display-pro-light text-[clamp(0px,3.7vw,48px)] mb-6 leading-tight text-dark">
                Frequently Asked Questions
            </h2>
            <FAQAccordion />
        </section>
    )
}

export default FAQ;