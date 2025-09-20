import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, CircularProgress } from '@mui/material';
import Logo from 'src/components/LogoSign';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
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
          gap: 3
        }}
      >
        <Logo />
        <CircularProgress size={48} disableShrink thickness={3} />
      </Box>
    </Box>
  );
}

export default SuspenseLoader;
