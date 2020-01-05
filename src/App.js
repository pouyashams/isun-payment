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
import {setLanguage} from './setLanguage'
import Img from 'react-image'

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
        const language = setLanguage();
        this.setState({languageParameter: language});
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
            const language = setLanguage();
            this.setState({languageParameter: language});
        } else {
            const language = setLanguage();
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
                <div className="margin-enamad">
                    <a target="_blank"
                       href="https://trustseal.enamad.ir/?id=21183&amp;Code=OGERIqdPmMkIhRNjoueR">
                        <img
                            className="img-style"
                            src="https://Trustseal.eNamad.ir/logo.aspx?id=21183&amp;Code=OGERIqdPmMkIhRNjoueR"
                            alt=""
                            id="OGERIqdPmMkIhRNjoueR"
                        />
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(App);

