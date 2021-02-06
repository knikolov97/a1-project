import React from 'react';
import {Link} from "react-router-dom";
import Launch from "../Launch";
import './LaunchDetails.css';

function LaunchDetails() {

    const url = window.location.href.slice(window.location.href.lastIndexOf('/') + 1, window.location.href.length);

    return (
        <div className="mt-5">
            <div className="row">
                <Launch launchId={url} />
            </div>

            <div className="row" id="back-button">
                <Link to="/">
                    <div className="btn btn-primary">Back</div>
                </Link>
            </div>
        </div>
    );
}

export default LaunchDetails;
