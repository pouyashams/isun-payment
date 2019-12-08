import React from 'react';
import queryString from 'query-string';

class SuccessPayment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let params = queryString.parse(this.props.location.search);
        console.log(params);
        return (
            <div className="py-2">
                {params["message"]}
                {params["referenceNumber"]}
            </div>
        );
    }
}

export default SuccessPayment;
