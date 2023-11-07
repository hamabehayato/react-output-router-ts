/**
 * TodoList
 *
 * @package components
 */
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailIcon } from '../../atoms/Icons/Detail';
import { EditIcon } from '../../atoms/Icons/Edit';
import { TrashIcon } from '../../atoms/Icons/Trash';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import { TodoType } from '../../../interfaces/Todo';
import styles from './styles.module.css';

type Props = {
  showTodoList: Array<TodoType>;
  deleteTodo: (id: number) => void;
};

/**
 * TodoList
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoList = ({ showTodoList, deleteTodo }: Props) => {
  const navigate = useNavigate();
  const handleMoveDeitalPage = useCallback(
    (id: number) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate]
  );
  const handleMoveEditPage = useCallback(
    (id: number) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate]
  );

  return (
    <>
      {showTodoList.map((todo) => (
        <div className={styles.todo} key={todo.id}>
          <p>{todo.title}</p>
          <div>
            <button onClick={() => handleMoveDeitalPage(todo.id)} className={styles.button}>
              <DetailIcon />
            </button>
            <button onClick={() => handleMoveEditPage(todo.id)} className={styles.button}>
              <EditIcon />
            </button>
            <button onClick={() => deleteTodo(todo.id)} className={styles.button}>
              <TrashIcon />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
