import Link from "next/link";
import Image from "next/image";
import RWF from "../../public/Images/RWF.png";

const Navbar = () => {
	return (
		<>
			<div className=' container bg-white fixed  top-0 left-0 right-0'>
				<div className='flex justify-between items-center'>
					<div className=' lg:h-[78px] lg:w-[205px] h-4 w-[41px] flex items-center'>
						<Image
							alt='Logo'
							height={78}
							width={205}
							src={RWF}
							className='lg:w-[102.5px] lg:h-[39px] w-full h-[full] '
						/>
					</div>
					<div className='text-Orange lg:text-[20px] text-[10px] '>
						<ul className='flex'>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"/"}>Home</Link>
							</li>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"#About"}>About</Link>
							</li>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"#Services"}>Agenda</Link>
							</li>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"#Contact"}>Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='container bg-white'>
				<div className='flex justify-between items-center'>
					<div className=' lg:h-[78px] bg-white lg:w-[205px] h-4 w-[41px] flex items-center'></div>
					<div className='text-white lg:text-[20px] text-[10px] '>
						<ul className='flex'>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"#contact"}>Contact Us</Link>
							</li>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"#About"}>About</Link>
							</li>
							<li className='py-4 lg:px-[26px] px-[10px]'>
								<Link href={"#services"}>Services</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
