import { alpha, createTheme, lighten, darken } from '@mui/material';
import '@mui/lab/themeAugmentation';
import { customColors } from '../../config';
import i18n from 'src/i18n/i18n';
import '../fonts.css';

const themeColors = {
  // Exact shadcn/ui color mapping from HSL values
  primary: 'hsl(0, 0%, 9%)', // --primary: 0 0% 9%
  secondary: 'hsl(0, 0%, 96.1%)', // --secondary: 0 0% 96.1%
  success: 'hsl(173, 58%, 39%)', // --chart-2: 173 58% 39%
  warning: 'hsl(43, 74%, 66%)', // --chart-4: 43 74% 66%
  error: 'hsl(0, 84.2%, 60.2%)', // --destructive: 0 84.2% 60.2%
  info: 'hsl(197, 37%, 24%)', // --chart-3: 197 37% 24%
  black: 'hsl(0, 0%, 3.9%)', // --foreground: 0 0% 3.9%
  white: 'hsl(0, 0%, 100%)', // --background: 0 0% 100%
  primaryAlt: 'hsl(240, 5.9%, 10%)', // --aui-primary: 240 5.9% 10%
  // Core shadcn colors
  background: 'hsl(0, 0%, 100%)', // --background: 0 0% 100%
  foreground: 'hsl(0, 0%, 3.9%)', // --foreground: 0 0% 3.9%
  card: 'hsl(0, 0%, 100%)', // --card: 0 0% 100%
  cardForeground: 'hsl(0, 0%, 3.9%)', // --card-foreground: 0 0% 3.9%
  popover: 'hsl(0, 0%, 100%)', // --popover: 0 0% 100%
  popoverForeground: 'hsl(0, 0%, 3.9%)', // --popover-foreground: 0 0% 3.9%
  primaryForeground: 'hsl(0, 0%, 98%)', // --primary-foreground: 0 0% 98%
  secondaryForeground: 'hsl(0, 0%, 9%)', // --secondary-foreground: 0 0% 9%
  muted: 'hsl(0, 0%, 96.1%)', // --muted: 0 0% 96.1%
  mutedForeground: 'hsl(0, 0%, 45.1%)', // --muted-foreground: 0 0% 45.1%
  accent: 'hsl(0, 0%, 96.1%)', // --accent: 0 0% 96.1%
  accentForeground: 'hsl(0, 0%, 9%)', // --accent-foreground: 0 0% 9%
  destructive: 'hsl(0, 84.2%, 60.2%)', // --destructive: 0 84.2% 60.2%
  destructiveForeground: 'hsl(0, 0%, 98%)', // --destructive-foreground: 0 0% 98%
  border: 'hsl(0, 0%, 89.8%)', // --border: 0 0% 89.8%
  input: 'hsl(0, 0%, 89.8%)', // --input: 0 0% 89.8%
  ring: 'hsl(0, 0%, 3.9%)', // --ring: 0 0% 3.9%
  // Sidebar specific colors
  sidebarBackground: 'hsl(0, 0%, 98%)', // --sidebar-background: 0 0% 98%
  sidebarForeground: 'hsl(240, 5.3%, 26.1%)', // --sidebar-foreground: 240 5.3% 26.1%
  sidebarPrimary: 'hsl(240, 5.9%, 10%)', // --sidebar-primary: 240 5.9% 10%
  sidebarPrimaryForeground: 'hsl(0, 0%, 98%)', // --sidebar-primary-foreground: 0 0% 98%
  sidebarAccent: 'hsl(240, 4.8%, 95.9%)', // --sidebar-accent: 240 4.8% 95.9%
  sidebarAccentForeground: 'hsl(240, 5.9%, 10%)', // --sidebar-accent-foreground: 240 5.9% 10%
  sidebarBorder: 'hsl(220, 13%, 91%)', // --sidebar-border: 220 13% 91%
  sidebarRing: 'hsl(217.2, 91.2%, 59.8%)', // --sidebar-ring: 217.2 91.2% 59.8%
  // Chart colors
  chart1: 'hsl(12, 76%, 61%)', // --chart-1: 12 76% 61%
  chart2: 'hsl(173, 58%, 39%)', // --chart-2: 173 58% 39%
  chart3: 'hsl(197, 37%, 24%)', // --chart-3: 197 37% 24%
  chart4: 'hsl(43, 74%, 66%)', // --chart-4: 43 74% 66%
  chart5: 'hsl(27, 87%, 67%)', // --chart-5: 27 87% 67%
  ...customColors
};

