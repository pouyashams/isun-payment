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
        };
    }

    handelChangeSelect = (value, name) => {
        this.setState({[name]: value});
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
        // const data = {
        //     "operatorCode": this.props.operatorCode,
        //     "isAmazing": this.props.isAmazing,
        //     "mobileNumber": this.props.mobileNumber,
        //     "subscriberNumber": this.props.subscriberNumber,
        //     "sumOfAmount": this.props.sumOfAmount,
        //     "nationalCode": this.props.nationalCode,
        //     "postalCode": this.props.postalCode,
        //     "paymentGatewayProviderCode": this.state.paymentType,
        //     "requesterDevicePlatformCode": "WEB",
        //     "orderRequesterInfo": {
        //         "callBackURL": "http://shop.isuncharge.com",
        //         "traceCode": "",
        //     }
        // };
        const data = {
            "operatorCode": "MCI",
            "isAmazing": false,
            "mobileNumber": "09398938040",
            "subscriberNumber": "09398938040",
            "sumOfAmount": "20000",
            // "nationalCode": "0020554451",
            // "postalCode": "1111111111",
            "terminalRypeCode":"MOBILE",
            "paymentGatewayProviderCode": "PARSIAN_PAYMENT_GATEWAY_PROVIDER",
            "requesterDevicePlatformCode": "ANDROID",
            "orderRequesterInfo": {
                "callBackURL": "http://shop.isuncharge.com",
                "traceCode": "",
            }
        };
        console.log(data,"pooxooo");
        const loginList = this.props.loginList;
        let accesstoken = await login(loginList.username, loginList.password, loginList.clientId, loginList.clientSecret);
        try {
            const result = axios.post(`http://shop.isuncharge.com/isunshop/register/charge-order?access_token=` + accesstoken, data);
            if (result.status === 200) {
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
        return (
            <div className="py-3">
                <div className="row justify-content-center text-left">
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1"> نوع درخواست</label>
                        <input type="text" className="radius form-control" id="num1"
                               value={this.props.typeOfOrederText}
                        />
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">قیمت (تومان)</label>
                        <input type="text" className="radius form-control" id="num2"
                               value={this.props.priceText}
                        />
                    </div>
                </div>
                <div className="row justify-content-center py-2 text-left">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="1">درگاه پرداخت</label>
                        <select className="form-control radius" id="1"

                                onChange={((e) => this.handelChangeSelect(e.target.value, "paymentType"))}
                        >
                            {[{value: "PARSIAN_PAYMENT_GATEWAY_PROVIDER", title: "پارسیان", selected: true}, {
                                value: "FANAVA_PAYMENT_GATEWAY_PROVIDER",
                                title: "فن آوا",
                                selected: false
                            }].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.value === this.state.typeOfSim}>{option.title}</option>)
                                })}
                        </select>
                    </div>
                </div>
                <div className="py-3 justify-content-center ">
                    <button onClick={this.sendData} type="button"
                            className="btn border button-item btn-success">پرداخت
                    </button>
                </div>
                <p className=" py-3 text-danger font-weight-bold">(خرید با کلیه کارت های بانکی امکان پذیر است)</p>
            </div>
        );
    }
}
export default paymentGetway;
