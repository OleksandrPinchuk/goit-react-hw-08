import { useDispatch, useSelector } from "react-redux";
import { logOutOperation } from "../../redux/auth/operations";
import { selectUserName } from "../../redux/auth/selectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    const handleLogOut = () => {
        dispatch(logOutOperation());
    };

    return (
        <div className="flex">
            <p>Welcome {userName} </p>
            <button type="button" onClick={handleLogOut}>logOut</button>
        </div>
    )
};

export default UserMenu;