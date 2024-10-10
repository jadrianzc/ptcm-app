import { FC } from 'react';
import { ViewPartidos } from '@/components/announcement/interfaces';
import { ButtonCustom } from '@/components/ui/components';
import { Form, FormProps, Input, Popover } from 'antd';

interface IGroupItem {
	matches: ViewPartidos[];
}

interface IResultMatch {
	idParty: string;
	resultA: number;
	resultB: number;
}

export const MatchContainer: FC<IGroupItem> = ({ matches }) => {
	const [form] = Form.useForm<IResultMatch>();
	console.log(matches);

	const onFinish: FormProps<IResultMatch>['onFinish'] = async ({ resultA, resultB, idParty }) => {
		console.log({ resultA, resultB, idParty });
		// Todo: actualizar la tabla partidos con estos datos
	};

	const contentForm = (idParty: string) => {
		console.log(idParty);
		return (
			<Form
				onFinish={onFinish}
				initialValues={{
					idParty,
				}}
				className="flex flex-col justify-center items-center gap-5"
			>
				<div className="flex justify-center items-center gap-5">
					<Form.Item<IResultMatch>
						name="resultA"
						className="!m-0"
						rules={[{ required: true, message: '* Requerido' }]}
					>
						<Input type="number" min={0} max={4} className="w-10 h-10 text-center" />
					</Form.Item>

					<Form.Item<IResultMatch>
						name="idParty"
						className="!m-0"
						rules={[{ required: true, message: '* Requerido' }]}
					>
						<div className="font-bold italic text-base">VS</div>
					</Form.Item>

					<Form.Item<IResultMatch> name="resultB" className="!m-0">
						<Input className="w-10 h-10 text-center" />
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

	return (
		<div className="bg-white rounded-md p-[18px] space-y-5">
			{matches.map((match) => (
				<div key={match.id} className="space-y-2">
					<span className="text-base font-medium">{match.name}</span>
					<Popover
						placement="bottom"
						className="cursor-pointer"
						trigger="click"
						content={() => contentForm(match.id)}
					>
						<div className="w-full flex justify-between items-center">
							<div className="flex bg-[#E9F0F4] w-[220px]">
								<div className="flex-1 flex flex-col justify-center items-center text-sm">
									<div
										className={`bg-[#EAF1F4] w-full text-center font-medium py-2`}
									>
										{match.namePlayerA1}
									</div>

									<div
										className={`bg-[#f4f8f9] w-full text-center font-medium py-2`}
									>
										{match.namePlayerA2}
									</div>
								</div>
								<div className="font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto">
									{match.resultA}
								</div>
							</div>

							<div className="font-bold italic text-base">VS</div>

							<div className="flex bg-[#E9F0F4] w-[220px]">
								<div className="font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto">
									{match.resultB}
								</div>
								<div className="flex-1 flex flex-col justify-center items-center text-sm">
									<div
										className={`bg-[#EAF1F4] w-full text-center font-medium py-2`}
									>
										{match.namePlayerB1}
									</div>

									<div
										className={`bg-[#f4f8f9] w-full text-center font-medium py-2`}
									>
										{match.namePlayerB2}
									</div>
								</div>
							</div>
						</div>
					</Popover>
				</div>
			))}
		</div>
	);
};
