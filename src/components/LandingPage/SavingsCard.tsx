import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent } from '@mui/material';

const SavingCalculatorCard = () => {
  const [revenue, setRevenue] = useState('');
  const [waitersCost, setWaitersCost] = useState('');

  const handleCalculateSavings = () => {
    // Perform the calculation based on the user input
    // You can implement your savings calculation logic here
    // For now, let's just log the values
    console.log('Yearly Revenue:', revenue);
    console.log('Waiters Cost:', waitersCost);
  };

  return (
    <Card sx={{ padding: '20px 30px 0px 30px', backgroundColor: '#FFFFFF', border: '1px solid #DCDCDC', borderRadius: '10px' }}>
      <CardContent sx={{ padding: '0'}}>
        <Typography variant="h5" component="div" sx={{fontSize:"23px",fontWeight:600, color: '#f13c4f' }}>
          Saving Calculator
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#72777c', marginBottom: '20px' }}>
          Calculate your yearly savings!
        </Typography>

        
        <Typography variant="h5" component="div" sx={{fontSize:"15px",fontWeight:500, color: '#f13c4f', marginBottom: '8px' }}>
            What’s your yearly revenue?
        </Typography>
        <TextField
          placeholder="Revenue in dollar ($)"
          variant="outlined"
          fullWidth
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          sx={{ height:"42px", color: '#f13c4f', marginBottom: '20px' ,'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#f13c4f', },} ,}}
        />

        <Typography variant="h5" component="div" sx={{fontSize:"15px",fontWeight:500, color: '#f13c4f', marginBottom: '8px' }}>
            What’s the waiters cost? (0-100)
        </Typography>
        <TextField
          placeholder="What’s the waiters cost? (0-100)"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: '0', max: '100' }}
          value={waitersCost}
          onChange={(e) => setWaitersCost(e.target.value)}
          sx={{ height:"42px",color: '#f13c4f', marginBottom: '20px','& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#f13c4f', },} }}
        />
        <Button sx={{ 
                backgroundColor: "#f13c4f", 
                color: "#ffffff", 
                borderRadius: "5px", 
                width: "100%", 
                height: "75px", 
                fontWeight: 600, 
                letterSpacing: " 0.5px" , 
                fontSize:"20px",
                transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: "#f13c4f",
                  color: "#ffffff",
                },
                }} variant="contained" color="primary">
              save up to <br/> 0.00$
            </Button>
      </CardContent>
    </Card>
  );
};

export default SavingCalculatorCard;
