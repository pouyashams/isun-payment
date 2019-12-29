import React from 'react';
import queryString from 'query-string';

class successPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "" ,
            currentCount : 10 ,
            intervalId: null
        };
        this.addParameter = this.addParameter.bind(this);
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        if(this.hasValue(params["callBackURL"]) && params["callBackURL"] !== 'http://shop.isuncharge.com'){
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
            let form = document.createElement("form");
            let hiddenField;
            hiddenField = document.createElement("input");
            hiddenField.setAttribute("name", "success");
            hiddenField.setAttribute("value", 'true');
            form.appendChild(hiddenField);
            if (this.hasValue(params["orderIdentifier"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "token");
                hiddenField.setAttribute("value", params["orderIdentifier"]);
                form.appendChild(hiddenField);
            }

            if (this.hasValue(params["referenceNumber"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "referenceNumber");
                hiddenField.setAttribute("value", params["referenceNumber"]);
                form.appendChild(hiddenField);
            }

            if (this.hasValue(params["requesterTraceCode"])) {
                hiddenField = document.createElement("input");
                hiddenField.setAttribute("name", "traceCode");
                hiddenField.setAttribute("value", params["requesterTraceCode"]);
                form.appendChild(hiddenField);
            }

            form.setAttribute("method", "POST");
            form.setAttribute("action", url);
            form.setAttribute("target", "_self");
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        } else {
            if (this.hasValue(params["requesterDevicePlatformCode"]) && params["requesterDevicePlatformCode"] === 'ANDROID') {
                let indexOfSuccess = url.indexOf("success");
                if (indexOfSuccess > 0) {
                    let endOfSuccessParam = indexOfSuccess + url.substring(indexOfSuccess).indexOf(";");
                    url = url.replace(url.substring(indexOfSuccess, endOfSuccessParam), "success=" + true);
                } else {
                    url = this.addParameter(url, "success", true);
                }
            } else {
                url += 'success?token=' + params["orderIdentifier"];
                if (this.hasValue(params["requesterTraceCode"])) {
                    url += '&traceCode=' + params["requesterTraceCode"];
                }

                if (this.hasValue(params["referenceNumber"])) {
                    url += '&referenceNumber=' + params["referenceNumber"];
                }
            }
            url = url.replace(/ /g,"_");
            window.open(url, "_blank");
        }
    };

    hasValue = (item) => {
        return item !== null && item !== '' && item !== undefined;
    }

    addParameter(urlTest, parameterName , value) {
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
                                <h3 className=" col-12 py-3 services-title-sucssecc">پایان عملیات</h3>
                                <div className="row py-4 mb-1 actionType ">
                                    <div className="  image-style actionTypeItem ">
                                        <img className=" success-img img-fluid "
                                             src={require('./../img/success.jpg')} alt=""/>
                                    </div>
                                    <div className=" image-style text-right">
                                        <label>عملیات با موفقیت انجام شد.</label>
                                    </div>

                                </div>
                                <div className="pb-4 pt-2 mb-3    pad-item">

                                    <div className="row pb-1 image-style  ">
                                        <div className="col-4 text-left">
                                            <label className="pouya">شناسه سفارش :</label>
                                        </div>
                                        <div className="col-4 text-right">
                                            <label>{params["orderIdentifier"]}</label>
                                        </div>

                                    </div>

                                    <div className="col-8 border-bottom-item"/>

                                    <div className="row pt-2 image-style  ">
                                        <div className="col-4 text-left">
                                            <label>شماره پیگیری :</label>
                                        </div>
                                        <div className="col-4 text-right">
                                            <label>{params["referenceNumber"]}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-4 pt-2 justify-content-center ">
                                    <button onClick={""} type="button" className="btn border button-item btn-success">
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
