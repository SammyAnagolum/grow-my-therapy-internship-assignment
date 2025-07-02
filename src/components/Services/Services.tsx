import therapy1 from "@/../public/therapy1.jpg"
import therapy2 from "@/../public/therapy2.jpg"
import therapy3 from "@/../public/therapy3.jpg"
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    return (
        <section id="services" className="
            py-6 lg:py-7 xl:py-10 2xl:py-12 flex flex-col items-center text-center text-dark w-full px-4 xsm:px-[4vw] "
        >
            <p className="font-freight-display-pro-light text-[clamp(1.875rem,3.7vw,3rem)] mdlg:text-[clamp(1.875rem,4vw,2.8rem)] mb-[76px] xs:mb-20 xsm:mb-[72px] md:mb-[76px] mt-0.5">
                Areas of Focus
            </p>
            <ul
                className="flex flex-col gap-16 xs:gap-[74px]
                xsm:grid xsm:grid-cols-2 xsm:grid-rows-2 xsm:gap-14 xsm:-mb-8
                md:flex md:flex-row md:flex-wrap md:gap-16 md:mb-0 md:justify-between
                items-start justify-center w-full text-center "
            >
                <li className="flex items-center">
                    <ServiceCard
                        imgSrc={therapy1}
                        imgAlt=""
                        headingText="Anxiety & Stress Management"
                        paraText="The persistent pull of worry, tension, and overwhelm can make even small tasks feel insurmountable. In our work together, we&apos;ll explore the root causes of your anxiety—whether it&apos;s performance pressure, life transitions, or chronic stress—and develop evidence-based tools to restore calm. Through a blend of cognitive-behavioral strategies, mindfulness exercises, and paced breathing techniques, you&apos;ll learn to interrupt worry cycles, build resilience to daily pressures, and reclaim a sense of balance and ease in your life."
                    />
                </li>
                <li className="flex items-center">
                    <ServiceCard
                        imgSrc={therapy2}
                        imgAlt=""
                        headingText="Relationship Counseling"
                        paraText="Whether you&apos;re navigating conflict with a partner, strengthening family bonds, or improving communication with friends, relationships shape our wellness in profound ways. Using empathic listening and structured dialogue, we&apos;ll uncover patterns that contribute to misunderstandings and unmet needs. Together, we&apos;ll practice healthy boundaries, assertive communication, and emotional attunement so you and your loved ones can foster deeper trust, mutual respect, and genuine connection."
                    />
                </li>
                <li className="flex items-center">
                    <ServiceCard
                        imgSrc={therapy3}
                        imgAlt=""
                        headingText="Trauma Recovery"
                        paraText="Experiences such as accidents, loss, or prolonged stress can leave lasting emotional and physical footprints. In a safe, paced environment, we&apos;ll gently process difficult memories and sensations, using trauma-informed care and mindfulness to help you feel grounded in the present. Drawing on approaches like stabilization techniques and, when appropriate, cognitive-behavioral interventions, you&apos;ll gradually reclaim safety in your body and mind, integrate your experiences, and move toward post-traumatic growth."
                    />
                </li>
            </ul>
        </section>
    )
}

export default Services;