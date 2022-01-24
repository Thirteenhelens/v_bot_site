// MUI Import
import { Grid } from "@mui/material";
// Local Import
import HostingServiceItem from "./HostingServiceItem";

function HostingService() {
  const cardText = [
    {
      title: "Hosting Service - $12.25",
      text: ` You will get bot hosted with this, for 12 months. Recurring payments
            can be setup or removed by request.`,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
        {cardText.map((bot, i) => {
          return <HostingServiceItem key={i} bot={bot} />;
        })}
      </Grid>
    </Grid>
  );
}

export default HostingService;
