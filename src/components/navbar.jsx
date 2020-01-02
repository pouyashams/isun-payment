import React from 'react';
import useCollapse from 'react-collapsed';

const Navbar = (props) => {
    const {getCollapseProps, getToggleProps, isOpen} = useCollapse();
    const navClass = "rtl navbar navbar-expand-lg fixed-top flex-md-nowrap shadow bg-" + props.colorInfo.bgColor + " navbar-" + props.colorInfo.color;
    return (
        <nav className={navClass}>
            <div className="container-fluid rtl float-right pr-0 pl-0">
                <div>
                    <button {...getToggleProps()} className="navbar-toggler border-0 float-right">
                        <span className="navbar-toggler-icon"/>
                        <section {...getCollapseProps()} className="my-2 navbar-toggler">
                            <a className=" text-font-nav text-light" href="/home">{props.languageParameter.home}</a>
                        </section>
                        <section {...getCollapseProps()} className="my-2 navbar-toggler">
                            <a className="text-font-nav text-light" href="/rule">{props.languageParameter.rules}</a>
                        </section>
                        <section {...getCollapseProps()} className="my-2 navbar-toggler">
                            <a className="text-font-nav text-light"
                               href="/contact-us">{props.languageParameter.aboutUs}</a>
                        </section>
                    </button>
                </div>
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

                            <select className="form-control bg-dark text-light border-0 selected-size change-language"
                                    id=""
                                    onChange={((e) => props.handelChangeLanguage("language", e.target.value))}
                            >
                                {[{value: "persian", title: "فارسی"},
                                    {
                                        value: "arabic",
                                        title: "عربی",
                                    }, {
                                        value: "turkish",
                                        title: "ترکی",
                                    },
                                    {
                                        value: "english",
                                        title: "english",
                                    },
                                ].map(
                                    (option) => {
                                        return (<option value={option.value}
                                                        selected={sessionStorage.getItem('language') === option.value}>{option.title}</option>)
                                    })}
                            </select>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggler border-0  ">
                    <select className="form-control bg-dark text-light border-0 selected-size change-language" id=""
                            onChange={((e) => props.handelChangeLanguage("language", e.target.value))}
                    >
                        {[{value: "persian", title: "فارسی"},
                            {
                                value: "arabic",
                                title: "عربی",
                            }, {
                                value: "turkish",
                                title: "ترکی",
                            },
                            {
                                value: "english",
                                title: "english",
                            },
                        ].map(
                            (option) => {
                                return (<option value={option.value}
                                                selected={sessionStorage.getItem('language') === option.value}>{option.title}</option>)
                            })}
                    </select>
                </div>
                <div className=" collapse navbar-collapse justify-content-end float-left">
                    <a href="/" className="navbar-brand"
                       onMouseOver={e => (e.currentTarget.style.color = "#ea5f2a")}
                       onMouseOut={e => (e.currentTarget.style.color = "#ffff")}
                    >
                        {props.languageParameter.chargeStore}
                        <img src={require('./../img/original-isun-logo.png')} className="img-fluid image-logo" id="logo"/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
