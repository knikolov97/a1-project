import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Launch = ({launchId}) => {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const [launch, setLaunch] = useState({});
    const [launchUrl, setLaunchUrl] = useState('https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Logo-700x394.png');

    useEffect(() => {

        const fetchLaunches = async () => {
            const res = await axios.get('https://api.spacexdata.com/v4/launches/' + launchId);
            setLaunch(res.data);
            if (res.data.links != null && res.data.links.patch.small != null) {
                setLaunchUrl(res.data.links.patch.small);
            }
        };

        fetchLaunches();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="table-responsive-xl">
                        <table className="table">
                            <tbody>
                            <tr>
                                <th scope="row">Date</th>
                                <td>{(new Date(launch.date_utc)).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Success</th>
                                <td className={launch.success ? "text-success" : "text-danger"}>
                                    {launch.success ? "Success" : "Failure"}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Flight Number</th>
                                <td>{launch.flight_number}</td>
                            </tr>
                            <tr>
                                <th scope="row">Details</th>
                                <td>{launch.details}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={launchUrl} alt="" />
                </div>
            </div>

        </div>
    )
};

export default Launch;
