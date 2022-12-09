import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IndividualTask from "./TaskColumns/IndividualTask/IndividualTask";

const TaskCard = (props) => {
  const [showTask, setShowTask] = useState(false);

  const taskModalHandler = () => {
    showTask ? setShowTask(false) : setShowTask(true);
  };

  return (
    <div>
      {showTask && (
        <IndividualTask
          taskModalHandler={taskModalHandler}
          taskName={props.taskName}
          taskType={props.taskType}
          dateCreated={props.dateCreated}
          assignedTo={props.assignedTo}
          status={props.status}
        />
      )}
      <Card sx={{ minWidth: 275 }} onClick={taskModalHandler}>
        <CardContent>
          <Typography variant="h6" component="div">
            {props.taskName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.taskType}
          </Typography>
          <Typography variant="body2">
            {props.dateCreated}
            <br />
            {props.assignedTo}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
