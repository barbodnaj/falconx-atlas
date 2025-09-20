import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';

import {
  alpha,
  Box,
  darken,
  Divider,
  Drawer,
  lighten,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';
import Logo from 'src/components/LogoSign';
import { isWhiteLabeled } from '../../../config';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 61px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? alpha(lighten(theme.header.background, 0.1), 0.5)
              : theme.sidebar.background,
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar>
          <Box mt={2} mb={1}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box>
                <Logo />
              </Box>
              {!isWhiteLabeled && (
                <Typography
                  fontSize={11}
                  sx={{ 
                    textAlign: 'center',
                    color: theme.sidebar.textColor,
                    opacity: 0.8,
                    cursor: 'pointer',
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
          <Divider
            sx={{
              mt: theme.spacing(1),
              mx: theme.spacing(2),
              background: theme.sidebar.dividerBg
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.sidebar.dividerBg
          }}
        />
        <SidebarFooter />
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : theme.sidebar.background
          }}
        >
          <Scrollbar>
            <Box mt={2} mb={1}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Box>
                  <Logo />
                </Box>
                {!isWhiteLabeled && (
                  <Typography
                    fontSize={11}
                    sx={{ 
                      textAlign: 'center',
                      color: theme.sidebar.textColor,
                      opacity: 0.8,
                      cursor: 'pointer',
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
            <Divider
              sx={{
                mt: theme.spacing(1),
                mx: theme.spacing(2),
                background: theme.sidebar.dividerBg
              }}
            />
            <SidebarMenu />
          </Scrollbar>
          <SidebarFooter />
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
