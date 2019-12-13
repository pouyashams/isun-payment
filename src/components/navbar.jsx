import React from 'react';

const Navbar = (props) => {
    const navClass = "rtl navbar navbar-expand-lg fixed-top flex-md-nowrap shadow bg-" + props.colorInfo.bgColor + " navbar-" + props.colorInfo.color;
    return (
        <nav className={navClass}>
            <div className="container-fluid rtl float-right pr-0 pl-0">
                <button className="navbar-toggler float-right" type="button" data-toggle="collapse"
                        data-target="#isun-navbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="nav-content">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link text-light" href="/home">{props.languageParameter.home}</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" href="/rule">{props.languageParameter.rules}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/contact-us">{props.languageParameter.aboutUs}</a>
                        </li>
                        <li className="nav-item">

                            <select className="form-control bg-dark text-light border-0 selected-size change-language" id=""
                                    onChange={((e) => props.handelChangeLanguage("language", e.target.value))}
                            >
                                {[{value: "persian", title: "فارسی", selected: true}, {
                                    value: "english",
                                    title: "English",
                                    selected: true
                                },
                                //     {
                                //     value: "arabic",
                                //     title: "عربی",
                                //     selected: false
                                // }
                                ].map(
                                    (option) => {
                                        return (<option value={option.value}
                                                        selected={option.value === "persian"}>{option.title}</option>)
                                    })}
                            </select>
                        </li>
                    </ul>
                </div>
                <a href="/" className="navbar-brand"
                   onMouseOver={e => (e.currentTarget.style.color = "#ea5f2a")}
                   onMouseOut={e => (e.currentTarget.style.color = "#ffff")}
                >
                    {props.languageParameter.chargeStore}
                    <img src={require('./../img/original-isun-logo.png')} className="img-fluid image-logo" id="logo"/>
                </a>

            </div>
        </nav>
    );
};

export default Navbar;
