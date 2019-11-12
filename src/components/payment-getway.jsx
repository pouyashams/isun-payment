import React from 'react';
const paymentGetway = () => {
    return (
            <div className="py-3">


            <div className="row justify-content-center text-left ">

                <div className=" form-group checkbox-item">
                    <label htmlFor="num1"> نوع درخواست</label>
                    <input type="text" className="radius form-control" id="num1"/>
                </div>
                <div className=" form-group checkbox-item">
                    <label htmlFor="num2">قیمت نهایی</label>
                    <input type="number" className="radius form-control" id="num2"/>
                </div>

            </div>
                <div className="row justify-content-center py-2 text-left">

                    <div className=" form-group checkbox-item">
                        <label htmlFor="sel1">درگاه پرداخت</label>
                        <select className="form-control" id="sel1">
                            <option> پارسیان</option>
                            <option>فن آوا</option>

                        </select>
                    </div>
                </div>
                <div className="py-3 justify-content-center ">
                    <button type="button" className="btn border button-item btn-success">پرداخت</button>
                </div>
                <p className=" py-3 text-danger font-weight-bold">(خرید با کلیه کارت های بانکی امکان پذیر است)</p>
        </div>

    );
};

export default paymentGetway;
