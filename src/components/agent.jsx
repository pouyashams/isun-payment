import React from 'react';
const Agent = () => {
    return (
        <section className="agent-banner-area">
            <div className="container">
                <div className="row justify-content-center fullscreen align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <h1>
                            واگذاری نمایندگی فروش
                        </h1>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                            شرکت آیسان در راستا بهبود و پیشبرد اهداف خود این امکان را فراهم کرده است که نرم افزار آیسان پرداخت را با قابلیت شخصی سازی در اختیار دیگر سازمان ها نیز قرار دهد.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center fullscreen align-items-center text-center mt-20">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img className="img-fluid w-25" src={require('./../img/cms.png')}/>
                        <h4 className="services-title">سیستم مدیریت محتوا</h4>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                           تمامی پذیرندگان دارای یک پنل مدیریتی جهت اخذ گزارشات فروش به تفکیک نوع سرویس ، بروزسانی بسته های اینترنتی ، مدیریت محتوای محصولات قابل عرضه جهت فروش و نحوه ارسال مرسوله می باشند ، که این سرویس ها تنها بخشی از خدمات این پنل می باشد.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img className="img-fluid w-25" src={require('./../img/customize.png')}/>
                        <h4 className="services-title">قابلیت شخصی سازی</h4>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                            نرم افزار آیسان پرداخت به صورت ماژولار طراحی شده است . بدین معنی که امکان فعال سازی هر سرویس به صورت جداگانه برای پذیرنگان فراهم است. همچنین نرم افزار های موبایل که در دو نسخه اندروید و IOS قابل عرضه می باشد ، قابلیت شخصی سازی با سلیقه شما را نیز دارا می باشند.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img className="img-fluid w-25" src={require('./../img/ipg.png')}/>
                        <h4 className="services-title">درگاه های پرداخت</h4>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                            جهت رفاه و سهولت راه اندازی کسب و کار  پذیرنگان ، شرکت آیسان امکان استفاده از درگاه پرداخت های پیاده سازی شده به نام شرکت آیسان را نیز فراهم آورده است. بدین ترتیب پذیرنگان نیازی به اخذ مجوز استفاده از درگاه پرداخت را نیز ندارند.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <img className="img-fluid w-25" src={require('./../img/payment.png')}/>
                        <h4 className="services-title">پرداخت های منظم</h4>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                          شرکت آیسان با تکیه بر سابقه درخشان خود این تضمین را به تمام پذیرنگان خود می دهد که  تمامی پرداختی ها را در زمان مقرر و به صورت کامل به حساب آنان واریز نماید.
                            <br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agent;
