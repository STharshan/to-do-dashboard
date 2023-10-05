import React, { useEffect, useState } from 'react';
import './task.css';
import person1 from '../../images/Avatar-1.svg';
import person2 from '../../images/Avatar-2.svg';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DonutChart from '../Chart/chart';



function Task() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/to-do`, {
        method: 'GET',
      });
      const jsonData = await response.json();

      setTasks(jsonData);
    } catch (error) {
      console.error("FETCH_ERROR:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const getPriorityColor =  {

      high :'../../images/Priority-High.svg',
      medium :'../../images/Priority-Medium.svg',
      low :'../../images/Priority-Low.svg',
  };


  return (
    <div className="task">
      <div className='list'>
      <h1>Tasks</h1>
      <ul>
       
      {tasks.map((task) => (
          <li 
            key={task.id}
          >   
              <img
                src={task.priority === 'low' ? "../../images/Priority-Low.svg": "yes"}
                alt={`${task.priority} priority`}
              />
            {task.todo}
            <div>
              <button id='button'>Mark as Done</button>
            </div>
              
          </li>
        ))}
      </ul>   
    </div>
    <div className='pagination'>
      <Stack spacing={2}>
        <Pagination count={8} variant="outlined" shape="rounded" />
      </Stack>
    </div>
    <div className='row'>
      <div className='activity-feed'>
         <h2>Activity Feed</h2>

        <div className='person1'>
          <img src={person1} alt='avater-1' id='avater-1'/>
          <h2>Kushantha Charuka created <span> Contract #00124 need John Beige’s signature</span></h2>
        </div>

        <div className='person2'>
          <img src={person2} id='avater-1'/>
          <p>Lorem ipsum <span>dolor sit amet,</span> consectetur adipiscing elit.<span> Maecenas </span>pretium neque</p>
        </div>

        <div className='person2'>
           <img src={person2} id='avater-1'/>
           <p>Lorem ipsum <span>dolor sit amet,</span> consectetur adipiscing elit.<span> Maecenas </span>pretium neque</p>
        </div>
         

      </div>
      <div className='graph'>
        <h2>Tasks Priorities</h2>
        <div className='chart'>
          <DonutChart task={tasks}/>
        </div>
      </div>

    </div>
    </div>
    
  );
}

export default Task;
