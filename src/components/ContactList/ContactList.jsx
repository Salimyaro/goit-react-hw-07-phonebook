import s from './ContactList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

export default function Contacts() {
  const isLoading = useSelector(getLoading);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? <h2>Updating...</h2> : <h2>Contacts list:</h2>}
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.listItem}>
              <span className={s.name}>{name}:</span>
              <span className={s.num}>{number}</span>
              <button
                className={s.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
