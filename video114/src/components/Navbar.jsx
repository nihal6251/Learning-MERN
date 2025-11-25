import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-600 text-white'>
            <div className="logo">
                <span className='font-bold text-xl mx-8'>
                    iTask
                </span>
            </div>
            <ul className='flex space-x-4 mx-9'>
                <li>Home</li>
                <li>YourTask</li>
                
            </ul>
        </nav>
    )
}

export default Navbar