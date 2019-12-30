import React from 'react';

class rulePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {languageParameter} = this.props;
        return (
            <section>
                <div className=" py-5 services ">
                    <div className="row justify-content-center">
                        <div className="item-first">
                            <div className=" ml-20 shadow border radius-first-item ">
                                <h3 className=" col-12 py-3 services-title-warning text-center">{languageParameter.ruleTitle}</h3>
                                <ul>
                                    {languageParameter.ruleItems !== undefined ? languageParameter.ruleItems.map((rule) => (
                                        <li className={languageParameter.rtl ? "py-1 text-left" : "font-weight-bold py-1 px-4 text-right display-coustom "}>
                                            <span className=" font-size-rule">{rule}</span>
                                        </li>)) : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default rulePage;
