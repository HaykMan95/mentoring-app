import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: 60,
      boxShadow: '-1px 6px 13px #cccccc',
      backgroundColor: '#468591',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: '10%',
    },
    item: {
      width: '100%',
      height: '100%',
      background: '#46916A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: '#386A74',
      fontWeight: 'bold',
      fontSize: 25,
    }
  },
  { name: 'header-section' },
);

export default useStyles;
