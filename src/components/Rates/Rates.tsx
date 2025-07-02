const Rates = () => {
    return (
        <section id="rates" className="
            w-full h-full flex flex-col items-center text-center bg-primary
            gap-4
            pb-16 md:pb-18 lg:pb-20 xl:pb-24 pt-5 sm:pt-6 lg:pt-7 xl:pt-8 2xl:pt-10 
            px-[4vw]"
        >
            <h3 className="font-freight-display-pro lg:font-freight-display-pro-light text-[clamp(1.5rem,3vw,2.3rem)] mb-4">
                Rates and Insurance
            </h3>
            <div className="flex flex-col gap-4 font-freight-sans-pro-light">
                <h4 className="text-xl sm:text-2xl">
                    Session Fees
                </h4>
                <p className="text-xl">$200 / individual session</p>
                <p className="text-xl">$240 / couples session</p>
            </div>
            <p className="font-freight-sans-pro-light text-xl">A superbill is provided to assist you in claiming insurance.</p>
        </section>
    )
}
export default Rates;