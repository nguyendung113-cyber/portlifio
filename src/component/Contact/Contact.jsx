

export const  Contact = () => {
    return(
        <section id="Contact">


        <div data-bs-theme="dark">
            <div className=" tw-text-center tw-w-full">
                <div className=" tw-flex">
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                    <h1 className="tw-text-4xl tw-w-[500px] tw-my-4 tw-text-white">Liên hệ</h1>
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                </div>
            </div>
            <div className="tw-flex max-[600px]:tw-flex-col max-[600px]:tw-items-center max-[600px]:tw-gap-3 tw-justify-center">
                <div className="card tw-w-[300px] tw-mx-3">
                    <div className="card-body tw-flex tw-items-center">
                    <ion-icon name="mail-outline" className='tw-mx-3'></ion-icon>                       
                     nadung.hutech@gmail.com
                    </div>
                </div>
                

                <div className="card tw-w-[300px] tw-mx-3">
                    <div className="card-body tw-flex tw-items-center">
                        <ion-icon name="call-outline" className='tw-mx-3'></ion-icon>
                        (+84) 39 446 8285
                    </div>
                </div>
            </div>
            <div className="tw-flex tw-justify-center tw-mt-3">
                <div className="card tw-w-[300px]">
                    <div className="card-body tw-flex tw-items-center">
                        <ion-icon name="location-outline"></ion-icon>
                        Hóc Môn, Tp.Hồ Chí Minh
                    </div>
                </div>
            </div>
                <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                    <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                </div>
                <h1 className="tw-text-4xl  tw-text-center tw-pb-3 tw-my-4 tw-text-white">Cảm ơn vì đã xem</h1>

                </div>
                </section>
);
}




