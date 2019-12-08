import React from 'react';

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
            time: "ONE_DAY",
            internetPackageCode: "",
            style: "radius form-control"
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
    handelChangeSelect = (value, name) => {
        this.setState({[name]: value});
    };
    handelChangeInput = (value, name) => {
        this.setState({[name]: value, item: value});
        this.props.handelChange(name, value);
    };

    // reciveInternetPack = async (value, name) => {
    //     this.setState({[name]: value});
    //
    //     if (localStorage.getItem("type") === "internet") {
    //         console.log(localStorage.getItem("operatorCode"), 12345)
    //         try {
    //             const result = await http.post("", localStorage.getItem("operatorCode"));
    //             if (result.status === 200) {
    //                 toast.success(' با موفقیت انجام شد.');
    //             }
    //         } catch (ex) {
    //             if (ex.response && ex.response.status === 400) {
    //                 toast.error('خطایی در دریافت اطلاعات رخ داده است.');
    //             }
    //         }
    //         document.getElementById("loading").style.display = "none";
    //     }
    // };

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

                                onChange={((e) => this.handelChangeSelect(e.target.value, "typeOfSim"))}
                        >

                            {[{value: "etebari", title: languageParameter.Credit, selected: true}, {
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
                                onChange={((e) => this.reciveInternetPack(e.target.value, "time"))}
                        >
                            {[
                                {value: "ONE_DAY", title: languageParameter.Daily, selected: true},
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
                        <select className="form-control radius" id="sel1">
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
