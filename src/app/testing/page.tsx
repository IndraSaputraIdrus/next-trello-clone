import React from 'react'

const TestPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md sticky top-0 w-full">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://1000logos.net/allpng/" alt="Logo" className="h-6 w-6" />
            <span className="ml-2 font-bold text-gray-800">Nama Website</span>
          </div>
          <ul className="hidden md:flex">
            <li className="mx-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            </li>
            <li className="mx-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            </li>
            <li className="mx-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
            </li>
            <li className="mx-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </li>
          </ul>
          <div className="flex items-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
            <button className="px-4 py-2 ml-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Register</button>
          </div>
        </nav>
      </header>

      <main className="flex flex-grow">
        <aside className="w-64 bg-gray-100 border-r border-gray-200">
          <ul className="mt-5">
            <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100">
              <a href="#" className="text-gray-800">Dashboard</a>
            </li>
            <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100">
              <a href="#" className="text-gray-800">Profile</a>
            </li>
            <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100">
              <a href="#" className="text-gray-800">Settings</a>
            </li>
          </ul>
        </aside>
        <section className="flex-1 p-4">
          <h1>Judul Halaman</h1>
          <div className="h-full bg-red-500 flex items-center">content</div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2024 Nama Website. All rights reserved.
      </footer>
    </div>
  );
}

export default TestPage
