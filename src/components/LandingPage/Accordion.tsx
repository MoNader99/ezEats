import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "16px !important",
    fontWeight: "700 !important",
    fontFamily: '"Montserrat", Sans-serif !important',
  },
  content: {
    fontSize: "16px !important",
    fontWeight: "500 !important",
    fontFamily: '"Montserrat", Sans-serif !important',
    color: "#676767",
  },
}));

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(255, 255, 255)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function MyAccordion(props: any) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const classes = useStyles();
  console.log(props.data[0]);

  return (
    <div>
      {props.data.map((val: { title: string; content: string }, i: any) => (
        <Accordion
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
        >
          <AccordionSummary
            expandIcon={
              expanded !== `panel${i}` ? (
                <AddCircleIcon
                  sx={{
                    color: expanded !== `panel${i}` ? "#232323" : "#f13c4f",
                    fontSize: "19px",
                  }}
                />
              ) : (
                <RemoveCircleIcon
                  sx={{
                    color: expanded !== `panel${i}` ? "#232323" : "#f13c4f",
                    fontSize: "19px",
                  }}
                />
              )
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              sx={{ color: expanded !== `panel${i}` ? "#232323" : "#f13c4f" }}
              className={classes.title}
            >
              {val.title}{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>{val.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
