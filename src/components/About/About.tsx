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
                            In today’s whirlwind of commitments, it’s easy to let self-care slip to the bottom of the list. Therapy can be the steady anchor you need—a confidential space to slow down, reflect, and develop practices that sustain your mental and emotional health. Together, we’ll pinpoint what matters most to you, draw on your inner resources, and tailor a plan that feels authentic and achievable.</p>
                        <p className="leading-loose text-lg font-freight-sans-pro">
                            I’m Dr. Serena Blake, PsyD, a licensed clinical psychologist practicing in Los Angeles. Since earning my Doctor of Psychology (Clinical Psychology) from Alliant International University in 2017, I’ve guided more than 500 individuals through eight years of counseling in community clinics, university settings, and both in-person and virtual private practice. Whether you join me at 1287 Maplewood Drive or connect via Zoom, you’ll experience a warm, collaborative environment built on respect and trust.</p>
                        <p className="leading-loose text-lg font-freight-sans-pro">
                            My approach blends cognitive-behavioral techniques, mindfulness, trauma-informed care, positive psychology, acceptance and commitment strategies to provide insight, empathy, and practical tools for anxiety, relationships, and healing.
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