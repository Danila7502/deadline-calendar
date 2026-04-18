const TaskCard = ({ title, deadline, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '16px', margin: '8px' }}>
      <h3>{title}</h3>
      <p>Дедлайн: {deadline}</p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};
export default TaskCard;