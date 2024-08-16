import Image from "next/image";

export default function Main(){
    return(
        <>
            <main className="flex items-center justify-center pt-16 pb-16">
                <div className="flex justify-center w-fit gap-6">
                    <div className="flex flex-col p-5 rounded-lg bg-slate-100 w-96 gap-5 shadow-xl">
                        <div className="flex pl-5 pt-5 pb-5 rounded-lg" style={{backgroundImage : "url('/main/topic1.png')", backgroundRepeat : "no-repeat", backgroundSize : "cover"}}>
                            <h1 className="text-xl font-bold">New Student</h1>
                        </div>
                        <div className="flex justify-center pl-5 pt-5 pb-5 pr-5 rounded-lg gap-5 bg-white">
                            <Image 
                                src={'/main/icon1.png'}
                                alt={'Program1'}
                                width={50}
                                height={50}
                            />
                            <p className="text-slate-600">Register for 1st year Diploma in IHMA</p>
                        </div>
                        <div className="flex justify-center pl-5 pt-5 pb-5 pr-5 rounded-lg gap-5 bg-white">
                            <Image 
                                src={'/main/icon2.png'}
                                alt={'Program1'}
                                width={50}
                                height={50}
                            />
                            <p className="text-slate-600">Register for 1st year Diploma in IHMA</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 rounded-lg bg-slate-100 w-96 gap-5 shadow-xl">
                        <div className="flex pl-5 pt-5 pb-5 rounded-lg" style={{backgroundImage : "url('/main/topic2.png')", backgroundRepeat : "no-repeat", backgroundSize : "cover"}}>
                            <h1 className="text-xl font-bold">Current Student</h1>
                        </div>
                        <div className="flex justify-center pl-5 pt-5 pb-5 pr-5 rounded-lg gap-5 bg-white">
                            <Image 
                                src={'/main/icon1.png'}
                                alt={'Program1'}
                                width={50}
                                height={50}
                            />
                            <p className="text-slate-600">Register for 1st year Diploma in IHMA</p>
                        </div>
                        <div className="flex justify-center pl-5 pt-5 pb-5 pr-5 rounded-lg gap-5 bg-white">
                            <Image 
                                src={'/main/icon2.png'}
                                alt={'Program1'}
                                width={50}
                                height={50}
                            />
                            <p className="text-slate-600">Register for 1st year Diploma in IHMA</p>
                        </div>
                    </div>
                </div>
            </main>        
        </>
    )
}