import React from 'react';
import { useHistory, useLocation } from "react-router-dom";


const CoverPage = () => {
    
    const history = useHistory();

    return (
        <div className="cover">
            <h1>Welcome to Thien-An's portfolio</h1>
            <h2 style={{marginBottom: 20}}>But first, have a nice day.</h2>
            <div>
              <button className="intro__btn" onClick={() => history.push(`/home`)}>
              <div className="label" >
                <span className="hover-effect"></span>
                <span className="label-text">Continue &nbsp;&nbsp;<span style={{fontSize: '1.1em'}}>❯❯❯</span></span>
                </div>                  
              </button>
            </div>

        </div>
    );
}

export default CoverPage;