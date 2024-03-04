import React from 'react'
import './header.css'

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false)

    return (
        <header className='flex'>
            <button
                className='menu'
                onClick={() => setOpenNav(!openNav)}
            >
                {!openNav ? <>&#9776;</> : <>&#10006; </>}
            </button>
            <div />
            <nav className={openNav && "open-nav"}>
                <ul className='flex'>
                    <li><a href="">About</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button className='switch'>light</button>
        </header>
    )
}
