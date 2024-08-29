import { useDispatch, useSelector } from "react-redux";
import { logOutOperation } from "../../store/auth/operations";
import { selectUser } from "../../store/auth/selectors";

const UserInfo = () => {
    const user = useSelector(selectUser);
    console.log(user)
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOutOperation());
    };

    return (
        <div className="flex">
            <p>Welcome {user.name} </p>
            <button type="button" onClick={handleLogOut}>logOut</button>
        </div>
    )
};

export default UserInfo;
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../redux/auth/operations';
// import { selectUserName } from '../../redux/auth/selectors'; 
// import styles from './UserMenu.module.css';

// const UserMenu = () => {
//   const dispatch = useDispatch();
//   const username = useSelector(selectUserName);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <div className={styles.container}>
//       <span className={styles.username}>Welcome, {username}</span>
//       <button type="button" onClick={handleLogout} className={styles.button}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default UserMenu;


