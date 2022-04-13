import { FC } from "react";
import classNames from 'classnames';

import { IStepsProps } from './types';
import useStyles from './styles';

const Stepper: FC<IStepsProps> = ({
  activeStep = 0,
  steps,
}) => {
  const styles = useStyles();

  return <div className={styles.root}>
    {steps.map((label, index) => (
      <div className={classNames(styles.item, { active: index === activeStep })} key={index}>
        <span>{label}</span>
      </div>
    ))}
  </div>
}

export default Stepper;