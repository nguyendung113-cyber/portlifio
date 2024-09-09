
import React from 'react';
import me from '../../assets/image/me.png';
import { useRef } from 'react';

export const  Aboutme = () => {
    return(
        <section id="Aboutme">

        <div data-bs-theme="dark">
            <div className=" tw-text-center tw-w-full"> 
                <h1 className="tw-text-4xl tw-my-4 tw-text-white">About Me</h1>
            </div>
            <div className="container-fluid" style={{ maxWidth: 1280}}>
                <div className='tw-grid tw-grid-cols-2'>
                    <div className=' tw-flex tw-flex-col tw-justify-center tw-px-5 tw-py-4 tw-gap-5'>
                        <h1 className='tw-text-white tw-text-3xl'>Xin chào, tôi là Nguyễn Anh Dũng và tôi là một Front-end Developer</h1>
                        <p className='tw-text-white tw-text-xl tw-mt-5'> 
                            Xin chào, tôi là Nguyễn Anh Dũng. Từ khi còn là học sinh, tôi đã có sự tò mò và thích thú đối với máy tính và trí tuệ nhân tạo qua cuộc thi Robocon. Khi đó, tôi đã muốn bản thân sau này 
                            trở thành một AI Engineer. Nhưng cuối cùng tôi lại chọn trở thành Web Developer.
                        </p>
                        <p className='tw-text-white tw-text-xl tw-mt-5'> 
                            Châm ngôn của tôi là: "Không ngừng cố gắng, không ngừng học hỏi"
                        </p>
                    </div>
                        <div className=' tw-py-6 tw-ml-40 tw-gap-5'>
                            <img src={me} alt="Logo" />
                        </div>
                </div>
            </div>
        </div>
        </section>

            
);
}




