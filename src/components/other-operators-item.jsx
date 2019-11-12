import React from 'react';
const otheroperators = () => {
    return (
        <div className="py-4" >


            <div className="row justify-content-center text-left ">

                <div className=" form-group checkbox-item">
                    <label htmlFor="num1">  شماره شارژ</label>
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
            <div className="row justify-content-center py-2">
                <div className="checkbox-item  border  bg-light my-1 ">
                    <input className="mr-2" type="checkbox" id="inlineCheckbox1"
                           value="option1"/>
                    <label  htmlFor="inlineCheckbox1">۱۰۰۰ تومان</label>
                </div>
                <div className="checkbox-item  border  bg-light my-1">
                <input className="mr-2" type="checkbox" id="inlineCheckbox1"
                       value="option1"/>
                <label  htmlFor="inlineCheckbox1">۲۰۰۰ تومان</label>
            </div>
                <div className="checkbox-item  border  bg-light my-1">
                <input className="mr-2" type="checkbox" id="inlineCheckbox1"
                       value="option1"/>
                <label  htmlFor="inlineCheckbox1">۵۰۰۰ تومان</label>
            </div><div className="checkbox-item  border  bg-light my-1 ">
                <input className="mr-2" type="checkbox" id="inlineCheckbox1"
                       value="option1"/>
                <label  htmlFor="inlineCheckbox1">۱۰۰۰۰ تومان</label>
            </div><div className="checkbox-item  border  bg-light my-1 ">
                <input className="mr-2" type="checkbox" id="inlineCheckbox1"
                       value="option1"/>
                <label  htmlFor="inlineCheckbox1">۲۰۰۰۰ تومان</label>
            </div><div className="checkbox-item  border  bg-light my-1 ">
                <input className="mr-2" type="checkbox" id="inlineCheckbox1"
                       value="option1"/>
                <label  htmlFor="inlineCheckbox1">۵۰۰۰۰ تومان</label>
            </div>

            </div>
        </div>

    );
};

export default otheroperators;
