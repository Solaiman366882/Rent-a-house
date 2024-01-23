import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="py-12 bg-[#252525]">
            <div className=" max-w-screen-xl px-5 mx-auto">
                <div className="footer-section flex justify-between">
                    <div className="">
                        <h2 className="text-3xl mb-5 text-white roboto-bold">Contact Us</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="text-white text-base font-medium flex gap-3 items-center"><FaPhoneAlt /><a href="">(+40) 74 0920 2288</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><FaEnvelope /> <a href="mailto:office@example.com">office@example.com</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><FaLocationDot /><a href="">8121 Sierra Lane Tampa, Florida 33604</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl mb-5 text-white roboto-bold">Useful Links</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">About Us</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /> <a href="">Blog</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Pricing</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl mb-5 text-white roboto-bold">Rent with Us</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Rent a House</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /> <a href="">Book Now</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Book your Rooms</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Buy your Place</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl mb-5 text-white roboto-bold">Recent posts</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">About Us</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /> <a href="">Blog</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Pricing</a></li>
                            <li className="text-white text-base font-medium flex gap-3 items-center"><IoIosArrowForward /><a href="">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-white bg-[#303030] py-6 px-3 mt-8 rounded-lg">
                    <p className="text-center">All Copy-right Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;