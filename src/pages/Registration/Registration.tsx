import { useNavigate } from 'react-router-dom';
import { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react';
import { Country, City } from 'country-state-city';

import Stepper from 'components/Stepper';
import { DEPARTMENT_LIST, REGISTRATION_INFO_COUNT } from 'constants/consts';
import Suggestions from 'components/Suggestions';
import { IRegistrationInfo, ISuggestions } from 'types';
import { useStore } from 'store';
import { ActionTypesEnum } from 'store/types';
import { uuid } from 'utils/uuid';

import useStyles from './styles';

const steps = ['Personal Info', 'Job Info', 'Suggestions'];

const Registration = () => {
  const {
    state: { usersList, userInfo },
    dispatch,
  } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  const styles = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [registrationInfo, setRegistrationInfo] = useState<IRegistrationInfo>({});
  const allCountries = useMemo(() => {
    return Country.getAllCountries();
  }, []);

  const allCityes = useMemo(() => {
    setRegistrationInfo((info) => ({ ...info, city: undefined }));

    return (registrationInfo.country && City.getCitiesOfCountry(registrationInfo.country)) || [];
  }, [registrationInfo.country]);

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    console.log('name, value', name, value);
    setRegistrationInfo((info) => ({ ...info, [name]: value }));
  };

  const doRegistration = () => {
    if (isValidInfo) {
      dispatch({
        type: ActionTypesEnum.ADD_USER_INFO,
        payload: {
          ...registrationInfo,
          suggestions: userSuggestions,
          id: uuid(),
        },
      });
    }
  };

  const userSuggestions = useMemo(() => {
    let suggestions: ISuggestions[] = [];

    if (registrationInfo.department) {
      const matchedData =
        usersList?.filter(({ department }) => department === registrationInfo.department) || [];

      suggestions = matchedData.map((item, index) => ({ ...item, order_number: ++index }));
    }

    return suggestions;
  }, [usersList, registrationInfo]);

  const toNextStep = () => {
    setActiveStep((prev) => ++prev);
  };

  const toPrevStep = () => {
    setActiveStep((prev) => --prev);
  };

  const isValidInfo = useMemo(
    () => Object.values(registrationInfo).length === REGISTRATION_INFO_COUNT,
    [registrationInfo],
  );

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
        return (
          <div key={activeStep}>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              value={firstName}
            />{' '}
            <br />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              value={lastName}
            />{' '}
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={email}
            />{' '}
            <br />
            <div>
              <span>Male</span>
              <input id="male" value="male" name="gender" type="radio" onChange={handleChange} />
              <span>Female</span>
              <input
                id="female"
                value="female"
                name="gender"
                type="radio"
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div key={activeStep}>
            <span>Country</span>
            <select onChange={handleChange} name="country" value={country}>
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              {allCountries.map(({ name, isoCode }) => (
                <option value={isoCode} key={isoCode}>
                  {name}
                </option>
              ))}
            </select>
            <br />
            <span>City</span>
            <select
              onChange={handleChange}
              name="city"
              value={city}
              key={country}
              disabled={!allCityes.length}
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              {allCityes.map(({ name }, index) => (
                <option value={name} key={index}>
                  {name}
                </option>
              ))}
            </select>
            <br />
            <input
              type="text"
              name="job_title"
              placeholder="Job Title"
              onChange={handleChange}
              value={jobTitle}
            />{' '}
            <br />
            <span>Department</span>
            <select onChange={handleChange} name="department" value={department}>
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              {DEPARTMENT_LIST.map((item, index) => (
                <option value={index} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      case 2:
        return (
          <>
            <Suggestions list={userSuggestions} />
          </>
        );
    }
  }, [registrationInfo, activeStep, allCityes, allCountries]);

  return (
    <div>
      <Stepper steps={steps} activeStep={activeStep} />
      <div className={styles.content}>{content}</div>
      <div className={styles.controlSection}>
        <button onClick={toPrevStep}>Prev</button>

        <button onClick={doRegistration} disabled={!isValidInfo}>
          Apply
        </button>

        <button onClick={toNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Registration;
