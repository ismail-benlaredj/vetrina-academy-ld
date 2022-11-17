import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        fontFamily: {
            primary: string;
            secondary: string;
        };
    }
    interface TypographyVariantsOptions {
        fontFamily?: {
            primary: string;
            secondary: string;
        };
    }
}
function themeTypography(primaryFont: string, secondaryFont: string): TypographyOptions {
    return {
        fontFamily: {
            primary: primaryFont,
            secondary: secondaryFont,
        },
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontWeight: 600,
            fontSize: '2.125rem',
            lineHeight: 1.24,
            fontFamily: primaryFont,
        },
        h2: {
            fontWeight: 500,
            fontSize: '1.375rem',
            lineHeight: 1.29
        },
        h3: {
            fontWeight: 400,
            fontSize: '1.063rem',
            lineHeight: 1.33
        },
        h4: {
            fontWeight: 500,
            fontSize: '0.938rem',
            lineHeight: 1.4
        },
        h5: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.6
        },
        h6: {
            fontWeight: 500,
            fontSize: '0.688rem',
            lineHeight: 1.57
        },

        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            fontFamily: secondaryFont,
            lineHeight: '16px',
        },
        body2: {
            fontSize: '0.75rem',
            lineHeight: 1.66
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: 1.57
        },

        button: {
            textTransform: 'capitalize',
            fontFamily: secondaryFont,
            fontSize: '0.875rem',
        }
    }
}

export default themeTypography;