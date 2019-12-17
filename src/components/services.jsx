import React from 'react';
import Irancell from "./irancell-item"
import Operators from "./other-operators-item"
import Internet from "./internet-package"
import Bill from "./bill-payment"
import Payment from "./payment-getway"
import axios from "axios/index";
import {login} from "../services/loginService";

class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            irancellCharge: true,
            operatorsCharge: false,
            bill: false,
            internetPack: false,
            isOpacity: false,
        };
        this.showIrancellCharge = this.showIrancellCharge.bind(this);
        this.showOperatorsCharge = this.showOperatorsCharge.bind(this);
        this.showInternetPack = this.showInternetPack.bind(this);
        this.showBill = this.showBill.bind(this);
    }

    showDirectCharge(e) {
        this.handleClick(e);
        this.setState({
            irancellCharge: true,
            operatorsCharge: false,
            bill: false,
            internetPack: false
        });
        this.props.handelChange("operatorCode", "IRANCELL")
        this.props.handelChange("type", "CHARGE")
        this.props.handelChange("sumOfAmount", 20000);
        this.props.handelChange("priceText", "2,000");
        this.props.handelChange("typeOfOrederText", "شارژ مستقیم");
        this.props.handelChange('isAmazing', false);
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");

    };

    componentDidMount() {

        this.props.handelChange("sumOfAmount", 20000);
        this.props.handelChange("priceText", "2,000");
        this.props.handelChange("typeOfOrederText", this.props.languageParameter.charge)
        this.props.handelChange("type", "CHARGE");
        this.props.handelChange('isAmazing', false);
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");
        this.props.handelChange("operatorCode", "IRANCELL")
    };

    showIrancellCharge(e, operatorCode) {
        this.handleClickImage(e);
        this.setState({
            irancellCharge: true,
            operatorsCharge: false,
            bill: false,
            internetPack: false
        });
        this.props.handelChange("operatorCode", operatorCode)
        this.props.handelChange("type", "CHARGE")
        this.props.handelChange("sumOfAmount", 20000);
        this.props.handelChange("priceText", "2,000");
        this.props.handelChange("typeOfOrederText", this.props.languageParameter.charge)
        this.props.handelChange('isAmazing', false);
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");
    };

    showOperatorsCharge(e, operatorCode) {
        this.handleClickImage(e);
        this.setState({
            irancellCharge: false,
            operatorsCharge: true,
            bill: false,
            internetPack: false
        });
        if (operatorCode === "MCI") {
            this.props.handelChange("typeOfOrederText", this.props.languageParameter.mciCharge)
        } else if (operatorCode === "RIGHTEL") {

            this.props.handelChange("typeOfOrederText", this.props.languageParameter.rightelCharge)
        } else if (operatorCode === "SAMANTEL") {
            this.props.handelChange("typeOfOrederText", this.props.languageParameter.samantelCharge)
        }
        this.props.handelChange("operatorCode", operatorCode)
        this.props.handelChange("type", "CHARGE")
        this.props.handelChange("sumOfAmount", 20000);
        this.props.handelChange("priceText", "2,000");
        this.props.handelChange('isAmazing', false);
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");
    }

    async showNetPack(e) {
        this.handleClick(e);
        this.setState({
            irancellCharge: false,
            operatorsCharge: false,
            bill: false,
            internetPack: true,
        })
        this.props.handelChange("typeOfOrederText", this.props.languageParameter.internetPack)
        this.props.handelChange("type", "INTERNET")
        this.props.handelChange("operatorCode", "IRANCELL")
        this.props.handelChange("sumOfAmount", 0);
        this.props.handelChange("priceText", "0");
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");

        this.props.handelChange('typeOfSim', "");
        this.props.handelChange('packTime', "");
        this.props.handelChange('pack', "");
        const data = {
            "operatorCode": "IRANCELL"
        };
        const loginList = this.props.loginList;
        let accesstoken = await login(loginList.username, loginList.password, loginList.clientId, loginList.clientSecret);
        try {
            const result = await axios.post(`http://shop.isuncharge.com/isunshop/fetch/all-internet-package?access_token=` + accesstoken, data);
            if (result.status === 200) {
                this.props.handelChange('netPack', result.data.data);
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
            }
        }
    };

    async showInternetPack(e, operatorCode) {
        this.handleClickImage(e);
        this.setState({
            irancellCharge: false,
            operatorsCharge: false,
            bill: false,
            internetPack: true
        });


        this.props.handelChange("operatorCode", operatorCode)
        this.props.handelChange("type", "INTERNET")
        if (operatorCode === "MCI") {
            this.props.handelChange("typeOfOrederText", this.props.languageParameter.mciNetPack)
        } else if (operatorCode === "RIGHTEL") {
            this.props.handelChange("typeOfOrederText", this.props.languageParameter.rightelNetPack)
        } else if (operatorCode === "SAMANTEL") {
            this.props.handelChange("typeOfOrederText", this.props.languageParameter.samantelNetPack)
        } else if (operatorCode === "IRANCELL") {
            this.props.handelChange("typeOfOrederText", this.props.languageParameter.irancellNetPack)
        }
        this.props.handelChange("sumOfAmount", 0);
        this.props.handelChange("priceText", "0");
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");
        this.props.handelChange('typeOfSim', "");
        this.props.handelChange('packTime', "");
        this.props.handelChange('pack', "");

        const data = {
            "operatorCode": operatorCode
        };
        const loginList = this.props.loginList;
        let accesstoken = await login(loginList.username, loginList.password, loginList.clientId, loginList.clientSecret);
        try {
            const result = await axios.post(`http://shop.isuncharge.com/isunshop/fetch/all-internet-package?access_token=` + accesstoken, data);
            if (result.status === 200) {
                this.props.handelChange('netPack', result.data.data);
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
            }
        }
    };

    showPaymentBill(e) {
        this.handleClick(e);
        this.setState({
            irancellCharge: false,
            operatorsCharge: false,
            bill: true,
            internetPack: false
        })
        this.props.handelChange("type", "BILL")
        this.props.handelChange("typeOfOrederText", this.props.languageParameter.bill)
        this.props.handelChange("sumOfAmount", 0);
        this.props.handelChange("priceText", "0");
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");
    };

    showBill(e) {
        this.handleClickBill(e);
        this.setState({
            irancellCharge: false,
            operatorsCharge: false,
            bill: true,
            internetPack: false
        });
        this.props.handelChange("type", "BILL")
        this.props.handelChange("typeOfOrederText", this.props.languageParameter.bill)
        this.props.handelChange("sumOfAmount", 0);
        this.props.handelChange("priceText", "0");
        this.props.handelChange('postalCode', "");
        this.props.handelChange('subscriberNumber', "");
        this.props.handelChange('nationalCode', "");
        this.props.handelChange('mobileNumber', "");
    };

    handleClick = (e) => {
        let elements = document.getElementsByClassName("actionTypeItem");
        for (let i = 0; i < elements.length; i++) {
            elements[i].className += " opacity-item";
        }
        let parent = e.target.parentNode.parentNode;
        for (let i = 0; i < parent.childNodes.length; i++) {
            parent.childNodes[i].classList.remove("opacity-item");
        }

        let titles = document.getElementsByClassName("actionTypeTitle");
        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.remove("item-style-selected");
        }
        e.target.parentNode.className += " item-style-selected";

    };
    handleClickBill = (e) => {
        let elements = document.getElementsByClassName("actionTypeItem");
        for (let i = 0; i < elements.length; i++) {
            elements[i].className += " opacity-item";
        }
        let parent = e.target.parentNode.parentNode;
        for (let i = 0; i < parent.childNodes.length; i++) {
            parent.childNodes[i].classList.remove("opacity-item");
        }

        let titles = document.getElementsByClassName("actionTypeTitle");
        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.remove("item-style-selected");
        }
        // e.target.parentNode.className += " item-style-selected";
    };
    handleClickImage = (e) => {
        let elements = document.getElementsByClassName("actionTypeItem");
        for (var i = 0; i < elements.length; i++) {
            elements[i].className += " opacity-item";
        }
        e.target.parentNode.classList.remove("opacity-item");
        let parent = e.target.parentNode.parentNode;
        let titles = document.getElementsByClassName("actionTypeTitle");
        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.remove("item-style-selected");
        }

        for (let i = 0; i < parent.childNodes.length; i++) {
            if (parent.childNodes[i].className.indexOf("actionTypeTitle") > 0) {
                parent.childNodes[i].classList.remove("opacity-item");
                parent.childNodes[i].className += " item-style-selected";
            }
        }
    };

    render() {
        const {languageParameter} = this.props;
        return (
            <section>
                <div className="justify-content-center py-5 services text-center">
                    <div className="row justify-content-center">
                        <div className="justify-content-center feature-item-first">
                            <div className=" ml-20 shadow border radius-first">
                                <h3 className=" col-12 py-3 services-title">{languageParameter.typeOfRequest}</h3>
                                <div className="row py-4 mb-1 actionType">
                                    <div className=" item-style border actionTypeItem actionTypeTitle">
                                        <span
                                            className={languageParameter.rtl ? "font-weight-bold" : " font-custom font-weight-bold"}
                                            onClick={((e) => this.showDirectCharge(e))}>{languageParameter.charge}</span>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid"
                                             onClick={((e) => this.showIrancellCharge(e, "IRANCELL"))}
                                             src={require('./../img/Irancell_Logo.gif')} alt=""/>
                                    </div>
                                    <div className="  image-style actionTypeItem">
                                        <img className=" border download-app img-fluid "
                                             onClick={((e) => this.showOperatorsCharge(e, "MCI"))}
                                             src={require('./../img/hamrahAval.jpg')} alt=""/>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid "
                                             onClick={((e) => this.showOperatorsCharge(e, "RIGHTEL"))}
                                             src={require('./../img/rightel.png')} alt=""/>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid "
                                             onClick={((e) => this.showOperatorsCharge(e, "SAMANTEL"))}
                                             src={require('./../img/samanTel.jpg')} alt=""/>
                                    </div>
                                </div>

                                <div className="row py-4 mb-1 actionType">
                                    <div className=" item-style border actionTypeItem actionTypeTitle">
                                        <span
                                            className={languageParameter.rtl ? "font-weight-bold" : " font-custom-net font-weight-bold"}
                                            onClick={((e) => this.showNetPack(e))}>{languageParameter.internetPack}</span>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid "
                                             onClick={((e) => this.showInternetPack(e, "IRANCELL"))}
                                             src={require('./../img/Irancell_Logo.gif')} alt=""/>
                                    </div>
                                    <div className="  image-style actionTypeItem">
                                        <img className=" border download-app img-fluid "
                                             onClick={((e) => this.showInternetPack(e, "MCI"))}
                                             src={require('./../img/hamrahAval.jpg')} alt=""/>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid "
                                             onClick={((e) => this.showInternetPack(e, "RIGHTEL"))}
                                             src={require('./../img/rightel.png')} alt=""/>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid "
                                             onClick={((e) => this.showInternetPack(e, "SAMANTEL"))}
                                             src={require('./../img/samanTel.jpg')} alt=""/>
                                    </div>
                                </div>
                                <div className="row py-4 mb-3 actionType">
                                    <div className=" item-style border actionTypeItem actionTypeTitle">
                                        <span
                                            className={languageParameter.rtl ? "font-weight-bold" : " font-custom font-weight-bold"}
                                            onClick={((e) => this.showPaymentBill(e))}>{languageParameter.bill}
                                        </span>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid " onClick={((e) => this.showBill(e))}
                                             src={require('./../img/waterBill.jpg')} alt=""/>
                                    </div>
                                    <div className="  image-style actionTypeItem">
                                        <img className=" download-app img-fluid " onClick={((e) => this.showBill(e))}
                                             src={require('./../img/elcbill.jpg')} alt=""/>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" border download-app img-fluid "
                                             onClick={((e) => this.showBill(e))} src={require('./../img/NIOC.png')}
                                             alt=""/>
                                    </div>
                                    <div className=" image-style actionTypeItem">
                                        <img className=" download-app img-fluid " onClick={((e) => this.showBill(e))}
                                             src={require('./../img/Tci-Arm-Larg.jpg')} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-item-first  ">
                            <div className="ml-20 shadow border radius-second">
                                <h3 className=" services-title">{languageParameter.completeInformation}</h3>
                                {this.state.irancellCharge === true ?
                                    <Irancell
                                        handelChange={this.props.handelChange}
                                        languageParameter={this.props.languageParameter}
                                    />
                                    : this.state.operatorsCharge === true ?
                                        <Operators
                                            handelChange={this.props.handelChange}
                                            languageParameter={this.props.languageParameter}
                                        />
                                        : this.state.bill === true ?
                                            <Bill
                                                handelChange={this.props.handelChange}
                                                languageParameter={this.props.languageParameter}
                                            />
                                            : this.state.internetPack ?
                                                <Internet
                                                    languageParameter={this.props.languageParameter}
                                                    operatorCode={this.props.operatorCode}
                                                    netPack={this.props.netPack}
                                                    packTime={this.props.packTime}
                                                    pack={this.props.pack}
                                                    typeOfSim={this.props.typeOfSim}
                                                    handelChange={this.props.handelChange}
                                                />
                                                : null}
                            </div>
                        </div>
                        <div className="feature-item-first ">
                            <div className="ml-20 shadow border radius-third">
                                <h3 className="services-title"> {languageParameter.payment} </h3>
                                <Payment
                                    operatorCode={this.props.operatorCode}
                                    typeOfOrederText={this.props.typeOfOrederText}
                                    type={this.props.type}
                                    subscriberNumber={this.props.subscriberNumber}
                                    mobileNumber={this.props.mobileNumber}
                                    nationalCode={this.props.nationalCode}
                                    postalCode={this.props.postalCode}
                                    sumOfAmount={this.props.sumOfAmount}
                                    priceText={this.props.priceText}
                                    isAmazing={this.props.isAmazing}
                                    loginList={this.props.loginList}
                                    languageParameter={this.props.languageParameter}
                                    paymentId={this.props.paymentId}
                                    billId={this.props.billId}
                                    pack={this.props.pack}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
