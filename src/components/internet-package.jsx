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
        };
    };
    componentDidMount() {
        localStorage.removeItem('sumOfAmount');
        localStorage.setItem('sumOfAmount', 0);
        localStorage.removeItem('priceText');
        localStorage.setItem('priceText', "0");
        localStorage.removeItem('typeOfOreder');
        localStorage.setItem('typeOfOreder', "INTERNET");
        localStorage.removeItem('typeOfOrederText');
        localStorage.setItem('typeOfOrederText', "بسته اینترنت");
        localStorage.removeItem('mobileNumber');
        localStorage.removeItem('nationalCode');
        localStorage.removeItem('postalCode');
    };

    handelChangeSelect = (value, name) => {
        this.setState({[name]: value});
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
        return (
            <div>

                <div className="row justify-content-center py-2 text-left">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="1">نوع سیمکارت</label>
                        <select className="form-control radius" id="1"

                                onChange={((e) => this.handelChangeSelect(e.target.value, "typeOfSim"))}
                        >

                            {[{value: "etebari", title: "اعتباری", selected: true}, {
                                value: "daemi",
                                title: "داعمی",
                                selected: false
                            }].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.value === this.state.typeOfSim}>{option.title}</option>)
                                })}
                        </select>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="2">مدت بسته</label>
                        <select className="form-control radius" id="2"
                                onChange={((e) => this.reciveInternetPack(e.target.value, "time"))}
                        >
                            {[{value: "ONE_DAY", title: "روزانه", selected: true}, {
                                value: "ONE_WEAK",
                                title: "هفتگی",
                                selected: false
                            }, {
                                value: "ONE_MOUNTH"
                                , title: "ماهانه", selected: false
                            }, {value: "THREE_MOUNTH", title: "۳ ماهه", selected: false},
                                {value: "SIX_MOUNTH", title: "۶ ماهه", selected: false}, {
                                    value: "ONE_YEAR",
                                    title: "سالانه",
                                    selected: false
                                }].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.value === this.state.time}>{option.title}</option>)
                                }
                            )
                            }

                        </select>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="sel1">انتخاب بسته</label>
                        <select className="form-control radius" id="sel1">
                        </select>
                    </div>

                </div>
                <div className="row justify-content-center text-left ">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1"> شماره موبایل ذینفع</label>
                        <input type="number" className="radius form-control" id="num1"/>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">شماره خریدار</label>
                        <input type="number" className="radius form-control" id="num2"/>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1"> شماره ملی خریدار </label>
                        <input type="number" className="radius form-control" id="num1"/>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">کد پستی خریدار</label>
                        <input type="number" className="radius form-control" id="num2"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default internetPackage;
