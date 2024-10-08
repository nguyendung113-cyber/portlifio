
import React from 'react';
import me from '../../assets/image/me.png';
import myCV from '../../data/myCV.pdf';

export const  Aboutme = () => {
    return(
        <section id="Aboutme">

        <div data-bs-theme="dark">
            <div className=" tw-px-5 tw-flex tw-justify-start tw-w-full"> 
                <div className="container-fluid" style={{ maxWidth: 1280}}>
                    <h1 className="tw-text-4xl max-md:tw-text-xs tw-my-4  tw-text-white">Web Developer</h1>
                </div>
            </div>
            <div className="container-fluid" style={{ maxWidth: 1280}}>
                <div className='tw-flex max-[800px]:tw-flex-col'>
                    <div className=' tw-flex tw-flex-col max-[400px]:tw-w-[400px]  max-sm:tw-w-full tw-justify-center tw-px-5 tw-py-4 tw-gap-5'>
                        <h1 className='tw-text-white max-md:tw-text-xl max-sm:tw-text-xs tw-text-4xl'>Xin chào, tôi là  <span className=' tw-text-orange-300 max-md:tw-text-xl max-sm:tw-text-xs tw-text-4xl'>Nguyễn Anh Dũng</span></h1>
                        <p className='tw-text-white   max-md:tw-text-sm max-[600px]:tw-w-[400px]   tw-text-xl tw-mt-5'> 
                            Xin chào, tôi là Nguyễn Anh Dũng. Từ khi còn là học sinh, tôi đã có sự tò mò và thích thú đối với máy tính và công nghệ. Tôi đã tốt nghiệp tại trường Đại học Công nghệ TP. Hồ Chí Minh. Tôi mong muốn trở thành một Full-stack Developer và đóng góp vào các dự án lớn, mang lại giá trị cho công ty, bản thân và cồng đồng.
                        </p>
                        <p className='tw-text-white max-[600px]:tw-w-[400px]  tw-text-xl tw-mt-5'> 
                            Châm ngôn của tôi là: "Không ngừng cố gắng, không ngừng học hỏi"
                        </p>
                        <a href={myCV} download='CV-Nguyễn Anh Dũng - Intern WEB-DEVELOPER.pdf' >
                            <button class="tw-h-[80px] tw-text-2xl   tw-text-white tw-w-max tw-bg-gray-800 tw-hover:bg-gray-900 tw-focus:outline-none tw-focus:ring-4 tw-focus:ring-gray-300 tw-font-medium tw-rounded-full tw-px-5 tw-py-2.5 tw-me-2 tw-mb-2 tw-dark:bg-gray-800 tw-dark:hover:bg-gray-700 tw-dark:focus:ring-gray-700 tw-dark:border-gray-700">Download CV</button>
                        </a>
                    </div>
                        <div className=' tw-py-6 max-[800px]:tw-flex max-[800px]:tw-justify-center tw-gap-5'>
                            <img src={me} alt="Logo" />
                        </div>
                </div>
            </div>
        </div>
        </section>

            
);
}




