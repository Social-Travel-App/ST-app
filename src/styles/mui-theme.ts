import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const muiTheme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    }
})

export default muiTheme
