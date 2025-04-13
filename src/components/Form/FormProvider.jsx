import { useState } from 'react';
import FormContext from '../../context/FormContext';

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
    });

    const [formStep, setFormStep] = useState(1);

    const handleBack = () => {
        if (formStep > 1) {
            setFormStep((s) => s - 1);
        }
    };

    const handleNext = () => {
        if (formStep < 3) {
            setFormStep((s) => s + 1);
        }
        if (formStep === 3) {
            console.log('You Registered!');
        }
    };

    const updateField = (field, value) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    return (
        <FormContext.Provider
            value={{
                formData,
                setFormData,
                formStep,
                handleBack,
                handleNext,
                updateField,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
