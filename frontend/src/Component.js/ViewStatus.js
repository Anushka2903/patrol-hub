import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export function ViewStatus() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <Container className="mt-4 d-flex justify-content-center p-5">
        <Card className="p-4">
          <CardMedia
            component="img"
            height="140"
            image={state.data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name:{state.data.name}
            </Typography>
            <Typography variant="h5" >
              Discription:{state.data.dis}
            </Typography>
            <Typography variant="h5" >
              Date:{state.data.date}
            </Typography><hr></hr>
            <h3>Charge :</h3>
            <Typography variant="h5" >
              OfficerName:Asr
            </Typography>
            <Typography variant="h5" >
              Number:+9112345678
            </Typography>
            <Typography variant="h5" >
              Status:{state.data.status}
            </Typography>
            <Typography variant="h5" >
              Complete:In 2 days
            </Typography>
            <Button className="mt-3">
              See Some Avidence
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}