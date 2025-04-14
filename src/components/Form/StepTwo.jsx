import { useFormContext } from 'react-hook-form';

const StepTwo = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <>
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
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2 dark:text-white"
                {...register('firstName', { required: true })}
            />
            {errors.firstName && (
                <p className="text-red-500">First Name is required!</p>
            )}
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
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2 dark:text-white"
                {...register('lastName', { required: true })}
            />
            {errors.lastName && (
                <p className="text-red-500">Last Name is required!</p>
            )}
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
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2 dark:text-white"
                {...register('address', { required: true })}
            />
            {errors.address && (
                <p className="text-red-500">Address is required!</p>
            )}
        </>
    );
};

export default StepTwo;
