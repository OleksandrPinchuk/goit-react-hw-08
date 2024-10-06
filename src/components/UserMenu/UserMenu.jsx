import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUserName } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome {userName} </p>
            <button type="button" onClick={handleLogOut}>logOut</button>
        </div>
    )
};

export default UserMenu;