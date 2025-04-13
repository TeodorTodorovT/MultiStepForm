import { useContext } from 'react';
import StepOne from './StepOne';
import FormNav from './FormNav';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FormProvider from './FormProvider';
import FormContext from '../../context/FormContext';

const MultiFormContent = () => {
    const { formStep } = useContext(FormContext);
    return (

        
                <div className="flex justify-center items-center flex-col h-[calc(100vh-104px)]">
                    <FormNav />

                    {formStep === 1 && <StepOne />}
                    {formStep === 2 && <StepTwo />}
                    {formStep === 3 && <StepThree />}
                </div>

    );
};

const MultiForm = () => {
    return (
        <FormProvider>
            <MultiFormContent/>
        </FormProvider>
    )
}

export default MultiForm;
