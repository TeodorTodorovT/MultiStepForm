import { useContext } from 'react';
import StepOne from './StepOne';
import FormNav from './FormNav';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FormContext from '../../context/CustomFormContext';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const MultiFormContent = () => {
    const { formStep, handleNext } = useContext(FormContext);
    const { handleSubmit, formState } = useFormContext();
    
    return (
        <div className="flex justify-center items-center flex-col min-h-[calc(100vh-64px)]">
            <FormNav />
            <form
                onSubmit={handleSubmit(handleNext)}
                className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-b-2xl shadow-lg p-8"
            >
                <div className="space-y-6">
                    <div className="transition-all duration-300 ease-in-out">
                        {formStep === 1 && <StepOne />}
                        {formStep === 2 && <StepTwo />}
                        {formStep === 3 && <StepThree />}
                    </div>
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className={`
                                px-8 py-3 rounded-xl font-semibold text-white
                                transition-all duration-300 ease-in-out
                                ${formState.isValid
                                    ? 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
                                    : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                }
                                focus:outline-none
                                cursor-pointer
                            `}
                            disabled={!formState.isValid}
                            aria-label={formStep === 3 ? 'Submit form' : 'Next step'}
                        >
                            {formStep === 3 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const stepSchemas = [
    yup.object({
        email: yup
            .string()
            .required('Email is required')
            .email('Invalid email'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
    }),
    yup.object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        address: yup.string().required('Address is required'),
    }),
    yup.object(),
];

const MultiForm = () => {
    const { formStep } = useContext(FormContext);
    const methods = useForm({
        resolver: yupResolver(stepSchemas[formStep - 1]),
        mode: 'onTouched'
    });
    return (
        <FormProvider {...methods}>
            <MultiFormContent />
        </FormProvider>
    );
};

export default MultiForm;
