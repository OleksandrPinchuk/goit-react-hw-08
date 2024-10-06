import PageTitle from "../../components/PageTitle/PageTitle";
import { MdOutlineContactPhone } from "react-icons/md";
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div>
      <PageTitle>Your personal contact book<MdOutlineContactPhone className={css.svg} /></PageTitle>
      <p>This application allows you to manage your contacts. Log in or register to start using it.</p>
    </div>
  );
};

export default HomePage;
