import image from '../../assets/images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
const Head = () => {
    return (<Link to='/'>
        <img src={image} className="h-24 py-2 rounded-md" alt="logo"/>
    </Link>)
}

const Header = () => {
    const title = "Food Villa App";
    const [login, setLogin] = useState(false);
    const isOnline = useOnline();
    return (
        <div className="flex items-center justify-between mx-2 px-2 bg-orange-200 rounded-md shadow-md sm:">
            <Head />
            <h1 className="text-5xl font-serif">{title}</h1>
            <div className="nav-items">
                <ul className="flex">
                    <Link to="/">
                        <li className='px-4 hover:text-gray-400'>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className='px-4 hover:text-gray-400'>About</li>
                    </Link>
                    <Link to="/contact">
                        <li className='px-4 hover:text-gray-400'>Contact</li>
                    </Link>
                    <Link to="/cart">
                        <li className='px-4 hover:text-gray-400'>Cart</li>
                    </Link>
                    <Link to="/instamart">
                        <li className='px-4 hover:text-gray-400'>Instamart</li>
                    </Link>
                    <li className='px-4'>Kakinada 📌</li>
                    <li className='px-4'>{isOnline ? '✅' : '🔴'}</li>
                    {login ? (
                        <button onClick={() => setLogin(false)}>Logout</button>
                    ) : (
                        <button  onClick={() => setLogin(true)}>login</button>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;