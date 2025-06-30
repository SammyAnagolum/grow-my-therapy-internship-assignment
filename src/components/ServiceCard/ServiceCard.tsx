import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ServiceCardProps = {
    imgSrc: string | StaticImport;
    imgAlt: string;
    headingText: string;
    paraText: string;
}

const ServiceCard = ({ imgSrc, imgAlt, headingText, paraText }: ServiceCardProps) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative h-[25vw] w-[25vw]">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full rounded-full object-cover object-center"
                />
            </div>
            <h2 className="font-freight-display-pro-light text-dark text-2xl mb-2">
                {headingText}
            </h2>
            <p className="font-freight-sans-pro leading-loose">
                {paraText}
            </p>
        </div>
    )
}

export default ServiceCard;