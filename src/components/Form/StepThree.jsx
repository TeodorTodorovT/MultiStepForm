import { useContext } from "react";
import FormContext from "../../context/FormContext";

const StepThree = () => {
    const { formData, handleNext } = useContext(FormContext);

    return (
        <form className="flex flex-col items-center gap-2 bg-gray-300 dark:bg-gray-800 border-gray-400 rounded-4xl px-16 py-10 shadow-lg">
            <p>Please review the information before registering.</p>
            <p><span className="font-bold">Email: </span>{formData.email}</p>
            <p><span className="font-bold">First Name: </span>{formData.firstName}</p>
            <p><span className="font-bold">Last Name: </span>{formData.lastName}</p>
            <p><span className="font-bold">Address: </span>{formData.address}</p>
            <button
                type="button"
                className="px-6 py-3 mt-6 bg-gray-900 rounded-3xl font-semibold cursor-pointer hover:bg-gray-700 text-white"
                onClick={handleNext}
            >
                Register
            </button>
        </form>
    );
};

export default StepThree;
