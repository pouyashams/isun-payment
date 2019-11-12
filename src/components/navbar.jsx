import React from 'react';

const Navbar = (props) => {
    const navClass = "rtl navbar navbar-expand-lg fixed-top flex-md-nowrap shadow bg-" + props.colorInfo.bgColor + " navbar-" + props.colorInfo.color;
    return (
        <nav className={navClass}>
            <div className="container-fluid rtl float-right pr-0 pl-0">
                <button className="navbar-toggler float-right" type="button" data-toggle="collapse"
                        data-target="#isun-navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">خانه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">خدمات</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">تعرفه ها</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">درباره ما</a>
                        </li>
                    </ul>
                </div>
                <a href="/" className="navbar-brand">
                    فروشگاه شارژ آیسان
                    <img src={require('./../img/isun-logo.png')} className="img-fluid image-logo"/>
                </a>

            </div>
        </nav>
    );
};

export default Navbar;
