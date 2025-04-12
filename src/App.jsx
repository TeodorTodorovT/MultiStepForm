import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme} h-screen bg-gray-200 dark:bg-gray-700`}>
                <Header />
                <Form />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
