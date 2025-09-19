import { alpha, createTheme, lighten, darken } from '@mui/material';
import '@mui/lab/themeAugmentation';
import { customColors } from '../../config';
import i18n from 'src/i18n/i18n';

const themeColors = {
  primary: '#000000',
  secondary: '#666666',
  success: '#000000',
  warning: '#333333',
  error: '#000000',
  info: '#555555',
  black: '#000000',
  white: '#ffffff',
  primaryAlt: '#000000',
  ...customColors
};

const colors = {
  gradients: {
    blue1: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
    blue2: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
    blue3: 'linear-gradient(127.55deg, #000000 3.73%, #333333 92.26%)',
    blue4: 'linear-gradient(-20deg, #000000 0%, #333333 100%)',
    blue5: 'linear-gradient(135deg, #cccccc 10%, #000000 100%)',
    orange1: 'linear-gradient(135deg, #ffffff 0%, #000000 100%)',
    orange2: 'linear-gradient(135deg, #cccccc 0%, #333333 100%)',
    orange3: 'linear-gradient(120deg, #ffffff 0%, #666666 100%)',
    purple1: 'linear-gradient(135deg, #ffffff 0%, #000000 100%)',
    purple3: 'linear-gradient(135deg, #cccccc 0%, #333333 100%)',
    pink1: 'linear-gradient(135deg, #ffffff 0%, #000000 100%)',
    pink2: 'linear-gradient(135deg, #cccccc 0%, #000000 100%)',
    green1: 'linear-gradient(135deg, #ffffff 0%, #333333 100%)',
    green2: 'linear-gradient(to bottom, #ffffff, #666666)',
    black1: 'linear-gradient(100.66deg, #333333 6.56%, #000000 93.57%)',
    black2: 'linear-gradient(60deg, #000000 0%, #333333 100%)'
  },
  shadows: {
    success:
      '0px 1px 4px rgba(0, 0, 0, 0.25), 0px 3px 12px 2px rgba(0, 0, 0, 0.35)',
    error:
      '0px 1px 4px rgba(0, 0, 0, 0.25), 0px 3px 12px 2px rgba(0, 0, 0, 0.35)',
    info: '0px 1px 4px rgba(85, 85, 85, 0.25), 0px 3px 12px 2px rgba(85, 85, 85, 0.35)',
    primary:
      '0px 1px 4px rgba(0, 0, 0, 0.25), 0px 3px 12px 2px rgba(0, 0, 0, 0.35)',
    warning:
      '0px 1px 4px rgba(51, 51, 51, 0.25), 0px 3px 12px 2px rgba(51, 51, 51, 0.35)',
    card: '0px 9px 16px rgba(0, 0, 0, .18), 0px 2px 2px rgba(0, 0, 0, 0.32)',
    cardSm:
      '0px 2px 3px rgba(0, 0, 0, .18), 0px 1px 1px rgba(0, 0, 0, 0.32)',
    cardLg:
      '0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)'
  },
  layout: {
    general: {
      bodyBg: '#f8f8f8'
    },
    sidebar: {
      background: themeColors.white,
      textColor: themeColors.secondary,
      dividerBg: '#eeeeee',
      menuItemColor: '#000000',
      menuItemColorActive: themeColors.primary,
      menuItemBg: themeColors.white,
      menuItemBgActive: '#f8f8f8',
      menuItemIconColor: lighten(themeColors.secondary, 0.3),
      menuItemIconColorActive: themeColors.primary,
      menuItemHeadingColor: darken(themeColors.secondary, 0.3)
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

export const BlackWhiteTheme = createTheme({
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
    borderRadiusSm: '6px',
    borderRadius: '10px',
    borderRadiusLg: '12px',
    borderRadiusXl: '16px'
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    boxShadow: colors.shadows.cardSm,
    width: '280px',
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
    height: '80px',
    background: colors.alpha.white[100],
    boxShadow: colors.shadows.cardSm,
    textColor: colors.secondary.main
  },
  spacing: 9,
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
      primary: colors.alpha.black[100],
      secondary: colors.alpha.black[70],
      disabled: colors.alpha.black[50]
    },
    background: {
      paper: colors.alpha.white[100],
      default: colors.layout.general.bodyBg
    },
    action: {
      active: colors.alpha.black[100],
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.black[10],
      selectedOpacity: 0.1,
      disabled: colors.alpha.black[50],
      disabledBackground: colors.alpha.black[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.black[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12
    },
    tonalOffset: 0.5
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840
    }
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(darken('#000000', 0.5), 0.4),
          backdropFilter: 'blur(2px)',

          '&:not(.MuiBackdrop-invisible)': {
            backgroundColor: alpha(darken('#000000', 0.5), 0.4),
            backdropFilter: 'blur(2px)'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginLeft: 8,
          marginRight: 8,
          fontWeight: 'bold'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%'
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1
        },
        '#root': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased'
        },
        '.child-popover .MuiPaper-root .MuiList-root .MuiButtonBase-root:hover':
          {
            backgroundColor: alpha('#000000', 0.02)
          },
        '.parent-popover .MuiPaper-root .MuiList-root .MuiButtonBase-root:hover':
          {
            backgroundColor: alpha('#000000', 0.02)
          },
        '#nprogress': {
          pointerEvents: 'none'
        },
        '#nprogress .bar': {
          background: '#000000',
          position: 'fixed',
          zIndex: 1901,
          top: 0,
          left: 0,
          width: '100%',
          height: 2
        },
        '#nprogress .peg': {
          display: 'block',
          position: 'absolute',
          right: 0,
          width: 100,
          height: '100%',
          boxShadow: '0 0 10px #000000, 0 0 5px #000000',
          opacity: 1,
          transform: 'rotate(3deg) translate(0px, -4px)'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: '#000000'
        },
        icon: {
          color: '#000000'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
            paddingRight: 6
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000'
          },
          '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000'
          }
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          fontWeight: 'bold',
          lineHeight: '40px',
          fontSize: 13,
          background: colors.alpha.white[100],
          color: colors.alpha.black[70]
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginTop: -5,
          marginBottom: -5
        },
        title: {
          fontSize: 15
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderRadius: '50px'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          background: colors.alpha.black[5],
          color: colors.alpha.black[100],

          '&:hover': {
            background: colors.alpha.black[10]
          }
        },
        deleteIcon: {
          color: colors.alpha.black[50],

          '&:hover': {
            color: colors.alpha.black[70]
          }
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',

          '&.Mui-expanded': {
            margin: 0
          },
          '&::before': {
            display: 'none'
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 'bold'
        },
        colorDefault: {
          background: colors.alpha.black[30],
          color: colors.alpha.white[100]
        }
      }
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          alignItems: 'center'
        },
        avatar: {
          background: colors.alpha.black[10],
          fontSize: 13,
          color: colors.alpha.black[70],
          fontWeight: 'bold',

          '&:first-of-type': {
            border: 0,
            background: 'transparent'
          }
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        alignItemsFlexStart: {
          marginTop: 0
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          fontSize: 13,
          fontWeight: 'bold',
          transition: 'all .2s'
        },
        textPrimary: {
          '&.Mui-selected': {
            boxShadow: colors.shadows.primary
          },
          '&.MuiButtonBase-root:hover': {
            backgroundColor: colors.alpha.black[5]
          },
          '&.Mui-selected.MuiButtonBase-root:hover': {
            backgroundColor: colors.primary.main
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          paddingLeft: 16,
          paddingRight: 16,

          '.MuiSvgIcon-root': {
            transition: 'all .2s'
          }
        },
        endIcon: {
          marginRight: -8
        },
        containedInherit: {
          backgroundColor: colors.alpha.black[5],
          color: colors.alpha.black[100],

          '&:hover': {
            backgroundColor: colors.alpha.black[10]
          }
        },
        outlined: {
          '&:hover': {
            backgroundColor: colors.alpha.black[5]
          }
        },
        outlinedPrimary: {
          '&:hover': {
            backgroundColor: colors.alpha.black[5],
            color: colors.primary.main
          }
        },
        outlinedSecondary: {
          '&:hover': {
            backgroundColor: colors.alpha.black[5],
            color: colors.secondary.main
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          color: colors.primary.main,
          background: colors.alpha.white[100],
          transition: 'all .2s',

          '&:hover': {
            backgroundColor: colors.alpha.black[5],
            color: colors.alpha.black[100]
          },
          '&.Mui-selected': {
            backgroundColor: colors.alpha.black[5],
            color: colors.alpha.black[100]
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,

          '& .MuiTouchRipple-root': {
            borderRadius: 8
          }
        },
        sizeSmall: {
          padding: 4
        }
      }
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: 16
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            color: colors.secondary.main,

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: colors.alpha.black[100],
              background: colors.alpha.black[5]
            }
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            opacity: 0.3
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: colors.alpha.black[10],
          border: 0,
          height: 1
        },
        vertical: {
          height: 'auto',
          width: 1,

          '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
            height: 'auto',
            width: 1
          },
          '&.MuiDivider-absolute.MuiDivider-fullWidth': {
            height: '100%',
            width: 1
          }
        },
        withChildren: {
          '&:before, &:after': {
            border: 0
          }
        },
        wrapper: {
          background: colors.alpha.white[100],
          fontWeight: 'bold',
          height: 24,
          lineHeight: '24px',
          marginTop: -12,
          color: 'inherit',
          textTransform: 'uppercase'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
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
          border: `1px solid ${colors.alpha.black[10]}`
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 6
        },
        colorPrimary: {
          backgroundColor: colors.alpha.black[10]
        },
        bar: {
          borderRadius: 6
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
            transform: 'none'
          },
          '& .MuiSlider-valueLabelCircle': {
            backgroundColor: colors.alpha.black[100]
          },
          '& .MuiSlider-rail': {
            opacity: 0.4
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          lineHeight: 1.5,
          fontSize: 14
        },
        standardSuccess: {
          color: colors.success.main,
          backgroundColor: colors.success.lighter,

          '& .MuiAlert-icon': {
            color: colors.success.main
          }
        },
        standardInfo: {
          color: colors.info.main,
          backgroundColor: colors.info.lighter,

          '& .MuiAlert-icon': {
            color: colors.info.main
          }
        },
        standardWarning: {
          color: colors.warning.main,
          backgroundColor: colors.warning.lighter,

          '& .MuiAlert-icon': {
            color: colors.warning.main
          }
        },
        standardError: {
          color: colors.error.main,
          backgroundColor: colors.error.lighter,

          '& .MuiAlert-icon': {
            color: colors.error.main
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
    }
  }
});