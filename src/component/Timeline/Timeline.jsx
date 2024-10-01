import React from 'react';

const Timeline = () => {


  return (
    <section>

<div>
<div className=" tw-text-center tw-w-full">
                <div className=" tw-flex ">
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                    <h1 className="tw-text-4xl tw-w-[500px] tw-my-4 tw-text-white">Thành tựu</h1>
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                </div>
            </div>
<div class="container">

    <ul class="timeline">
      
        <li>
          <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
          <div class="timeline-panel tw-rounded-sm" style={{border: 'none', background: 'rgb(15, 24, 46)'}}>
            <div class="timeline-heading  tw-text-white">
              <h4 class="timeline-title  tw-text-white tw-text-4xl">Chứng chỉ</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time  tw-text-white"></i> </small></p>
            </div>
            <div class="timeline-body  tw-text-white">
                <ul className='tw-mt-5 tw-list-disc tw-ml-5 tw-space-y-2'>
                    <li className='tw-text-white-100 tw-text-[14px] tw-tracking-wider tw-flex-col tw-flex'>
                        <span className='tw-flex-1 tw-list-item'>The Web Developer Bootcamp 2024</span>
                        <span className='tw-flex-1 tw-list-item'>Introduction to Cybersecurity (Cấp bởi Cisco)</span>
                        <span className='tw-flex-1 tw-list-item'>Introduction to IoT  (Cấp bởi Cisco)</span>
                        <span className='tw-flex-1 tw-list-item'>Bằng tiếng Nhật tương đương JLPT N3</span>
                    </li>
                </ul>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
          <div class="timeline-panel tw-rounded-sm"  style={{border: 'none', background: 'rgb(15, 24, 46)'}}>
            <div class="timeline-heading  tw-text-white">
              <h4 class="timeline-title tw-text-white ">Học vấn</h4>
            </div>
            <div class="timeline-body  tw-text-white">
                <ul className='tw-mt-5 tw-list-disc tw-ml-5 tw-space-y-2'>
                    <li className='tw-text-white-100 tw-text-[14px] tw-tracking-wider tw-flex-col tw-flex'>
                        <span className='tw-flex-1 tw-list-item'>Tốt nghiệp trường đại học Công nghệ TP. HCM (HUTECH)</span>
                        <span className='tw-flex-1 tw-list-item'>Chuyên ngành công nghệ phần mềm</span>
                        <span className='tw-flex-1 tw-list-item'>Thời gian: 2019 - 204</span>
                        <span className='tw-flex-1 tw-list-item'>GPA: 2.8/4.0</span>
                    </li>
                </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
          <div class="timeline-panel tw-rounded-sm" style={{border: 'none', background: 'rgb(15, 24, 46)'}}>
            <div class="timeline-heading  tw-text-white">
              <h4 class="timeline-title  tw-text-white tw-text-4xl">Kinh nghiệm làm việc</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time  tw-text-white"></i> </small></p>
            </div>
            <div class="timeline-body  tw-text-white">
                <ul className='tw-mt-5 tw-list-disc tw-ml-5 tw-space-y-2'>
                    <li className='tw-text-white-100 tw-text-[14px] tw-tracking-wider tw-flex-col tw-flex'>
                        <span className='tw-flex-1 tw-list-item'>Backend Developer C# - Thực tập tại Công Ty TNHH đồng hành Việt - Japan</span>
                    </li>
                </ul>
            </div>
          </div>
        </li>
        
    </ul>
</div>
      
      </div>
</section>
  );
};




export default Timeline;