import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ContestList from './components/ContestList';
import Pagination from './components/Pagination';
import Filters from './components/Filters';

const App = () => {
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [searchedContests, setSearchedContests] = useState([]);
  const [displayedContests, setDisplayedContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [contestsPerPage, setContestsPerPage] = useState(10);
  const [type, setType] = useState("ALL");
  const [searchString, setSearchString] = useState("");

  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        const res = await axios.get("https://codeforces.com/api/contest.list");
        setContests(res.data.result);
        setFilteredContests(res.data.result);
        setSearchedContests(res.data.result);
        const indexOfLastContest = currentPage * contestsPerPage;
        const indexOfFirstContest = indexOfLastContest - contestsPerPage;
        setDisplayedContests(res.data.result.slice(indexOfFirstContest, indexOfLastContest));
        setLoading(false);
      };
      fetchData();
    },
    []
  );

  useEffect(
    () => {
      const indexOfLastContest = currentPage * contestsPerPage;
      const indexOfFirstContest = indexOfLastContest - contestsPerPage;
      setDisplayedContests(searchedContests.slice(indexOfFirstContest, indexOfLastContest));
    },
    [currentPage, searchedContests]
  );

  useEffect(
    () => {
      const indexOfLastContest = currentPage * contestsPerPage;
      const indexOfFirstContest = indexOfLastContest - contestsPerPage;
      setDisplayedContests(searchedContests.slice(indexOfFirstContest, indexOfLastContest));
      setCurrentPage(1);
    },
    [contestsPerPage]
  );

  useEffect(
    () => {
      var newContests;
      if(searchString !== "") {
        newContests = filteredContests.filter(contest => (
          contest.name.toLowerCase().search(searchString.toLowerCase()) !== -1
        ));
        setSearchedContests(newContests);
      }
      else {
        setSearchedContests(filteredContests);
      }
      setCurrentPage(1);
    },
    [searchString, filteredContests]
  );

  useEffect(
    () => {
      var newContests;
      if(type === "ALL") {
        setFilteredContests(contests);
      }
      else {
        newContests = contests.filter(contest => (
          contest.type === type
        ));
        setFilteredContests(newContests);
      }
      setCurrentPage(1);
    },
    [type, contests]
  );

  const changeType = (event) => setType(event.target.value);
  const changeSearchString = (event) => setSearchString(event.target.value);
  const pageNav = pageNumber => setCurrentPage(pageNumber);
  const changeContestsPerPage = (event) => {
    if(event.target.value != 0)
      setContestsPerPage(event.target.value)
  };

  return (
    <div>
      <h3 className = 'text-primary mb-2 ml-5 mt-2'>Codeforces Contest List</h3>
      <Filters changeSearchString = {changeSearchString} changeType = {changeType} type = {type}/>
      <div className = 'row mt-1'>
        <label className = 'ml-5 col-xs-6'>Contests per page :</label>
        <input onChange = {changeContestsPerPage} className = 'form-control ml-5 mb-3' type = "text" defaultValue = "10" style = {{width: "70px", height: "25px"}}/>
      </div>
      <Pagination currentPage = {currentPage} contestsPerPage = {contestsPerPage} pageNav = {pageNav} totalContests = {searchedContests.length}/>
      <ContestList contests = {displayedContests} loading = {loading}/>
    </div>
  );
}

export default App;