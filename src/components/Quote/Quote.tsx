import Image from "next/image";
import water from "@/../public/water-beside-beach.jpg"

type QuoteProps = {
    text: string;
    author: string;
}

const Quote = ({ text, author }: QuoteProps) => {
    return (
        <section id="quote" className="relative h-full w-full">
            <div className="relative w-full h-[66vh]">
                <Image
                    src={water}
                    alt="..."
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",  // center the focal point
                    }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-bg opacity-30" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pb-8">
                <p className="text-black text-4xl font-freight-display-pro-light mb-8 text-center max-w-5xl leading-snug">
                    “{text}”
                </p>
                <p className="text-dark text-xl font-freight-sans-pro-light">—{author}</p>
            </div>
        </section>
    )
}

export default Quote;