import Image from "next/image";
import Logo from "../../public/Images/RWF.png";
import Link from "next/link";

export default function Footer() {
	return (
		<div className='container bg-black text-white pt-[13px] lg:pt-8 text-[6px] lg:text-[20px]'>
			<div className='flex justify-between mb-[11px] lg:mb-[15px]'>
				<div className=''>
					<Image
						src={Logo}
						alt=''
						height={41}
						width={110}
						className='lg:mb-12 mb-[13px] h-[21px] w-[55px] lg:h-[41px] lg:w-[110px]'
					/>
					<p className='lg:mb-[100px] mb-12'>
						Empowering Lives, <br /> Building Communities.
					</p>
					<p className=''>323 Burnett Ave Lake Villa, IL. 60046</p>
					<div className='flex gap-2'>
						<p className=''>.Phone:</p>
						<div className=''>
							+1(224)433-8451 <br /> +1(312)646-9560
						</div>
					</div>
					<p className=''>
						.Email:{" "}
						<span className='text-Orange'>rivowfoundation@gmail.com</span>
					</p>
				</div>
				<div className='flex gap-8'>
					<div className=''>
						<h3 className='lg:text-[30px] text-[10px]'>Quick Links</h3>
						<ul>
							<li>
								<Link href={"#About"}>About Us</Link>
							</li>
							<li>
								<Link href={"#About"}>Agenda</Link>
							</li>
							<li>
								<Link href={"#Advocate"}>Get involved</Link>
							</li>
							<li>
								<Link href={"#Contact"}>Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className=''>
						<h3 className='lg:text-[30px] text-[10px]'>Legal Links</h3>
						<ul>
							<li>Privacy Policy</li>
							<li>Terms of Service</li>
							<li>Cookie Policy</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='w-screen text-center'>
				<p className=''>
					C2024 Rivers of Waters Foundation. All rights reserved.
				</p>
			</div>
		</div>
	);
}
