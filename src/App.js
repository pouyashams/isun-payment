import React from 'react';
import Navbar from './components/navbar'
import Services from "./components/services" ;
import Footer from "./components/footer";
import Rule from "./components/rule-page";
import ContactPage from "./components/contact-page";
import './App.css';
import {Switch, Redirect, Route, withRouter, BrowserRouter} from 'react-router-dom';
import SuccessPayment from './components/success-page';
import ErrorPayment from './components/error-page';
// import Modal from 'react-modal';


class App extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
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
            languageParameter: "",
            paymentId: "",
            billId: "",
            netPack: "",
            packTime: "",
            pack: "",
            typeOfSim: "",
        };
    };


    handelChange = (name, value) => {
        this.setState({[name]: value});
    };

    handelChangeLanguage = (name, value) => {
        sessionStorage.setItem('language', value);
        const language = this.setLanguage();
        this.setState({languageParameter: language});
    };

    setLanguage = () => {
        const language = sessionStorage.getItem('language');
        if (language === "persian") {
            const language = {
                rtl: true,
                home: "خانه",
                Credit: "اعتباری",
                Permanent: "دائمی",
                hourly: "ساعتی",
                Daily: "روزانه",
                threeDaily: "3 روزه",
                fourMonths: "4 ماهه",
                twoMonthly: "2 ماهه",
                Weekly: "هفتگی",
                monthly: "ماهانه",
                sixMonths: "6 ماه",
                threeMonths: "3 ماهه",
                yearly: "سالانه",
                services: "خدمات",
                aboutUs: "تماس با ما",
                rules: "قوانین",
                chargeStore: "فروشگاه شارژ آیسان",
                typeOfRequest: "نوع درخواست",
                completeInformation: "تکمیل اطلاعات",
                payment: "پرداخت نهایی",
                charge: "شارژ مستقیم",
                internetPack: "بسته اینترنت",
                bill: "پرداخت قبض",
                pay: "پرداخت",
                amazingCharge: " شگفت انگیز",
                mobileNumber: "شماره موبایل خریدار",
                subscriberNumber: "شماره موبایل ذینفع",
                nationalCode: "شماره ملی خریدار",
                postalCode: "کد پستی خریدار",
                doHezar: "۲,۰۰۰ تومان",
                panjHezar: "۵,۰۰۰ تومان",
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
                bio: "(خرید با کلیه کارتهای بانکی امکان پذیر است)",
                footer: "تمامی حقوق این سایت محفوظ میباشید",
                waterBill: "قبض آب",
                ElectricBill: "قبض برق",
                gasBill: "قبض گاز",
                LandlinePhoneBill: "قبض تلفن ثابت",
                PhoneBill: "قبض موبایل همراه",
                mciCharge: "شارژ همراه اول",
                samantelCharge: "شارژ سامانتل",
                rightelCharge: "شارژ رایتل",
                mciNetPack: "بسته همراه اول",
                samantelNetPack: "بسته سامانتل",
                rightelNetPack: "بسته رایتل",
                irancellNetPack: "بسته ایرانسل",
                ruleTitle: "قوانین استفاده از خدمات فروشگاه",
                contactTitle: "تماس با ما",
                choose: "انتخاب کنید",
                ruleItems: [
                    "تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت خدمات همراه آیسان می باشد.",
                    "سرویس های ارائه شده در این وبسایت با مجوز از تمامی از ارگان‌ها و سازمان‌های نظارتی ارائه شده است.",
                    "هرگونه اشتباه در وارد کردن اطلاعات توسط مشتریان بر عهده مشتریان می باشد.",
                    "شرکت آیسان حق هرگونه تغییر و یا حذف سرویس را برای خود محفوظ می‌داند.",
                    "شرکت آیسان وظیفه دارد تا در صورت تایید پرداخت توسط شبکه شاپرک سرویس مورد نظر مشتری را اعم از پرداخت قبض، شارژ و‌... در اسرع وقت ارائه نماید. در غیر اینصورت ظرف مدت 72 ساعت نسبت به عودت وجه به مشتری مورد نظر اقدام خواهد شد.",
                    "در صورتی که مبلغ مورد نظر سرویس از حساب مشتریان کسر و سرویس مورد نظر به مشتری ارائه شود مراجع تایید ارائه سرویس اپراتور سرویس دهنده یا سازمان ارائه دهنده سرویس می باشند. در صورت استعلام و تایید شدن ارائه سرویس آیسان مسولیتی در قبال عدم ارائه سرویس نخواهد داشت.",
                    "تمامی اطلاعات پرداخت اعم از شماره کارت، رمز اینترنتی و.... توسط شبکه شاپرک دریافت خواهد شد و آیسان حق هیچ گونه ذخیره سازی در این مورد را نخواهد داشت.",
                    "استفاده از سرویس‌های وبسایت به منزله پذیرفتن قوانین و هم چنین عضویت در لیست مشتریان شرکت آیسان می‌باشد."
                ],
                contactItems: " جهت تماس با ما می توانید از راه های زیر اقدام فرمایید.\n" +
                "تلفن پشتیبانی : 021-22924567\n" +
                "نمابر : 22906883\n" +
                "ایمیل : info@isuncorp.com\n" +
                "تلگرام : 09100051482\n" +
                "نشانی : تهران - خیابان ظفر - پلاک 262 - طبقه 3 - واحد 8"
            };
            return language;

        } else if (language === "arabic") {

        } else if (language === "english") {
            const language = {
                rtl: false,
                home: "home",
                Credit: "pre Paid",
                Permanent: "post Paid",
                Daily: "daily",
                hourly: "hourly",
                Weekly: "weekly",
                threeDaily: "3 days",
                fourMonths: "4 months",
                twoMonthly: "2 months",
                monthly: "monthly",
                sixMonths: "6 months",
                threeMonths: "3 months",
                yearly: "yearly",
                services: "services",
                aboutUs: "contact us",
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
                doHezar: " 2,000 ",
                panjHezar: " 5,000",
                dahHezar: " 10,000",
                bistHezar: " 20,000",
                panjaHezar: " 50,000",
                sadHezar: " 100,000",
                typeOfSim: "type of simcard",
                internetPeriod: "internet period",
                chooseInternet: "choose package",
                billId: "bill ID",
                paymentId: "payment ID",
                confirm: "confirm",
                price: "(toman) price ",
                pay: "pay",
                PaymentGateway: "Payment gateway",
                bio: "(It's possible to purchase with all bank cards)",
                footer: "All rights reserved",
                waterBill: "water bill",
                ElectricBill: "electric bill",
                gasBill: "gas bill",
                LandlinePhoneBill: "landline phone bill",
                PhoneBill: "phone bill",
                mciCharge: "mci charge",
                samantelCharge: "samantel charge",
                rightelCharge: "rightel charge",
                mciNetPack: "mci internet",
                samantelNetPack: "samantel internet",
                rightelNetPack: "rightel internet",
                irancellNetPack: "irancell internet",
                chooseInternetPeriod: "choose internet",
                ruleItems: [
                    "de", "wde", "wde",
                ],
                contactTitle: "contact us",
                choose: "choose",
                ruleTitle: "terms and conditions",
                contactItems: " pouya\n" +
                "pouya: 021-22924567\n"


            };
            return language;
        }
    };

    // afterOpenModal() {
    //     this.subtitle.style.color = '#f00';
    // }
    //
    // closeModal() {
    //     this.setState({modalIsOpen: false});
    // }

    componentDidMount() {
        if (sessionStorage.getItem('language') === null || sessionStorage.getItem('language') === "" || sessionStorage.getItem('language') === undefined) {
            sessionStorage.setItem('language', 'persian');
            const language = this.setLanguage();
            this.setState({languageParameter: language});
        } else {
            const language = this.setLanguage();
            this.setState({languageParameter: language});
        }


        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({isTop})
            }
        });
    }


    render() {
        // const customStyles = {
        //     content: {
        //         top: '50%',
        //         left: '50%',
        //         right: 'auto',
        //         bottom: 'auto',
        //         marginRight: '-50%',
        //         transform: 'translate(-50%, -50%)',
        //         minWidth: "450px",
        //         height:"450px",
        //         borderRadius: "15px 15px 15px 15px",
        //         overflow:"hidden"
        //     }
        // };
        return (
            <React.Fragment>
                <div className="container-fluid rtl pr-0 pl-0">
                    {/*<Modal*/}
                           {/*isOpen={true}*/}
                        {/*// onAfterOpen={this.afterOpenModal}*/}
                        {/*// onRequestClose={this.closeModal}*/}
                           {/*style={customStyles}*/}
                           {/*contentLabel="Example Modal"*/}
                    {/*>*/}
                        {/*<h3 className="text-center pb-3" ref={subtitle => this.subtitle = subtitle}>تخفیف ویژه</h3>*/}
                        {/*<img className=" modal-image img-fluid "*/}
                             {/*src={require('./img/rightel.png')} alt=""/>*/}
                        {/*<div className="row pt-3 justify-content-center">*/}
                            {/*<div className="py-3 px-2 justify-content-center ">*/}
                                {/*<button onClick={this.sendData} type="button"*/}
                                        {/*className="btn border button-item btn-danger">بستن*/}
                                {/*</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</Modal>*/}
                    <Navbar
                        handelChange={this.handelChange}
                        handelChangeLanguage={this.handelChangeLanguage}
                        languageParameter={this.state.languageParameter}
                        colorInfo={{
                            bgColor: this.state.isTop ? 'dark' : 'dark',
                            color: this.state.isTop ? 'dark' : 'dark'
                        }}
                    />
                    <BrowserRouter>
                        <Switch>

                            <Route path="/contact-us" render={() => (
                                <ContactPage
                                    languageParameter={this.state.languageParameter}
                                />
                            )}/>
                            <Route path="/rule" render={() => (
                                <Rule
                                    languageParameter={this.state.languageParameter}
                                />
                            )}/>

                            <Route path="/success" render={(routeProps) => (
                                <SuccessPayment
                                    {...routeProps}
                                />
                            )}/>
                            <Route path="/error" render={(routeProps) => (
                                <ErrorPayment
                                    {...routeProps}
                                />
                            )}/>

                            <Route path="/home" render={() => (
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
                                    paymentId={this.state.paymentId}
                                    billId={this.state.billId}
                                    netPack={this.state.netPack}
                                    packTime={this.state.packTime}
                                    pack={this.state.pack}
                                    typeOfSim={this.state.typeOfSim}
                                />
                            )}/>
                            <Route path="/" render={() => (
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
                                    paymentId={this.state.paymentId}
                                    billId={this.state.billId}
                                    netPack={this.state.netPack}
                                    packTime={this.state.packTime}
                                    pack={this.state.pack}
                                    typeOfSim={this.state.typeOfSim}
                                />
                            )}/>
                            <Redirect to="/not-found"/>
                        </Switch>
                    </BrowserRouter>
                    <Footer
                        languageParameter={this.state.languageParameter}

                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(App);

