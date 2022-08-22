import React from 'react';
import './app.less'
import { useDispatch, useSelector } from 'react-redux';
import Main from './main/Main';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Card from './card/card';
import Error from './main/Error';

const App = () => {
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/card/:username/:reponame" element={<Card />} />
                    <Route path="/error" element={<Error />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default App;






