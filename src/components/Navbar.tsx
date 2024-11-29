import Link from "next/link";
import Logo from "../../public/SVGs/Logo";
import Image from "next/image";
import RWF from "../../public/Images/RWF.png";

const Navbar = () => {
	return (
		<div className='container '>
			<div className='flex justify-between items-center'>
				<div className=' h-[78px] w-[215px] flex items-center'>
					<Image
						alt='Logo'
						height={78}
						width={205}
						src={RWF}
						className='w-[102.5px] h-[39px]'
					/>
				</div>
				<div className='text-Orange text-[20px]'>
					<ul className='flex'>
						<li className='py-4 px-[26px]'>
							<Link href={"#contact"}>Contact Us</Link>
						</li>
						<li className='py-4 px-[26px]'>
							<Link href={"#About"}>About</Link>
						</li>
						<li className='py-4 px-[31px]'>
							<Link href={"#services"}>Services</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
