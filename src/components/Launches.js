import React from 'react';

const Launches = ({launches, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }


    return (
        <ul className="list-group mb-4">
            {launches.map(launch => (
                <li key={launch.flight_number} className="list-group-item">
                    {launch.mission_name}
                </li>
            ))}
        </ul>
    )
};

export default Launches;
