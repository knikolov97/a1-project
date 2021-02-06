import React from 'react';
import LaunchDetails from "./pages/LaunchDetails";
import {Link} from "react-router-dom";
import './Launches.css';

const Launches = ({launches, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <ul className="list-group mb-4">
            {launches.map(launch => (
                <li key={launch.id} className="list-group-item">
                    {(new Date(launch.date_utc)).toLocaleDateString('en-US', DATE_OPTIONS)}
                    <Link to={"/launch/" + launch.id} >
                        <div onClick={LaunchDetails} className="btn btn-primary open-launch">Open</div>
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default Launches;
