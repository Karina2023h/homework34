import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

// Стилізація картки з дефолтними значеннями
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape?.borderRadius || 8,
  boxShadow:
    theme.shadows?.[3] ||
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}));

// Стилізація заголовків з дефолтними значеннями
const StyledHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette?.primary?.main || "#1976d2",
  fontWeight: 700,
}));

// Стилізація параграфів
const StyledParagraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette?.text?.primary || "#000",
  lineHeight: 1.6,
}));

// Стилізація кнопки
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 3),
  fontSize: "1rem",
}));

const About = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Box textAlign="center" mb={4}>
        <StyledHeader variant="h3">Про нас</StyledHeader>
        <StyledParagraph variant="h6">
          Ласкаво просимо до нашого Booking App! Ми - команда, що захоплюється
          удосконаленням ваших подорожей. Наша мета - допомогти вам знайти
          ідеальне місце для проживання у будь-якому обраному вами напрямку.
        </StyledParagraph>
      </Box>
      <Typography variant="h5" gutterBottom>
        Наша історія
      </Typography>
      <StyledParagraph variant="body1">
        Наша компанія була заснована з метою спростити планування подорожей. Ми
        почали як невеликий стартап з місією забезпечити подорожуючим простий та
        приємний досвід бронювання. Протягом років ми зросли і еволюціонували,
        але наша прихильність до якості та задоволення клієнтів залишилася
        незмінною.
      </StyledParagraph>
      <Typography variant="h5" gutterBottom>
        Що ми пропонуємо
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              alt="Комфортні готелі"
              height="140"
              image="https://kiyavia.com/files/travel-provider/plyag-ukraine/de-la-vita/dea-la-vita_1280-min.jpg" // Використання локального зображення
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Комфортні готелі
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ми пропонуємо широкий вибір готелів на будь-який бюджет і
                вподобання. Від розкішних люксів до бюджетних варіантів - ви
                знайдете ідеальне місце для проживання.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              alt="Зручне бронювання"
              height="140"
              image="https://ogotour.com.ua/wp-content/uploads/sites/144/2021/04/1_Pidberemo_gotel_osobisto_pid_Vas-1024x683.jpg" // Використання локального зображення
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Зручне бронювання
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Наша інтуїтивно зрозуміла система бронювання полегшує пошук і
                резервування найкращих готелів для ваших потреб. Насолоджуйтесь
                простим і безпроблемним процесом бронювання.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardMedia
              component="img"
              alt="Глобальні напрямки"
              height="140"
              image="https://library.udau.edu.ua/assets/images/virtual-vistavki/2021/ekologiya/7174.jpg" // Використання локального зображення
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Глобальні напрямки
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Досліджуйте різноманітні напрямки по всьому світу. Незалежно від
                того, чи плануєте ви відпочинок на пляжі, чи активну подорож по
                місту, ми вас покриємо.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <StyledButton variant="contained" color="primary" href="/">
          Повернутися на головну
        </StyledButton>
      </Box>
    </Container>
  );
};

export default About;
