import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  TextField,
  MenuItem,
  Grid,
  Box,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        if (!apiUrl) {
          throw new Error("URL API не визначено у змінних середовища");
        }

        const response = await axios.get(`${apiUrl}/destinations`);
        setDestinations(response.data);
      } catch (error) {
        console.error("Помилка під час завантаження напрямків:", error);
      }
    };

    fetchDestinations();
  }, []);

  const onSubmit = async (values) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        throw new Error("URL API не визначено у змінних середовища");
      }

      await axios.post(`${apiUrl}/hotels`, values);
      navigate("/hotels");
    } catch (error) {
      console.error("Помилка під час відправки форми:", error);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.destination) {
      errors.destination = "Обов&apos;язково виберіть напрямок";
    }
    if (!values.checkin) {
      errors.checkin = "Обов&apos;язково виберіть дату заїзду";
    }
    if (!values.checkout) {
      errors.checkout = "Обов&apos;язково виберіть дату виїзду";
    }
    if (
      values.checkin &&
      values.checkout &&
      new Date(values.checkin) >= new Date(values.checkout)
    ) {
      errors.checkout = "Дата виїзду повинна бути після дати заїзду";
    }
    if (values.adults <= 0) {
      errors.adults = "Кількість дорослих повинна бути більше 0";
    }
    return errors;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "linear",
    centerMode: false,
    centerPadding: "0px",
  };

  return (
    <Box sx={{ padding: "50px", backgroundColor: "#f0f4f8" }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, color: "#1976d2" }}>
        Плануйте свою подорож з{" "}
        <span style={{ color: "#1e88e5" }}>Booking</span>
      </Typography>
      <Typography variant="body1" sx={{ mb: 5, color: "#424242" }}>
        Відкрийте для себе найкращі напрямки, бронюйте готелі з легкістю та
        зробіть свою подорож незабутньою.
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <FormControl fullWidth variant="outlined">
                  <Field name="destination">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          label="Напрямок"
                          select
                          required
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          variant="outlined"
                        >
                          {destinations.map((destination) => (
                            <MenuItem
                              key={destination.id}
                              value={destination.name}
                            >
                              {destination.name}
                            </MenuItem>
                          ))}
                        </TextField>
                        {meta.touched && meta.error && (
                          <FormHelperText error>{meta.error}</FormHelperText>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth variant="outlined">
                  <Field name="checkin">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          label="Дата заїзду"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          required
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          variant="outlined"
                        />
                        {meta.touched && meta.error && (
                          <FormHelperText error>{meta.error}</FormHelperText>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth variant="outlined">
                  <Field name="checkout">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          label="Дата виїзду"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          required
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          variant="outlined"
                        />
                        {meta.touched && meta.error && (
                          <FormHelperText error>{meta.error}</FormHelperText>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth variant="outlined">
                  <Field name="adults">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          label="Дорослі"
                          type="number"
                          required
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          variant="outlined"
                        />
                        {meta.touched && meta.error && (
                          <FormHelperText error>{meta.error}</FormHelperText>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth variant="outlined">
                  <Field name="children">
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          label="Діти"
                          type="number"
                          variant="outlined"
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                        />
                        {meta.touched && meta.error && (
                          <FormHelperText error>{meta.error}</FormHelperText>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    height: "100%",
                    backgroundColor: "#1e88e5",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  Шукати
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />

      {/* Додатковий контент під формою: Слайдер */}
      <Box sx={{ mt: 7 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 3, color: "#1976d2", fontSize: "1.5rem" }}
        >
          Найкращі готелі України
        </Typography>
        <Slider {...sliderSettings} className="slider">
          <div className="slide-item">
            <img
              src="https://llaut-palace-playa-de-palma.hotelmix.com.ua/data/Photos/OriginalPhoto/12723/1272361/1272361780/Iberostar-Selection-Llaut-Palma-Adults-Only-Hotel-Playa-de-Palma-Exterior.JPEG"
              alt="Готель 1"
              className="slide-image"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Готель Ла Пальма
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              Вишуканий готель у центрі Києва з чудовим видом на місто.
            </Typography>
          </div>
          <div className="slide-item">
            <img
              src="https://s.101hotelscdn.ru/uploads/image/hotel_image/3817/204159.jpg"
              alt="Готель 2"
              className="slide-image"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Готель Севастополь
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              Комфортабельний готель біля моря.
            </Typography>
          </div>
          <div className="slide-item">
            <img
              src="https://gohotels.com.ua/images/gohotels/hotel/3437/343603/67337488883637782b5e57a1d89d16e5.jpg"
              alt="Готель 3"
              className="slide-image"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Готель Вікторія
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              Стильний готель з сучасним дизайном.
            </Typography>
          </div>
          <div className="slide-item">
            <img
              src="https://hmpcj5dnx6uvbbom0nngb4tccjxvslvf.cdn-freehost.com.ua/images_hotel/hotel_146_YIdT.jpg"
              alt="Готель 3"
              className="slide-image"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Готель в Одесі
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              Стильний готель з сучасним дизайном.
            </Typography>
          </div>
          <div className="slide-item">
            <img
              src="https://ukrainaincognita.com/wp-content/uploads/files/vin_got_fransua1_0.jpg"
              alt="Готель 3"
              className="slide-image"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Готель Вінниця
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              Стильний готель з сучасним дизайном.
            </Typography>
          </div>
          <div className="slide-item">
            <img
              src="https://gohotels.com.ua/images/gohotels/hotel/6/562/2fd0c1ec264a5ce3c9c6b44fe9876234.jpg"
              alt="Готель 3"
              className="slide-image"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ mt: 1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Готель Миколаїв
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              Стильний готель з сучасним дизайном.
            </Typography>
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default Main;
