import Link from "next/link";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
	return (
		<header>
			<div className={"pre-wrapper bg-gray-100"}>
				<div className={"h-9 flex justify-between items-center"}>
					<div></div>
					<div className={"desktopUserMenu flex space-x-3"}>
						<div className={""}>Help</div>
						<div className={""}>Join Us</div>
						<div className={""}>Sign In</div>
					</div>
				</div>
			</div>
			<div className={"pre-wrapper h-16 flex justify-between items-center"}>
				<div className={""}>
					<img src={"/weed-maps.svg"} />
				</div>
				<div className={"flex flex-grow justify-between pl-2 pr-2"}>
					<div>
						<div className={"invisible"}>
							<AiOutlineHeart size={24} />
						</div>
					</div>
					<ul className={"flex justify-center space-x-4"}>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About Us</a>
							</Link>
						</li>
						<li>
							<Link href="/contact-us">
								<a>Contact Us</a>
							</Link>
						</li>
					</ul>
					<div className={""}>
						<div>
							<AiOutlineSearch size={24} />
						</div>
					</div>
				</div>
				<div className={"flex space-x-2"}>
					<div className={""}>
						<AiOutlineHeart size={24} />
					</div>
					<div className={""}>
						<AiOutlineShoppingCart size={24} />
					</div>
				</div>
			</div>
		</header>
	);
}
