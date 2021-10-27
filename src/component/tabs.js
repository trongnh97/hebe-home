import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShopNew from './shop/shopNew';
import ShopSell from './shop/shopSell';
import ShopTopRate from './shop/shopTopRate';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="wow fadeInUp" data-wow-delay=".5s" style={{ width: '100%', marginTop: 70 }}
    >
      <Box style={{ borderBottom: 1, borderColor: 'divider',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                  }}>
        <Tabs value={value} onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
        >
          <Tab label="New Arrivals" {...a11yProps(0)} />
          <Tab label="Bets Seller" {...a11yProps(1)} />
          <Tab label="Top Rate" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className="wow fadeInUp" value={value} index={0}>
        <ShopNew></ShopNew>
      </TabPanel>
      <TabPanel className="wow fadeInUp" value={value} index={1}>
        <ShopSell></ShopSell>
      </TabPanel>
      <TabPanel className="wow fadeInUp" value={value} index={2}>
        <ShopTopRate></ShopTopRate>
      </TabPanel>
    </Box>
  );
}
