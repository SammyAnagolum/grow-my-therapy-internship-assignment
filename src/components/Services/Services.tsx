import Image from "next/image";
import therapy1 from "@/../public/therapy1.jpg"
import therapy2 from "@/../public/therapy2.jpg"
import therapy3 from "@/../public/therapy3.jpg"
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    return (
        <section className="py-14 flex flex-col items-center text-center text-dark">
            <p className="font-freight-display-pro-light text-[clamp(0px,3.7vw,45px)] mb-16">
                Areas of Focus
            </p>
            <ul className="flex flex-row items-start justify-center text-center gap-28 px-[4%]">
                <li>
                    <ServiceCard
                        imgSrc={therapy1}
                        imgAlt={""}
                        headingText={"Therapy For Healthcare Providers and Students"}
                        paraText={"The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life."}
                    />
                </li>
                <li>
                    <ServiceCard
                        imgSrc={therapy2}
                        imgAlt=""
                        headingText="Therapy For Healthcare Providers and Students"
                        paraText="Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning."
                    />
                </li>
                <li>
                    <ServiceCard
                        imgSrc={therapy3}
                        imgAlt=""
                        headingText="Therapy For Healthcare Providers and Students"
                        paraText="Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity."
                    />
                </li>
            </ul>
        </section>
    )
}

export default Services;