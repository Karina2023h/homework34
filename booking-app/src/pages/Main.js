import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        if (!apiUrl) {
          throw new Error("API URL is not defined in environment variables");
        }

        const response = await axios.get(`${apiUrl}/destinations`);
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const onSubmit = async (values) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined in environment variables");
      }

      await axios.post(`${apiUrl}/hotels`, values);
      navigate("/hotels");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book a Hotel
      </Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Destination</InputLabel>
              <Field name="destination">
                {({ input }) => (
                  <Select {...input} label="Destination">
                    {destinations.map((dest) => (
                      <MenuItem key={dest.id} value={dest.name}>
                        {dest.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </Field>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>
        )}
      />
    </Container>
  );
};

export default Main;
