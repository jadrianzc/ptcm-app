import { DatePicker, Form, FormProps, Input, InputNumber, Modal } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ButtonCustom } from '@/components/ui/components';
import { useStoreModal } from '@/store';
import { localApi } from '@/axios';
import { IAddSeason } from '../interfaces';

dayjs.extend(utc);

const { RangePicker } = DatePicker;

export const ModalAddSeason = () => {
	const [form] = Form.useForm<IAddSeason>();
	const { isModalSeason, setIsSeason } = useStoreModal();

	const handleCancel = () => {
		setIsSeason(false);
	};

	const handleAddSeason: FormProps<IAddSeason>['onFinish'] = async ({
		name,
		matchdays,
		dateMatches,
	}) => {
		try {
			const startAt: string = dayjs(dateMatches[0]).utcOffset(0, true).toISOString();
			const endAt: string = dayjs(dateMatches[1]).utcOffset(0, true).toISOString();

			const newSeason = {
				name,
				matchdays,
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

				<Form.Item
					name="dateMatches"
					label="Hora de inicio/fin:"
					rules={[{ type: 'array' as const, required: true, message: '* Requerido.' }]}
				>
					<RangePicker showTime format="YYYY-MM-DD HH:mm" />
				</Form.Item>

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
