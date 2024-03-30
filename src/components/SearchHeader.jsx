import React from 'react'
import Header from './Navbar'
import SearchForm from './SearchForm'
import './Header.css'

const SearchHeader = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Header />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'> Search for a park to visit!</h2>
          <SearchForm />
        </div>
      </header>
      
    </div>
  )
}

export default SearchHeader
