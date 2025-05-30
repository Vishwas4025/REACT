import { useReducer, useState } from 'react';
import { initialState, profileReducer } from '../context/profileReducer';
import PersonalInfo from '../components/PersonalInfo';
import EducationInfo from '../components/EducationInfo';
import Interests from '../components/Interests';
import Achievements from '../components/Achievements';

export default function NewProfile() {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const steps = [
    <PersonalInfo state={state} dispatch={dispatch} nextStep={nextStep} />,
    <EducationInfo state={state} dispatch={dispatch} nextStep={nextStep} prevStep={prevStep} />,
    <Interests state={state} dispatch={dispatch} nextStep={nextStep} prevStep={prevStep} />,
    <Achievements state={state} dispatch={dispatch} prevStep={prevStep} />,
  ];

  return (
    <div>
      {steps[step]}
    </div>
  );
}
