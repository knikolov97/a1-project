import React from 'react';
import {Link} from "react-router-dom";
import Launch from "../Launch";

function LaunchDetails() {

    const url = window.location.href.slice(window.location.href.lastIndexOf('/') + 1, window.location.href.length);

    return (
        <div>
            <div className="row">
                <Link to="/">
                    <div className="btn btn-success">Back</div>
                </Link>
            </div>
            <div className="row">
                <Launch launchId={url} />
            </div>

        </div>
    );
}

export default LaunchDetails;