const colors = {
  gradients: {
    blue1: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    blue2: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    blue3: 'linear-gradient(127.55deg, #0f172a 3.73%, #1e293b 92.26%)',
    blue4: 'linear-gradient(-20deg, #0f172a 0%, #334155 100%)',
    blue5: 'linear-gradient(135deg, #cbd5e1 10%, #0f172a 100%)',
    orange1: 'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)',
    orange2: 'linear-gradient(135deg, #fed7aa 0%, #ea580c 100%)',
    orange3: 'linear-gradient(120deg, #fef3c7 0%, #f59e0b 100%)',
    purple1: 'linear-gradient(135deg, #f3e8ff 0%, #8b5cf6 100%)',
    purple3: 'linear-gradient(135deg, #e0e7ff 0%, #6366f1 100%)',
    pink1: 'linear-gradient(135deg, #fce7f3 0%, #ec4899 100%)',
    pink2: 'linear-gradient(135deg, #fdf2f8 0%, #be185d 100%)',
    green1: 'linear-gradient(135deg, #dcfce7 0%, #16a34a 100%)',
    green2: 'linear-gradient(to bottom, #ecfdf5, #10b981)',
    black1: 'linear-gradient(100.66deg, #334155 6.56%, #0f172a 93.57%)',
    black2: 'linear-gradient(60deg, #0f172a 0%, #1e293b 100%)'
  },
  shadows: {
    success: '0px 1px 3px rgba(16, 185, 129, 0.12), 0px 1px 2px rgba(16, 185, 129, 0.24)',
    error: '0px 1px 3px rgba(239, 68, 68, 0.12), 0px 1px 2px rgba(239, 68, 68, 0.24)',
    info: '0px 1px 3px rgba(59, 130, 246, 0.12), 0px 1px 2px rgba(59, 130, 246, 0.24)',
    primary: '0px 1px 3px rgba(15, 23, 42, 0.12), 0px 1px 2px rgba(15, 23, 42, 0.24)',
    warning: '0px 1px 3px rgba(245, 158, 11, 0.12), 0px 1px 2px rgba(245, 158, 11, 0.24)',
    // shadcn-style subtle shadows
    card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    cardSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    cardLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  },
  layout: {
    general: {
      bodyBg: themeColors.background
    },
    sidebar: {
      background: themeColors.sidebarBackground,
      textColor: themeColors.sidebarForeground,
      dividerBg: themeColors.sidebarBorder,
      menuItemColor: themeColors.sidebarForeground,
      menuItemColorActive: themeColors.sidebarPrimary,
      menuItemBg: 'transparent',
      menuItemBgActive: themeColors.sidebarAccent,
      menuItemIconColor: themeColors.sidebarForeground,
      menuItemIconColorActive: themeColors.sidebarPrimary,
      menuItemHeadingColor: themeColors.sidebarPrimary
    }
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white
    },
    trueWhite: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black
    }
  },
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2)
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2)
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2)
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  }
};

