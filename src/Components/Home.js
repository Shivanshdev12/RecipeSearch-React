import React from 'react';
import './Home.css';

export default function Home() {
    return (
    <React.Fragment>    
    <div className='jumbotron'>
        <div className='container'>
            <div className='row row-header'>
                <div className='col-sm-12'>
                    <h1><cite>Welcome! to forkify</cite></h1>
                    <h4 class="text-warning">Search your recipes here</h4>
                </div>
            </div>
        </div>
    </div>
    <div className='jumbotron'>
        <div className='container'>
            <div className='row row-header'>
                <div className='col-sm-12'>
                    <h2 className='text-warning'><cite>Search your favourite Recipe in the search bar</cite> ✌️</h2>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}
