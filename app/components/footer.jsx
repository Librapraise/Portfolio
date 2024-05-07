
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-red-100 w-full border-t-2 border-solid border-dark font-medium text-lg px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
            <div className="py-8 flex flex-col md:flex-row items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Built with <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
                    <Link href="">Libra.dev</Link>
                </div>
                <Link href="/contact">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;