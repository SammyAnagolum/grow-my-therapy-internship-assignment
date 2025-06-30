const Rates = () => {
    return (
        <section id="rates" className="w-full h-full flex flex-col gap-6 items-center text-center bg-primary py-10">
            <h3 className="font-freight-display-pro-light text-[clamp(0px,2.5vw,37px)]">
                Rates and Insurance
            </h3>
            <div className="flex flex-col gap-4 font-freight-sans-pro-light">
                <h4 className="text-2xl">
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