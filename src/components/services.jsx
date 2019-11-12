import React from 'react';
import Irancell from "./irancell-item"
import Operators from "./other-operators-item"
import Internet from "./internet-package"
import Bill from "./bill-payment"
import Payment from "./payment-getway"

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            irancellCharge:true,
            operatorsCharge:false,
            bill:false,
            internetPack:false,
            isOpacity:false,
        };
        this.showIrancellCharge = this.showIrancellCharge.bind(this);
        this.showOperatorsCharge = this.showOperatorsCharge.bind(this);
        this.showInternetPack = this.showInternetPack.bind(this);
        this.showBill = this.showBill.bind(this);

    }

    showDirectCharge(e){
        this.handleClick(e);
        this.setState({
            irancellCharge:true,
            operatorsCharge:false,
            bill:false,
            internetPack:false
        })
    };
    showNetPack(e){
        this.handleClick(e);
        this.setState({
            irancellCharge:false,
            operatorsCharge:false,
            bill:false,
            internetPack:true
        })
    };
    showPaymentBill(e){
        this.handleClick(e);
        this.setState({
            irancellCharge:false,
            operatorsCharge:false,
            bill:true,
            internetPack:false
        })
    };

    showIrancellCharge(e,operatorCode){
        this.handleClickImage(e);
        this.setState({
            irancellCharge:true,
            operatorsCharge:false,
            bill:false,
            internetPack:false
        });
        localStorage.removeItem('operatorCode');
        localStorage.removeItem('type');
        localStorage.setItem('operatorCode', operatorCode);
        localStorage.setItem('type', "charge");
    };
    showOperatorsCharge(e,operatorCode){
        this.handleClickImage(e);
        this.setState({
            irancellCharge:false,
            operatorsCharge:true,
            bill:false,
            internetPack:false
        });
        localStorage.removeItem('operatorCode');
        localStorage.removeItem('type');
        localStorage.setItem('operatorCode', operatorCode);
        localStorage.setItem('type', "charge");
    }
    showInternetPack(e,operatorCode){
        this.handleClickImage(e);
        this.setState({
            irancellCharge:false,
            operatorsCharge:false,
            bill:false,
            internetPack:true
        });
        localStorage.removeItem('operatorCode');
        localStorage.removeItem('type');
        localStorage.setItem('operatorCode', operatorCode);
        localStorage.setItem('type', "internet");

    };
    showBill(e){
        this.handleClickImage(e);
        this.setState({
            irancellCharge:false,
            operatorsCharge:false,
            bill:true,
            internetPack:false
        });
        localStorage.removeItem('type');
        localStorage.setItem('type', "bill");
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
    handleClickImage = (e) => {
        console.log(e.target.className);
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
    }

    render() {
        return (
            <section>
                <div className="justify-content-center py-5 services text-center">
                    <div className="row justify-content-center">
                            <div className="justify-content-center feature-item-first">
                                <div className=" ml-20  border radius-first">
                                    <h3 className=" col-12 py-3 services-title"> نوع درخواست</h3>
                                    <div className="row py-4 mb-1 actionType">
                                        <div className=" item-style border actionTypeItem actionTypeTitle">
                                            <span className=" font-weight-bold" onClick={((e) => this.showDirectCharge(e))} >شارژ مستقیم</span>
                                        </div>
                                        <div  className=" image-style actionTypeItem" >
                                            <img  className=" download-app img-fluid" onClick={((e) => this.showIrancellCharge(e,"IRANCELL"))} src={require('./../img/Irancell_Logo.gif')} alt=""/>
                                        </div>
                                        <div  className="  image-style actionTypeItem" >
                                            <img className=" border download-app img-fluid " onClick={((e) => this.showOperatorsCharge(e,"MCI"))} src={require('./../img/Hamrahe_Aval_logo.png')} alt=""/>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img className=" download-app img-fluid " onClick={((e) => this.showOperatorsCharge(e,"RIGHTEL"))} src={require('./../img/rightel.png')} alt=""/>
                                        </div>
                                        <div  className=" image-style actionTypeItem" >
                                            <img className=" download-app img-fluid " onClick={((e) => this.showOperatorsCharge(e,"SAMANTEL"))} src={require('./../img/samanTel.jpg')} alt=""/>
                                        </div>
                                    </div>

                                    <div className="row py-4 mb-1 actionType">
                                        <div className=" item-style border actionTypeItem actionTypeTitle">
                                            <span className="py-2 font-weight-bold " onClick={((e) => this.showNetPack(e))}>بسته اینترنت</span>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img  className=" download-app img-fluid " onClick={((e) => this.showInternetPack(e,"IRANCELL"))} src={require('./../img/Irancell_Logo.gif')} alt=""/>
                                        </div>
                                        <div className="  image-style actionTypeItem" >
                                            <img className=" border download-app img-fluid " onClick={((e) => this.showInternetPack(e,"MCI"))} src={require('./../img/Hamrahe_Aval_logo.png')} alt=""/>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img className=" download-app img-fluid "  onClick={((e) => this.showInternetPack(e,"RIGHTEL"))} src={require('./../img/rightel.png')} alt=""/>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img className=" download-app img-fluid " onClick={((e) => this.showInternetPack(e,"SAMANTEL"))} src={require('./../img/samanTel.jpg')} alt=""/>
                                        </div>
                                    </div>
                                    <div className="row py-4 mb-3 actionType">
                                        <div  className=" item-style border actionTypeItem actionTypeTitle">
                                        <span className="py-2 font-weight-bold " onClick={((e) => this.showPaymentBill(e))}>پرداخت قبض
                                        </span>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img  className=" download-app img-fluid " onClick={((e) => this.showBill(e))} src={require('./../img/waterBill.jpg')} alt=""/>
                                        </div>
                                        <div className="  image-style actionTypeItem" >
                                            <img className=" download-app img-fluid " onClick={((e) => this.showBill(e))} src={require('./../img/elcbill.jpg')} alt=""/>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img className=" border download-app img-fluid " onClick={((e) => this.showBill(e))} src={require('./../img/NIOC.png')} alt=""/>
                                        </div>
                                        <div className=" image-style actionTypeItem" >
                                            <img className=" download-app img-fluid " onClick={((e) => this.showBill(e))} src={require('./../img/Tci-Arm-Larg.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-item-first  ">
                                <div className="ml-20  border radius-second">
                                    <h3 className=" services-title"> تکمیل اطلاعات</h3>
                                    {this.state.irancellCharge===true?
                                        <Irancell/>
                                        :this.state.operatorsCharge===true?
                                            <Operators/>
                                            :this.state.bill===true?
                                                <Bill/>
                                                :this.state.internetPack?
                                                    <Internet/>
                                                    :null}
                                </div>
                            </div>

                            <div className="feature-item-first">
                                <div className="ml-20 border radius-third">
                                    <h3 className="services-title"> پرداخت نهایی </h3>
                                    <Payment/>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
