import Image from "next/image";
export default function Footer(){
    return(
        <>
            <div className="flex items-center gap-10 pt-3 pb-3 pr-10 pl-10" style={{backgroundImage : "url('/main/main-bg.png')", backgroundRepeat : "no-repeat", backgroundSize : "cover"}}>
                <Image 
                    src={'/main/footer-icon.png'}
                    alt={'FooterIcon'}
                    width={70}
                    height={70}
                />
                <div className="flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503"/>
                    </svg>
                    <p>2024 | All Rights Reserved | IHMA</p>
                </div>
            </div>
        </>
    )
}