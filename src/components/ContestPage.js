import React from 'react';

class ContestPage extends React.Component {
    render() {
        const { params } = this.props.match;
        const contest = this.props.location.state;
        console.log(params);
        console.log(contest);
        return (
            <div>
                <h2 className = "text-primary mb-2 ml-5 mt-2">{contest.name}</h2>
                <h5 className = "text ml-5">Type of Contest : {contest.type}</h5>
                <h5 className = "text ml-5">Current Phase : {contest.phase}</h5>
                <h5 className = "text ml-5">ID : {contest.id}</h5>
            </div>
        );
    }
};

export default ContestPage;