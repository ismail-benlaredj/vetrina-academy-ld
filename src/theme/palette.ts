function themePalette(mode: any) {
    return {
        mode,
        primary: {
            light: "#E9F8FE",
            main: "#21B8F9",
            contrastText: "#fff",
        },
        secondary: {
            main: "#000032",
        },
        error: {
            main: "#F33451",
        },
        warning: {
            main: "#FFA26B",
        },
        success: {
            main: "#00C48C",
        },
        text: {
            primary: "#103B66",
            secondary: "#233B53",
            disabled: "#6C7C8C",
        },
        divider: "rgba(10, 37, 64, 0.32)",
        background: {
            paper: "#F8F9FB",
        }
        // add actions 
    }
}

export default themePalette;