import React, { Component, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export const MainLyout = ()=> {
    //เลือกpartแรก
    const navigate = useNavigate ()
    
    useEffect (() =>{
        navigate ('/Home')
    },[])
    
    return (
        <div>
            <Navbar/> 
            <Outlet/>    
        </div>
    )
}
