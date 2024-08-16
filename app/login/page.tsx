'use client'
import Image from "next/image";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from "./../lib/zod-schemas";
import { string, z } from 'zod';

type FormValues = z.infer<typeof signInSchema>;
export default function Login(){
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(signInSchema),
        mode: 'onTouched',
        defaultValues: {
            registration_number: '',
            password: '',
        }
    });

    
    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };
    return(
        <>
            <div className="h-screen flex items-center justify-end" style={{backgroundImage : "url('/login/login.png')", backgroundRepeat : "no-repeat", backgroundSize : "cover"}}>
                <div className="flex w-96 flex-col mr-40">
                    <h1 className="text-4xl font-bold text-cyan-950 w-100 text-center">Log in</h1>
                    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="registration" className="block text-cyan-950 mb-2 text-xl font-bold">
                                Registration number
                            </label>
                            <Controller
                                name="registration_number"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <input
                                            type="text"
                                            id="registration_number"
                                            placeholder="Enter your registration number"
                                            className="p-3 text-slate-700 outline-none text-sm sm:text-base border-b-2 border-indigo-500 w-full"
                                            {...field}
                                        />
                                        {errors.registration_number &&
                                        <div className="flex gap-2 items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#CD3C16" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                            </svg>
                                            <p className="text-red-600 text-sm">{errors.registration_number.message}</p>
                                        </div>
                                        }
                                    </>
                                )}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-cyan-950 mb-2 text-xl font-bold">
                                Password
                            </label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="p-3 text-slate-700 outline-none text-sm sm:text-base border-b-2 border-indigo-500 w-full"
                                            {...field}
                                        />
                                        {errors.password &&
                                        <div className="flex gap-2 items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#CD3C16" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                            </svg>
                                            <p className="text-red-600 text-sm">{errors.password.message}</p>
                                        </div>
                                        }
                                    </>
                                )}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white font-bold py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center text-sm sm:text-base mt-10"
                        >
                            Log in
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}