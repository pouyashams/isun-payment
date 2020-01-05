import React from 'react';

const Footer = (props) => {
    return (
        <footer className="fixed-bottom float-left navbar col-md-12 ml-sm-auto col-lg-12">
            <div className="row fixed-bottom float-left bg-transparent col-md-12 ml-sm-auto col-lg-12 mb-5">
                <a target="_blank"
                   href="https://trustseal.enamad.ir/?id=21183&amp;Code=OGERIqdPmMkIhRNjoueR">
                    <img
                        className="img-style"
                        src="https://Trustseal.eNamad.ir/logo.aspx?id=21183&amp;Code=OGERIqdPmMkIhRNjoueR"
                        alt=""
                        id="OGERIqdPmMkIhRNjoueR"
                    />
                </a>
            </div>
            <div className="row fixed-bottom float-left bg-dark col-md-12 ml-sm-auto col-lg-12 shadow ">
                <div className="copyright">
                    <span className="fa fa-copyright m-1"/>
                    {props.languageParameter.footer}
                </div>
                <div className="socialmedia">
                    <a
                        className="fa fa-instagram m-1"
                        href="http://instagram.com"
                    />
                    <a
                        className="fa fa-facebook-official m-1"
                        href="http://facebook.com"
                    />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
