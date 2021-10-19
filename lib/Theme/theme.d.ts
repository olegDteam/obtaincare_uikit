export declare const colors: {
    primary: {
        main: string;
        hover: string;
        active: string;
    };
    secondary: {
        main: string;
        hover: string;
        active: string;
    };
    additional: {
        main: string;
        hover: string;
        active: string;
    };
    link: {
        main: string;
        hover: string;
        active: string;
        bgColor: string;
    };
    danger: {
        red: string;
        pink: string;
        lightPink: string;
    };
    text: {
        default: string;
        main: string;
        additional: string;
        grey: string;
        blue: string;
        green: string;
    };
    common: {
        white: string;
        lightGray: string;
        sweetBlue: string;
    };
    border: {
        primary: string;
        secondary: string;
        additional: string;
        danger: string;
        pagination: string;
    };
    red: string;
    lightGray: string;
    black: string;
    blackShadow: string;
    blackLight: string;
    blueSidebarHover: string;
    light: string;
    orange: string;
    lightOrange: string;
    pink: string;
    lightPink: string;
    sweetBlue: string;
    sweetBlueDisabled: string;
    darkGreen: string;
    white: string;
    darkGray: string;
    darkGrayText: string;
    backgroundBlue: string;
    lightBlue: string;
    lightBlueCircle: string;
    blueChangeButton: string;
    blueHeaderProvider: string;
    blueBorder: string;
    profileMenuShadow: string;
    improveItemBlue: string;
    grayLine: string;
    textGray: string;
    textDateGray: string;
    backgroundGray: string;
    paginationBorder: string;
    paginationPrevNextBG: string;
    textLight: string;
    lightGreenText: string;
    darkGreenText: string;
    lightGrayText: string;
    lightRed: string;
    textFieldLabelBlue: string;
};
declare const theme: import("@mui/material/styles").Theme;
export default theme;
declare module '@mui/material/Typography/Typography' {
    interface TypographyPropsVariantOverrides {
        p1Text: true;
        p1: true;
        p2: true;
        p3Text: true;
        p3: true;
        menuTab: true;
        label: true;
        tooltip: true;
        newsText: true;
        semiBold: true;
    }
}
declare module '@mui/material/Button/Button' {
    interface ButtonPropsVariantOverrides {
        custom: true;
        icon: true;
        height: true;
    }
    interface ButtonPropsColorOverrides {
        additional: true;
        link: true;
        danger: true;
        userSidebar: true;
        providerSidebar: true;
        headerLocation: true;
        providerAdditional: true;
        changeButton: true;
    }
    interface ButtonPropsSizeOverrides {
        s: true;
        m: true;
        l: true;
        link: true;
    }
}
declare module '@mui/material/TextField/TextField' {
    interface TextFieldPropsColorOverrides {
        onModeration: true;
    }
}
declare module '@mui/material/Avatar/Avatar' {
    interface AvatarPropsVariantOverrides {
        userSidebar: true;
        providerSidebar: true;
        desktopHeader: true;
    }
}
declare module '@mui/material/SvgIcon/SvgIcon' {
    interface SvgIconPropsSizeOverrides {
        hospital: true;
        sidebar: true;
        userSidebar: true;
        cross: true;
        xm: true;
        xl: true;
        xs: true;
        size22px: true;
    }
    interface SvgIconPropsColorOverrides {
        lightGray: true;
        blue: true;
    }
}
declare module "@mui/material/Radio/Radio" {
    interface RadioPropsSizeOverrides {
        large: true;
    }
}
declare module "@mui/material/styles/createPalette" {
    interface Palette {
        additional: Palette['primary'];
    }
    interface PaletteOptions {
        additional: PaletteOptions['primary'];
    }
}
//# sourceMappingURL=theme.d.ts.map