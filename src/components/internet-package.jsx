import React from 'react';
const internetPackage = () => {
    return (
            <div>

            <div className="row justify-content-center py-2 text-left">

                <div className=" form-group checkbox-item">
                    <label htmlFor="sel1">نوع سیمکارت</label>
                    <select className="form-control" id="sel1">
                        <option>اعتباری</option>
                        <option>داعمی</option>


                    </select>
                </div>
                <div className=" form-group checkbox-item">
                    <label htmlFor="sel1">مدت بسته</label>
                    <select className="form-control" id="sel1">
                        <option>۱ ماهه</option>
                        <option>۲ ماهه</option>

                    </select>
                </div>
                <div className=" form-group checkbox-item">
                    <label htmlFor="sel1">انتخاب بسته</label>
                    <select className="form-control" id="sel1">
                        <option> ۱ گیگ ۱ ماهه</option>
                        <option>۳ ماهه ۱۰ گیگ</option>

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
};

export default internetPackage;
