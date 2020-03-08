import React from 'react';

const Filters = ({ changeSearchString, changeType, type}) => {
    return (
        <div className = "row">
            <div className="col-xs-6">
                <label className = 'ml-5'>Type of contest :</label>
                <select onChange = {changeType} value = {type} className = "form-control ml-5 mb-3" style = {{width: "150px", height: "35px"}}>
                    <option value = "ALL">All Contests</option>
                    <option value = "ICPC">ICPC</option>
                    <option value = "CF">CF</option>
                </select>
            </div>
            <div className="col-xs-6">
                <label className = 'ml-5'>Search :</label>
                <input onChange = {changeSearchString} className = 'form-control ml-5 mb-3' type = "text" placeholder = "All Contests" style = {{width: "500px", height: "35px"}}/>
            </div>
        </div>
    );
}

export default Filters;