import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TaskCard = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Task Name
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            TASK TYPE
          </Typography>
          <Typography variant="body2">
            Date Created: ...
            <br />
            Assigned To
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
