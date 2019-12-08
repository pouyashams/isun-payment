import React from 'react';
import axios from "axios";
import {login} from "../services/loginService";


class paymentGetway extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typeOfOreder: "",
            typeOfOrederText: "",
            priceText: "",
            sumOfAmount: "",
            paymentType: "PARSIAN_PAYMENT_GATEWAY_PROVIDER",
            time: "",
            operatorCode: "",
            subscriberNumber: "",
            mobileNumber: "",
            nationalCode: "",
            postalCode: "",
            isAmazing: "",
            fanava: false,
            parsian: true,
            fanavaClick: false,
            parsianClick: false,
        };
    }

    setPaymentParsian = () => {
        this.setState({
            fanavaClick: false,
            parsianClick: true,
            paymentType: "PARSIAN_PAYMENT_GATEWAY_PROVIDER",
        });
    };
    setPaymentFanava = () => {
        this.setState({
            fanavaClick: true,
            parsianClick: false,
            paymentType: "FANAVA_PAYMENT_GATEWAY_PROVIDER",
        });
    };
    sendData = () => {
        if (this.props.type === "CHARGE") {
            this.buyCharge();
        } else if (this.props.type === "INTERNET") {
            this.buyInternet();
        } else if (this.props.type === "BILL") {
            this.payBill();
        }
    };
    buyCharge = async () => {
        const data = {
            "operatorCode": this.props.operatorCode,
            "isAmazing": this.props.isAmazing,
            "mobileNumber": this.props.mobileNumber,
            "subscriberNumber": this.props.subscriberNumber,
            "sumOfAmount": this.props.sumOfAmount,
            "nationalCode": this.props.nationalCode,
            "postalCode": this.props.postalCode,
            "paymentGatewayProviderCode": this.state.paymentType,
            "terminalTypeCode": "INTERNET",
            "orderRequesterInfo": {
                "callBackURL": "http://shop.isuncharge.com",
                "traceCode": "",
            }
        };
        const loginList = this.props.loginList;
        let accesstoken = await login(loginList.username, loginList.password, loginList.clientId, loginList.clientSecret);
        try {
            const result = await axios.post(`http://shop.isuncharge.com/isunshop/register/charge-order?access_token=` + accesstoken, data);
            console.log(result);
            if (result.status === 200) {
                window.location = result.data.data.url;
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
            }
        }
    };

    buyInternet = async () => {
        const data = {};
        const loginList = this.props.loginList;
        let accesstoken = await login(loginList.username, loginList.password, loginList.clientId, loginList.clientSecret);
        try {
            const result = axios.post(`http://shop.isuncharge.com/isunshop/register/internet-package-order?access_token=` + accesstoken, data);
            if (result.status === 200) {
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
            }
        }
    };

    payBill = async () => {
        const data = {
            "mobileNumber": this.props.mobileNumber,
            "terminalTypeCode": "",
            "requesterDevicePlatformCode": "",
            "paymentGatewayProviderCode": this.state.paymentType,
            "billInfo": {
                "billId": this.props.billId,
                "paymentId": this.props.paymentId
            },
            "nationalCode": this.props.nationalCode,
            "postalCode": this.props.postalCode,
            "orderRequesterInfo": {
                "callBackURL": "http://shop.isuncharge.com",
                "traceCode": ""
            }
        };
        console.log(data)
        const loginList = this.props.loginList;
        let accesstoken = await login(loginList.username, loginList.password, loginList.clientId, loginList.clientSecret);
        try {
            const result = axios.post(`http://shop.isuncharge.com/isunshop/register/internet-package-order?access_token=` + accesstoken, data);
            if (result.status === 200) {
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
            }
        }
    };

    render() {
        const {languageParameter} = this.props;
        return (
            <div className="py-3">
                <div
                    className={languageParameter.rtl ? "row justify-content-center text-left" : "row justify-content-center text-right"}>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">{languageParameter.typeOfRequest}</label>
                        <input type="text" className="radius form-control" id="num1"
                               value={this.props.typeOfOrederText}
                        />
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">{languageParameter.price}</label>
                        <input type="text" className="radius form-control" id="num2"
                               value={this.props.priceText}
                        />
                    </div>
                </div>
                <div className="row justify-content-center pt-2 ">
                    <div className="form-group payment-item">
                        <label htmlFor="1">{languageParameter.PaymentGateway}</label>
                        <div className="row justify-content-center payment-item">
                            {this.state.parsian ?
                                <div
                                    className={this.state.parsianClick ? "py-1 mr-2 payment-rad border border-success image-style-payment" : "py-1 mr-2 payment-rad border border-dark image-style-payment"}>
                                    <img className=" payment img-fluid " onClick={((e) => this.setPaymentParsian(e))}
                                         src={require('./../img/Parsian.jpg')} alt=""/>
                                </div>
                                :
                                <div className={"py-1 mr-2 payment-opa border "}>
                                    <img className=" payment img-fluid "
                                         src={require('./../img/Parsian.jpg')} alt=""/>
                                </div>
                            }
                            {this.state.fanava ?
                                <div
                                    className={this.state.fanavaClick ? "py-1 payment-rad border border-success image-style-payment" : "py-1 payment-rad border border-dark image-style-payment"}>
                                    <img className=" payment img-fluid " onClick={((e) => this.setPaymentFanava(e))}
                                         src={require('./../img/fanava.png')} alt=""/>
                                </div>
                                :
                                <div
                                    className={"py-1 payment-opa border"}>
                                    <img className=" payment img-fluid "
                                         src={require('./../img/fanava.png')} alt=""/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="py-3 justify-content-center ">
                    <button onClick={this.sendData} type="button"
                            className="btn border button-item btn-success">{languageParameter.pay}
                    </button>
                </div>
                <p className={languageParameter.rtl ? " py-3 text-danger font-weight-bold" : " py-3 text-danger font-weight-bold font-custom-charge-bank"}>{languageParameter.bio}</p>
            </div>
        );
    }
}

export default paymentGetway;
