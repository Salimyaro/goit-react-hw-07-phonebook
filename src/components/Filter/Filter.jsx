import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(changeFilter(target.value.trim()));
  };

  return <input type="text" value={filter} onChange={handleChange} />;
}
