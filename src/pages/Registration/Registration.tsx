import { BaseSyntheticEvent, useMemo, useState } from "react";
import { Country, State, City }  from 'country-state-city';

import Stepper from "components/Stepper"
import { IRegistrationInfo } from "./types";
import useStyles from './styles';

const steps = ['Personal Info', 'Job Info', 'Suggestions'];

const Registration = () => {
  const styles = useStyles();
  const [ activeStep, setActiveStep] = useState(0);
  const [ registrationInfo, setRegistrationInfo ] = useState<IRegistrationInfo>({});
  const allCountries = useMemo(() => {
    return Country.getAllCountries();
  }, []);

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    console.log('name, value', name, value);
    setRegistrationInfo((info) => ({...info, [name]: value}));
  };

  const toNextStep = () => {
    setActiveStep((prev) => ++prev);
  }

  const toPrevStep = () => {
    setActiveStep((prev) => --prev);
  }

  console.log('registrationInfo', registrationInfo);
  console.log('allCountries', allCountries);
  
  
  const content = useMemo(() => {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      department,
      job_title: jobTitle,
      country,
      city,
    } = registrationInfo;

    switch (activeStep) {
      case 0:
        return <>
          <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} value={firstName}/> <br />
          <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} value={lastName}/> <br />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={email}/> <br />
          <div>
            <span>
              Male
            </span>
            <input
              id="male"
              value="male"
              name="gender"
              type="radio"
              onChange={handleChange}
            />
            <span>Female</span>
            <input
              id="female"
              value="female"
              name="gender"
              type="radio"
              onChange={handleChange}
            />
          </div>
        </>
      case 1:
        return <>
          {/* <Dropdown
            placeholder='Select Friend'
            fluid
            selection
            options={allCountries}
          /> */}
        </>
      case 2:
        return <>

        </>
    }
  }, [activeStep]);

  return <div>
    <Stepper steps={steps} activeStep={activeStep} />
    <div className={styles.content}>
      {content}
    </div>
    <div className={styles.controlSection}>
      <button onClick={toPrevStep}>Prev</button>

      <button onClick={toNextStep}>Next</button>
    </div>
  </div>;
};

export default Registration;
