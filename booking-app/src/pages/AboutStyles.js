// AboutStyles.js
import { styled } from "@mui/system";
import { Card, Typography, Button } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape?.borderRadius || 8,
  boxShadow:
    theme.shadows?.[3] ||
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette?.primary?.main || "#1976d2",
  fontWeight: 700,
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette?.text?.primary || "#000",
  lineHeight: 1.6,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 3),
  fontSize: "1rem",
}));
