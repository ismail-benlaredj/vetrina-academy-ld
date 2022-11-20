
import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Collapse, List } from '@mui/material';
import { MdOutlineExpandLess } from 'react-icons/md';
import { MdOutlineExpandMore } from 'react-icons/md';
import NavItem from '../nav-item';

interface GroupNavItemProps {
    groupItem: any,
    open: boolean,
}
const NavCollapse = ({ groupItem, open }: GroupNavItemProps) => {
    const theme = useTheme();
    const [collapse, setCollapse] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleCollapse = () => {
        setCollapse(!collapse);
        setSelected(!selected ? groupItem.id : null);
    };


    const subItem = groupItem.children.map((item: any) => (
        <NavItem key={item.id} item={item} open={true} />
    ));

    return (
        <>

            <NavItem item={groupItem} open={open} handleCollapse={handleCollapse}>
                {open ? (
                    <MdOutlineExpandMore style={{ marginTop: 'auto', marginBottom: 'auto', width: '20px', height: ' 20px' }} />
                ) : (
                    <MdOutlineExpandLess style={{ marginTop: 'auto', marginBottom: 'auto', width: '20px', height: ' 20px' }} />
                )}
            </NavItem>
            <Collapse in={collapse} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        background: theme.palette.primary.light
                    }}
                >
                    {subItem}
                </List>
            </Collapse>
        </>
    );
};

export default NavCollapse;
