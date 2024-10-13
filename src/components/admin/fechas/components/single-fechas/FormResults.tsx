import { Form, FormProps, Input } from 'antd';
import { useRouter } from 'next/router';

import { localApi } from '@/axios';
import { useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { ButtonCustom } from '@/components/ui/components';
import { IResultMatch } from '@/components/admin/interfaces';
import { IResponseGroup } from '@/components/announcement/interfaces';

interface IProps {
	idParty: string;
}

const rulesInput = [
	{ required: true, message: '* Requerido' },
	{
		len: 1,
		message: 'Debe ser un solo número',
	},
	{
		pattern: /^[0-4]$/,
		message: 'Debe ser un número entre 0 y 4',
	},
];

export const FormResults = ({ idParty }: IProps) => {
	// Hooks
	const router = useRouter();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { setGroups } = useStoreSummoned();

	// State
	const idMatch = router.query.id?.toString().split('+')[1] ?? '';
	const idSeason = router.query.id?.toString().split('+')[2] ?? '';

	const onFinish: FormProps<IResultMatch>['onFinish'] = async (values) => {
		try {
			setLoading(true);
			const resultA = Number(values.resultA ?? '0');
			const resultB = Number(values.resultB ?? '0');

			if (resultA + resultB !== 4) {
				return message?.error('Resultados incorrectos');
			}

			const dataMatchUpdate = {
				...values,
				resultA,
				resultB,
				idMatch,
				idSeason,
			};
			// TODO: CALCULAR LOS VALORES DE LA TABLA DE EXCEL LOS PARTIDOS GANADOS Y EFECTIVIDAD, AGREGAR ESOS CAMPOS EN LA TABLA Y ACTUALIZARLA

			const { data: respInsertResults } = await localApi.post<IResponseGroup>(
				'/admin/setResultMatch',
				dataMatchUpdate,
			);

			setGroups(respInsertResults.data);
			message?.success(respInsertResults.message);
		} catch (error) {
			console.log(error);
			message?.error('Ocurrió un error al guardar los resultados.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form
			onFinish={onFinish}
			initialValues={{
				idParty,
			}}
			className="flex flex-col justify-center items-center gap-5"
		>
			<div className="flex justify-center items-center gap-5">
				<Form.Item<IResultMatch> name="resultA" className="!m-0" rules={rulesInput}>
					<Input
						type="number"
						maxLength={1}
						min={0}
						max={4}
						className="w-10 h-10 text-center"
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							const { value } = e.target;
							if (!/^[0-4]$/.test(value)) {
								e.target.value = value.slice(0, 1); // Limitar a un solo carácter entre 0 y 4
							}
						}}
					/>
				</Form.Item>

				<Form.Item<IResultMatch> name="idParty" className="!m-0">
					<div className="font-bold italic text-base">VS</div>
				</Form.Item>

				<Form.Item<IResultMatch> name="resultB" className="!m-0" rules={rulesInput}>
					<Input
						type="number"
						maxLength={1}
						min={0}
						max={4}
						className="w-10 h-10 text-center"
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							const { value } = e.target;
							if (!/^[0-4]$/.test(value)) {
								e.target.value = value.slice(0, 1); // Limitar a un solo carácter entre 0 y 4
							}
						}}
					/>
				</Form.Item>
			</div>

			<div className="flex justify-center items-center">
				<ButtonCustom
					color="#43849E"
					htmlType="submit"
					className="not-italic font-medium text-lg border-[#43849E] text-turquoise"
				>
					Guardar
				</ButtonCustom>
			</div>
		</Form>
	);
};
