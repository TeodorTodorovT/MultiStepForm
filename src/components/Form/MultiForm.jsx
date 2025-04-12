import { useState } from 'react';
import StepOne from './StepOne';
import FormNav from './FormNav';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const MultiForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
    });
    
    const [formStep, setFormStep] = useState(1);

    const handleBack = () => {
        if(formStep > 1){
        setFormStep(s => s - 1)
        }
    }

    const handleNext = () => {
        if(formStep < 3){
            setFormStep(s => s + 1)
            }
        if(formStep === 3){
            console.log("You Registered!");
            
        }
    }

    return (
        <>
            <div className="flex justify-center items-center flex-col h-[calc(100vh-104px)]">
                <FormNav formStep={formStep} handleBack={handleBack}/>

                {formStep === 1 && <StepOne formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                {formStep === 2 && <StepTwo formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                {formStep === 3 && <StepThree formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
            </div>
        </>
    );
};

export default MultiForm;
