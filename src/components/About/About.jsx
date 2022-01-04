// MUI Imports
import { Box, Grid, Card, Typography, CardContent } from "@mui/material";

function About() {
  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      {/* Start of Box */}
      <Grid container>
        {/* Start of container */}
        <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
          <Typography variant="h3">About Section</Typography>
        </Grid>
        {/* End Grid Item #1 */}
        <Grid item xs={12} md={12}>
          <br />
        </Grid>
        {/* End Grid Item #2 */}
        <Grid item xs={12} md={5}>
          <Card
            variant="outlined"
            sx={{
              color: "primary.light",
              backgroundColor: "secondary.dark",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="centerTxt"
              >
                What is this site?
              </Typography>
              <Typography variant="body2" sx={{ color: "secondary.light" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* End of Grid Item #3 */}
        <Grid item xs={2}></Grid>
        {/* End of Grid Item #4 */}
        <Grid item xs={12} md={5}>
          <Card
            variant="outlined"
            sx={{
              color: "primary.light",
              backgroundColor: "secondary.dark",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="centerTxt"
              >
                Who makes this stuff?
              </Typography>
              <Typography variant="body2" sx={{ color: "secondary.light" }}>
                Hello and welcome to my freelance discord bot site! My name is
                Vincent but everyone calls me Vinny. I am a computer science
                student currently studying at university looking to expand my
                skills while also making a little change on the side. I am born
                and raised from Minneapolis Minnesota and still attend school
                here. I enjoy programming and cannot wait for the challenges
                that freelancing will put forth for me. So please feel free to
                contact me if you have any questions relating to my services and
                I will gladly get back to you as soon as I can. Also, feel free
                to check out my GitHub to see what other projects I’m currently
                working on!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* End of Grid Item #5 */}
      </Grid>
    </Box>
  );
}

export default About;
