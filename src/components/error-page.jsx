import React from 'react';
import queryString from 'query-string';

class successPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "",
            currentCount: 10,
            intervalId: null
        };
        this.addParameter = this.addParameter.bind(this);
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        if (this.hasValue(params["callBackURL"]) && params["callBackURL"] !== 'http://shop.isuncharge.com') {
            var intervalId = setInterval(this.timer, 1000);
            this.setState({intervalId: intervalId});
        }
        this.setState({language: "persian"});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    timer() {
        if (this.state.currentCount === 0) {
            clearInterval(this.state.intervalId);
            this.sendInformationToCallBackURL();
        } else {
            this.setState({currentCount: this.state.currentCount - 1});
        }
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

    sendInformationToCallBackURL = () => {
        let params = queryString.parse(this.props.location.search);
        let url = params["callBackURL"];
        if (url.includes("http")) {
            var form = document.createElement("form");
            var hiddenField;
            hiddenField = document.createElement("input");
            hiddenField.setAttribute("name", "success");
            hiddenField.setAttribute("value", 'false');
            form.appendChild(hiddenField);
            if (this.hasValue(params["orderIdentifier"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "token");
                hiddenField.setAttribute("value", params["orderIdentifier"]);
                form.appendChild(hiddenField);
            }

            if (this.hasValue(params["errorCode"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "token");
                hiddenField.setAttribute("value", params["errorCode"]);
                form.appendChild(hiddenField);
            }

            if (this.hasValue(params["errorDescription"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "errorDescription");
                hiddenField.setAttribute("value", params["errorDescription"]);
                form.appendChild(hiddenField);
            }

            if (this.hasValue(params["requesterTraceCode"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "traceCode");
                hiddenField.setAttribute("value", params["requesterTraceCode"]);
                form.appendChild(hiddenField);
            }
            window.location.href = url;
            form.setAttribute("method", "POST");
            form.setAttribute("action", url);
            form.setAttribute("target", "_self");
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        } else {
            if (this.hasValue(params["requesterDevicePlatformCode"]) && params["requesterDevicePlatformCode"] === 'ANDROID') {
                var indexOfSuccess = url.indexOf("success");
                if (indexOfSuccess > 0) {
                    var endOfSuccessParam = indexOfSuccess + url.substring(indexOfSuccess).indexOf(";");
                    url = url.replace(url.substring(indexOfSuccess, endOfSuccessParam), "success=" + false);
                } else {
                    url = this.addParameter(url, "success", false);
                }
            } else {
                url += 'unsuccessful?token=' + params["orderIdentifier"];
                if (this.hasValue(params["errorCode"])) {
                    url += '&errorCode=' + params["errorCode"];
                }

                if (this.hasValue(params["errorDescription"])) {
                    url += '&errorDescription=' + params["errorDescription"];
                }

                if (this.hasValue(params["traceCode"])) {
                    url += '&traceCode=' + params["traceCode"];
                }
            }
            url = url.replace(/ /g, "_");
            window.open(url, "_blank");
        }
    };

    hasValue = (item) => {
        return item !== null && item !== '' && item !== undefined;
    }

    addParameter(urlTest, parameterName, value) {
        let endOfUrlIndex = urlTest.indexOf("end");
        urlTest = urlTest.replace(urlTest.substring(endOfUrlIndex), parameterName + "=" + value) + ";end";
        return urlTest;
    }


    render() {
        let params = queryString.parse(this.props.location.search);

        const language = this.setLanguage();
        return (
            <section>
                <div className=" py-5 services text-center">
                    <div className="row justify-content-center">
                        <div className="item-first">
                            <div className=" ml-20 shadow border radius-first-item">
                                <h3 className=" col-12 py-3 services-title-danger">پایان عملیات</h3>
                                <div className="row py-2 mb-1 actionType ">
                                    <div className="  image-style actionTypeItem ">
                                        <img className=" success-img img-fluid "
                                             src={require('./../img/failed.jpg')} alt=""/>
                                    </div>
                                    <div className=" image-style text-right">
                                        <label>خطا در عملیات</label>
                                    </div>

                                </div>
                                <div className="pb-4 pt-2 mb-3 pad-item">
                                    <div className="row  image-style  ">
                                        <div className="col-12 text-left mb-2">
                                            <label>مشتری گرامی، با پوزش از شما، سفارش شما با موفقیت به پایان نرسیده است.
                                                در صورت کسر از حساب تا 72 ساعت
                                                آینده مبلغ به حساب شما بازگشت داده خواهد شد.</label>
                                        </div>
                                    </div>

                                    <div className="col-8 border-bottom-item-fail"/>
                                    <div className="row pb-1 image-style  ">
                                        <div className="col-4 mt-3 text-left">
                                            <label>شناسه سفارش :</label>
                                        </div>
                                        <div className="col-4 pt-3 text-right">
                                            <label>{params["orderIdentifier"]}</label>
                                        </div>

                                    </div>

                                </div>
                                <div className="pb-4 pt-2 justify-content-center ">
                                    <button onClick={""} type="button" className="btn border button-item btn-danger">
                                        <span> انتقال به سایت پذیرنده</span>
                                        <br/>
                                        <span id="timerSpan">{this.state.currentCount}</span>
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

export default successPage;
