const StepTwo = ({ formData, setFormData, handleNext }) => {
    return (
        <form className="flex flex-col items-center gap-2 bg-gray-300 dark:bg-gray-800 border-gray-400 rounded-4xl px-16 py-10 shadow-lg">
            <label
                htmlFor="firstName"
                className="mt-2 text-lg font-semibold dark:text-white"
            >
                First Name:
            </label>
            <input
                type="text"
                placeholder="John"
                id="firstName"
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2"
                onChange={(e) => setFormData(fd => ({...fd, firstName: e.target.value}))}
                value={formData.firstName}
            />
            <label
                htmlFor="lastName"
                className="mt-2 text-lg font-semibold dark:text-white"
            >
                Last Name:
            </label>
            <input
                type="text"
                placeholder="Doe"
                id="lastName"
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2"
                onChange={(e) => setFormData(fd => ({...fd, lastName: e.target.value}))}
                value={formData.lastName}
            />
            <label
                htmlFor="address"
                className="mt-2 text-lg font-semibold dark:text-white"
            >
                Address:
            </label>
            <input
                type="text"
                placeholder="Street 82"
                id="address"
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2"
                onChange={(e) => setFormData(fd => ({...fd, address: e.target.value}))}
                value={formData.address}
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

export default StepTwo;
