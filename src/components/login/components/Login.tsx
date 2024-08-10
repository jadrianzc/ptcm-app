import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { IconWhite } from '@/icons';
import { ILogin } from '../interfaces';
import { ButtonCustom } from '@/components/ui/components';
import { Form, FormProps, Input } from 'antd';

export const Login = () => {
	const router = useRouter();

	const onFinish: FormProps<ILogin>['onFinish'] = (values) => {
		console.log('Success:', values);

		// try {
		// 	const result = await signIn('credentials', {
		// 		...credentials,
		// 		role: 'admin',
		// 		redirect: false, // Deshabilitar redirección automática para manejar errores
		// 	});

		// 	if (!result?.ok) throw new Error(result?.error as string);

		// 	router.replace('/admin/usuarios');

		// 	reset();
		// } catch (error: any) {
		// 	console.error(error.message);
		// 	setErrorLogin(error.message);

		// 	setTimeout(() => {
		// 		setErrorLogin(null);
		// 	}, 4000);
		// }
	};

	const onFinishFailed: FormProps<ILogin>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className="h-screen flex flex-col justify-center items-center space-y-20">
			<div className="flex flex-col justify-center items-center">
				<IconWhite className="w-40 h-40" />
				<div className="font-semibold tracking-widest">PADEL TRAINING CLUB MANTA</div>
			</div>

			<div>
				<Form
					name="form-login"
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<ILogin>
						label={<div className="text-white text-lg">Usuario:</div>}
						name="email"
						rules={[
							{ required: true, message: 'Por favor ingrese su correo electrónico.' },
						]}
					>
						<Input size="large" />
					</Form.Item>

					<Form.Item<ILogin>
						label={<div className="text-white text-lg">Contraseña:</div>}
						name="password"
						rules={[{ required: true, message: 'Por favor ingrese su contraseña.' }]}
					>
						<Input.Password size="large" />
					</Form.Item>

					<Form.Item>
						<div className="flex justify-center items-center">
							<ButtonCustom
								type="primary"
								htmlType="submit"
								color="#146586"
								className="text-base font-semibold not-italic px-10 py-5"
							>
								Login
							</ButtonCustom>
						</div>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};
