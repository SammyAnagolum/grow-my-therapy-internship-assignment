import Link from "next/link";

const Footer = () => {
    return (
        <footer id="footer" className="pt-14 pb-6 flex flex-col items-center justify-center text-center gap-10 font-freight-sans-pro-light">
            <h3 className="font-freight-display-pro-light text-4xl">Serena Blake, Psy.D., Clinical Psychology</h3>
            <div className="flex flex-col gap-6">
                <div className="text-lg flex flex-col gap-2">
                    <Link href={"mailto:serena@blakepsychology.com"} className="text-black underline underline-offset-[5px] decoration-1">
                        serena@blakepsychology.com
                    </Link>
                    <p>
                        <span>Phone: </span>
                        <Link href={"tel:+13235550192"} className="text-black underline underline-offset-[5px] decoration-1">
                            (323) 555-0192
                        </Link>
                        <span> Fax: (323) 555-0192</span>
                    </p>
                </div>
                <p className="text-lg">
                    1287 Maplewood Drive, Los Angeles, CA 90026
                </p>
                <ul className="flex flex-row items-center justify-center gap-2 text-md text-center">
                    <li>
                        <Link href={"/"} className="text-black underline underline-offset-[5px] decoration-1">Home</Link>
                    </li>
                    <li>
                        <Link href={"/privacy-policy"} className="text-black underline underline-offset-[5px] decoration-1">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href={"/good-faith-estimate"} className="text-black underline underline-offset-[5px] decoration-1">Good Faith Estimate</Link>
                    </li>
                </ul>
            </div>
            <Link href={"/client-portal"} className="text-black underline underline-offset-[5px] decoration-1 text-lg mt-10 mb-6">
                Client Portal
            </Link>
            <p className="text-xl">© 2025 Serena Blake Psy.D. Clinical Psychology, PLLC. All rights reserved.</p>
        </footer>
    )
}

export default Footer;