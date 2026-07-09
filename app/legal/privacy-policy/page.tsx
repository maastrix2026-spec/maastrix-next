import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import PrivacyPolicy from '@/components/legal/PrivacyPolicy'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicy />
      <Footer/>
    </div>
  )
}

export default page