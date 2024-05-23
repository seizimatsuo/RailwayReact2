import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const NewThreadsPost = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, mt: 5 }}>
        スレッド新規作成
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
          mt: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="スレッドタイトル"
          variant="outlined"
          sx={{
            backgroundColor: "white",
          }}
        />
      </Box>
      <Box sx={{ mt: 10 }}>
        <Stack spacing={2} direction="row">
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Button
              variant="contained"
              color="info"
              size="large"
              startIcon={<CloudUploadIcon />}
              sx={{
                height: "45px",
                width: "180px",
                fontSize: "1.25rem",
              }}
            >
              作成
            </Button>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
};
export default NewThreadsPost;
