import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export default function Hero() {
	return (
		<div className=" container h-[300px] lg:h-[900px] bg-[url('/Images/Hero.png')] bg-cover bg-center flex flex-col justify-between items-center pb-3 bg-no-repeat">
			<div className='lg:space-y-[34px] space-y-[13px]  text-center lg:pt-[150px] pt-8 text-[20px]'>
				<div
					className={`text-Orange  lg:text-[64px] font-bold  ${poppins.className}`}>
					Rivers of Waters Foundation...
				</div>
				<div
					className={`text-Blue lg:text-[64px] font-bold ${poppins.className}`}>
					We rise by lifting others
				</div>
			</div>
			<button className='bg-white outline-4  border-4 border-Orange lg:text-[48px] px-8  py-2 rounded-2xl'>
				<Link href={"#Contact"}>Contact Us</Link>
			</button>
		</div>
	);
}