export const ShadcnTheme = createTheme({
  direction: i18n.dir(),
  colors: {
    gradients: {
      blue1: colors.gradients.blue1,
      blue2: colors.gradients.blue2,
      blue3: colors.gradients.blue3,
      blue4: colors.gradients.blue4,
      blue5: colors.gradients.blue5,
      orange1: colors.gradients.orange1,
      orange2: colors.gradients.orange2,
      orange3: colors.gradients.orange3,
      purple1: colors.gradients.purple1,
      purple3: colors.gradients.purple3,
      pink1: colors.gradients.pink1,
      pink2: colors.gradients.pink2,
      green1: colors.gradients.green1,
      green2: colors.gradients.green2,
      black1: colors.gradients.black1,
      black2: colors.gradients.black2
    },
    shadows: {
      success: colors.shadows.success,
      error: colors.shadows.error,
      primary: colors.shadows.primary,
      info: colors.shadows.info,
      warning: colors.shadows.warning
    },
    alpha: {
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white
      },
      trueWhite: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white
      },
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black
      }
    },
    secondary: {
      lighter: alpha(themeColors.secondary, 0.1),
      light: lighten(themeColors.secondary, 0.3),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2)
    },
    primary: {
      lighter: alpha(themeColors.primary, 0.1),
      light: lighten(themeColors.primary, 0.3),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2)
    },
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: lighten(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2)
    },
    warning: {
      lighter: alpha(themeColors.warning, 0.1),
      light: lighten(themeColors.warning, 0.3),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2)
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: lighten(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2)
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: lighten(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2)
    }
  },
  general: {
    reactFrameworkColor: themeColors.primary,
    borderRadiusSm: '0.375rem', // 6px
    borderRadius: '0.5rem', // 8px - matches --radius: .5rem
    borderRadiusLg: '0.75rem', // 12px
    borderRadiusXl: '1rem' // 16px
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    boxShadow: 'none',
    width: '16rem', // --sidebar-width: 16rem
    textColor: colors.layout.sidebar.textColor,
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor
  },
  header: {
    height: '4rem', // 64px
    background: themeColors.background,
    boxShadow: colors.shadows.cardSm,
    textColor: themeColors.foreground
  },
  spacing: 8, // more consistent with shadcn spacing
  palette: {
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100]
    },
    mode: 'light',
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: colors.alpha.white[100]
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: colors.alpha.white[100]
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: colors.alpha.white[100]
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: colors.alpha.white[100]
    },
    text: {
      primary: themeColors.foreground,
      secondary: themeColors.mutedForeground,
      disabled: alpha(themeColors.mutedForeground, 0.5)
    },
    background: {
      paper: themeColors.card,
      default: themeColors.background
    },
    action: {
      active: themeColors.foreground,
      hover: alpha(themeColors.muted, 0.8),
      hoverOpacity: 0.08,
      selected: themeColors.muted,
      selectedOpacity: 0.08,
      disabled: alpha(themeColors.mutedForeground, 0.5),
      disabledBackground: alpha(themeColors.muted, 0.5),
      disabledOpacity: 0.38,
      focus: alpha(themeColors.ring, 0.12),
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    },
    tonalOffset: 0.2
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640, // tailwind sm
      md: 768, // tailwind md
      lg: 1024, // tailwind lg
      xl: 1280 // tailwind xl
    }
  },
  typography: {
    fontFamily: [
      'Dana',
      'Poppins',
      'IRANSans',
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.25rem', // text-4xl
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '1.875rem', // text-3xl
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.5rem', // text-2xl
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.25rem', // text-xl
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.125rem', // text-lg
      fontWeight: 600,
      lineHeight: 1.5
    },
    h6: {
      fontSize: '1rem', // text-base
      fontWeight: 600,
      lineHeight: 1.5
    },
    body1: {
      fontSize: '0.875rem', // text-sm
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.75rem', // text-xs
      lineHeight: 1.4
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          // Shadcn CSS custom properties
          '--background': '0 0% 100%',
          '--foreground': '0 0% 3.9%',
          '--card': '0 0% 100%',
          '--card-foreground': '0 0% 3.9%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '0 0% 3.9%',
          '--primary': '0 0% 9%',
          '--primary-foreground': '0 0% 98%',
          '--secondary': '0 0% 96.1%',
          '--secondary-foreground': '0 0% 9%',
          '--muted': '0 0% 96.1%',
          '--muted-foreground': '0 0% 45.1%',
          '--accent': '0 0% 96.1%',
          '--accent-foreground': '0 0% 9%',
          '--destructive': '0 84.2% 60.2%',
          '--destructive-foreground': '0 0% 98%',
          '--border': '0 0% 89.8%',
          '--input': '0 0% 89.8%',
          '--ring': '0 0% 3.9%',
          '--chart-1': '12 76% 61%',
          '--chart-2': '173 58% 39%',
          '--chart-3': '197 37% 24%',
          '--chart-4': '43 74% 66%',
          '--chart-5': '27 87% 67%',
          '--radius': '0.5rem',
          '--sidebar-background': '0 0% 98%',
          '--sidebar-foreground': '240 5.3% 26.1%',
          '--sidebar-primary': '240 5.9% 10%',
          '--sidebar-primary-foreground': '0 0% 98%',
          '--sidebar-accent': '240 4.8% 95.9%',
          '--sidebar-accent-foreground': '240 5.9% 10%',
          '--sidebar-border': '220 13% 91%',
          '--sidebar-ring': '217.2 91.2% 59.8%',
          '--sidebar-width': '16rem',
          '--sidebar-width-icon': '3rem',
          // Tailwind breakpoints
          '--sm': '640px',
          '--md': '768px',
          '--lg': '1024px',
          '--xl': '1280px',
          '--2xl': '1536px'
        },
        'html, body': {
          width: '100%',
          height: '100%',
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.00938em',
          tabSize: 4,
          fontFeatureSettings: 'normal',
          fontVariationSettings: 'normal',
          WebkitTapHighlightColor: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          textSizeAdjust: '100%'
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1,
          fontFamily: 'Dana, Poppins, IRANSans, Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          color: themeColors.foreground,
          backgroundColor: themeColors.background,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: themeColors.border,
          boxSizing: 'inherit',
          gap: '0.5rem',
          overflow: 'auto'
        },
        '#root': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          minHeight: 0
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          boxSizing: 'border-box'
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: '6px',
          fontSize: '0.875rem',
          padding: '8px 16px',
          minWidth: 'auto',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
        contained: {
          backgroundColor: themeColors.primary,
          color: themeColors.primaryForeground,
          '&:hover': {
            backgroundColor: alpha(themeColors.primary, 0.9)
          }
        },
        outlined: {
          borderColor: themeColors.border,
          color: themeColors.foreground,
          backgroundColor: themeColors.background,
          '&:hover': {
            backgroundColor: themeColors.accent,
            borderColor: themeColors.border
          }
        },
        text: {
          color: themeColors.foreground,
          '&:hover': {
            backgroundColor: themeColors.accent
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: `1px solid ${themeColors.border}`,
          boxShadow: colors.shadows.cardSm,
          backgroundColor: themeColors.white
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: themeColors.white
        },
        elevation0: {
          boxShadow: 'none'
        },
        elevation1: {
          boxShadow: colors.shadows.card
        },
        elevation2: {
          boxShadow: colors.shadows.cardSm
        },
        elevation24: {
          boxShadow: colors.shadows.cardLg
        },
        outlined: {
          border: `1px solid ${themeColors.border}`
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            backgroundColor: themeColors.input,
            '& fieldset': {
              borderColor: themeColors.border
            },
            '&:hover fieldset': {
              borderColor: themeColors.ring
            },
            '&.Mui-focused fieldset': {
              borderColor: themeColors.primary,
              borderWidth: '2px'
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          backgroundColor: themeColors.input,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: themeColors.border
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: themeColors.ring
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: themeColors.primary,
            borderWidth: '2px'
          }
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: `1px solid ${themeColors.border}`
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: 0
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.muted,
          '& .MuiTableCell-root': {
            borderBottom: `1px solid ${themeColors.border}`,
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColors.mutedForeground
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${themeColors.border}`,
          fontSize: '0.875rem',
          padding: '12px 16px'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontSize: '0.75rem',
          height: '24px'
        },
        filled: {
          backgroundColor: themeColors.muted,
          color: themeColors.foreground,
          '&:hover': {
            backgroundColor: darken(themeColors.muted, 0.1)
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: themeColors.border,
          opacity: 1
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            borderRadius: '6px',
            margin: '2px 0',
            color: themeColors.mutedForeground,
            '&:hover': {
              backgroundColor: themeColors.muted,
              color: themeColors.foreground
            },
            '&.Mui-selected': {
              backgroundColor: themeColors.muted,
              color: themeColors.foreground,
              '&:hover': {
                backgroundColor: darken(themeColors.muted, 0.05)
              }
            }
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          paddingTop: '20px'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          borderRadius: '6px'
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: '6px',
          fontSize: '0.75rem',
          minWidth: '20px',
          height: '20px'
        }
      }
    }
  }
});