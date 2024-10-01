
import React from 'react';
import github from '../../assets/icon/github-mark-white.png';

const Footer = () => {


  return (
    <section id="footer">
            <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
            </div>
        <div class="tw-max-w-7xl tw-mx-auto tw-flex tw-justify-between tw-items-center tw-flex-wrap gap-5">
            <p class="tw-text-white">©️ 2024 Nguyễn Anh Dũng</p>
            <div class="tw-flex tw-gap-3"  >
                <a href="https://github.com/nguyendung113-cyber" target="_blank">
                    <img src={github} alt="github" class="tw-w-[2.9rem] tw-h-[2.9rem] tw-opacity-80 tw-hover:opacity-100"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100039681533587">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVR4nO2ay0ocQRSGGwLRLCIKRoMbBZfZ+AbZiCFgiEuNL+AmKHmCbNVAlAQhWx/BSy5vICHrOI4iqNGFRCEbiRf8woFajKGmpuvSXdXiDwMNPVOnv6nTp8+ls+xOt1RAFzAGzAPrQA04Bc7VR4431Tn5zkugM0tBQBswCXwDrrCX/OYL8ErWyiIAPADeAIeE0y9gBmgvC+I5sENx2gaeFe1Gi5SnZdn50BC9wA/K13egJxTEgNruWKrLNfhCPFJhNLZ2gMeuEO2R3MnkZvYhGljCT2fAe+CpusfuAd3AE2BCBQ5xGxt9cAmxPtoFBnPastWITZjd8oC4BIYs/jRbbed6aKonto+W80I4goim8+yGb9oxVgLIgfHGVwmgr/qbrD0F7CnXC6EJE4hksb7SphXAH8Lqs6mecEnFbyiwC5kkO9uhMyRFERUCEY3qDL2jeiBzOkNSgga9+FYC+jxBVnSL1iOAvPAEqekWPYkA8tYT5Fi36HkEkDVPkL+pgBwVAXLiuagRimJ0rDPkk/HGAtkMGn4jgqzoDEkbs2ogs7c6RemsWNJ4oU0albGvFQJZywzGpCteFZDxVqWudMVTBzkA7jcFUQaltZ86yGsjRMOu1BIGqefuOMp8IlGQa2A4F0SD4Y8JgixYQTS4mDSOU9FGyxvcANOd0Fih1wniv0GPcxkcQFvNmn4uMD2R3GxDhk1BIDTDUIkcZehTobN3mU8U7Go16xDruTvTKlUIpX15Ysd6A6JNjdHWHbvsl6qTMu4cWkNLagPVcJsDVtULNL8bXqqR459SnkplJ0UR8DD4hdwpS0P/ANECVoukC1cZAAAAAElFTkSuQmCC" alt="facebook"/></a>
                </div>
                <a class="tw-text-white tw-hover:text-blue-200 " href="#">Cảm ơn vì đã xem qua PORTFOLIO của tôi💙</a>
            </div>
    </section>
  );
};




export default Footer; 
