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
	const [endAt, setEndAt] = useState<string | null>(null);

	const handleCancel = () => {
		setIsSeason(false);
	};

	const onChangeDate: DatePickerProps['onChange'] = (date) => {
		const startAt = dayjs(date).utcOffset(0, true).toISOString();
		const days = form.getFieldValue('matchdays');
		console.log({ startAt, days });

		const endAt = getSeasonEndDay(days, startAt);
		console.log(endAt);
		setEndAt(endAt);
		// while (newJordanas.length < days) {

		// }
	};

	const handleAddSeason: FormProps<IAddSeason>['onFinish'] = async ({
		name,
		matchdays,
		dateMatches,
	}) => {
		try {
			const startAt: string = dayjs(dateMatches).utcOffset(0, true).toISOString();
			console.log(startAt);
			// const endAt: string = dayjs(dateMatches[1]).utcOffset(0, true).toISOString();

			const newSeason = {
				name,
				matchdays,
				startAt,
				endAt,
			};

			console.log(newSeason);

			// const { data } = await localApi.post('/admin/setSeason', newSeason);
			// console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal title='Crear temporada' open={isModalSeason} onCancel={handleCancel}>
			<Form
				form={form}
				name='form-add-season'
				initialValues={{
					matchdays: 42,
				}}
				layout='vertical'
				onFinish={handleAddSeason}
				autoComplete='off'>
				<Form.Item<IAddSeason>
					label='Nombre:'
					name='name'
					className='col-span-full md:col-span-6 lg:col-span-4'
					rules={[{ required: true, message: '* Requerido.' }]}>
					<Input size='large' />
				</Form.Item>

				<Form.Item<IAddSeason>
					label='Jornadas:'
					name='matchdays'
					className='col-span-full md:col-span-6 lg:col-span-4'
					rules={[{ required: true, message: '* Requerido.' }]}>
					<InputNumber type='number' size='large' controls={false} />
				</Form.Item>

				<Form.Item
					name='dateMatches'
					label='Hora de inicio:'
					rules={[{ type: 'object' as const, required: true, message: '* Requerido.' }]}>
					<DatePicker showTime format='YYYY-MM-DD HH:mm' onChange={onChangeDate} />
					{/* <RangePicker showTime format="YYYY-MM-DD HH:mm" /> */}
				</Form.Item>

				<Form.Item
					// name='dateMatches'
					label='Hora de fin:'
					rules={[{ type: 'object' as const, required: true, message: '* Requerido.' }]}>
					<DatePicker
						showTime
						format='YYYY-MM-DD HH:mm'
						value={endAt ? dayjs(endAt).utcOffset(0, false) : ''}
						disabled
					/>
					{/* <RangePicker showTime format="YYYY-MM-DD HH:mm" /> */}
				</Form.Item>

				<Form.Item>
					<ButtonCustom
						type='primary'
						htmlType='submit'
						className='text-base font-medium not-italic'>
						Crear temporada
					</ButtonCustom>
				</Form.Item>
			</Form>
		</Modal>
	);
};
