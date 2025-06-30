import Image from "next/image";
import serena from "@/../public/serenablake-cropped.jpg"

const About = () => {
    return (
        <section id="about" className="bg-light h-full w-full pt-48 pb-40 font-freight-display-pro">
            <div className="flex flex-row items-start pl-[15vw] pr-[12vw] gap-32">
                <div className="flex flex-col gap-8 text-muted h-full">
                    <h2 className="text-4xl font-freight-display-pro-bold">
                        About Dr. Serena Blake
                    </h2>
                    <div className="flex flex-col gap-4">
                        <p className="leading-loose text-lg font-freight-sans-pro">
                            Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person. </p>
                        <p className="leading-loose text-lg font-freight-sans-pro">
                            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings. </p>
                        <p className="leading-loose text-lg font-freight-sans-pro">
                            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
                        </p>
                    </div>
                </div>

                <div className="h-full">
                    <Image
                        src={serena}
                        alt={"Serena Blake"}
                    />
                </div>
            </div>
        </section>
    )
}

export default About;