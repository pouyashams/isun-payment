import React from 'react';

class otheroperators extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNotAmazing: true,
            isAmazing: false,

            mobileNumber: "",
            subscriberNumber: "",
            nationalCode: "",
            postalCode: "",

            doHezar: true,
            panjHezar: false,
            dahHezar: false,
            bistHezar: false,
            panjaHezar: false,
            sadHezar: false,

            style: "radius form-control"
        };
    }

    priceChecked(checked, name) {
        if (name === "doHezar") {
            this.setState({
                doHezar: true,
                panjHezar: false,
                dahHezar: false,
                bistHezar: false,
                panjaHezar: false,
                sadHezar: false,
            });
            this.props.handelChange("sumOfAmount", 20000);
            this.props.handelChange("priceText", "2,000");

        } else if (name === "panjHezar") {
            this.setState({
                doHezar: false,
                panjHezar: true,
                dahHezar: false,
                bistHezar: false,
                panjaHezar: false,
                sadHezar: false,
            });
            this.props.handelChange("sumOfAmount", 50000);
            this.props.handelChange("priceText", "5,000");
        } else if (name === "dahHezar") {
            this.setState({
                doHezar: false,
                panjHezar: false,
                dahHezar: true,
                bistHezar: false,
                panjaHezar: false,
                sadHezar: false,
            });
            this.props.handelChange("sumOfAmount", 100000);
            this.props.handelChange("priceText", "10,000");
        } else if (name === "bistHezar") {
            this.setState({
                doHezar: false,
                panjHezar: false,
                dahHezar: false,
                bistHezar: true,
                panjaHezar: false,
                sadHezar: false,
            });
            this.props.handelChange("sumOfAmount", 200000);
            this.props.handelChange("priceText", "20,000");
        } else if (name === "panjaHezar") {
            this.setState({
                doHezar: false,
                panjHezar: false,
                dahHezar: false,
                bistHezar: false,
                panjaHezar: true,
                sadHezar: false,
            });
            this.props.handelChange("sumOfAmount", 500000);
            this.props.handelChange("priceText", "50,000");
        } else if (name === "sadHezar") {
            this.setState({
                doHezar: false,
                panjHezar: false,
                dahHezar: false,
                bistHezar: false,
                panjaHezar: false,
                sadHezar: true,
            });
            this.props.handelChange("sumOfAmount", 1000000);
            this.props.handelChange("priceText", "100,000");
        }
    };

    handelChangeInput = (value, name) => {
        this.setState({[name]: value});
        this.props.handelChange(name, value);
    };

    handelChangeNationalCode = (value, name) => {
        this.setState({[name]: value});
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

    render() {
        const {languageParameter} = this.props;
        return (
            <div className="py-4">
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
                        <div className="form-group mb-2 checkbox-item">
                            <label htmlFor="num1"
                                   className={languageParameter.rtl ? "" : "font-custom-number "}>{languageParameter.nationalCode}</label>
                            <input type="number" className={this.state.style} id="num1"
                                   name={"nationalCode"}
                                   value={this.state.nationalCode}
                                   onChange={((e) => this.handelChangeNationalCode(e.target.value, e.target.name))}
                            />

                        </div>
                        <div className="form-group checkbox-item">
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
                {languageParameter.rtl ?
                    <div className="row justify-content-center  py-2">
                        <div className="row checkbox-item  border  bg-light my-1 ">
                            <div className="py-1 px-3">
                                <input className="mr-2" type="checkbox" id="3"
                                       checked={this.state.doHezar}
                                       name={"doHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                            <label htmlFor="3">{languageParameter.doHezar}</label>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <div className="py-1 px-3">
                                <input className="mr-2" type="checkbox" id="4"
                                       checked={this.state.panjHezar}
                                       name={"panjHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                            <label htmlFor="4">{languageParameter.panjHezar}</label>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <div className="py-1 px-3">
                                <input className="mr-2" type="checkbox" id="5"
                                       checked={this.state.dahHezar}
                                       name={"dahHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                            <label htmlFor="5">{languageParameter.dahHezar}</label>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <div className="py-1 px-3">
                                <input className="mr-2" type="checkbox" id="6"

                                       checked={this.state.bistHezar}
                                       name={"bistHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                            <label htmlFor="6">{languageParameter.bistHezar}</label>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <div className="py-1 px-3">
                                <input className="mr-2" type="checkbox" id="7"
                                       checked={this.state.panjaHezar}
                                       name={"panjaHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                            <label htmlFor="7">{languageParameter.panjaHezar}</label>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <div className="py-1">
                                <input className="ml-3 " type="checkbox" id="8"
                                       checked={this.state.sadHezar}
                                       name={"sadHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                            <label className="ml-3" htmlFor="8">{languageParameter.sadHezar}</label>
                        </div>

                    </div>
                    :
                    <div className="row justify-content-center py-2">
                        <div className="row checkbox-item border bg-light my-1">

                            <label htmlFor="3" className="font-custom-number-price">toman</label>
                            <label className="font-custom-price" htmlFor="3">{languageParameter.doHezar}</label>
                            <div className="checkbox-style-mPrice">
                                <input
                                    type="checkbox" id="3"
                                    checked={this.state.doHezar}
                                    name={"doHezar"}
                                    onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <label htmlFor="3" className="font-custom-number-price">toman</label>
                            <label className="font-custom-price" htmlFor="4">{languageParameter.panjHezar}</label>
                            <div className="checkbox-style-mPrice">
                                <input type="checkbox" id="4"
                                       checked={this.state.panjHezar}
                                       name={"panjHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <label htmlFor="3" className="font-custom-number-price">toman</label>
                            <label className="font-custom-price" htmlFor="5">{languageParameter.dahHezar}</label>
                            <div className="checkbox-style-price">
                                <input type="checkbox" id="5"
                                       checked={this.state.dahHezar}
                                       name={"dahHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <label htmlFor="3" className="font-custom-number-price">toman</label>
                            <label className="font-custom-price" htmlFor="6">{languageParameter.bistHezar}</label>
                            <div className="checkbox-style-price">
                                <input type="checkbox" id="6"
                                       checked={this.state.bistHezar}
                                       name={"bistHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <label htmlFor="3" className="font-custom-number-price">toman</label>
                            <label className="font-custom-price" htmlFor="7">{languageParameter.panjaHezar}</label>
                            <div className="checkbox-style-price">
                                <input type="checkbox" id="7"
                                       checked={this.state.panjaHezar}
                                       name={"panjaHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                        </div>

                        <div className="row checkbox-item  border  bg-light my-1">
                            <label htmlFor="3" className="font-custom-number-price">toman</label>
                            <label className="font-custom-price" htmlFor="8">{languageParameter.sadHezar}</label>
                            <div className="checkbox-style-bPrice">
                                <input type="checkbox" id="8"
                                       checked={this.state.sadHezar}
                                       name={"sadHezar"}
                                       onClick={((e) => this.priceChecked(e.target.checked, e.target.name))}
                                />
                            </div>
                        </div>

                    </div>
                }
            </div>
        );
    }
}

export default otheroperators;
