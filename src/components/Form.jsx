const Form = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-104px)]">
            <form className="flex flex-col items-center gap-2 bg-gray-300 dark:bg-gray-800 border-gray-400 rounded-4xl px-10 py-10">
                <h2 className="text-3xl font-bold mb-10 px-10 dark:text-white">Registration</h2>
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
                />
                <button className="px-6 py-3 mt-6 bg-gray-900 rounded-3xl font-semibold cursor-pointer hover:bg-gray-700 text-white">Register</button>
            </form>
        </div>
    );
};

export default Form;
