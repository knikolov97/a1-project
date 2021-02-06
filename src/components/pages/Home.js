import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Launches from "../Launches";
import Pagination from "../Pagination";

function Home() {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [launchesPerPage] = useState(10);

    useEffect(() => {
        const fetchLaunches = async () => {
            setLoading(true);
            const res = await axios.get('https://api.spacexdata.com/v4/launches');
            setLaunches(res.data.reverse());
            setLoading(false);
        };

        fetchLaunches();
    }, []);

    const indexOfLastLaunch = currentPage * launchesPerPage;
    const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
    const currentLaunch = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <h1>Launches</h1>
            <Launches launches={currentLaunch} loading={loading} />
            <Pagination launchesPerPage={launchesPerPage} totalLaunches={launches.length} paginate={paginate} />
        </div>
    );
}

export default Home;
