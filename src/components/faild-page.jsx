import React from 'react';

class faildPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: ""
        };
    }

    componentDidMount() {
        this.setState({language: "persian"});
    }

    setLanguage = () => {
        const {language} = this.state;
        if (language === "persian") {
            const language = {
                operation: "پایان عملیات",
                status: "عملیات با موفقیت انجام شد.",
                OrderId: "شناسه سفارش :",
                TrackingId: "شماره پیگیری :",
                mainPage: "صفحه اصلی",
                rtl: true
            };
            return language;

        } else if (language === "english") {
            const language = {
                operation: "end of operation",
                status: "transaction completed successfully.",
                OrderId: "order Id",
                TrackingId: "tracking Id",
                mainPage: "main page",
                rtl: false
            };
            return language;
        }
    };


    render() {
        const language = this.setLanguage();
        return (
            <section>
                <div className=" py-5 services text-center">
                    <div className="row justify-content-center">
                        <div className="item-first">
                            <div className=" ml-20 shadow border radius-first-item">
                                <h3 className=" col-12 py-3 services-title-danger">پایان عملیات</h3>
                                <div className="row py-4 mb-1 actionType ">
                                    <div className="  image-style actionTypeItem ">
                                        <img className=" success-img img-fluid " onClick={((e) => this.showBill(e))}
                                             src={require('./../img/failed.jpg')} alt=""/>
                                    </div>
                                    <div className=" image-style text-right">
                                        <label>عملیات ناموفق بود.</label>
                                    </div>

                                </div>
                                <div className="pb-4 pt-2 mb-3    pad-item">

                                    <div className="row pb-1 image-style  ">
                                        <div className="col-3 text-left">
                                            <label>شناسه سفارش :</label>
                                        </div>
                                        <div className="col-3 text-right">
                                            <label></label>
                                        </div>

                                    </div>

                                    <div className="col-6 border-bottom-item-fail"/>

                                    <div className="row pt-2 image-style  ">
                                        <div className="col-3 text-left">
                                            <label>شماره پیگیری :</label>
                                        </div>
                                        <div className="col-3 text-right">
                                            <label></label>
                                        </div>

                                    </div>

                                </div>
                                <div className="pb-4 pt-2 justify-content-center ">
                                    <button onClick={""} type="button"
                                            className="btn border button-item btn-danger">صفحه اصلی
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default faildPage;