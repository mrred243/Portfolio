import React from 'react';
import { useHistory, useLocation } from "react-router-dom";


const CoverPage = () => {
    
    const history = useHistory();

    return (
        <div
        style={{height: '100%', paddingLeft: 90, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h1 style={{marginBottom: 80}}>Welcome to Thien-An's portfilio</h1>
          <div>
            <h2 style={{display: 'inline-block', marginRight: 30}}>But first, Have a nice day.</h2>
            <button className="intro__btn" onClick={() => history.push(`/home`)}>
            <div className="label">
              <span className="hover-effect"></span>
              <span className="label-text">Continue &nbsp;&nbsp;<span style={{fontSize: '1.1em'}}>❯❯❯</span></span>
              </div>                  
            </button>
          </div>
        </div>
    );
}

export default CoverPage;