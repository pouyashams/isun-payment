import React from 'react';
const billPayment = () => {
    return (
            <div  className="py-2">

            <div className="row justify-content-center py-2 text-left">

                <div className=" form-group checkbox-item">
                    <label htmlFor="num1">شناسه قبض</label>
                    <input type="number" className="radius form-control" id="num1"/>
                </div>
                <div className=" form-group checkbox-item">
                    <label htmlFor="num2">شناسه پرداخت </label>
                    <input type="number" className="radius form-control" id="num2"/>
                </div>
            </div>
                <div className=" justify-content-center ">
                    <button type="button" className="btn border button-item btn-success">تایید</button>
                </div>
            <div className="row justify-content-center text-left py-3 ">

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
};

export default billPayment;
