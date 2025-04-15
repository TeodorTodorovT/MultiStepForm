import FormContext from '../../context/CustomFormContext';
import { useFormContext } from 'react-hook-form';

const StepOne = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                    Email
                </label>
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        placeholder="example@domain.com"
                        className={`
                            w-full px-4 py-3 rounded-lg
                            bg-white dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            text-gray-900 dark:text-white
                            placeholder-gray-500 dark:placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            transition-all duration-200
                            ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:border-blue-500'}
                        `}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        {...register('email')}
                    />
                    {errors.email && (
                        <p
                            id="email-error"
                            className="mt-1 text-sm text-red-500"
                            role="alert"
                        >
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className={`
                            w-full px-4 py-3 rounded-lg
                            bg-white dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            text-gray-900 dark:text-white
                            placeholder-gray-500 dark:placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            transition-all duration-200
                            ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:border-blue-500'}
                        `}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        aria-describedby={errors.password ? 'password-error' : undefined}
                        {...register('password')}
                    />
                    {errors.password && (
                        <p
                            id="password-error"
                            className="mt-1 text-sm text-red-500"
                            role="alert"
                        >
                            {errors.password.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StepOne;
