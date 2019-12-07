import React from 'react';

class billPayment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            billId: "",
            paymentId: "",
            mobileNumber: "",
            nationalCode: "",
            postalCode: "",
            style: "radius form-control",
            styleBill: "radius form-control",
            stylePaymentId: "radius form-control"
        };
    }

    onAccept = () => {
        // this.handelChangeCheckAll();
        this.handelChangeInputBillId();
        this.handelChangeInputPaymentId();
    };

    handelChangeInput = (value, name) => {
        this.setState({[name]: value, item: value});
        this.props.handelChange('name', value);
    };

    findBillType = (list) => {
        if (list[list.length - 2] === 1) {
            this.props.handelChange('typeOfOrederText', "قبض آب");
        } else if (list[list.length - 2] === 2) {
            this.props.handelChange('typeOfOrederText', "قبض برق");
        } else if (list[list.length - 2] === 3) {
            this.props.handelChange('typeOfOrederText', "قبض گاز");
        } else if (list[list.length - 2] === 4) {
            this.props.handelChange('typeOfOrederText', "قبض تلفن ثابت");
        } else if (list[list.length - 2] === 5) {
            this.props.handelChange('typeOfOrederText', "قبض تلفن همراه");
        }
    };

    handelChangeInputPaymentId = () => {
        if (this.state.paymentId !== null && this.state.paymentId !== 0 && this.state.paymentId !== "") {
            const price = this.state.paymentId.replace(/^0+/, '').substr(0, 3);
            this.props.handelChange('sumOfAmount',price + "000" );
            this.props.handelChange('priceText',price + "00" );
        } else {
            this.setState({
                stylePaymentId: "wrong text-danger form-control",
            });
        }

    };

    handelChangeInputBillId = () => {
        let num = this.state.billId;
        let digits = num.toString().split('');
        const list = digits.map(Number);
        if (list.length <= 13 && list.length !== 0 && list.length !== "") {
            const infoList = [];
            for (let i = 0; i < (13 - list.length); i++) {
                infoList.push(0)
            }
            for (let i = 0; i < list.length; i++) {
                infoList.push(list[i])
            }
            let sum = 0;
            let j = 2;
            for (let i = 0; i < infoList.length; i++) {
                if (i !== 12) {
                    if (j < 8) {
                        let y = infoList[(infoList.length - 2) - i] * j;
                        sum = sum + y;
                        j = j + 1;
                    }
                    else {
                        j = 2;
                        let y = infoList[(infoList.length - 2) - i] * j;
                        sum = sum + y;
                        j = j + 1;
                    }
                }
            }
            let remain = sum % 11;

            if (remain < 2 && remain === 0) {
                this.setState({
                    styleBill: "success text-success form-control",
                });
                this.findBillType(infoList);
            }
            else if (remain >= 2 && 11 - (remain) === infoList[12]) {
                this.setState({
                    styleBill: "success text-success form-control",
                });
                this.findBillType(infoList);
            }
            else {

                this.setState({
                    styleBill: "wrong text-danger form-control",
                });
            }
        }
        else {
            this.setState({
                styleBill: "wrong text-danger form-control",
            });
        }
    };
    // handelChangeCheckAll = () => {
    //     let num1 = this.state.billId.replace(/^0+/, '');
    //     let num2 = this.state.paymentId.replace(/^0+/, '');
    //     let num = num1 + num2;
    //     let digits = num.toString().split('');
    //     const list = digits.map(Number);
    //     console.log(list)
    //     if (list.length <= 26 && list.length !== 0) {
    //         let sum = 0;
    //         let j = 2;
    //         for (let i = 0; i < list.length; i++) {
    //             if (i !== 0) {
    //                 if (j < 8) {
    //                     let y = list[(list.length - 1) - i] * j;
    //                     sum = sum + y;
    //                     j = j + 1;
    //                 }
    //                 else {
    //                     j = 2;
    //                     let y = list[(list.length - 2) - i] * j;
    //                     sum = sum + y;
    //                     j = j + 1;
    //                 }
    //             }
    //         }
    //         let remain = sum % 11;
    //
    //         if (remain < 2 && remain === 0) {
    //             // this.setState({
    //             //     style: "success text-success form-control",
    //             // });
    //             console.log("okeyyyyyyyyyyyyy")
    //             // this.findBillType(infoList);
    //         }
    //         else if (remain >= 2 && 11 - (remain) === list[list.length-1]) {
    //             // this.setState({
    //             //     style: "success text-success form-control",
    //             // });
    //             console.log("okeyyyyyyyyyyyyy")
    //             // this.findBillType(infoList);
    //         }
    //         else {
    //             console.log("ridiiiiiiiiiiiiiiii")
    //             // this.setState({
    //             //     style: "wrong text-danger form-control",
    //             // });
    //         }
    //     }
    //     else {
    //         this.setState({
    //             style: "wrong text-danger form-control",
    //         });
    //         console.log("ریدیییییی")
    //     }
    // };

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
                this.props.handelChange(name,value );
            }
            else if (remain >= 2 && 11 - (remain) === list[9]) {
                this.setState({
                    style: "success text-success form-control",
                });
                this.props.handelChange(name,value );
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
        return (
            <div className="py-2">

                <div className="row justify-content-center py-2 text-left">

                    <div className=" form-group checkbox-item-info">
                        <label htmlFor="num1">شناسه قبض</label>
                        <input
                            type="number" className={this.state.styleBill} id="num1"
                            name={"billId"}
                            value={this.state.billId}
                            onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                        />
                    </div>
                    <div className=" form-group checkbox-item-info">
                        <label htmlFor="num1">شناسه پرداخت </label>
                        <input
                            type="number" className={this.state.stylePaymentId} id="num1"
                            name={"paymentId"}
                            value={this.state.paymentId}
                            onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                        />
                    </div>
                </div>
                <div className=" justify-content-center ">
                    <button
                        onClick={this.onAccept}
                        type="button" className="btn border button-item btn-success">
                        تایید
                    </button>
                </div>
                <div className="row justify-content-center text-left py-3 ">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">شماره خریدار </label>
                        <input
                            type="number" className="radius form-control" id="num1"
                            name={"mobileNumber"}
                            value={this.state.mobileNumber}
                            onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                        />
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1"> شماره ملی خریدار</label>
                        <input
                            type="number" className={this.state.style} id="num1"
                            name={"nationalCode"}
                            value={this.state.nationalCode}
                            onChange={((e) => this.handelChangeNationalCode(e.target.value, e.target.name))}
                        />
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">کد پستی خریدار</label>
                        <input
                            type="number" className="radius form-control" id="num1"
                            name={"postalCode"}
                            value={this.state.postalCode}
                            onChange={((e) => this.handelChangeInput(e.target.value, e.target.name))}
                        />
                    </div>

                </div>

            </div>
        );
    }
}

export default billPayment;
