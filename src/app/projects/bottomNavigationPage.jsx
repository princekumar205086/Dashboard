import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HorizontalLinearStepper from "./horizontalLinearStepper";
import TransferListPage from "./transferListPage";
import TimelinePage from "./timelinePage";


export default function BottomNavigationPage() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    const changePage = (newValue) => {
        console.log('Value ', newValue);
        setValue(newValue);
    }

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            {value === 0 && (
                <TransferListPage />
            )}
            {value === 1 && (
                <HorizontalLinearStepper />
            )}
            {value === 2 && (
                <TimelinePage />
            )}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        changePage(newValue);
                    }}
                >
                    <BottomNavigationAction label="List Transfer" icon={<ChecklistIcon />} />
                    <BottomNavigationAction label="Stepper" icon={<Diversity3Icon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}