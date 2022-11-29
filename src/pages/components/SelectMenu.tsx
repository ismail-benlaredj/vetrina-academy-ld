import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { FiChevronDown } from 'react-icons/fi'
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';


export default function SelectMenu() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState('Today')
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (value: string) => {
        setSelected(value)
        setAnchorEl(null);
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid #E5E5E5',
                borderRadius: '5px',
                height: '50px',
                maxWidth: '215px',
                boxSizing: 'border-box',
            }}
        >
            <IconButton
                disableRipple
                onClick={handleClick}
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: theme.spacing(2),
                }}
            >
                <Typography sx={{ marginRight: "14px", color: theme.palette.text.secondary }}>
                    {selected}
                </Typography>
                <FiChevronDown style={{ width: "20px", height: "20px", color: theme.palette.text.secondary }} />
            </IconButton>
            <Menu
                id="menu-card"
                anchorEl={anchorEl}
                keepMounted
                elevation={0}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                variant="selectedMenu"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem
                    onClick={() => handleSelect('Today')}
                    sx={{ color: selected === 'Today' ? 'primary.main' : 'inherit' }}
                >
                    Fenoh store
                </MenuItem>
            </Menu>




        </Box>
    )
}
