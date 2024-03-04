import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header className='flex'>
            <button className='menu'>menu</button>
            <nav>
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
