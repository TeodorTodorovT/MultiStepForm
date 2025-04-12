import { useState } from 'react';
import StepOne from './components/Form/StepOne';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';
import MultiForm from './components/Form/MultiForm';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme} h-screen bg-gray-200 dark:bg-gray-700`}>
                <Header />
                <MultiForm/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
