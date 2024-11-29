import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export default function Hero() {
	return (
		<div className="h-[900px] w-full bg-[url('/Images/Hero.png')]  bg-center flex flex-col justify-between items-center pb-20 bg-no-repeat">
			<div className='space-y-[34px] text-center pt-[150px] '>
				<div
					className={`text-Orange text-[64px] font-bold text-stroke  ${poppins.className}`}>
					Rivers of Waters Foundation...
				</div>
				<div
					className={`text-Blue text-[64px] font-bold text-stroke  ${poppins.className}`}>
					We rise by lifting others
				</div>
			</div>
			<button className='bg-white outline-4 outline outline-Orange text-[48px] px-20 py-3 rounded-2xl'>
				Contact Us
			</button>
		</div>
	);
}
