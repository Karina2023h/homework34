import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardContent, List, ListItem, Typography, Box } from "@mui/material"; // Імпорт Box тут
import { hotelsData } from "../data/hotelsData";
import {
  StyledContainer,
  BackButton,
  HotelCard,
  HotelImage,
  HotelTitle,
  SectionTitle,
} from "./HotelDetailsStyles"; // Імпорт стилів з HotelDetailsStyles.js

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
      <StyledContainer>
        <HotelTitle variant="h4" align="center">
          Готель не знайдено
        </HotelTitle>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Box>
        <BackButton variant="contained" onClick={() => navigate(-1)}>
          Назад
        </BackButton>
      </Box>

      <HotelCard>
        <HotelImage
          component="img"
          height="400"
          image={hotel.image}
          alt={hotel.name}
        />
        <CardContent>
          <HotelTitle variant="h3" gutterBottom>
            {hotel.name}
          </HotelTitle>
          <Typography variant="h6" color="text.secondary">
            Рейтинг: {hotel.rating} зірок
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Ціна: {hotel.price}
          </Typography>
        </CardContent>
      </HotelCard>

      <SectionTitle variant="h5" gutterBottom>
        Опис
      </SectionTitle>
      <Typography variant="body1" paragraph>
        {hotel.description}
      </Typography>

      <SectionTitle variant="h6" gutterBottom>
        Типи номерів:
      </SectionTitle>
      <List>
        {hotel.roomTypes.map((type, index) => (
          <ListItem key={index}>{type}</ListItem>
        ))}
      </List>

      <SectionTitle variant="h6" gutterBottom>
        Зручності:
      </SectionTitle>
      <List>
        {hotel.amenities.map((amenity, index) => (
          <ListItem key={index}>{amenity}</ListItem>
        ))}
      </List>
    </StyledContainer>
  );
};

export default HotelDetails;
