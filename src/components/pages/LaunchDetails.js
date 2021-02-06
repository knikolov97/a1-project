import React from 'react';
import {Link} from "react-router-dom";

function LaunchDetails() {

    return (
        <>
            <Link to="/">
                <div className="btn btn-success">Back</div>
            </Link>
            Launch Details
        </>
    );
}

export default LaunchDetails;
