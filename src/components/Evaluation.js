import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const Evaluation = () => {
  const theme = useTheme();
  
  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        data-aos='fade-up'
        backgroundColor={theme.palette.background.default}
        paddingTop={4}
      >
        <Container
          maxWidth='lg'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            px: {
              md: '15px !important'
            }
          }}
        >
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.primary}
            variant='h1'
            marginTop='30px'
          >
            Evaluate Machine Learning Model
          </Typography>
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.secondary}
            variant='h4'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
          >
            Accuracy on train set : 96%
            Accuracy on test set : 93%

            <div style={{textAlign: 'center'}} >
              <div style={{margin: '0 auto'}}>
                <img 
                src="/images/accuracy_chart.png" 
                height='350'
                style={{
                    margin: '0 auto',
                    boxShadow: '6px 6px 3px #c5c5c5',
                    borderRadius: '25px'
                    }} 
                />
                <img 
                    src="/images/loss_chart.png" 
                    height='350'
                    style={{
                        margin: '0 auto',
                        boxShadow: '6px 6px 3px #c5c5c5',
                        borderRadius: '25px'
                        }} 
                />
              </div>
            </div>
          </Typography>
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.secondary}
            variant='h4'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
          >
            Confusion matrix

            <div style={{textAlign: 'center'}} >
              <div style={{margin: '0 auto'}}>
                <img 
                src="/images/confusion_matrix.png" 
                height='350'
                style={{
                    margin: '0 auto',
                    boxShadow: '6px 6px 3px #c5c5c5',
                    borderRadius: '25px'
                    }} 
                />
              </div>
            </div>
          </Typography>

                    
        </Container>
      </Box>
    </Box>
  );
};

export default Evaluation;