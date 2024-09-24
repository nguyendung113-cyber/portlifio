import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const  Contact = () => {

    //
    const notify = () => toast("Email đã được gửi thành công!");



    const form = useRef();

      // Logic gửi email của bạn ở đây
      // Sau khi gửi email thành công, gọi hàm notify
    const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs.sendForm( 'service_nv7e5nb' , 'template_q20pdty',
        form.current,
        {
            publicKey: '-Nkay99Y35nbtq4oU',
        }
    )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


    return(
        <section id="Contact">


        <div data-bs-theme="dark">
            <div className=" tw-text-center tw-w-full">
                <div className=" tw-flex ">
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                    <h1 className="tw-text-4xl tw-w-[500px] tw-my-4 tw-text-white">Liên hệ</h1>
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                </div>
            </div>
            <div className='tw-flex tw-flex-wrap max-[600px]:tw-flex-col max-[600px]:tw-items-center max-[600px]:tw-gap-3 tw-justify-center tw-gap-3'>
                <div className="tw-flex  tw-gap-4 tw-flex-col tw-justify-center">
                    <div className="card tw-w-[400px] tw-mx-3">
                        <div className="card-body tw-gap-2 tw-flex tw-items-center"> 
                        <ion-icon name="mail-outline" className='tw-mx-3'></ion-icon>                       
                            <p>nadung.hutech@gmail.com</p>
                        </div>
                    </div>
                    

                    <div className="card tw-w-[400px] tw-mx-3">
                        <div className="card-body tw-gap-2 tw-flex tw-items-center">
                            <ion-icon name="call-outline" className='tw-mx-3'></ion-icon>
                            039 446 8285
                        </div>
                    </div>
                    <div className="card tw-w-[400px] tw-mx-3">
                        <div className="card-body tw-gap-2 tw-flex tw-items-center">
                            <ion-icon name="location-outline"></ion-icon>
                            Đông Thạnh , Hóc Môn, Tp.Hồ Chí Minh
                        </div>
                    </div>
                </div>
                <div>
                    <form  className='tw-flex max-[600px]:tw-items-center tw-flex-col' ref={form} onSubmit={sendEmail}>
                        <label className=' tw-text-white'>Name</label>
                        <input className='tw-w-[500px] max-[600px]:tw-w-[400px] tw-text-white 
                        tw-bg-transparent placeholder:tw-text-slate-400 tw-text-sm tw-border tw-border-slate-200 tw-rounded-md tw-px-3 tw-py-2
                        tw-transition tw-duration-300 tw-ease focus:tw-outline-none focus:tw-border-slate-400 hover:tw-border-slate-300 tw-shadow-sm focus:tw-shadow' type="text" placeholder='Tên của bạn' name="user_name" />
                        <label className=' tw-text-white'>Email</label>
                        <input className='tw-w-[500px] max-[600px]:tw-w-[400px] tw-text-white 
                        tw-bg-transparent placeholder:tw-text-slate-400 tw-text-sm tw-border tw-border-slate-200 tw-rounded-md tw-px-3 tw-py-2
                        tw-transition tw-duration-300 tw-ease focus:tw-outline-none focus:tw-border-slate-400 hover:tw-border-slate-300 tw-shadow-sm focus:tw-shadow' type="email" name="user_email" placeholder='Email của bạn' />
                        <label className=' tw-text-white '>Message</label>
                        <textarea className='tw-w-[500px] max-[600px]:tw-w-[400px] tw-text-white 
                        tw-bg-transparent placeholder:tw-text-slate-400 tw-text-sm tw-border tw-border-slate-200 tw-rounded-md tw-px-3 tw-py-2
                        tw-transition tw-duration-300 tw-ease focus:tw-outline-none focus:tw-border-slate-400 hover:tw-border-slate-300 tw-shadow-sm focus:tw-shadow' placeholder='Nội dung' name="message" />
                        <input className='tw-py-2.5 tw-mt-3 tw-px-5 tw-me-2 tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 focus:tw-outline-none tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 hover:tw-bg-gray-100 hover:tw-text-blue-700 focus:tw-z-10 focus:tw-ring-4 focus:tw-ring-gray-100 dark:focus:tw-ring-gray-700 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700' type="submit" value="Send" />
                        <ToastContainer />
                    </form>
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




