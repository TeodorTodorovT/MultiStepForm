import { useContext } from 'react';
import FormContext from '../../context/FormContext';

const StepOne = () => {
    const { formData, updateField, handleNext } = useContext(FormContext);
    return (
        <form className="flex flex-col items-center gap-2 bg-gray-300 dark:bg-gray-800 border-gray-400 rounded-4xl px-16 py-10 shadow-lg">
            <label
                htmlFor="email"
                className="mt-2 text-lg font-semibold dark:text-white"
            >
                Email:
            </label>
            <input
                type="text"
                placeholder="example@domain.com"
                id="email"
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2"
                onChange={(e) => updateField('email', e.target.value)}
                value={formData.email}
            />
            <label
                htmlFor="password"
                className="mt-2 text-lg font-semibold dark:text-white"
            >
                Password:
            </label>
            <input
                type="password"
                placeholder="********"
                id="password"
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2"
                onChange={(e) => updateField('password', e.target.value)}
                value={formData.password}
            />
            <button
                type="button"
                className="px-6 py-3 mt-6 bg-gray-900 rounded-3xl font-semibold cursor-pointer hover:bg-gray-700 text-white"
                onClick={handleNext}
            >
                Continue
            </button>
        </form>
    );
};

export default StepOne;
