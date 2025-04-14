import FormContext from '../../context/CustomFormContext';
import { useFormContext } from 'react-hook-form';

const StepOne = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <>
            <label
                htmlFor="email"
                className="mt-2 text-lg font-semibold dark:text-white"
            >
                Email:
            </label>
            <input
                type="email"
                placeholder="example@domain.com"
                id="email"
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2 dark:text-white"
                {...register('email', { required: true })}
            />
            {errors.email && <p className='text-red-500'>Email is required!</p>}
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
                className="bg-gray-200 dark:bg-gray-700 placeholder-gray-500 rounded-2xl p-2 dark:text-white"
                // onChange={(e) => updateField('password', e.target.value)}
                // value={formData.password}
                {...register('password', { required: true })}
            />
            {errors.password && <p className='text-red-500'>Password is required!</p>}

        </>
    );
};

export default StepOne;
