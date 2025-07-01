import VideoContainer from "../VideoContainer/VideoContainer";

const Hero = () => {
    return (
        <section id="hero" className="relative w-full flex pb-8 sm:pb-[clamp(1rem,4vw,3rem)] md:pb-14 min-h-[60vh]">
            <div className="w-full px-4 sm:px-6 md:px-[4vw]">
                <VideoContainer />
            </div>

            {/*overlay content */}
            <div className="
                absolute inset-0 -top-16 flex flex-col items-center justify-center
                pt-[clamp(1rem,8vw,6rem)]
                sm:pt-[clamp(2rem,9vw,11rem)]
                md:pt-[clamp(2rem,9vw,11rem)]
                pb-[clamp(1rem,5vw,6rem)]
                sm:pb-[clamp(1.5rem,7.5vw,9rem)]
                md:pb-[clamp(1.5rem,7.5vw,9rem)]
                z-10 text-white font-freight-display-pro text-center"
            >
                <h1 className="
                    flex flex-col items-center
                    gap-[clamp(0.75rem,2vw,1.5rem)]
                    sm:gap-[clamp(1rem,2.5vw,2.5rem)]
                    text-[clamp(1rem,2.5vw,2.5rem)]
                    sm:text-[clamp(1.5rem,3.125vw,3.75rem)]"
                >
                    <strong>
                        Your Strength, Our Support.
                    </strong>
                    <strong>
                        Counselling That Cares
                    </strong>
                </h1>
                <h2 className="
                    max-w-3xl
                    mt-[clamp(0.25rem,1vw,1rem)]
                    sm:mt-[clamp(0.5rem,2.5vw,3rem)]
                    mb-[clamp(0.25rem,0.42vw,0.5rem)]
                    text-[clamp(0.75rem,1vw,1rem)]
                    sm:text-[clamp(1rem,1.5vw,1.8rem)]"
                >
                    Your safe space where we heal, overcome and thrive together.
                </h2>
                <button
                    className="mt-[clamp(0.75rem,2vw,1.5rem)] sm:mt-[clamp(1rem,3.2vw,3.2rem)] bg-primary hover:bg-[#8EAAAA] shadow-md tracking-widest rounded-full hover:bg-opacity-85 transition-colors duration-100 font-freight-sans-pro"
                    style={{
                        clipPath: 'ellipse(50% 50% at 50% 50%)'
                    }}
                >
                    <p className="p-[2.7vw]">
                        SCHEDULE A CONSULATION
                    </p>
                </button>
            </div>
        </section>
    )
}

export default Hero;