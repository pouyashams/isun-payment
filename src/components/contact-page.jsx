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
                            <div className=" ml-20 shadow border radius-first-item">
                                <h3 className=" col-12 py-3 services-title-warning text-center">{languageParameter.contactTitle}</h3>
                                <pre className="px-4 py-2 font-size-contact">
                                                {languageParameter.contactItems}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default rulePage;
