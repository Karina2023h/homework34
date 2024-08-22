import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import { hotelsData } from "../data/hotelsData";

const HotelDetails = () => {
  const { hotelName } = useParams();
  const navigate = useNavigate();

  // Знайти відповідний готель
  const hotel = hotelsData.find(
    (h) => h.name === decodeURIComponent(hotelName)
  );

  useEffect(() => {
    // Прокручування до верху контейнера при завантаженні сторінки
    window.scrollTo(0, 0);
  }, []);

  // Якщо готель не знайдено
  if (!hotel) {
    return (
      <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant="h4" align="center">
          Готель не знайдено
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </Box>

      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="400"
          image={hotel.image}
          alt={hotel.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {hotel.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Рейтинг: {hotel.rating} зірок
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Ціна: {hotel.price}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
        Опис
      </Typography>
      <Typography variant="body1" paragraph>
        {hotel.description}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Типи номерів:
      </Typography>
      <List>
        {hotel.roomTypes.map((type, index) => (
          <ListItem key={index}>{type}</ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>
        Зручності:
      </Typography>
      <List>
        {hotel.amenities.map((amenity, index) => (
          <ListItem key={index}>{amenity}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HotelDetails;
