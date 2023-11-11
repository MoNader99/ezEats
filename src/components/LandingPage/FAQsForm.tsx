import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (field: any) => (event: any) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2.8}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              margin="normal"
              value={formData.firstName}
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              margin="normal"
              value={formData.lastName}
              onChange={handleChange("lastName")}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange("message")}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            padding: "5px 35px",
            borderRadius: "2px",
            width: "100%",
            fontSize: "17px",
            fontWeight: 600,
            letterSpacing: "0.25px",
            fontFamily: "Montserrat, Sans-serif",
            backgroundColor: "#F13C4F",
          }}
        >
          SEND MESSAGE
        </Button>
      </form>
    </Container>
  );
};

export default MyForm;
