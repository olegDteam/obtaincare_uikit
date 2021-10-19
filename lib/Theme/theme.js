import { createTheme } from '@mui/material/styles';
export var colors = {
    primary: {
        main: '#00CBBF',
        hover: '#89EFD1',
        active: '#5DBDB0',
    },
    secondary: {
        main: '#749FC8',
        hover: '#7EB6EB',
        active: '#547FA8',
    },
    additional: {
        main: '#F3F8FD',
        hover: '#749FC8',
        active: '#547FA8',
    },
    link: {
        main: '#749FC8',
        hover: '#749FC8',
        active: '#547FA8',
        bgColor: 'transparent'
    },
    danger: {
        red: '#F83F20',
        pink: '#F38383',
        lightPink: '#FFF1EF'
    },
    text: {
        default: '#FFFFFF',
        main: '#000000',
        additional: '#7E8EA1',
        grey: '#616870',
        blue: '#749FC8',
        green: '#00CBBF'
    },
    common: {
        white: '#FFFFFF',
        lightGray: '#7E8EA2',
        sweetBlue: '#F2F8FE'
    },
    border: {
        primary: '',
        secondary: '#749FC8',
        additional: '#F2F8FE',
        danger: '#F83F20',
        pagination: '#F3F8FD'
    },
    red: '#F83F20',
    lightGray: '#99A2AD',
    black: '#000000',
    blackShadow: 'rgba(0, 0, 0, 0.08)',
    blackLight: "#0000004c",
    blueSidebarHover: 'rgba(116, 159, 200, 0,2)',
    light: '#F1F1F1',
    orange: '#FFAD33',
    lightOrange: '#FFF5E6',
    pink: '#F38383',
    lightPink: '#FFF1EF',
    sweetBlue: '#F4F8F9',
    sweetBlueDisabled: 'rgba(244, 248, 249, 0.5)',
    darkGreen: '#003E52',
    white: '#FFFFFF',
    darkGray: '#5D6267',
    darkGrayText: "#616870",
    backgroundBlue: '#CBDAEB',
    lightBlue: '#F2F8FE',
    lightBlueCircle: "#F3F8FD",
    blueChangeButton: '#DDEFFF',
    blueHeaderProvider: '#203541',
    blueBorder: '#426477',
    profileMenuShadow: 'rgba(174, 194, 213, 0.36)',
    improveItemBlue: '#304EA9',
    grayLine: '#EFF1F4',
    textGray: '#7E8EA2',
    textDateGray: '#7E8EA1',
    backgroundGray: '#F6F9FB',
    paginationBorder: 'rgba(116, 159, 200, 0.3)',
    paginationPrevNextBG: '#E3ECF4',
    textLight: '#7885A4',
    lightGreenText: '#92DBD1',
    darkGreenText: '#2D6961',
    lightGrayText: 'rgba(0, 0, 0, 0.5)',
    lightRed: '#F83F20',
    textFieldLabelBlue: '#5A7690',
};
var theme = createTheme({
    palette: {
        additional: {
            main: '#FFFFFF'
        },
        action: {
            disabledOpacity: 0.5
        },
    },
    typography: {
        fontFamily: 'Lato',
        h1: {
            fontSize: '36px',
            lineHeight: '43px',
            fontWeight: 'bold',
            fontStyle: 'normal'
        },
        h2: {
            fontSize: '24px',
            lineHeight: '29px',
            fontWeight: 'bold',
            fontStyle: 'normal'
        },
        h3: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 'bold',
            fontStyle: 'normal'
        },
        h4: {
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: 'bold',
            fontStyle: 'normal'
        },
        h5: {
            fontSize: '15px',
            lineHeight: '19px',
            fontWeight: 600,
            fontStyle: 'normal'
        },
        button: {
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: 600,
            fontStyle: 'normal',
            textTransform: 'none'
        },
        body1: {
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: 600,
            fontStyle: 'normal',
            textTransform: 'none'
        }
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    margin: 0
                }
            },
            variants: [
                {
                    props: { variant: 'p1Text' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '16px',
                        lineHeight: '170%',
                        fontWeight: 'normal',
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'p1' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '16px',
                        lineHeight: '19px',
                        fontWeight: 'normal',
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'p2' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: 'normal',
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'p3Text' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '12px',
                        lineHeight: '150%',
                        fontWeight: 'normal',
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'p3' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '12px',
                        lineHeight: '14px',
                        fontWeight: 'normal',
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'menuTab' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: 600,
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'label' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: 600,
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'tooltip' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '12px',
                        lineHeight: '14px',
                        fontWeight: 600,
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'semiBold' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '12px',
                        lineHeight: '14px',
                        fontWeight: 500,
                        fontStyle: 'normal'
                    }
                },
                {
                    props: { variant: 'newsText' },
                    style: {
                        fontFamily: 'Lato',
                        fontSize: '14px',
                        lineHeight: '21px',
                        fontWeight: 400,
                        fontStyle: 'normal'
                    }
                }
            ]
        },
        /*MuiAutocomplete: {
          styleOverrides: {
            paper: {
              borderRadius: '0 0 5px 5px',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              padding: 0,
            },
            listbox: {
              padding: 0,
            },
            option: {
              padding: '12px 15px !important'
            },
          }
        },*/
        /*    MuiChip: {
              styleOverrides: {
                root: {
                  backgroundColor: colors.lightBlueCircle,
                  padding: '0.6rem 1.4rem',
                  borderRadius: '100px',
                  marginLeft: '10px'
                },
                label: {
                  padding: 0,
                  fontFamily: 'Lato',
                  fontSize: '14px',
                  lineHeight: '17px',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  color: colors.text.grey
                }
              }
            },*/
        /*MuiList: {
          styleOverrides: {
            root: {
              padding: 0,
            }
          }
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: '0 0 5px 5px',
              boxShadow: `0px 6px 12px ${colors.blackShadow}`
            }
          }
        },*/
        /*    MuiCheckbox: {
              styleOverrides: {
                root: {
                  padding: 0,
        
                }
              }
            },*/
        /*    MuiMenuItem: {
              styleOverrides: {
                root: {
                  alignItems: 'center',
                  padding: '12.5px 15px',
                  backgroundColor: colors.white,
                  '&:hover': {
                    backgroundColor: colors.lightBlue,
                  },
                  '&.Mui-selected': {
                    backgroundColor: colors.blue
                  },
                  '&.Mui-focused': {
                    backgroundColor: colors.blue
                  }
                }
              }
            },*/
        MuiButton: {
            variants: [
                {
                    props: { variant: 'icon' },
                    style: {
                        justifyContent: "flex-start"
                    }
                },
                //COLORS
                {
                    props: { color: "primary" },
                    style: {
                        color: colors.text.default,
                        backgroundColor: colors.primary.main,
                        '&:hover': {
                            color: colors.text.default,
                            backgroundColor: colors.primary.hover,
                        },
                        ":disabled": {
                            color: colors.text.default,
                            backgroundColor: colors.primary.main,
                            opacity: 0.5,
                        },
                        ':active': {
                            color: colors.text.default,
                            backgroundColor: colors.primary.active,
                        },
                    }
                },
                {
                    props: { color: "secondary" },
                    style: {
                        color: colors.text.default,
                        backgroundColor: colors.secondary.main,
                        '&:hover': {
                            color: colors.text.default,
                            backgroundColor: colors.secondary.hover,
                        },
                        ":disabled": {
                            color: colors.text.default,
                            backgroundColor: colors.secondary.main,
                            opacity: 0.5,
                        },
                        ':active': {
                            color: colors.text.default,
                            backgroundColor: colors.secondary.active,
                        },
                    }
                },
                {
                    props: { color: "additional" },
                    style: {
                        color: colors.text.additional,
                        backgroundColor: colors.additional.main,
                        '&:hover': {
                            color: colors.text.default,
                            backgroundColor: colors.additional.hover,
                        },
                        ":disabled": {
                            color: colors.text.additional,
                            backgroundColor: colors.additional.main,
                            opacity: 0.5,
                        },
                        ':active': {
                            color: colors.text.default,
                            backgroundColor: colors.additional.active,
                        },
                    }
                },
                {
                    props: { color: "link" },
                    style: {
                        color: colors.link.main,
                        backgroundColor: colors.link.bgColor,
                        ":disabled": {
                            color: colors.text.additional,
                            backgroundColor: colors.link.bgColor,
                        },
                        ":active": {
                            color: colors.link.active,
                            backgroundColor: colors.link.bgColor,
                        },
                        '&:hover': {
                            color: colors.link.main,
                            textDecoration: 'underline',
                            backgroundColor: colors.link.bgColor,
                        }
                    }
                },
                {
                    props: { color: "danger" },
                    style: {
                        color: colors.text.default,
                        backgroundColor: colors.danger.red,
                        '&:hover': {
                            backgroundColor: colors.danger.red,
                        }
                    }
                },
                //SIZES
                {
                    props: { size: 's' },
                    style: {
                        padding: '8px',
                        height: '30px',
                        borderRadius: '5px'
                    }
                },
                {
                    props: { size: 'm' },
                    style: {
                        padding: '10px 16px',
                        height: '37px',
                        borderRadius: '5px',
                    }
                },
                {
                    props: { size: 'l' },
                    style: {
                        padding: '10.5px 16px',
                        height: '38px',
                        borderRadius: '5px'
                    }
                },
                {
                    props: { size: 'link' },
                    style: {
                        padding: 0,
                        borderRadius: 0,
                        minWidth: 0
                    }
                },
            ],
        },
        MuiRadio: {
            variants: [
                {
                    props: { size: 'large' },
                    style: {
                        width: '22px',
                        height: '22px'
                    }
                }
            ]
        },
        MuiAvatar: {
            variants: [
                {
                    props: { variant: 'userSidebar' },
                    style: {
                        borderRadius: '50%',
                        height: '72px',
                        width: '72px',
                        backgroundColor: colors.white
                    }
                },
                {
                    props: { variant: 'providerSidebar' },
                    style: {
                        borderRadius: '50%',
                        height: '36px',
                        width: '36px',
                    }
                },
                {
                    props: { variant: 'desktopHeader' },
                    style: {
                        borderRadius: '50%',
                        height: '36px',
                        width: '36px',
                    }
                },
            ]
        },
        MuiSvgIcon: {
            variants: [
                {
                    props: { fontSize: 'hospital' },
                    style: {
                        fontSize: '37px'
                    }
                },
                {
                    props: { fontSize: 'xm' },
                    style: {
                        fontSize: '18px'
                    }
                },
                {
                    props: { fontSize: 'size22px' },
                    style: {
                        fontSize: '22px'
                    }
                },
                {
                    props: { fontSize: 'xl' },
                    style: {
                        fontSize: '64px'
                    }
                },
                {
                    props: { fontSize: 'xs' },
                    style: {
                        fontSize: '8px',
                        marginBottom: '2px'
                    }
                },
                {
                    props: { fontSize: 'sidebar' },
                    style: {
                        fontSize: '24px',
                        marginLeft: '13px',
                        marginTop: '2px'
                    }
                },
                {
                    props: { fontSize: 'userSidebar' },
                    style: {
                        fontSize: '24px',
                        marginLeft: '4px',
                        marginTop: '2px'
                    }
                },
                {
                    props: { fontSize: 'cross' },
                    style: {
                        fontSize: '13px',
                    }
                },
                {
                    props: { color: 'lightGray' },
                    style: {
                        color: colors.lightGray
                    }
                },
                {
                    props: { color: 'blue' },
                    style: {
                        color: colors.text.additional
                    }
                },
            ]
        }
    },
});
export default theme;
//# sourceMappingURL=theme.js.map