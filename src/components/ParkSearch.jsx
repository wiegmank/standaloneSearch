import React from 'react'
import SearchHeader from './SearchHeader'
//import Header from './Header'
import { Outlet } from 'react-router-dom'
//import SearchForm from './SearchForm'
//import './Header.css'

const ParkSearch = () => {
  return (
    <>
      <SearchHeader />
      <Outlet /> 
    </>
  )
}

export default ParkSearch
