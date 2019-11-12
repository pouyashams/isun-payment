import React from 'react';
import Slideshow from "./slide-show";

const HomeBanner = () => {
    const slideBG = require('./../img/slide-show/temp-white.png');

    return (
        <section className="home-banner-area">
            <div className="container">
                <div className="row justify-content-center fullscreen align-items-center">
                    <div className="col-lg-8 col-md-8 col-ml-8 col-sm-8 col-8">
                        <h1>
                            خدمات شارژ و بسته های اینترنت
                        </h1>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                            ارایه خدمات شارژ و بسته های اینترنت برای اپراتور های ایرانسل , همراه اول و رایتل نمونه هایی
                            از ده ها خدمات آیسان پرداخت نیز می باشد.
                        </p>
                        {/*<div className="mx-auto  mt-20 mb-40 justify-content-center">*/}
                            {/*<img className="download-app img-fluid" src={require('./../img/ kafe-bazar.png')} alt=""/>*/}
                            {/*<img className="download-app img-fluid" src={require('./../img/google-play.png')} alt=""/>*/}
                            {/*<img className="download-app img-fluid" src={require('./../img/app-store.png')} alt=""/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 img-fluid">
                         {/*style={{background: 'url(' + slideBG + ') no-repeat top center'}}>*/}
                        {/*<img className="img-fluid app-mobile" src={require('./../img/slide-show/temp-white.png')}*/}
                        {/*     style={{visibility: 'hidden'}}*/}
                        {/*     alt=""/>*/}
                        {/*<Slideshow/>*/}
                        <img className="img-fluid app-mobile" src={require('./../img/isun-pardakht-app-1.png')} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
