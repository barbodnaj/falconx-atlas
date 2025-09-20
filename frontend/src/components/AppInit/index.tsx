import { Box, Typography } from '@mui/material';

import Logo from 'src/components/LogoSign';
import { isWhiteLabeled } from '../../config';

function AppInit() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'background.default'
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          textAlign: 'center'
        }}
      >
        <Box>
          <Logo />
        </Box>
        {!isWhiteLabeled && (
          <Typography
            style={{ cursor: 'pointer' }}
            fontSize={11}
            sx={{ 
              opacity: 0.7,
              '&:hover': {
                opacity: 1
              }
            }}
            onClick={() => {
              window.open('https://davandegan.com/', '_blank');
            }}
          >
            Powered by Davandegan
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default AppInit;
