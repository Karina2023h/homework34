import { styled } from "@mui/system";
import { Button, Card, Container, CardMedia, Typography } from "@mui/material"; // Видалили Box, якщо він не потрібен

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const HotelCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  // Використовуємо дефолтне значення, якщо theme.shadows[3] не визначено
  boxShadow:
    theme.shadows?.[3] ||
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}));

export const HotelImage = styled(CardMedia)({
  objectFit: "cover",
});

export const HotelTitle = styled(Typography)({
  marginBottom: "16px",
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
