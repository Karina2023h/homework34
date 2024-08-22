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
      errors.destination = "Обов'язково виберіть напрямок";
    }
    if (!values.checkin) {
      errors.checkin = "Обов'язково виберіть дату заїзду";
    }
    if (!values.checkout) {
      errors.checkout = "Обов'язково виберіть дату виїзду";
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
        render={({ handleSubmit, errors }) => (
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
                          error={meta.touched && meta.error}
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
                          error={meta.touched && meta.error}
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
                          error={meta.touched && meta.error}
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
                          error={meta.touched && meta.error}
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
                          error={meta.touched && meta.error}
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
    </Box>
  );
};

export default Main;
