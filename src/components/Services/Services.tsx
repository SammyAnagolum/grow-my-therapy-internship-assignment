import therapy1 from "@/../public/therapy1.jpg"
import therapy2 from "@/../public/therapy2.jpg"
import therapy3 from "@/../public/therapy3.jpg"
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    return (
        <section id="services" className="py-14 flex flex-col items-center text-center text-dark">
            <p className="font-freight-display-pro-light text-[clamp(0px,3.7vw,45px)] mb-20 mt-0.5">
                Areas of Focus
            </p>
            <ul className="flex flex-row items-start justify-center w-full text-center gap-14 px-[4%]">
                <li className="flex items-center">
                    <ServiceCard
                        imgSrc={therapy1}
                        imgAlt=""
                        headingText="Anxiety & Stress Management"
                        paraText="The persistent pull of worry, tension, and overwhelm can make even small tasks feel insurmountable. In our work together, we’ll explore the root causes of your anxiety—whether it’s performance pressure, life transitions, or chronic stress—and develop evidence-based tools to restore calm. Through a blend of cognitive-behavioral strategies, mindfulness exercises, and paced breathing techniques, you’ll learn to interrupt worry cycles, build resilience to daily pressures, and reclaim a sense of balance and ease in your life."
                    />
                </li>
                <li className="flex items-center">
                    <ServiceCard
                        imgSrc={therapy2}
                        imgAlt=""
                        headingText="Relationship Counseling"
                        paraText="Whether you’re navigating conflict with a partner, strengthening family bonds, or improving communication with friends, relationships shape our wellness in profound ways. Using empathic listening and structured dialogue, we’ll uncover patterns that contribute to misunderstandings and unmet needs. Together, we’ll practice healthy boundaries, assertive communication, and emotional attunement so you and your loved ones can foster deeper trust, mutual respect, and genuine connection."
                    />
                </li>
                <li className="flex items-center">
                    <ServiceCard
                        imgSrc={therapy3}
                        imgAlt=""
                        headingText="Trauma Recovery"
                        paraText="Experiences such as accidents, loss, or prolonged stress can leave lasting emotional and physical footprints. In a safe, paced environment, we’ll gently process difficult memories and sensations, using trauma-informed care and mindfulness to help you feel grounded in the present. Drawing on approaches like stabilization techniques and, when appropriate, cognitive-behavioral interventions, you’ll gradually reclaim safety in your body and mind, integrate your experiences, and move toward post-traumatic growth."
                    />
                </li>
            </ul>
        </section>
    )
}

export default Services;