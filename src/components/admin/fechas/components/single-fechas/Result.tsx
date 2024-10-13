interface IProps {
	namePlayer1: string;
	namePlayer2: string;
	result: number;
	isFirst: boolean;
}

export const Result = ({ namePlayer1, namePlayer2, result, isFirst }: IProps) => {
	return (
		<div className="flex bg-[#E9F0F4] w-[220px]">
			<div className="flex-1 flex flex-col justify-center items-center text-sm">
				<div className={`bg-[#EAF1F4] w-full text-center font-medium py-2`}>
					{namePlayer1}
				</div>

				<div className={`bg-[#f4f8f9] w-full text-center font-medium py-2`}>
					{namePlayer2}
				</div>
			</div>
			<div
				className={`${
					isFirst ? 'order-first' : 'order-last'
				} font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto`}
			>
				{result}
			</div>
		</div>
	);
};
