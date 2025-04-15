import { useFormContext } from 'react-hook-form';

const StepTwo = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        First Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="firstName"
                            placeholder="John"
                            className={`
                                w-full px-4 py-3 rounded-lg
                                bg-white dark:bg-gray-700
                                border border-gray-300 dark:border-gray-600
                                text-gray-900 dark:text-white
                                placeholder-gray-500 dark:placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition-all duration-200
                                ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'focus:border-blue-500'}
                            `}
                            aria-invalid={errors.firstName ? 'true' : 'false'}
                            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                            {...register('firstName')}
                        />
                        {errors.firstName && (
                            <p
                                id="firstName-error"
                                className="mt-1 text-sm text-red-500"
                                role="alert"
                            >
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Last Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Doe"
                            className={`
                                w-full px-4 py-3 rounded-lg
                                bg-white dark:bg-gray-700
                                border border-gray-300 dark:border-gray-600
                                text-gray-900 dark:text-white
                                placeholder-gray-500 dark:placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition-all duration-200
                                ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'focus:border-blue-500'}
                            `}
                            aria-invalid={errors.lastName ? 'true' : 'false'}
                            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                            {...register('lastName')}
                        />
                        {errors.lastName && (
                            <p
                                id="lastName-error"
                                className="mt-1 text-sm text-red-500"
                                role="alert"
                            >
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                    Address
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="address"
                        placeholder="Street 82"
                        className={`
                            w-full px-4 py-3 rounded-lg
                            bg-white dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            text-gray-900 dark:text-white
                            placeholder-gray-500 dark:placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            transition-all duration-200
                            ${errors.address ? 'border-red-500 focus:ring-red-500' : 'focus:border-blue-500'}
                        `}
                        aria-invalid={errors.address ? 'true' : 'false'}
                        aria-describedby={errors.address ? 'address-error' : undefined}
                        {...register('address')}
                    />
                    {errors.address && (
                        <p
                            id="address-error"
                            className="mt-1 text-sm text-red-500"
                            role="alert"
                        >
                            {errors.address.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StepTwo;
