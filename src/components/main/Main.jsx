import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer.js';
import { getRepos } from '../actions/repos.js';
import './main.less'
import Repo from './repo/Repo';
import { createPages } from '../../utils/pagesCreator.js';
import { refreshStyles } from 'less';


const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    const [searchValue, setSearchValue] = useState('')
    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])


    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }



    return (
        <div>
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Input repo name' className="search-input" />
                <button onClick={() => searchHandler()} className='search-btn'>Search</button>
            </div>

            {

                isFetching ? <div className="fetching" /> : repos.map(repo => <Repo repo={repo} />)
            }

            <div className='pages'>
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? 'current-page' : 'page'}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    );
};

export default Main; 