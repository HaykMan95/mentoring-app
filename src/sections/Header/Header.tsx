import { Link } from 'react-router-dom';

import useStyles from './styles';

const Header = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Link to="/" className={styles.item}><span>HOME</span></Link>
      <Link to="registration" className={styles.item}><span>REGISTRATION</span></Link>
      <Link to="settings" className={styles.item}><span>SETTINGS</span></Link>
    </div>
  );
};

export default Header;
