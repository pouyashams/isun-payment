import React from 'react';

const Contact = () => {
    const mapObj = {
        key: 'service.iucUtKjh6qBpN4TSYZ0NFW5IZe4TSRlbmy5Pjp6p',
        type: 'neshan',
        zoom: 14,
        lat: '37.250000',
        long: '55.167320',
        width: 500,
        height: 400,
        marker: 'none'
    };

    const mapUrl = `https://api.neshan.org/v1/static?key=${mapObj.key}&type=${
        mapObj.type
        }&zoom=${mapObj.zoom}&center=${mapObj.lat},${mapObj.long}&width=${
        mapObj.width
        }&height=${mapObj.height}&marker=${mapObj.marker}`;

    return (
        <div>
            <section>
                <div className="row justify-content-center fullscreen align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <h1>
                            تماس با ما
                        </h1>
                        <p className="mx-auto mt-20 mb-40 justify-content-center">
                            جهت دریافت امتیاز نمایندگی موارد زیر را تکمیل کرده و بر روی دکمه ارسال کلیک نمایید و در اسرع
                            وقت همکاران واحد جذب پذیرنگان با شما تماس حاصل خواهند کرد.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center fullscreen align-items-center">
                    <div className="col-lg-5 col-md-5 col-ml-5 col-sm-5 col-5">
                        <div className="text-center py-2">
                            <div className="form-group">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-user contact-icon"/>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="fullname"
                                        placeholder="نام و نام خانوادگی"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-mobile contact-icon"/>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="contactNumber"
                                        placeholder="شماره تماس"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-envelope contact-icon"/>
                                        </div>
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="آدرس ایمیل"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-comment contact-icon"/>
                                        </div>
                                    </div>
                                    <textarea
                                        className="form-control"
                                        placeholder="متن جهت ارسال"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <input
                                    type="submit"
                                    value="ارسال"
                                    className="btn btn-dark btn-block rounded-0 py-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
