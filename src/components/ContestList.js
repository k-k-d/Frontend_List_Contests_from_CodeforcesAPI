import React from 'react';
import { Link } from 'react-router-dom';


const ContestList = ({ contests, loading }) => {
    if(loading) {
        return <h5 className="ml-5">Loading contests........</h5>;
    }
    return (
        <ul style = {{width : "1100px"}}>
            {contests.map(contest => {
                return <li className = 'list-group-item' key = {contest.id}>
                    <Link style = {{color: "black"}} to = {{pathname: `contest/:${contest.id}`, state: contest}}>{contest.name}</Link>
                    {/* <button className = "btn btn-danger ml-5">Add to Favorites</button> */}
                </li>;
            })}
        </ul>
    );
};

export default ContestList;