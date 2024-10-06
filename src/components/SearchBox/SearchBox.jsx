import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice.js';
import { useId } from 'react';
import { selectNameFilter } from "../../redux/filters/selectors.js";

const SearchBox = () => {
    const dispatch = useDispatch();
    const id = useId();
    const value = useSelector(selectNameFilter);

    const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.box}>
            <label htmlFor={id} className={css.label}>Find contacts by name</label>
            <input type='text' name='find' id={id} value={value} onChange={handleFilterChange} className={css.field} />
        </div>
    )
}

export default SearchBox;