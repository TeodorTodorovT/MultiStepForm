import { useContext } from "react";
import FormContext from "../../context/CustomFormContext";

const FormNav = () => {
    const { formStep, handleBack } = useContext(FormContext);

    
    return (
        <nav className="w-full max-w-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl px-8 py-6 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Registration</h2>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                            {[1, 2, 3].map((step) => (
                                <div
                                    key={step}
                                    className={`
                                        w-3 h-3 rounded-full transition-all duration-300
                                        ${step <= formStep
                                            ? 'bg-white scale-110'
                                            : 'bg-white/50'
                                        }
                                    `}
                                />
                            ))}
                        </div>
                        <span className="text-white/90 text-sm">
                            Step {formStep} of 3
                        </span>
                    </div>
                    
                    {formStep > 1 && (
                        <button
                            type="button"
                            className="
                                px-4 py-2 rounded-lg
                                bg-white/10 hover:bg-white/20
                                text-white font-medium
                                transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-white/50
                                cursor-pointer
                            "
                            onClick={handleBack}
                            aria-label="Go back to previous step"
                        >
                            ← Back
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default FormNav;
