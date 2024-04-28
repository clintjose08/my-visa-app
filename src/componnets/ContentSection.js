import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ContentSection = () => {
  return (
    <Card sx={{ minWidth: 275, my: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Section Title
        </Typography>
        <Typography variant="body2" component="p">
          Some information about this section.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContentSection;
