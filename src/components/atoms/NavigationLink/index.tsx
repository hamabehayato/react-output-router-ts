/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type Props = {
  to: string;
  label: string;
};

/**
 * NavigationLink
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigationLink: FC<Props> = (props) => {
  const { to, label } = props;

  return (
    <>
      <li className={styles.item}>
        <Link className={styles.link} to={to}>
          {label}
        </Link>
      </li>
    </>
  );
};
