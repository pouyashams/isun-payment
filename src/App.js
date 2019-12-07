import React from 'react';
import Navbar from './components/navbar'
// import HomeBanner from "./components/home-banner";
import Services from "./components/services" ;
// import Agent from "./components/agent" ;
import {Controller, Scene} from 'react-scrollmagic';
// import Contact from "./components/contact";
import Footer from "./components/footer";
import './App.css';


class App extends React.Component {
    state =   {
        isTop: true,

        loginList: {
            username: "isun",
            password: "123456",
            clientId: "isun",
            clientSecret: "isunsecretforapi"
        },

        operatorCode: "",
        type: "",
        typeOfOrederText: "",

        subscriberNumber: "",
        mobileNumber: "",
        nationalCode: "",
        postalCode: "",

        sumOfAmount: "",
        priceText: "",

        isAmazing: "",
        language: "persian",
        languageParameter: {
            rtl: true,
            home: "خانه",
            services: "خدمات",
            aboutUs: "درباره ما",
            rules: "قوانین",
            chargeStore: "فروشگاه شارژ آیسان",
            typeOfRequest: "نوع درخواست",
            completeInformation: "تکمیل اطلاعات",
            payment: "پرداخت نهایی",
            charge: "شارژ مستقیم",
            internetPack: "بسته اینترنت",
            bill: "پرداخت قبض",
            amazingCharge: " شگفت انگیز",
            mobileNumber: "شماره موبایل خریدار",
            subscriberNumber: "شماره موبایل ذینفع",
            nationalCode: "شماره ملی خریدار",
            postalCode: "کد پستی خریدار",
            doHezar: "۲,۰۰۰ تومان",
            paHezar: "۵,۰۰۰ تومان",
            dahHezar: "۱۰,۰۰۰ تومان",
            bistHezar: "۲۰,۰۰۰ تومان",
            panjaHezar: "۵۰,۰۰۰ تومان",
            sadHezar: "۱۰۰,۰۰۰ تومان",
            typeOfSim: "نوع سیمکارت",
            internetPeriod: "مدت بسته",
            chooseInternetPeriod: "انتخاب بسته",
            billId: "شناسه قبض",
            paymentId: "شناسه پرداخت",
            confirm: "تایید",
            price: "قیمت (تومان)",
            PaymentGateway: "درگاه پرداخت",
            bio: "خرید با کلیه کارتهای بانکی امکان پذیر است",
            footer: "تمامی حقوق این سایت محفوظ میباشید",
        },

        paymentId: "",
        billId: "",
    };

    handelChange = (name, value) => {
        this.setState({[name]: value});
    };

    handelChangeLanguage = (name, value) => {
        const language = this.setLanguage(value);
        this.setState({[name]: value, languageParameter: language});
    };

    handelChangeLogo = (event, isOutEvent) => {
        console.log(isOutEvent);
    };

    setLanguage = (language) => {
        if (language === "persian") {
            const language = {
                rtl: true,
                home: "خانه",
                services: "خدمات",
                aboutUs: "درباره ما",
                rules: "قوانین",
                chargeStore: "فروشگاه شارژ آیسان",
                typeOfRequest: "نوع درخواست",
                completeInformation: "تکمیل اطلاعات",
                payment: "پرداخت نهایی",
                charge: "شارژ مستقیم",
                internetPack: "بسته اینترنت",
                bill: "پرداخت قبض",
                amazingCharge: " شگفت انگیز",
                mobileNumber: "شماره موبایل خریدار",
                subscriberNumber: "شماره موبایل ذینفع",
                nationalCode: "شماره ملی خریدار",
                postalCode: "کد پستی خریدار",
                doHezar: "۲,۰۰۰ تومان",
                paHezar: "۵,۰۰۰ تومان",
                dahHezar: "۱۰,۰۰۰ تومان",
                bistHezar: "۲۰,۰۰۰ تومان",
                panjaHezar: "۵۰,۰۰۰ تومان",
                sadHezar: "۱۰۰,۰۰۰ تومان",
                typeOfSim: "نوع سیمکارت",
                internetPeriod: "مدت بسته",
                chooseInternetPeriod: "انتخاب بسته",
                billId: "شناسه قبض",
                paymentId: "شناسه پرداخت",
                confirm: "تایید",
                price: "قیمت (تومان)",
                PaymentGateway: "درگاه پرداخت",
                bio: "خرید با کلیه کارتهای بانکی امکان پذیر است",
                footer: "تمامی حقوق این سایت محفوظ میباشید",
            };
            return language;

        } else if (language === "arabic") {

        } else if (language === "english") {
            const language = {
                rtl: false,
                home: "home",
                services: "services",
                aboutUs: "about us",
                rules: "rules",
                chargeStore: "ISUN CHARGE SHOP",
                typeOfRequest: "type of request",
                completeInformation: "extra  information",
                payment: "payment",
                charge: "direct charge",
                internetPack: "internet package",
                bill: "paying bill ",
                amazingCharge: "amazing charge",
                mobileNumber: "mobile number",
                subscriberNumber: "subscriber number",
                nationalCode: "national code",
                postalCode: "postal code",
                doHezar: "2,000 toman",
                paHezar: "5,000 toman",
                dahHezar: "10,000 toman",
                bistHezar: "20,000 toman",
                panjaHezar: "50,000 toman",
                sadHezar: "100,000 toman",
                typeOfSim: "type of simcard",
                internetPeriod: "internet period",
                chooseInternet: "choose package",
                billId: "billID",
                paymentId: "paymentID",
                confirm: "confirm",
                price: "price (toman)",
                PaymentGateway: "Payment gateway",
                bio: "It's possible to purchase with all bank cards",
                footer: "All rights reserved",
            };
            return language;
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({isTop})
            }
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid rtl pr-0 pl-0">
                    <Navbar
                        handelChangeLanguage={this.handelChangeLanguage}
                        languageParameter={this.state.languageParameter}
                        handleChangeLogo={this.handelChangeLogo}
                        colorInfo={{
                            bgColor: this.state.isTop ? 'dark' : 'dark',
                            color: this.state.isTop ? 'dark' : 'dark'
                        }}
                    />
                    <Controller globalSceneOptions={{triggerHook: 'onLeave'}}>

                        <Scene pin className="panel">
                            <Services
                                handelChange={this.handelChange}
                                operatorCode={this.state.operatorCode}
                                typeOfOrederText={this.state.typeOfOrederText}
                                type={this.state.type}
                                subscriberNumber={this.state.subscriberNumber}
                                mobileNumber={this.state.mobileNumber}
                                nationalCode={this.state.nationalCode}
                                postalCode={this.state.postalCode}
                                sumOfAmount={this.state.sumOfAmount}
                                priceText={this.state.priceText}
                                isAmazing={this.state.isAmazing}
                                loginList={this.state.loginList}
                                languageParameter={this.state.languageParameter}
                            />
                        </Scene>
                    </Controller>
                    <Footer
                        languageParameter={this.state.languageParameter}

                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;

