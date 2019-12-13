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
                            <div className=" ml-20 shadow border radius-first">
                                <h3 className=" col-12 py-3 services-title-warning text-center">{languageParameter.ruleTitle}</h3>
                                <ul>
                                    {languageParameter.ruleItems.map((rule) => (
                                        <li className="py-1 text-left">
                                            <span className=" font-size-rule">{rule}</span>
                                        </li>))}
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
