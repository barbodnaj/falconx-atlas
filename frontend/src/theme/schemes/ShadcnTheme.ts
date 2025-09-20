import { alpha, createTheme, lighten, darken } from '@mui/material';
import '@mui/lab/themeAugmentation';
import { customColors } from '../../config';
import i18n from 'src/i18n/i18n';
import '../fonts.css';

const themeColors = {
  // Modern shadcn admin dashboard colors - refined and professional with blue accents
  primary: 'hsl(217.2, 91.2%, 59.8%)', // Vibrant blue primary
  secondary: 'hsl(210, 40%, 98%)', // Clean light background
  success: 'hsl(142.1, 76.2%, 36.3%)', // Professional green
  warning: 'hsl(47.9, 95.8%, 53.1%)', // Vibrant amber
  error: 'hsl(0, 72.2%, 50.6%)', // Clear red for errors
  info: 'hsl(221.2, 83.2%, 53.3%)', // Modern blue
  black: 'hsl(222.2, 84%, 4.9%)', // Rich dark foreground
  white: 'hsl(0, 0%, 100%)', // Pure white
  primaryAlt: 'hsl(217.2, 91.2%, 50%)', // Darker blue variant
  
  // Core shadcn colors - updated for modern admin look with blue accents
  background: 'hsl(0, 0%, 100%)', // Clean white background
  foreground: 'hsl(222.2, 84%, 4.9%)', // Rich dark text
  card: 'hsl(0, 0%, 100%)', // White cards
  cardForeground: 'hsl(222.2, 84%, 4.9%)', // Dark text on cards
  popover: 'hsl(0, 0%, 100%)', // White popover
  popoverForeground: 'hsl(222.2, 84%, 4.9%)', // Dark popover text
  primaryForeground: 'hsl(0, 0%, 100%)', // White text on blue primary
  secondaryForeground: 'hsl(222.2, 84%, 4.9%)', // Dark text on secondary
  muted: 'hsl(220, 14.3%, 95.9%)', // Light blue-tinted muted background
  mutedForeground: 'hsl(215.4, 16.3%, 46.9%)', // Refined muted text
  accent: 'hsl(220, 14.3%, 95.9%)', // Light blue accent
  accentForeground: 'hsl(222.2, 84%, 4.9%)', // Dark accent text
  destructive: 'hsl(0, 72.2%, 50.6%)', // Error red
  destructiveForeground: 'hsl(210, 40%, 98%)', // Light text on destructive
  border: 'hsl(214.3, 31.8%, 91.4%)', // Subtle borders
  input: 'hsl(214.3, 31.8%, 91.4%)', // Input background
  ring: 'hsl(217.2, 91.2%, 59.8%)', // Blue focus ring
  
  // Gray sidebar colors matching the provided CSS variables
  sidebarBackground: 'hsla(0, 0%, 100%, 1.00)', // Light gray sidebar background
  sidebarForeground: 'hsl(240, 5.3%, 26.1%)', // Gray foreground text
  sidebarPrimary: 'hsl(240, 5.9%, 10%)', // Dark gray primary
  sidebarPrimaryForeground: 'hsl(0, 0%, 98%)', // Light text on primary
  sidebarAccent: 'hsl(240, 4.8%, 95.9%)', // Light gray accent
  sidebarAccentForeground: 'hsl(240, 5.9%, 10%)', // Dark text on accent
  sidebarBorder: 'hsl(220, 13%, 91%)', // Gray border
  sidebarRing: 'hsl(217.2, 91.2%, 59.8%)', // Blue ring for focus
  
  // Modern chart colors - professional palette
  chart1: 'hsl(221.2, 83.2%, 53.3%)', // Modern blue
  chart2: 'hsl(142.1, 76.2%, 36.3%)', // Professional green  
  chart3: 'hsl(47.9, 95.8%, 53.1%)', // Vibrant amber
  chart4: 'hsl(0, 72.2%, 50.6%)', // Clear red
  chart5: 'hsl(262.1, 83.3%, 57.8%)', // Purple accent
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
      dividerBg: themeColors.sidebarBorder, // Gray dividers
      menuItemColor: themeColors.sidebarForeground,
      menuItemColorActive: themeColors.sidebarAccentForeground,
      menuItemBg: 'transparent',
      menuItemBgActive: themeColors.sidebarAccent,
      menuItemIconColor: themeColors.sidebarForeground,
      menuItemIconColorActive: themeColors.sidebarAccentForeground,
      menuItemHeadingColor: themeColors.sidebarPrimary,
      // Gray sidebar styling
      borderRight: `1px solid ${themeColors.sidebarBorder}`, // Add gray border
      padding: '1rem',
      menuItemPadding: '0.5rem 0.75rem',
      menuItemBorderRadius: '0.375rem',
      menuItemFontWeight: '500',
      menuItemFontSize: '0.875rem',
      menuItemMargin: '0.125rem 0',
      sectionSpacing: '1.5rem',
      logoSpacing: '1.5rem'
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
      'Inter',
      'Dana',
      'Poppins', 
      'IRANSans',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    // Modern typography scale for admin dashboard
    h1: {
      fontSize: '2.25rem', // 36px - Large headings
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      color: themeColors.foreground
    },
    h2: {
      fontSize: '1.875rem', // 30px - Section headings
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      color: themeColors.foreground
    },
    h3: {
      fontSize: '1.5rem', // 24px - Subsection headings
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
      color: themeColors.foreground
    },
    h4: {
      fontSize: '1.25rem', // 20px - Card titles
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      color: themeColors.foreground
    },
    h5: {
      fontSize: '1.125rem', // 18px - Small headings
      fontWeight: 600,
      lineHeight: 1.4,
      color: themeColors.foreground
    },
    h6: {
      fontSize: '1rem', // 16px - Smallest headings
      fontWeight: 600,
      lineHeight: 1.5,
      color: themeColors.foreground
    },
    body1: {
      fontSize: '0.875rem', // 14px - Default body text
      fontWeight: 400,
      lineHeight: 1.6,
      color: themeColors.foreground
    },
    body2: {
      fontSize: '0.8125rem', // 13px - Secondary text
      fontWeight: 400,
      lineHeight: 1.5,
      color: themeColors.mutedForeground
    },
    caption: {
      fontSize: '0.75rem', // 12px - Captions and labels
      fontWeight: 500,
      lineHeight: 1.4,
      color: themeColors.mutedForeground,
      letterSpacing: '0.025em'
    },
    overline: {
      fontSize: '0.75rem', // 12px - Overline text
      fontWeight: 600,
      lineHeight: 1.4,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: themeColors.mutedForeground
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          // Modern shadcn admin CSS custom properties
          '--background': '0 0% 100%',
          '--foreground': '222.2 84% 4.9%', // Updated to modern navy
          '--card': '0 0% 100%',
          '--card-foreground': '222.2 84% 4.9%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '222.2 84% 4.9%',
          '--primary': '217.2 91.2% 59.8%', // Vibrant blue primary
          '--primary-foreground': '0 0% 100%',
          '--secondary': '210 40% 98%', // Clean light secondary
          '--secondary-foreground': '222.2 84% 4.9%',
          '--muted': '220 14.3% 95.9%', // Light blue-tinted muted
          '--muted-foreground': '215.4 16.3% 46.9%',
          '--accent': '220 14.3% 95.9%',
          '--accent-foreground': '222.2 84% 4.9%',
          '--destructive': '0 72.2% 50.6%',
          '--destructive-foreground': '210 40% 98%',
          '--border': '214.3 31.8% 91.4%', // Subtle modern border
          '--input': '214.3 31.8% 91.4%',
          '--ring': '217.2 91.2% 59.8%', // Blue focus ring
          // Modern chart colors
          '--chart-1': '221.2 83.2% 53.3%', // Modern blue
          '--chart-2': '142.1 76.2% 36.3%', // Professional green
          '--chart-3': '47.9 95.8% 53.1%', // Vibrant amber
          '--chart-4': '0 72.2% 50.6%', // Clear red
          '--chart-5': '262.1 83.3% 57.8%', // Purple accent
          '--radius': '0.75rem', // Increased for modern look
          // Gray sidebar variables matching the provided CSS
          '--sidebar-background': '0 0% 98%', // Light gray background
          '--sidebar-foreground': '240 5.3% 26.1%', // Gray foreground
          '--sidebar-primary': '240 5.9% 10%', // Dark gray primary
          '--sidebar-primary-foreground': '0 0% 98%', // Light on primary
          '--sidebar-accent': '240 4.8% 95.9%', // Light gray accent
          '--sidebar-accent-foreground': '240 5.9% 10%', // Dark on accent
          '--sidebar-border': '220 13% 91%', // Gray border
          '--sidebar-ring': '217.2 91.2% 59.8%', // Blue ring for focus
          '--sidebar-width': '16rem',
          '--sidebar-width-icon': '3rem',
          // AUI (Admin UI) variables from the provided CSS
          '--aui-background': '0 0% 100%',
          '--aui-foreground': '240 10% 3.9%',
          '--aui-card': '0 0% 100%',
          '--aui-card-foreground': '240 10% 3.9%',
          '--aui-popover': '0 0% 100%',
          '--aui-popover-foreground': '240 10% 3.9%',
          '--aui-primary': '240 5.9% 10%',
          '--aui-primary-foreground': '0 0% 98%',
          '--aui-secondary': '240 4.8% 95.9%',
          '--aui-secondary-foreground': '240 5.9% 10%',
          '--aui-muted': '240 4.8% 95.9%',
          '--aui-muted-foreground': '240 3.8% 46.1%',
          '--aui-accent': '240 4.8% 95.9%',
          '--aui-accent-foreground': '240 5.9% 10%',
          '--aui-destructive': '0 84.2% 60.2%',
          '--aui-destructive-foreground': '0 0% 98%',
          '--aui-border': '240 5.9% 90%',
          '--aui-input': '240 5.9% 90%',
          '--aui-ring': '240 10% 3.9%',
          '--aui-radius': '.5rem',
          '--aui-thread-max-width': '42rem',
          // Modern spacing and sizing
          '--header-height': '4rem',
          '--content-padding': '1.5rem',
          // Responsive breakpoints
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
          borderRadius: '0.375rem', // 6px - consistent with shadcn
          fontSize: '0.875rem',
          padding: '0.5rem 1rem', // More consistent padding
          minWidth: 'auto',
          boxShadow: 'none',
          lineHeight: 1.25,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: 'none'
          },
          '&:focus-visible': {
            outline: `2px solid ${themeColors.ring}`,
            outlineOffset: '2px'
          }
        },
        contained: {
          backgroundColor: themeColors.primary,
          color: themeColors.primaryForeground,
          border: `1px solid ${themeColors.primary}`,
          '&:hover': {
            backgroundColor: alpha(themeColors.primary, 0.9),
            borderColor: alpha(themeColors.primary, 0.9)
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
          padding: '0.5rem 0.75rem',
          '&:hover': {
            backgroundColor: themeColors.accent
          }
        },
        sizeSmall: {
          padding: '0.375rem 0.75rem',
          fontSize: '0.8125rem'
        },
        sizeLarge: {
          padding: '0.625rem 1.25rem',
          fontSize: '0.9375rem'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem', // Modern rounded corners
          border: `1px solid ${themeColors.border}`,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // Subtle modern shadow
          backgroundColor: themeColors.card,
          padding: '1.5rem', // Consistent padding
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Elevated hover state
            borderColor: alpha(themeColors.border, 0.8)
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: themeColors.card,
          borderRadius: '0.75rem', // Consistent border radius
          border: `1px solid ${themeColors.border}`,
          transition: 'all 0.2s ease-in-out'
        },
        elevation0: {
          boxShadow: 'none',
          border: `1px solid ${themeColors.border}`
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: `1px solid ${themeColors.border}`
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          border: `1px solid ${themeColors.border}`
        },
        elevation24: {
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
          border: `1px solid ${themeColors.border}`
        },
        outlined: {
          border: `1px solid ${themeColors.border}`,
          boxShadow: 'none'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.375rem', // 6px
            backgroundColor: themeColors.background,
            fontSize: '0.875rem',
            transition: 'all 0.2s ease-in-out',
            '& fieldset': {
              borderColor: themeColors.border,
              borderWidth: '1px'
            },
            '&:hover fieldset': {
              borderColor: darken(themeColors.border, 0.1)
            },
            '&.Mui-focused fieldset': {
              borderColor: themeColors.ring,
              borderWidth: '2px',
              outline: `2px solid ${alpha(themeColors.ring, 0.1)}`,
              outlineOffset: '0px'
            },
            '& input': {
              padding: '0.5rem 0.75rem',
              '&::placeholder': {
                color: themeColors.mutedForeground,
                opacity: 1
              }
            }
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: themeColors.foreground,
            '&.Mui-focused': {
              color: themeColors.primary
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0.375rem',
          backgroundColor: themeColors.background,
          fontSize: '0.875rem',
          transition: 'all 0.2s ease-in-out',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: themeColors.border
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: darken(themeColors.border, 0.1)
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: themeColors.ring,
            borderWidth: '2px'
          },
          '& input': {
            padding: '0.5rem 0.75rem'
          }
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem', // 12px for modern look
          border: `1px solid ${themeColors.border}`,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          overflow: 'hidden'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: 0,
          width: '100%'
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
            color: themeColors.mutedForeground,
            padding: '0.75rem 1rem',
            height: '3rem'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${themeColors.border}`,
          fontSize: '0.875rem',
          padding: '0.75rem 1rem',
          color: themeColors.foreground,
          '&:last-child': {
            paddingRight: '1rem'
          },
          '&:first-of-type': {
            paddingLeft: '1rem'
          }
        },
        head: {
          backgroundColor: themeColors.muted,
          fontWeight: 600
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(themeColors.muted, 0.5)
          },
          '&:last-child .MuiTableCell-root': {
            borderBottom: 'none'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px', // Fully rounded for modern pill look
          fontSize: '0.75rem',
          height: '1.5rem', // 24px
          fontWeight: 500,
          border: `1px solid ${themeColors.border}`,
          transition: 'all 0.2s ease-in-out'
        },
        filled: {
          backgroundColor: themeColors.muted,
          color: themeColors.foreground,
          '&:hover': {
            backgroundColor: darken(themeColors.muted, 0.05)
          }
        },
        outlined: {
          borderColor: themeColors.border,
          color: themeColors.foreground,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: themeColors.muted
          }
        },
        sizeSmall: {
          height: '1.25rem', // 20px
          fontSize: '0.6875rem' // 11px
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: themeColors.border,
          opacity: 1,
          margin: '0.5rem 0'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            borderRadius: '0.375rem', // 6px
            margin: '0.125rem 0', // 2px
            padding: '0.5rem 0.75rem',
            color: themeColors.mutedForeground,
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: themeColors.accent,
              color: themeColors.foreground
            },
            '&.Mui-selected': {
              backgroundColor: themeColors.accent,
              color: themeColors.primary,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: darken(themeColors.accent, 0.05)
              }
            }
          }
        },
        button: {
          '&:focus-visible': {
            outline: `2px solid ${themeColors.ring}`,
            outlineOffset: '2px'
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
          fontSize: '0.875rem', // 14px
          fontWeight: 600,
          borderRadius: '50%', // Full circle for avatars
          border: `2px solid ${themeColors.border}`,
          backgroundColor: themeColors.muted,
          color: themeColors.foreground
        },
        rounded: {
          borderRadius: '0.5rem' // 8px for rounded square avatars
        },
        square: {
          borderRadius: '0.25rem' // 4px for square avatars
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: '9999px', // Fully rounded
          fontSize: '0.6875rem', // 11px
          fontWeight: 600,
          minWidth: '1.25rem', // 20px
          height: '1.25rem', // 20px
          padding: '0 0.25rem',
          border: `2px solid ${themeColors.background}`
        },
        colorPrimary: {
          backgroundColor: themeColors.primary,
          color: themeColors.primaryForeground
        },
        colorSecondary: {
          backgroundColor: themeColors.secondary,
          color: themeColors.secondaryForeground
        },
        colorError: {
          backgroundColor: themeColors.error,
          color: themeColors.destructiveForeground
        }
      }
    }
  }
});