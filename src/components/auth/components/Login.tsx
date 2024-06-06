import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export interface ILogin {
	email: string;
	password: string;
}

export const Login = () => {
	const router = useRouter();
	const [inputShow, setInputShow] = useState<boolean>(true);
	const [errorLogin, setErrorLogin] = useState<string | null>(null);
	const { register, handleSubmit, reset } = useForm<ILogin>();

	const onLogin: SubmitHandler<ILogin> = async (credentials) => {
		try {
			const result = await signIn('credentials', {
				...credentials,
				role: 'admin',
				redirect: false, // Deshabilitar redirección automática para manejar errores
			});

			if (!result?.ok) throw new Error(result?.error as string);

			router.replace('/admin/usuarios');

			reset();
		} catch (error: any) {
			console.error(error.message);
			setErrorLogin(error.message);

			setTimeout(() => {
				setErrorLogin(null);
			}, 4000);
		}
	};

	return (
		<div className="h-full flex flex-col justify-center items-center space-y-20">
			<div className="h-[90px] xl:h-[115.07px] w-8/12 xl:w-[267.61px] text-white">LOGO</div>

			<div className="w-full">
				<form
					className="flex flex-col justify-center items-center space-y-8"
					onSubmit={handleSubmit(onLogin)}
				>
					<div className="grid grid-cols-1 justify-items-center gap-x-[18px] gap-y-[32px] w-full xl:w-[760px]">
						<div className="flex flex-col space-y-[7px] w-9/12 sm:w-6/12 md:w-5/12 xl:w-[371px]">
							<label htmlFor="email" className="label-login select-none text-white">
								Usuario
							</label>
							<input
								id="email"
								autoFocus={true}
								autoComplete="username"
								className="h-[48px] border-b border-hoverPrimary p-[10px] xl:p-4 text-base text-txtBlack outline-none"
								{...register('email', { required: true })}
							/>
						</div>
						<div className="flex flex-col space-y-[7px] w-9/12 sm:w-6/12 md:w-5/12 xl:w-[371px]">
							<label
								htmlFor="password"
								className="label-login select-none text-white"
							>
								Contraseña
							</label>
							<div className=" relative">
								<input
									id="password"
									type={inputShow ? 'password' : 'text'}
									autoComplete="current-password"
									className="h-[48px] w-full border-b border-hoverPrimary p-[10px] xl:p-4 text-base text-txtBlack outline-none"
									{...register('password', {
										required: true,
									})}
								/>

								<div className="absolute inset-y-0 right-0 flex items-center p-5">
									<div
										className="cursor-pointer transition-all hover:bg-neutral-200 rounded-full w-8 h-8 flex items-center justify-center"
										onClick={() => setInputShow((value) => !value)}
									>
										{inputShow ? (
											<FaRegEyeSlash className="w-4 h-4 text-gray" />
										) : (
											<FaRegEye className="w-4 h-4 text-gray" />
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					{!!errorLogin && (
						<div className="flex justify-center items-center">
							<span className="text-base font-bold text-txtGray">{errorLogin}</span>
						</div>
					)}

					<div className="flex justify-center items-center w-4/12 md:w-3/12">
						<button
							type="submit"
							className={`w-full h-[42px] xl:h-[48px] xl:w-[150px] rounded-md border-2 border-secondary bg-hoverPrimary text-sm xl:text-base font-bold leading-5 text-txtBlack`}
						>
							LOGIN
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
