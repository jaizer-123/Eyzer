import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './page/user/LandingPage'
import Listing from './page/user/listing' 
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // Add state to track current page

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToListing={() => setCurrentPage('listing')} />
      ) : (
        <Listing onNavigateToLanding={() => setCurrentPage('landing')} />
      )}
    </>
  )
}

export default App