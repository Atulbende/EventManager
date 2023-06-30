import React, { useEffect, useState } from 'react'
import { MenuList } from './routers';
import { NavLink } from 'react-router-dom';

export default function Topnav() {
  const [Toggle,setToggle]=useState('');
  function isToggle(){
    (Toggle)?setToggle(''):setToggle('show');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav">
        <section className='container '>
        <a className=" navbar-brand" href="#">Events Manager</a>
        <button className="navbar-toggler" onClick={()=>{isToggle()}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${Toggle}`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {MenuList.map((val, i) => {
                return (val.visible) ? (<li className="nav-item" key={i}><NavLink className="nav-link" to={val.link}>{val.title}</NavLink></li>) : '';
              })
              }
            </ul>
        </div>
        </section>
    </nav>
  )
}
