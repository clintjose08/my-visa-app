import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@mui/material";
import iso3166 from "iso-3166-1";

const countries = iso3166.all().map((country) => {
  let label = country.country;
  if (country.alpha2 === "CD") {
    // ISO code for the Democratic Republic of the Congo
    label = "Congo (Kinshasa)";
  } else if (country.alpha2 === "CG") {
    // ISO code for the Republic of the Congo
    label = "Congo (Brazzaville)";
  }
  return {
    key: country.alpha2,
    code: country.alpha2,
    label: label,
  };
});

const HeroSection = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    console.log(`Searching for ${value ? value.label : inputValue}`);
  };

  console.log("countries - ", countries);
  return (
    <Box
      sx={{
        backgroundImage: "url(bg-1.jpg)",
        pt: 8,
        pb: 6,
        textAlign: "center",
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
        Welcome to Our Travel Site
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
        Explore the world with us.
      </Typography>
      <Autocomplete
        freeSolo
        id="country-autocomplete"
        options={countries}
        getOptionLabel={(option) => option.label}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            placeholder="Enter a country"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <IconButton position="end" onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                paddingLeft: 1,
              },
              "& .MuiIconButton-root": {
                marginRight: "-12px",
              },
            }}
          />
        )}
        sx={{
          width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
          backgroundColor: "white",
          borderRadius: 12,
          p: 1,
        }}
      />
    </Box>
  );
};

export default HeroSection;
