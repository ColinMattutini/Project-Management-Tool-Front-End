import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IndividualTask from "./TaskColumns/IndividualTask/IndividualTask";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
          projectId={props.projectId}
          taskId={props.taskId}
          taskName={props.taskName}
          additionalInfo={props.additionalInfo}
          taskType={props.taskType}
          dateCreated={props.dateCreated}
          assignedTo={props.assignedTo}
          category={props.status}
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

            <AccountCircleIcon />
            {props.assignedTo}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
