import { DatePicker, DatePickerProps, Form, FormProps, Input, InputNumber, Modal } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ButtonCustom } from '@/components/ui/components';
import { useStoreModal } from '@/store';
import { localApi } from '@/axios';
import { IAddSeason } from '../interfaces';
import { getSeasonEndDay } from '@/helpers';
import { useState } from 'react';

dayjs.extend(utc);

const { RangePicker } = DatePicker;

export const ModalAddSeason = () => {
	const [form] = Form.useForm<IAddSeason>();
	const { isModalSeason, setIsSeason } = useStoreModal();

	const handleCancel = () => {
		setIsSeason(false);
		form.resetFields();
	};

	const onChangeDate: DatePickerProps['onChange'] = (date) => {
		if (date) {
			const startAt = dayjs(date).utcOffset(0, true).toISOString();
			const days = form.getFieldValue('matchdays');

			// Obtener la fecha de la última jornada
			const endAt = getSeasonEndDay(days, startAt);

			form.setFieldsValue({ endAt: dayjs(endAt).utcOffset(0, true) });
		}
	};

	const handleAddSeason: FormProps<IAddSeason>['onFinish'] = async (values) => {
		try {
			const startAt: string = dayjs(values.startAt).utcOffset(0, true).toISOString();
			const endAt: string = dayjs(values.endAt).utcOffset(0, true).toISOString();

			const newSeason = {
				...values,
				startAt,
				endAt,
			};

			const { data } = await localApi.post('/admin/setSeason', newSeason);
			console.log(data);
		} catch (error) {
			console.log(error);
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
			>
				<Form.Item<IAddSeason>
					label="Nombre:"
					name="name"
					className="col-span-full md:col-span-6 lg:col-span-4"
					rules={[{ required: true, message: '* Requerido.' }]}
				>
					<Input size="large" />
				</Form.Item>

				<Form.Item<IAddSeason>
					label="Jornadas:"
					name="matchdays"
					className="col-span-full md:col-span-6 lg:col-span-4"
					rules={[{ required: true, message: '* Requerido.' }]}
				>
					<InputNumber type="number" size="large" controls={false} />
				</Form.Item>

				<div className="flex items-center justify-between">
					<Form.Item<IAddSeason>
						name="startAt"
						label="Fecha de inicio:"
						rules={[
							{ type: 'object' as const, required: true, message: '* Requerido.' },
						]}
					>
						<DatePicker showTime format="DD-MM-YYYY HH:mm" onChange={onChangeDate} />
					</Form.Item>

					<Form.Item<IAddSeason>
						name="endAt"
						label="Fecha de finalización:"
						rules={[
							{ type: 'object' as const, required: true, message: '* Requerido.' },
						]}
					>
						<DatePicker showTime format="DD-MM-YYYY HH:mm" disabled />
					</Form.Item>
				</div>

				<Form.Item>
					<ButtonCustom
						type="primary"
						htmlType="submit"
						className="text-base font-medium not-italic"
					>
						Crear temporada
					</ButtonCustom>
				</Form.Item>
			</Form>
		</Modal>
	);
};
