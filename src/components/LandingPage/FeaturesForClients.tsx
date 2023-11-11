import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BasicCard from './BasicCard';

const useStyles = makeStyles(() => ({
    image:{
        width:"100%",
        height:"100%"
      },

  }))
    
const ThirdSection = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const h1FontSize = isSmallScreen ? '1.8rem' : '2.2rem';
    const pFontSize = isSmallScreen ? '16px' : '16px';
  return (
    <Grid container sx={{mt:15}}>
        <Grid item sm={12} sx={{ textAlign: 'center',mb:5 }}>
            <Typography variant="h1" style={{ minWidth: "101%", fontSize: h1FontSize, fontWeight: 800, lineHeight: '1.1', textTransform: 'uppercase', margin: '10px 0' }}>
                FEATURES <span style={{ color: '#f13c4f' }}>FOR CLIENTS</span>
            </Typography>
            <Typography variant="body1" style={{ minWidth: "101%", fontSize: pFontSize, fontWeight: 600, color: '#333333', margin: '0' }}>
                Why Contactless Ordering Will Elevate and Optimize the Restaurant <br/> Experience for Customers?
            </Typography>
        </Grid>

        <Grid container >
            <Grid md={4} sm={6}>
                <BasicCard 
                    black="true"
                    icon = "https://ez-eats.com/wp-content/uploads/2023/09/digital-menu.png"
                    Header="Interactive & digital menu" 
                    Body="Clients conveniently place their orders on their smartphones through a user-friendly digital and interactive menu."
                />
            </Grid>
            <Grid md={4} sm={6}>
                <BasicCard 
                    black="true"
                    icon = "https://ez-eats.com/wp-content/uploads/2023/09/waiter.png"
                    Header="Ask for waiter" 
                    Body="No need to raise your hand or call for a waiter. With a simple click, a notification is sent to the tablet, and a waiter will be there shortly"
                />
            </Grid>
            <Grid md={4} sm={6}>
                <BasicCard 
                    black="true"
                    icon = "https://ez-eats.com/wp-content/uploads/2023/09/food-review.png"
                    Header="IReview your meal" 
                    Body="At the end of each meal, clients can review their dining experience using a pre-configured survey set up during signup."
                />
            </Grid>
        </Grid>

        <Grid container sx={{mt:3}}>
            <Grid md={4} sm={6}>
                <BasicCard 
                    black="true"
                    icon = "https://ez-eats.com/wp-content/uploads/2023/09/cash-payment.png"
                    Header="Cash & visa payments" 
                    Body="Possibility of cash payments. Client can request it at any time on the App and their waiter will be notified."
                />
            </Grid>
            <Grid md={4} sm={6}>
                <BasicCard 
                    black="true"
                    icon = "https://ez-eats.com/wp-content/uploads/2023/09/online-payment.png"
                    Header="Integrated payment" 
                    Body="Clients can add one or more credit cards to their account, enabling them to make payments in just a few seconds."
                />
            </Grid>
            <Grid md={4} sm={6}>
                <BasicCard 
                    black="true"
                    icon = "https://ez-eats.com/wp-content/uploads/2023/09/split-bill.png"
                    Header="Paying for friends or table" 
                    Body="Clients can split checks and pay for each other through the App, which reduces the hassle for the restaurant."
                />
            </Grid>
        </Grid>
        
    </Grid>
  );
};

export default ThirdSection;
