// HotelsStyles.js
import { styled } from "@mui/system";
import { Card, Container, Box, FormControl, TextField } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape?.borderRadius || 8,
  boxShadow:
    theme.shadows?.[3] ||
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
}));

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
});

export const StyledFormControl = styled(FormControl)({
  minWidth: 120,
  marginRight: "16px",
});

export const StyledTextField = styled(TextField)({
  marginRight: "16px",
  flexGrow: 1,
});
