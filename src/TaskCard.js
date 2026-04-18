const TaskCard = ({ title, deadline, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  };
  
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '16px', margin: '8px' }}>
      <h3>{title}</h3>
      <p>Дедлайн: {formatDate(deadline)}</p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};
export default TaskCard;