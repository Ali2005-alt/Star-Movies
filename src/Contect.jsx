import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto my-10 px-4" id="contact">
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

      {/* العنوان */}
      <h2 className="text-center mb-8 font-bold text-3xl text-purple-600">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* نموذج التواصل */}
        <div className="p-6 shadow-lg rounded-lg bg-base-200">
          <h4 className="mb-4 text-xl font-semibold">Send a Message</h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button
              type="button"
              className="btn btn-warning w-full font-bold"
            >
              Send
            </button>
          </form>
        </div>

        {/* معلومات التواصل */}
        <div className="p-6 shadow-lg rounded-lg bg-base-200">
          <h4 className="mb-4 text-xl font-semibold">Contact Information</h4>
          <p className="flex items-center mb-2">
            <i className="fas fa-home mr-2"></i> Marib, Yemen
          </p>
          <p className="flex items-center mb-2">
            <i className="fas fa-envelope mr-2"></i> Star Movies@example.com
          </p>
          <p className="flex items-center mb-4">
            <i className="fas fa-phone mr-2"></i> +967 737 783 280
          </p>
          <div className="divider"></div>
          <h5 className="text-lg font-semibold mb-2">Business Hours</h5>
          <p>Saturday - Thursday: 9:00 AM - 9:00 PM</p>
          <p>Friday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
