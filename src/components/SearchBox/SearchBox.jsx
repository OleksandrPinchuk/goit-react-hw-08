import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useId } from 'react';


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

export default SearchBox