import './App.css';

const TaskCard = ({ title, deadline, onDelete }) => {
  const isOverdue = new Date(deadline) < new Date();

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  };

  const cardClassName = isOverdue ? 'TaskCardIsOverdue' : 'TaskCard';

  return (
    <div className={cardClassName}>
      <h2>{title}</h2>
      <p>Дедлайн: {formatDate(deadline)}</p>
      <button className='ButtonTaskCard' onClick={onDelete}>Удалить</button>
    </div>
  );
};
export default TaskCard;