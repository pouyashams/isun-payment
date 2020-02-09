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
import Modal from 'react-modal';


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
            modalIsOpen: false,
            modalIsOpenApk: false,
            modalIsOpenRecovered: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.closeModalApk = this.closeModalApk.bind(this);
        this.closeModalRecovered = this.closeModalRecovered.bind(this);

    };


    handelChange = (name, value) => {
        this.setState({[name]: value});
    };

    handelChangeLanguage = (name, value) => {
        sessionStorage.setItem('language', value);
        const language = setLanguage();
        this.setState({languageParameter: language});
    };
    showRecoveredModal = () => {
        this.setState({modalIsOpenRecovered: true});
    };

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    closeModalApk() {
        this.setState({modalIsOpenApk: false});
    }

    closeModalRecovered() {
        this.setState({modalIsOpenRecovered: false});
    }

    componentDidMount() {
        if (window.navigator.standalone!==true) {
            if (
                navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
            ) {
                this.setState({modalIsOpen: true});
            }
            if(navigator.userAgent.match(/Android/i)){
                this.setState({modalIsOpenApk: true});
            }
        }

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
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: "15px 15px 15px 15px",
                overflow: "hidden",
            }
        };
        return (
            <React.Fragment>
                <div className="container-fluid rtl pr-0 pl-0">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h3 className="text-center pb-3  border-bottom border-dark"
                            ref={subtitle => this.subtitle = subtitle}>وب اپلیکیشن</h3>
                        <img className=" modal-image img-fluid justify-content-center align-items-center mt-1"
                             src={require('./img/pic.jpeg')} alt=""/>

                        <div className="row pt-3 justify-content-center">
                            <div className="pt-1 px-2 justify-content-center ">
                                <button onClick={this.closeModal} type="button"
                                        className="btn border button-item btn-danger">بستن
                                </button>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        isOpen={this.state.modalIsOpenApk}
                        onRequestClose={this.closeModalApk}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h3 className="text-center pb-3  border-bottom border-dark"
                            ref={subtitle => this.subtitle = subtitle}>وب اپلیکیشن</h3>
                        <img className=" modal-image img-fluid justify-content-center align-items-center mt-1"
                             src={require('./img/apk.jpeg')} alt=""/>

                        <div className="row pt-3 justify-content-center">
                            <div className="pt-1 px-2 justify-content-center ">
                                <button onClick={this.closeModalApk} type="button"
                                        className="btn border button-item btn-danger">بستن
                                </button>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        isOpen={this.state.modalIsOpenRecovered}
                        onRequestClose={this.closeModalRecovered}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <img className=" modal-image-ozviyat img-fluid justify-content-center align-items-center mt-1"
                             src={require('./img/govahi-ozviyat.jpeg')} alt=""/>

                        <div className="row pt-3 justify-content-center">
                            <div className="pt-1 px-2 justify-content-center ">
                                <button onClick={this.closeModalRecovered} type="button"
                                        className="btn border button-item btn-danger">بستن
                                </button>
                            </div>
                        </div>
                    </Modal>
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
                        showRecoveredModal={this.showRecoveredModal}

                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(App);

