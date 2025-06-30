import VideoContainer from "../VideoContainer/VideoContainer";

const Hero = () => {
    return (
        <section id="hero" className="relative w-full flex pb-14">
            <div className="w-full px-[4%]">
                <VideoContainer />
            </div>

            {/*overlay content */}
            <div className="flex flex-col absolute w-full pt-40 pb-36 items-center justify-center z-10 text-white font-freight-display-pro">
                <h1 className="flex flex-col items-center text-center gap-10 text-6xl">
                    <strong>
                        Your Strength, Our Support.
                    </strong>
                    <strong>
                        Counselling That Cares
                    </strong>
                </h1>
                <h4 className="text-2xl text-center max-w-3xl mt-10 mb-2">
                    Your safe space where we heal, overcome and thrive together.
                </h4>
                <button
                    className="bg-primary hover:bg-[#8EAAAA] shadow-md tracking-widest rounded-full mt-12 hover:bg-opacity-85 transition-colors duration-100 font-freight-sans-pro"
                    style={{
                        /* full ellipse—no straight edges */
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