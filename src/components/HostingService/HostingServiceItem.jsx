// MUI Imports
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";

function HostingServiceItem({ bot }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "secondary.semiDark" }}>
      <CardMedia
        component="img"
        height="200"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
        alt="Discord Bot Image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "primary.main" }}
        >
          {bot.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "secondary.main" }}>
          {bot.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign Up Form</Button>
      </CardActions>
    </Card>
  );
}

export default HostingServiceItem;
