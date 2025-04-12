import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(t => t === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="flex justify-around p-6 bg-gray-400 dark:bg-gray-800">
            <h1 className="font-black text-gray-800 dark:text-gray-500 text-4xl">MultiForm</h1>
            <button
                className="text-2xl p-3 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.3)]"
                onClick={toggleTheme}
                type='button'
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    );
};

export default Header;
