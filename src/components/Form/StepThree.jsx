import { useFormContext } from 'react-hook-form';

const StepThree = () => {
    const { getValues } = useFormContext();
    const formData = getValues();

    return (
        <div className='flex flex-col items-center  gap-2 dark:text-white'>
            <p>Please review the information before registering.</p>
            <p>
                <span className="font-bold ">Email: </span>
                {formData.email}
            </p>
            <p>
                <span className="font-bold ">First Name: </span>
                {formData.firstName}
            </p>
            <p>
                <span className="font-bold ">Last Name: </span>
                {formData.lastName}
            </p>
            <p>
                <span className="font-bold ">Address: </span>
                {formData.address}
            </p>
        </div>
    );
};

export default StepThree;
