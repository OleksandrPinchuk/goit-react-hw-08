import css from './Contact.module.css'
import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";


const Contact = ({ contact, handleDelete }) => {
    return (
        <li className={css.item}>
            <div className={css.box}>
                <div className={css.name}>
                    <TiUser className={css.svg} />
                    <p>{contact.name}</p>
                </div>
                <div className={css.name}>
                    <TiPhone className={css.svg} />
                    <p>{contact.number}</p>
                </div>
            </div>
            <button type='button' onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
    )
}

export default Contact