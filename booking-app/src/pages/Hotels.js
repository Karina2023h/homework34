import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { hotelsData } from "../data/hotelsData";

const parsePrice = (priceStr) => {
  let priceValue = 0;
  let currency = "UAH";

  if (priceStr.includes("доларів США")) {
    currency = "USD";
    priceStr = priceStr.replace("доларів США", "").trim();
  } else if (priceStr.includes("євро")) {
    currency = "EUR";
    priceStr = priceStr.replace("євро", "").trim();
  } else if (priceStr.includes("грн")) {
    currency = "UAH";
    priceStr = priceStr.replace("грн", "").trim();
  } else if (priceStr.includes("фунтів стерлінгів")) {
    currency = "GBP";
    priceStr = priceStr.replace("фунтів стерлінгів", "").trim();
  }

  const match = priceStr.match(/[\d,.]+/);
  if (match) {
    priceValue = parseFloat(match[0].replace(",", "."));
  }

  const exchangeRates = {
    USD: 36,
    EUR: 39,
    GBP: 45,
    UAH: 1,
  };

  return priceValue * exchangeRates[currency];
};

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape?.borderRadius || 8,
  boxShadow:
    theme.shadows?.[3] ||
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}));

const Hotels = () => {
  const [filter, setFilter] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDetailsClick = (hotelName) => {
    navigate(`/hotel/${encodeURIComponent(hotelName)}`);
  };

  const filteredHotels = hotelsData.filter((hotel) => {
    const priceValue = parsePrice(hotel.price);

    return (
      (rating ? hotel.rating.toString() === rating : true) &&
      (price === "low"
        ? priceValue <= 1000
        : price === "medium"
        ? priceValue > 1000 && priceValue <= 3000
        : price === "high"
        ? priceValue > 3000
        : true) &&
      (filter ? hotel.name.toLowerCase().includes(filter.toLowerCase()) : true)
    );
  });

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Готелі
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <TextField
          label="Пошук"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          sx={{ marginRight: 2, flexGrow: 1 }}
        />
        <FormControl sx={{ minWidth: 120, marginRight: 2 }}>
          <InputLabel>Рейтинг</InputLabel>
          <Select value={rating} onChange={handleRatingChange} label="Рейтинг">
            <MenuItem value="">Всі</MenuItem>
            <MenuItem value="5">5 зірок</MenuItem>
            <MenuItem value="4">4 зірки</MenuItem>
            <MenuItem value="3">3 зірки</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Ціна</InputLabel>
          <Select value={price} onChange={handlePriceChange} label="Ціна">
            <MenuItem value="">Всі</MenuItem>
            <MenuItem value="low">Низька</MenuItem>
            <MenuItem value="medium">Середня</MenuItem>
            <MenuItem value="high">Висока</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4}>
        {filteredHotels.map((hotel, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                alt={hotel.name}
                height="140"
                image={hotel.image}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.shortDescription}
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDetailsClick(hotel.name)}
                >
                  Детальніше
                </Button>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Hotels;
