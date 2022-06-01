import React from 'react'

function Footer() {
  return (
    <div className='grid md:grid-cols-4 gap-y-10 px-32 
    py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-500'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investor</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-500'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>Airbnb community</p>
        </div>

        <div className='space-y-4 text-xs text-gray-500'>
            <h5 className='font-bold'>HOST</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investor</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-500'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Safety norms</p>
            <p>Call us</p>
            <p>Email us</p>
        </div>
    </div>
  )
}

export default Footer