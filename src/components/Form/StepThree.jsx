import { useFormContext } from 'react-hook-form';

const StepThree = () => {
    const { getValues } = useFormContext();
    const formData = getValues();

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Review Your Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Please verify your details before submitting
                </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Email
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                            {formData.email}
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Address
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                            {formData.address}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            First Name
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                            {formData.firstName}
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Last Name
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                            {formData.lastName}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>All information looks correct? Click submit to complete your registration.</p>
            </div>
        </div>
    );
};

export default StepThree;
