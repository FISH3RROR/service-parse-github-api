import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { getContributors, getCurrentRepo } from "../actions/repos";
import './card.less'


const Card = () => {
    const { username, reponame } = useParams();
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)

    }, [])

    return (

        <div>

            <button onClick={() => navigate('/')} className='back-btn'>BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt="тут должна быть картинка" />
                <div className='name'>{repo.name}</div>
                <div className="start">{repo.stargazers_count}</div>
            </div>

            {
                contributors.map((c, index) =>
                    <div>{index + 1}. {c.login} </div>)
            }

        </div>
    );
};



export default Card; 