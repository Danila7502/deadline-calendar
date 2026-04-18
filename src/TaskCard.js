const TaskCard = ({ title, deadline }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '16px', margin: '8px' }}>
      <h3>{title}</h3>
      <p>Дедлайн: {deadline}</p>
    </div>
  );
};

export default TaskCard;