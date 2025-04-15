import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        setTheme(t => t === 'light' ? 'dark' : 'light');
    };


    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="font-black text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
                        MultiForm
                    </h1>
                    <button
                        className="p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
                        onClick={handleThemeToggle}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        <span className="text-2xl transform transition-transform duration-300 hover:rotate-12">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
