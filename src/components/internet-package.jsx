import React from 'react';
import axios from "axios";
import {login} from "../services/loginService";

class internetPackage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            mobileNumber: "",
            subscriberNumber: "",
            nationalCode: "",
            postalCode: "",

            item: "",
            typeOfSim: "etebari",
            internetPackageCode: "",
            style: "radius form-control",
            packData: []
        };
    };

    handelChangeNationalCode = (value, name) => {
        this.setState({[name]: value, item: value});
        let num = value;
        let digits = num.toString().split('');
        const list = digits.map(Number);
        if (list.length === 10) {
            let sum = 0;
            for (let i = 0; i < list.length; i++) {
                if (i !== 8) {
                    let y = list[i] * (list.length - i);
                    sum = y + sum
                }
            }
            let remain = sum % 11;
            if (remain < 2 && remain === list[9]) {
                this.setState({
                    style: "success text-success form-control",
                });
                this.props.handelChange(name, value);
            }
            else if (remain >= 2 && 11 - (remain) === list[9]) {
                this.setState({
                    style: "success text-success form-control",
                });
                this.props.handelChange(name, value);
            }
            else {
                this.setState({
                    style: "wrong text-danger form-control",
                });
            }
        }
        else {
            this.setState({
                style: "wrong text-danger form-control",
            });
        }
    };
    handelChangeSelect = (value) => {

        this.props.handelChange("typeOfSim", value);
    };
    handelChangeInput = (value, name) => {
        this.setState({[name]: value, item: value});
        this.props.handelChange(name, value);
    };
    makeInternetPack = (value) => {
        const {typeOfSim, netPack, languageParameter} = this.props;

        if (typeOfSim === "daemi") {
            if (value === "ONE_DAY") {
                this.props.handelChange('packTime', value);

                netPack.postPaidInternetPackageList.forEach((net) => {
                    if (net.code === "DAILY_INTERNET_PACKAGE_PERIOD") {
                        const packData = [{
                            value: "",
                            title: languageParameter.choose,
                        }];
                        net.internetPackageList.forEach((pack) => {
                            packData.push({
                                value: pack.code,
                                title: pack.title,
                                price: pack.price,
                            })
                        });
                        this.setState({packData});
                    }
                });

            }
            else if (value === "ONE_WEAK") {
                this.props.handelChange('packTime', value);
                netPack.postPaidInternetPackageList.forEach((net) => {
                    if (net.code === "WEEKLY_INTERNET_PACKAGE_PERIOD") {
                        const packData = [{
                            value: "",
                            title: languageParameter.choose
                        }];
                        net.internetPackageList.forEach((pack) => {
                            packData.push({
                                value: pack.code,
                                title: pack.title,
                                price: pack.price,
                            })
                        });
                        this.setState({packData});
                    }
                });

            }
            else if (value === "ONE_MOUNTH") {
                this.props.handelChange('packTime', value);
                netPack.postPaidInternetPackageList.forEach((net) => {
                    if (net.code === "MONTHLY_INTERNET_PACKAGE_PERIOD") {
                        const packData = [{
                            value: "",
                            title: languageParameter.choose
                        }];
                        net.internetPackageList.forEach((pack) => {
                            packData.push({
                                value: pack.code,
                                title: pack.title,
                                price: pack.price,

                            })
                        });
                        this.setState({packData});
                    }
                });

            }
            else if (value === "THREE_MOUNTH") {
                this.props.handelChange('packTime', value);
                netPack.postPaidInternetPackageList.forEach((net) => {
                    if (net.code === "THREE_MONTHLY_INTERNET_PACKAGE_PERIOD") {
                        const packData = [{
                            value: "",
                            title: languageParameter.choose
                        }];
                        net.internetPackageList.forEach((pack) => {
                            packData.push({
                                value: pack.code,
                                title: pack.title,
                                price: pack.price,

                            })
                        });
                        this.setState({packData});
                    }
                });

            }
            else if (value === "SIX_MOUNTH") {
                this.props.handelChange('packTime', value);
                netPack.postPaidInternetPackageList.forEach((net) => {
                    if (net.code === "SIX_MONTHLY_INTERNET_PACKAGE_PERIOD") {
                        const packData = [{
                            value: "",
                            title: languageParameter.choose
                        }];
                        net.internetPackageList.forEach((pack) => {
                            packData.push({
                                value: pack.code,
                                title: pack.title,
                                price: pack.price,
                            })
                        });
                        this.setState({packData});
                    }
                });

            }
            else if (value === "ONE_YEAR") {
                this.props.handelChange('packTime', value);
                netPack.postPaidInternetPackageList.forEach((net) => {
                    if (net.code === "YEARLY_INTERNET_PACKAGE_PERIOD") {
                        const packData = [{
                            value: "",
                            title: languageParameter.choose
                        }];
                        net.internetPackageList.forEach((pack) => {
                            packData.push({
                                value: pack.code,
                                title: pack.title,
                                price: pack.price,

                            })
                        });
                        this.setState({packData});
                    }
                });

            }
        } else {
            {
                if (value === "ONE_DAY") {
                    this.props.handelChange('packTime', value);

                    netPack.prePaidInternetPackageList.forEach((net) => {
                        if (net.code === "DAILY_INTERNET_PACKAGE_PERIOD") {
                            const packData = [{
                                value: "",
                                title: languageParameter.choose,
                            }];
                            net.internetPackageList.forEach((pack) => {
                                packData.push({
                                    value: pack.code,
                                    title: pack.title,
                                    price: pack.price,
                                })
                            });
                            this.setState({packData});
                        }
                    });

                }
                else if (value === "ONE_WEAK") {
                    this.props.handelChange('packTime', value);
                    netPack.prePaidInternetPackageList.forEach((net) => {
                        if (net.code === "WEEKLY_INTERNET_PACKAGE_PERIOD") {
                            const packData = [{
                                value: "",
                                title: languageParameter.choose
                            }];
                            net.internetPackageList.forEach((pack) => {
                                packData.push({
                                    value: pack.code,
                                    title: pack.title,
                                    price: pack.price,
                                })
                            });
                            this.setState({packData});
                        }
                    });

                }
                else if (value === "ONE_MOUNTH") {
                    this.props.handelChange('packTime', value);
                    netPack.prePaidInternetPackageList.forEach((net) => {
                        if (net.code === "MONTHLY_INTERNET_PACKAGE_PERIOD") {
                            const packData = [{
                                value: "",
                                title: languageParameter.choose
                            }];
                            net.internetPackageList.forEach((pack) => {
                                packData.push({
                                    value: pack.code,
                                    title: pack.title,
                                    price: pack.price,

                                })
                            });
                            this.setState({packData});
                        }
                    });

                }
                else if (value === "THREE_MOUNTH") {
                    this.props.handelChange('packTime', value);
                    netPack.prePaidInternetPackageList.forEach((net) => {
                        if (net.code === "THREE_MONTHLY_INTERNET_PACKAGE_PERIOD") {
                            const packData = [{
                                value: "",
                                title: languageParameter.choose
                            }];
                            net.internetPackageList.forEach((pack) => {
                                packData.push({
                                    value: pack.code,
                                    title: pack.title,
                                    price: pack.price,

                                })
                            });
                            this.setState({packData});
                        }
                    });

                }
                else if (value === "SIX_MOUNTH") {
                    this.props.handelChange('packTime', value);
                    netPack.prePaidInternetPackageList.forEach((net) => {
                        if (net.code === "SIX_MONTHLY_INTERNET_PACKAGE_PERIOD") {
                            const packData = [{
                                value: "",
                                title: languageParameter.choose
                            }];
                            net.internetPackageList.forEach((pack) => {
                                packData.push({
                                    value: pack.code,
                                    title: pack.title,
                                    price: pack.price,
                                })
                            });
                            this.setState({packData});
                        }
                    });

                }
                else if (value === "ONE_YEAR") {
                    this.props.handelChange('packTime', value);
                    netPack.prePaidInternetPackageList.forEach((net) => {
                        if (net.code === "YEARLY_INTERNET_PACKAGE_PERIOD") {
                            const packData = [{
                                value: "",
                                title: languageParameter.choose
                            }];
                            net.internetPackageList.forEach((pack) => {
                                packData.push({
                                    value: pack.code,
                                    title: pack.title,
                                    price: pack.price,

                                })
                            });
                            this.setState({packData});
                        }
                    });

                }
            }
        }

    };
    chooseInternetPack = (value) => {
        this.props.handelChange("pack", value);
        this.state.packData.forEach((pack) => {
            if (pack.value === value) {
                const price = pack.price.toString()
                this.props.handelChange("sumOfAmount", price);
                this.props.handelChange("priceText", price.substr(0, price.length - 1));
            }
        });
    };

    render() {
        const {languageParameter} = this.props;
        return (
            <div>
                <div
                    className={languageParameter.rtl ? "row justify-content-center py-2 text-left" : "row justify-content-center py-2 text-right"}>
                    <div className=" form-group checkbox-item">
                        <label className={languageParameter.rtl ? "" : "font-custom-number"}
                               htmlFor="1">{languageParameter.typeOfSim}</label>
                        <select className="form-control radius" id="1"
                                onChange={((e) => this.handelChangeSelect(e.target.value))}
                                value={this.props.typeOfSim}
                        >
                            {[{value: "", title: languageParameter.choose, selected: true},
                                {value: "etebari", title: languageParameter.Credit, selected: false}, {
                                    value: "daemi",
                                    title: languageParameter.Permanent,
                                    selected: false
                                }].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.value === this.state.typeOfSim}>{option.title}</option>)
                                })}
                        </select>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label className={languageParameter.rtl ? "" : "font-custom-number"}
                               htmlFor="2">{languageParameter.internetPeriod}</label>
                        <select className="form-control radius" id="2"
                                onChange={((e) => this.makeInternetPack(e.target.value))}
                                value={this.props.packTime}
                        >
                            {[
                                {value: "", title: languageParameter.choose, selected: true},
                                {value: "ONE_DAY", title: languageParameter.Daily, selected: false},
                                {value: "ONE_WEAK", title: languageParameter.Weekly, selected: false},
                                {value: "ONE_MOUNTH", title: languageParameter.monthly, selected: false},
                                {value: "THREE_MOUNTH", title: languageParameter.threeMonths, selected: false},
                                {value: "SIX_MOUNTH", title: languageParameter.sixMonths, selected: false},
                                {value: "ONE_YEAR", title: languageParameter.yearly, selected: false}].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.value === this.state.time}>{option.title}</option>)
                                }
                            )
                            }
                        </select>
                    </div>

                    <div className=" form-group checkbox-item">
                        <label htmlFor="sel1"
                               className={languageParameter.rtl ? "" : "font-custom-number"}>{languageParameter.chooseInternetPeriod}</label>
                        <select className="form-control radius" id="sel1"
                                value={this.props.pack}
                                onChange={((e) => this.chooseInternetPack(e.target.value))}
                        >
                            {this.state.packData.map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.value === this.state.time}>{option.title}</option>)
                                }
                            )
                            }
                        </select>
                    </div>

                </div>
                <div
                    className={languageParameter.rtl ? "row justify-content-center text-left" : "row justify-content-center text-right"}>
                    <div className=" mt-1 form-group checkbox-item">
                        <label htmlFor="num1" className={languageParameter.rtl ? "" : "font-custom-number"}>
                            {languageParameter.subscriberNumber}
                        </label>
                        <input
                            type="number" className="radius form-control" id="num1"
                            name={"subscriberNumber"}
                            value={this.state.subscriberNumber}
                            onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                        />
                    </div>
                    <div className=" mt-1 form-group checkbox-item">
                        <label htmlFor="num2"
                               className={languageParameter.rtl ? "" : "font-custom-number "}>{languageParameter.mobileNumber}</label>
                        <input type="number" className="radius form-control" id="num2"
                               name={"mobileNumber"}
                               value={this.state.mobileNumber}
                               onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                        />

                    </div>
                    <div className="row margin-item ">
                        <div className=" py-2 form-group mb-2 checkbox-item">
                            <label htmlFor="num1"
                                   className={languageParameter.rtl ? "" : "font-custom-number "}>{languageParameter.nationalCode}</label>
                            <input type="number" className={this.state.style} id="num1"
                                   name={"nationalCode"}
                                   value={this.state.nationalCode}
                                   onChange={((e) => this.handelChangeNationalCode(e.target.value, e.target.name))}
                            />

                        </div>
                        <div className="py-2 form-group checkbox-item">
                            <label htmlFor="num2"
                                   className={languageParameter.rtl ? "" : "font-custom-number "}>{languageParameter.postalCode}</label>
                            <input type="number" className="radius form-control" id="num2"
                                   name={"postalCode"}
                                   value={this.state.postalCode}
                                   onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                            />
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default internetPackage;
