import { DatePicker, Form, FormProps, Input, InputNumber, Modal } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { IoAddCircleSharp } from 'react-icons/io5';

import { localApi } from '@/axios';
import { useStoreLoading, useStoreMessage, useStoreModal } from '@/store';
import { getSeasonEndDay } from '@/helpers';
import { ButtonCustom } from '@/components/ui/components';
import { IAddSeason, IResponseSetSesion } from '../../interfaces';
dayjs.extend(utc);

export const ModalAddSeason = () => {
	const { setLoading } = useStoreLoading();
	const { message } = useStoreMessage();
	const { isModalSeason, setIsSeason } = useStoreModal();
	const [form] = Form.useForm<IAddSeason>();

	const handleCancel = () => {
		setIsSeason(false);
		form.resetFields();
	};

	const onChangeDate = () => {
		const startAt = form.getFieldValue('startAt');
		const matchdayjs = form.getFieldValue('matchdays');

		if (startAt && matchdayjs) {
			const startDate = dayjs(startAt).utcOffset(0, true).toISOString();

			// Obtener la fecha de la última jornada
			const endAt = getSeasonEndDay(matchdayjs, startDate);

			form.setFieldsValue({ endAt: dayjs(endAt).utcOffset(0, true) });
		}
	};

	const handleAddSeason: FormProps<IAddSeason>['onFinish'] = async (values) => {
		try {
			setLoading(true);

			const startAt: string = dayjs(values.startAt).utcOffset(0, true).toISOString();
			const endAt: string = dayjs(values.endAt).utcOffset(-5, true).toISOString();

			const newSeason = {
				...values,
				startAt,
				endAt,
			};

			const { data } = await localApi.post<IResponseSetSesion>('/admin/setSeason', newSeason);

			message?.success(data.message);
		} catch (error: any) {
			console.log(error);
			console.log(error.response.data.message);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Modal title="Crear temporada" open={isModalSeason} onCancel={handleCancel}>
			<Form
				form={form}
				name="form-add-season"
				initialValues={{
					matchdays: 42,
				}}
				layout="vertical"
				onFinish={handleAddSeason}
				autoComplete="off"
				className="grid gap-2 grid-cols-1 md:grid-cols-12 md:gap-5"
			>
				<Form.Item<IAddSeason>
					label="Nombre:"
					name="name"
					className="col-span-full"
					rules={[{ required: true, message: '* Requerido.' }]}
				>
					<Input size="large" />
				</Form.Item>

				<Form.Item<IAddSeason>
					name="startAt"
					label="Fecha de inicio:"
					className="col-span-full md:col-span-6"
					rules={[{ type: 'object' as const, required: true, message: '* Requerido.' }]}
				>
					<DatePicker
						showTime
						format="DD-MM-YYYY HH:mm"
						className="w-full"
						onChange={onChangeDate}
					/>
				</Form.Item>

				<Form.Item<IAddSeason>
					name="endAt"
					label="Fecha de finalización:"
					className="col-span-full md:col-span-6"
					rules={[{ type: 'object' as const, required: true, message: '* Requerido.' }]}
				>
					<DatePicker showTime format="DD-MM-YYYY HH:mm" className="w-full" disabled />
				</Form.Item>

				<Form.Item<IAddSeason>
					label="Jornadas:"
					name="matchdays"
					className="col-span-full"
					rules={[{ required: true, message: '* Requerido.' }]}
				>
					<InputNumber
						type="number"
						size="large"
						controls={false}
						className="w-1/4"
						onChange={onChangeDate}
					/>
				</Form.Item>

				<Form.Item className="col-span-full flex justify-center">
					<ButtonCustom
						type="primary"
						htmlType="submit"
						color="#146586"
						className="text-base font-medium not-italic"
						icon={<IoAddCircleSharp />}
					>
						Crear temporada
					</ButtonCustom>
				</Form.Item>
			</Form>
		</Modal>
	);
};
