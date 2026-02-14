import React from 'react'
import { Link } from 'react-router-dom' 

const About = () => {
  return (
    <div className="container mx-auto my-10 text-center px-4">
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/">Homepage</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-4xl font-bold">Star Movies</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button className="btn btn-ghost btn-circle"> 
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>

      {/* صورة البروفايل */}
      <div className="mb-6 flex justify-center">
        <img 
          src="public/profile.jpg"   // ضع هنا صورة شخصية مناسبة داخل مجلد public/Images
          alt="Profile" 
          className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
        />
      </div>

      {/* معلومات البروفايل */}
      <h1 className="font-bold text-3xl">Ali</h1>
      <p className="text-gray-500">Web Developer | React & Tailwind Enthusiast</p>

      {/* تفاصيل إضافية */}
      <div className="mt-6 text-left max-w-2xl mx-auto space-y-2">
        <p><span className="font-semibold">Email:</span> allawy2119500@gmail.com</p>
        <p><span className="font-semibold">Location:</span> Marin, Yemen</p>
        <p><span className="font-semibold">Skills:</span> React, Tailwind, CSS, Vite, Speaking many languages</p>
        <p><span className="font-semibold">Bio:</span> Passionate about creating beautiful and functional web applications. Always eager to learn new technologies and improve my skills.</p>
        <p><span className="font-semibold">Hobbies:</span> Coding, Driving, Traveling, Playing Football, Swimming</p>
      </div>

      {/* أزرار */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="btn btn-warning font-bold">Know More</button>
        
        {/* زر ينقلك إلى صفحة Contact */}
        <Link to="/contact">
          <button className="btn btn-outline font-bold">Contact Me</button>
        </Link>
      </div>
    </div>
  )
}

export default About
