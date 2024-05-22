import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import './Sidebar.css';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
 const navigate = useNavigate();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const HandlerPatientList = ()=>{
   navigate('/PatientList')
  }
  const HandlerSinglePatient =()=>{
    navigate('/SinglePatientView')
  }
  const HandlerOptionalList =()=>{
    navigate("/PatientListOptional")
  }

  const HandlerGenderIdentity = ()=>{
    navigate("/GenderIdentityList")
  }
  const HandlerPatientSearch =()=>{
    navigate("/SearchTypes")
  }
  const HandlerSubscription =()=>{
    navigate("/Events")
  }
  const HandleChartAlert =()=>{
    navigate("/ChartAlert")
  }
  const HandleAvailableBed=()=>{
    navigate('/AvailableBed')
  }

  const handleCreateOrg=()=>{
    navigate('/org')
  }

  const drawer = (
    <div>
       <Toolbar />
      <Divider />
      <List className='list'>
     
       <Button onClick={HandlerPatientList}>Patient List</Button>
       <Button onClick={HandlerSinglePatient}>Single Patient List</Button>
       <Button onClick={HandlerOptionalList}>PatientList-Optional</Button>
       <Button onClick={HandlerPatientSearch}>SearchType</Button>
       <Button onClick={HandlerGenderIdentity}>GenderIdentity</Button>
      

      </List>
      <Divider />
      <List>
      <Button onClick={HandleChartAlert}>Chart Alert</Button><br/>
      <Button onClick={HandleAvailableBed}>Available Beds</Button><br/>
      </List>
      <Divider/>
      <List>
        <Button onClick={handleCreateOrg}>New Organization</Button>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleBackButton=()=>{
    navigate('/')
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='toolbar'>
         <h1>Athena-Health</h1>
         
         <div className='button'>
            <Button variant="contained" onClick={handleBackButton}>Back</Button>
         </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
      
        </Typography>
      
      </Box>
    </Box>
  );
}
