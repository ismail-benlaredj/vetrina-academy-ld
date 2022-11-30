import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react';



export default function CardMenu() {
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
        <>
            <IconButton
                disableRipple
                onClick={handleClick}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography sx={{ marginRight: "11px" }}>
                    {selected}
                </Typography>
                <FiChevronDown style={{ width: "16px", height: "16px" }} />
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
                    Today
                </MenuItem>
                <MenuItem
                    onClick={() => handleSelect('This Week')}
                    sx={{ color: selected === 'This Week' ? 'primary.main' : 'inherit' }}
                >
                    This Week
                </MenuItem>
                <MenuItem onClick={() => handleSelect('This Month')}
                    sx={{ color: selected === 'This Month' ? 'primary.main' : 'inherit' }}
                >
                    This Month
                </MenuItem>

            </Menu>




        </>
    )
}
