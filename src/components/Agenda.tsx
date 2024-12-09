import agendas from "../../public/AgendasInfo";

export default function Agenda() {
	return (
		<div className='container flex justify-center items-center mt-[50px] lg:mt-[250px]'>
			<div className='grid lg:grid-cols-[repeat(2,_600px)] grid-cols-2 lg:gap-[60px] gap-[25px] justify-between w-full'>
				{agendas.map((agenda, index) => (
					<div
						style={{ backgroundColor: agenda.color }}
						className={` w-fit lg:w-[600px]  h-[239px] lg:h-[800px] rounded-3xl text-center text-[36px] text-white pt-4 lg:p-5`}
						key={index}>
						<h2 className='text-Blue text-[12px] lg:text-[40px]'>
							{agenda.name}
						</h2>
						<p className='text-Orange text-[13px] lg:text-[40px] lg:mt-4'>
							Aim
						</p>
						<p className='lg:mt-1 lg:text-[35px] text-[10px] text-wrap'>
							{agenda.aim}
						</p>
						<p className='text-Orange text-[13px] lg:text-[40px] lg:mt-4'>
							Objectives
						</p>
						<div className='lg:mt-1 text-[10px] lg:text-[35px]'>
							<p className=''>{agenda.objective1}</p>
							<p className=''>{agenda.objective2}</p>
							<p className=''>{agenda.objective3}</p>
							<p className=''>{agenda.objective4}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
