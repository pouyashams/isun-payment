import React from 'react';
class internetPackage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            mobileNumber:"",
            subscriberNumber:"",
            nationalCode:"",
            postalCode:"",

            item:"",
            typeOfSim:"etebari",
            time:"ONE_DAY",
            internetPackageCode:"",
        };
    }
    handelChangeSelect = (value, name) => {
        this.setState({[name]: value});
    };
    reciveInternetPack = (value, name) => {
        this.setState({[name]: value});
    };
    render() {
        return (
            <div>

                <div className="row justify-content-center py-2 text-left">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="1">نوع سیمکارت</label>
                        <select className="form-control" id="1"

                                onChange={((e) => this.handelChangeSelect(e.target.value,"typeOfSim"))}
                        >

                            {[{value:"etebari",title:"اعتباری",selected:true},{value:"daemi",title:"داعمی",selected:false}].map(
                                (option)=>{
                                    return(<option value={option.value} selected={option.value===this.state.typeOfSim}>{option.title}</option>)
                                })}
                        </select>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="2">مدت بسته</label>
                        <select className="form-control" id="2"
                                onChange={((e) => this.reciveInternetPack(e.target.value,"time"))}
                        >
                            {[{value:"ONE_DAY",title:"روزانه",selected:true},{value:"ONE_WEAK",title:"هفتگی",selected:false},{value:"ONE_MOUNTH"
                                ,title:"ماهانه",selected:false},{value:"THREE_MOUNTH",title:"۳ ماهه",selected:false},
                                {value:"SIX_MOUNTH",title:"۶ ماهه",selected:false},{value:"ONE_YEAR",title:"سالانه",selected:false}].map(
                                (option)=>{
                                    return(<option value={option.value} selected={option.value===this.state.time}>{option.title}</option>)
                                }
                            )
                            }

                        </select>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="sel1">انتخاب بسته</label>
                        <select className="form-control" id="sel1">
                        </select>
                    </div>

                </div>
                <div className="row justify-content-center text-left ">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">  شماره خرید بسته</label>
                        <input type="number" className="radius form-control" id="num1"/>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">شماره خریدار</label>
                        <input type="number" className="radius form-control" id="num2"/>
                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">  کد ملی خریدار </label>
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
