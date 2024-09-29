import { ButtonCustom } from '@/components/ui/components';
import { useRouter } from 'next/router';

interface IProps {
	isGroup?: boolean;
}

export const CountShow = ({ isGroup }: IProps) => {
	const router = useRouter();

	return (
		<div className="flex flex-col justify-center items-center gap-5">
			{isGroup ? (
				<>
					<span className="text-xl font-semibold text-center md:text-4xl">
						Convocatoria en curso
					</span>

					<ButtonCustom
						color="#146586"
						defaultChecked
						className="text-base not-italic font-light text-blue border-blue"
						onClick={() => router.push('/convocatoria')}
					>
						Ir a la convocatoria
					</ButtonCustom>
				</>
			) : (
				<>
					<span className="text-xl font-semibold text-center md:text-4xl">
						Convocatoria finalizada
					</span>

					<ButtonCustom
						color="#146586"
						defaultChecked
						className="text-base not-italic font-light text-blue border-blue"
						onClick={() => router.push('/grupos')}
					>
						Ver grupos
					</ButtonCustom>
				</>
			)}
		</div>
	);
};
