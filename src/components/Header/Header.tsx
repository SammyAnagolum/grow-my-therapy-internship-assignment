import Image from "next/image"
import Link from "next/link"
import logo from "@/../public/logo-transparent-cropped.png";

const Header = () => {
    return (
        <header id="header" className="flex w-full items-center justify-between py-[3vw] px-[4%]">
            <div className="flex items-center">
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={274.19}
                        height={70}
                        className=""
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header;