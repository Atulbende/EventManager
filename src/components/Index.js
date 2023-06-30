import React from 'react'
import {Routes,Route} from 'react-router-dom';
import {MenuList} from './navbar/routers'
import Topnav from './navbar/Topnav';

export default function Index() {
  return (
    <>
    <Topnav/>
    <Routes>{MenuList.map((val,key)=>{return <Route key={val.link}  path={val.link} element={val.component}/> })} </Routes>
    </>
  )
}
