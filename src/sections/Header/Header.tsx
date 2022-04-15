import { Link } from 'react-router-dom';

import { useStore } from 'store';

import useStyles from './styles';

const Header = () => {
  const {
    state: { userInfo },
    dispatch,
  } = useStore();

  console.log('userInfo', userInfo);

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Link to="/" className={styles.item}>
        <span>HOME</span>
      </Link>
      {userInfo ? (
        <>
          <Link to="settings" className={styles.item}>
            <span>
              {userInfo.first_name} {userInfo.last_name}
            </span>
          </Link>
        </>
      ) : (
        <Link to="registration" className={styles.item}>
          <span>REGISTRATION</span>
        </Link>
      )}
    </div>
  );
};

export default Header;
