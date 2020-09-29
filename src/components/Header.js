import React from 'react';
import './Header.css';

export default ({black}) =>{
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/netflix.png" alt="Nexflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="User"/>
        </a>
      </div>
    </header>
  );
}