import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: 60,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: '10%',
    },
    content: {
      background: '#384D74',
      width: '100%',
      height: 500,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'space-around',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlSection: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  },
  { name: 'header-section' },
);

export default useStyles;
