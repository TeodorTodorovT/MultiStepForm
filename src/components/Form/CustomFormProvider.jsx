import { useState } from 'react';
import CustomFormContext from '../../context/CustomFormContext';

const CustomFormProvider = ({ children }) => {
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

    const handleNext = async () => {
        
        if (formStep < 3) {
            setFormStep((s) => s + 1);
        }
        if (formStep === 3) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("Form submitted successfully!");

        }
    };

    const updateField = (field, value) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    return (
        <CustomFormContext.Provider
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
        </CustomFormContext.Provider>
    );
};

export default CustomFormProvider;
