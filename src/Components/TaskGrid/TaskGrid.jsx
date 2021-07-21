import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

import { Grid } from './TaskGrid.styles';

const TaskGrid = ({ toDo }) => {
    return (
        <Grid>
            {toDo.map((el, i) => (
                <TaskItem toDo={el} key={i} />
            ))}
        </Grid>
    )
}

export default TaskGrid;