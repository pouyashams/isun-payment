import React from 'react';
class otheroperators extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNotAmazing:true,
            isAmazing:false,

            mobileNumber:"",
            subscriberNumber:"",
            nationalCode:"",
            postalCode:"",
            item:"",

            doHezar:true,
            panjHezar:false,
            dahHezar:false,
            bistHezar:false,
            panjaHezar:false,
            sadHezar:false,
        };
    }

    componentDidMount() {
        localStorage.removeItem('isAmazing');
        localStorage.setItem('isAmazing', false);
        localStorage.removeItem('sumOfAmount');
        localStorage.setItem('sumOfAmount', 20000);
    }

    priceChecked(checked,name){
        if (name==="doHezar"){
            this.setState({
                doHezar:true,
                panjHezar:false,
                dahHezar:false,
                bistHezar:false,
                panjaHezar:false,
                sadHezar:false,
            });
            localStorage.removeItem('sumOfAmount');
            localStorage.setItem('sumOfAmount', 20000);

        }else if(name==="panjHezar"){
            this.setState({
                doHezar:false,
                panjHezar:true,
                dahHezar:false,
                bistHezar:false,
                panjaHezar:false,
                sadHezar:false,
            });
            localStorage.removeItem('sumOfAmount');
            localStorage.setItem('sumOfAmount', 50000);
        }else if(name==="dahHezar"){
            this.setState({
                doHezar:false,
                panjHezar:false,
                dahHezar:true,
                bistHezar:false,
                panjaHezar:false,
                sadHezar:false,
            });
            localStorage.removeItem('sumOfAmount');
            localStorage.setItem('sumOfAmount', 100000);
        }else if(name==="bistHezar"){
            this.setState({
                doHezar:false,
                panjHezar:false,
                dahHezar:false,
                bistHezar:true,
                panjaHezar:false,
                sadHezar:false,
            });
            localStorage.removeItem('sumOfAmount');
            localStorage.setItem('sumOfAmount', 200000);
        }else if(name==="panjaHezar"){
            this.setState({
                doHezar:false,
                panjHezar:false,
                dahHezar:false,
                bistHezar:false,
                panjaHezar:true,
                sadHezar:false,
            });
            localStorage.removeItem('sumOfAmount');
            localStorage.setItem('sumOfAmount', 500000);
        }else if(name==="sadHezar"){
            this.setState({
                doHezar:false,
                panjHezar:false,
                dahHezar:false,
                bistHezar:false,
                panjaHezar:false,
                sadHezar:true,
            });
            localStorage.removeItem('sumOfAmount');
            localStorage.setItem('sumOfAmount', 1000000);
        }
        console.log(localStorage.getItem("sumOfAmount"),6754)
    };

    handelChangeInput = (value, name) => {
        this.setState({[name]: value,item:value});
        localStorage.removeItem(name);
        localStorage.setItem(name,this.state.item);
    };

    render() {
        return (
            <div className="py-4" >
                <div className="row  justify-content-center text-left ">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">  شماره شارژ</label>
                        <input
                            type="number" className="radius form-control" id="num1"
                            name={"subscriberNumber"}
                            value={this.state.subscriberNumber}
                            onChange={((e) => this.handelChangeInput(e.target.value,e.target.name))}

                        />

                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">شماره خریدار</label>
                        <input type="number" className="radius form-control" id="num2"
                               name={"mobileNumber"}
                               value={this.state.mobileNumber}
                               onChange={((e) => this.handelChangeInput(e.target.value,e.target.name))}
                        />

                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num1">  کد ملی خریدار </label>
                        <input type="number" className="radius form-control" id="num1"
                               name={"nationalCode"}
                               value={this.state.nationalCode}
                               onChange={((e) => this.handelChangeInput(e.target.value,e.target.name))}
                        />

                    </div>
                    <div className=" form-group checkbox-item">
                        <label htmlFor="num2">کد پستی خریدار</label>
                        <input type="number" className="radius form-control" id="num2"
                               name={"postalCode"}
                               value={this.state.postalCode}
                               onChange={((e) => this.handelChangeInput(e.target.value,e.target.name))}
                        />
                    </div>

                </div>
                <div className="row  justify-content-center py-2">
                    <div className="checkbox-item  border  bg-light my-1">
                        <input className="mr-2" type="checkbox" id="3"
                               checked={this.state.doHezar}
                               name={"doHezar"}
                               onClick={((e) => this.priceChecked(e.target.checked,e.target.name))}
                        />
                        <label  htmlFor="3">۲,۰۰۰ تومان</label>
                    </div>

                    <div className="checkbox-item  border  bg-light my-1 ">
                        <input className="mr-2" type="checkbox" id="4"
                               checked={this.state.panjHezar}
                               name={"panjHezar"}
                               onClick={((e) => this.priceChecked(e.target.checked,e.target.name))}
                        />
                        <label  htmlFor="4">۵,۰۰۰ تومان</label>
                    </div>

                    <div className="checkbox-item  border  bg-light my-1">
                        <input className="mr-2" type="checkbox" id="5"
                               checked={this.state.dahHezar}
                               name={"dahHezar"}
                               onClick={((e) => this.priceChecked(e.target.checked,e.target.name))}
                        />
                        <label  htmlFor="5">۱۰,۰۰۰ تومان</label>
                    </div>

                    <div className="checkbox-item  border  bg-light my-1">
                        <input className="mr-2" type="checkbox" id="6"

                               checked={this.state.bistHezar}
                               name={"bistHezar"}
                               onClick={((e) => this.priceChecked(e.target.checked,e.target.name))}
                        />
                        <label  htmlFor="6">۲۰,۰۰۰ تومان</label>
                    </div>

                    <div className="checkbox-item  border  bg-light my-1 ">
                        <input className="mr-2" type="checkbox" id="7"
                               checked={this.state.panjaHezar}
                               name={"panjaHezar"}
                               onClick={((e) => this.priceChecked(e.target.checked,e.target.name))}
                        />
                        <label  htmlFor="7">۵۰,۰۰۰ تومان</label>
                    </div>

                    <div className="checkbox-item  border  bg-light my-1">
                        <input className="mr-2" type="checkbox" id="8"
                               checked={this.state.sadHezar}
                               name={"sadHezar"}
                               onClick={((e) => this.priceChecked(e.target.checked,e.target.name))}
                        />
                        <label  htmlFor="8"> ۱۰۰,۰۰۰ تومان</label>
                    </div>

                </div>
            </div>
        );
    }
}

export default otheroperators;
