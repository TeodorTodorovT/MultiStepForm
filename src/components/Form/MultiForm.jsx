import { useContext } from 'react';
import StepOne from './StepOne';
import FormNav from './FormNav';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import CustomFormProvider from './CustomFormProvider';
import FormContext from '../../context/CustomFormContext';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const MultiFormContent = () => {
    const { formStep, handleNext } = useContext(FormContext);
    const { handleSubmit } = useFormContext();
    return (
        <div className="flex justify-center items-center flex-col h-[calc(100vh-104px)]">
            <FormNav />
            <form
                onSubmit={handleSubmit(handleNext)}
                className="flex flex-col items-center gap-2 bg-gray-300 dark:bg-gray-800 border-gray-400 rounded-4xl px-16 py-10 shadow-lg"
            >
                {formStep === 1 && <StepOne />}
                {formStep === 2 && <StepTwo />}
                {formStep === 3 && <StepThree />}
                <button
                    type="submit"
                    className="px-6 py-3 mt-6 bg-gray-900 rounded-3xl font-semibold cursor-pointer hover:bg-gray-700 text-white"
                >
                    {formStep === 3 ? 'Submit' : 'Next'}
                </button>
            </form>
        </div>
    );
};

const MultiForm = () => {
    const methods = useForm();
    return (
        <CustomFormProvider>
            <FormProvider {...methods}>
                <MultiFormContent />
            </FormProvider>
        </CustomFormProvider>
    );
};

export default MultiForm;
