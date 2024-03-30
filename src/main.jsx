import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import { AppProvider } from './context'
import './index.css'
import ParkSearch from './components/ParkSearch'
import SearchList from './components/SearchList'


const root = ReactDOM.createRoot(document.getElementById('root')).render(
 
  <AppProvider>
  <BrowserRouter>
    <Routes>
      <Route path = "/parksearch" element = {<ParkSearch />}>
        <Route path = "/parksearch/search" element = {<SearchList />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </AppProvider>
)
