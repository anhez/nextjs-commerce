import Link from 'next/link'
import { AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";
import { RiFacebookFill,RiInstagramLine,RiTwitterFill,RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
    return <footer>
        <div className="pre-wrapper flex justify-between pt-16">
            <div className={"w-full md:w-96 flex flex-col"}>
                <div className={""}>
                    <img src="/weed-maps.svg" />
                </div>
                <div className={"mt-4 mb-4"}>A community connecting cannabis consumers, patients, retailers, doctors, and brands since 2008.</div>
                <div className={"mt-2 mb-2 flex space-x-2"}>
                    <a className={""} href="#"><img src="/ios-app-store.svg"></img></a>
                    <a className={""} href="#"><img src="/google-play-store-badge.svg"></img></a>
                </div>
                <div className={"flex space-x-4"}>
                    <a className={"hover:text-red-500"} href="#" ><RiFacebookFill size={24} /></a>
                    <a className={"hover:text-red-500"} href="#" ><RiInstagramLine size={24} /></a>
                    <a className={"hover:text-red-500"} href="#" ><RiTwitterFill size={24} /></a>
                    <a className={"hover:text-red-500"} href="#" ><RiLinkedinBoxFill size={24} /></a>
                </div>
            </div>
            <div className={"flex-grow flex justify-between items-start ml-6"}>
                <div className={"flex flex-col"}>
                    <h3 className={"p-2 pt-0 pb-0 text-black text-lg font-semibold"}>About</h3>
                    <Link href={"#"}><a className={"p-2"} >Company</a></Link>
                    <Link href={"#"}><a className={"p-2"} >Careers</a></Link>
                    <Link href={"#"}><a className={"p-2"} >Help center</a></Link>
                    <Link href={"#"}><a className={"p-2"} >Download the app</a></Link>
                </div>
                <div className={"flex flex-col"}>
                    <h3 className={"p-2 pt-0 pb-0 text-lg font-semibold text-black"}>Discover</h3>
                    <Link href={"#"}><a className={"p-2"}>Delivery</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Shipping</a></Link>
                    <Link href={"#"}><a className={"p-2"}>FAQs</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Refund and Return</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Delivery</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Shipping</a></Link>
                    <Link href={"#"}><a className={"p-2"}>FAQs</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Refund and Return</a></Link>
                </div>
                <div className={"flex flex-col"}>
                    <h3 className={"p-2 pt-0 pb-0 text-lg font-semibold text-black"}>Legal</h3>
                    <Link href={"#"}><a className={"p-2"}>Term of use</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Privacy and policy</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Cookie policy</a></Link>
                </div>
                <div className={"flex flex-col p-6 bg-gray-700 text-white rounded-xl"}>
                    <img className={"p-2"} src="/wm-business.svg"></img>
                    <Link href={"#"}><a className={"p-2"}>Get started</a></Link>
                    <Link href={"#"}><a className={"p-2"}>Add a business</a></Link>
                    <Link href={"#"}><a className={"p-2"}>For retailers</a></Link>
                    <Link href={"#"}><a className={"p-2"}>For brands</a></Link>
                    <Link href={"#"}><a className={"p-2"}>For advertisers</a></Link>
                    <Link href={"#"}><a className={"p-2"}>For developers</a></Link>
                </div>
            </div>
        </div>
    </footer>
}