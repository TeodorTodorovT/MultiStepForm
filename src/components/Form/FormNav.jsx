import { useContext } from "react";
import FormContext from "../../context/FormContext";


const FormNav = () => {
    const {formStep, handleBack} = useContext(FormContext);
    
    return (
        <div className="flex flex-col gap-3 bg-gray-500 px-16 pb-7 pt-3 mb-[-15px] rounded-t-2xl">
            <h2 className="text-3xl font-bold dark:text-white">Registration</h2>
            <div className="flex flex-col items-center">
                <p className="text-xl p-2 dark:text-white">
                    <span className="font-bold text-2xl">{formStep}</span>/3
                </p>
                <button
                    type="button"
                    className={`p-2 bg-gray-900 rounded-full font-semibold hover:bg-gray-700 text-white ${
                        formStep <= 1
                            ? 'opacity-50 cursor-not-allowed'
                            : 'cursor-pointer'
                    }`}
                    onClick={handleBack}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default FormNav;
