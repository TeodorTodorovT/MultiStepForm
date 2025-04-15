import { useState } from 'react';
import StepOne from './components/Form/StepOne';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';
import MultiForm from './components/Form/MultiForm';
import CustomFormProvider from './components/Form/CustomFormProvider';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme} min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300`}>
                <Header />
                <main className="container mx-auto px-4">
                    <CustomFormProvider>
                        <MultiForm />
                    </CustomFormProvider>
                </main>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
