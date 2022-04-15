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
    item: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: '#386A74',
      fontWeight: 'bold',
      fontSize: 15,
      '&.active': {
        color: '#383974',
        boxShadow: '0 26px 11px -13px #060606',
      },
    },
  },
  { name: 'header-section' },
);

export default useStyles;
