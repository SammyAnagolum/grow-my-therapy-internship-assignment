import Image from "next/image";
import serena from "@/../public/serenablake-cropped.jpg"
import { useEffect, useRef, useState } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";

const About = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const [textHeight, setTextHeight] = useState<number>(0);

    // After mount (and whenever text changes), record its height
    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.offsetHeight);
        }
    }, []);

    return (
        <section id="about" className="bg-light h-full w-full 
        pt-14 md:pt-24 lg:pt-32 xl:pt-[170px] 2xl:pt-44
        pb-36 xs:pb-[43vw] md:pb-[12vw] lg:pb-[9vw] xl:pb-[5vw]
        px-[6vw] md:px-[4vw]
        font-freight-display-pro">
            <FadeInSection >
                <div className="
                w-full 
                text-muted 
                grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_1fr] 

                gap-y-4 md:gap-y-0
                md:pl-[11.5vw] md:pr-[8.5vw]
                md:gap-x-[8vw] lg:gap-x-28 xl:gap-x-36 
                2xl:max-2k:max-w-[1400px] 2xl:mx-auto
                2k:container 2k:max-w-[1500px]
                "
                >
                    <FadeInSection>
                        <h2 className="font-freight-display-pro-bold 
                text-[25px] sm:text-[28px] md:text-[28px] mdlg:text-[29px] lg:text-[30px] xl:text-[36px]
                mb-4 md:mb-2 xl:mb-6 pr-16">
                            About Dr. Serena Blake
                        </h2>
                    </FadeInSection>
                    <div className="w-full h-auto md:h-fit md:row-span-2 mb-6 md:mb-0 md:py-11 lg:py-8 xl:py-0">
                        <FadeInSection>
                            <Image
                                style={{
                                    // only apply the cap on md+ screens
                                    maxHeight: textHeight,
                                    overflow: "hidden",
                                }}
                                src={serena}
                                alt={"Serena Blake"}
                                className="w-full max-h-80 md:h-fit object-contain"
                            />
                        </FadeInSection>
                    </div>

                    <div ref={textRef} className="flex flex-col gap-4 leading-relaxed md:leading-loose text-lg font-freight-sans-pro-light md:font-freight-sans-pro-light min-h-screen md:min-h-fit items-start ">
                        <FadeInSection>
                            <p className="">
                                In today&apos;s whirlwind of commitments, it&apos;s easy to let self-care slip to the bottom of the list. Therapy can be the steady anchor you need—a confidential space to slow down, reflect, and develop practices that sustain your mental and emotional health. Together, we&apos;ll pinpoint what matters most to you, draw on your inner resources, and tailor a plan that feels authentic and achievable.</p>
                        </FadeInSection>
                        <FadeInSection delay={200}>
                            <p className="">
                                I&apos;m Dr. Serena Blake, PsyD, a licensed clinical psychologist practicing in Los Angeles. Since earning my Doctor of Psychology (Clinical Psychology) from Alliant International University in 2017, I&apos;ve guided more than 500 individuals through eight years of counseling in community clinics, university settings, and both in-person and virtual private practice. Whether you join me at 1287 Maplewood Drive or connect via Zoom, you&apos;ll experience a warm, collaborative environment built on respect and trust.</p>
                        </FadeInSection>
                        <FadeInSection delay={400}>
                            <p className="">
                                My approach blends cognitive-behavioral techniques, mindfulness, trauma-informed care, positive psychology, acceptance and commitment strategies to provide insight, empathy, and practical tools for anxiety, relationships, and healing.</p>
                        </FadeInSection>
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}

export default About;