import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardHeader from '@mui/material/CardHeader';

export default function BasicCard(props:any) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const h1FontSize = isSmallScreen ? '1.2rem' : '1.2rem';
    const pFontSize = isSmallScreen ? '15px' : '15px';
  return (
    <Card elevation={0} sx={{ margin:"0px 10px",borderStyle:"solid", borderWidth:"1px", borderRadius:"10px",borderColor:"#ececec"}}>
      <CardContent>
        {props.icon ? 
        <CardHeader
        sx={{padding: "10px 0px"}}
        avatar={
          <img src={props.icon} style={{maxHeight:"44px"}}/>
        }
          />
        :
        <div></div>
        }
        <Typography  variant="h1" component="div" sx={{color: props.black ? "#232323" : "#f13c4f",fontFamily:'"Montserrat", Sans-serif',fontSize:h1FontSize, fontWeight:"bold",marginBottom:"10px !important"}}>
            {props.Header}
        </Typography>
        
        <Typography  variant="body2" sx={{color: "#4d4d4d" ,fontSize: pFontSize ,fontFamily:'"Montserrat", Sans-serif',fontWeight: 500,}}>
            {props.Body}
        </Typography>
      </CardContent>
    </Card>
  );
}