import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];});
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('ru-RU'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString('ru-RU'));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = () => {
    if (!title || !deadline) return;
    const newTask = { id: Date.now(), title, deadline };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDeadline('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div>
      <h1>Календарь дедлайнов</h1>
      <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0' }}>
        <h2>Текущая дата: {currentDate}</h2>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0' }}>
        <h2>Добавить задание</h2>
        <input placeholder="Название" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
        <button onClick={addTask}>Добавить</button>
      </div>
      {sortedTasks.map(task => (
        <TaskCard key={task.id} title={task.title} deadline={task.deadline} onDelete={() => deleteTask(task.id)} />
      ))}
    </div>
  );
}
export default App;