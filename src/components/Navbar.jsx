const Navbar = () => {
  return (
    <nav className=" text-white py-5 bg-dark-blue-elements">
      <div className=" container flex justify-between items-center">
          <h1 className=" lg:text-2xl font-bold">Where in the world?</h1>
          <div className=" flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
            <p className="">Dark mode</p>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
