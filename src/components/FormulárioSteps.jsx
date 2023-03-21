import React, { useState } from 'react';
import Form01 from './Formulário1';

function FormSteps() {
  const [step, setStep] = useState(1);
  const [student, setStudent] = useState({
    enrollment: '',
    name: '',
    birthday: '',
    email: '',
    cellphone: '',
    university: '',
    campus: '',
    course: '',
    currentPeriod: '',
  });

  const chooseForm = () => {
    switch (step) {
      case 1:
        return <Form01 change={setStep} student={student} updateStudent={setStudent} />;
      default:
        return null;
    }
  };

  return (
    <div className="grow flex flex-col items-center p-20">
      {chooseForm()}
    </div>
  );
}

export default FormSteps;