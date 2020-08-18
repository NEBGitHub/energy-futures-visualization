import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from 'history';
import queryString from 'query-string';

import { DEFAULT_CONFIG, REGION_ORDER, SOURCE_ORDER } from '../../types';
import { ConfigContext } from '../../utilities/configContext';

import Landing from '../../pages/Landing';
import ByRegion from '../../pages/ByRegion';
import BySector from '../../pages/BySector';
import Scenarios from '../../pages/Scenarios';
import Electricity from '../../pages/Electricity';
import Demand from '../../pages/Demand';
import PageLayout from '../../components/PageLayout';

const history = createBrowserHistory();

/**
 * Customize the look-and-feel of UI components here.
 */
const defaultTheme = createMuiTheme({
  palette: {
    primary: { main: '#4A93C7' },
    secondary: {
      main: '#5D5D5D',
      light: '#83868E',
    },
  },
});
const theme = createMuiTheme({
  palette: {
    primary: { main: defaultTheme.palette.primary.main },
    secondary: {
      main: defaultTheme.palette.secondary.main,
      light: defaultTheme.palette.secondary.light,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: { fontSize: '16px !important' }, // reset font-size that has been overwritten by the WET template
      },
    },
    MuiTypography: {
      h5: { fontSize: '22px' },
      h6: {
        fontSize: '20px',
        fontWeight: 700,
        textTransform: 'uppercase',
      },
      body1: { fontSize: '14px' },
    },
    MuiButton: {
      root: {
        height: 23,
        minWidth: 73,
        padding: `${defaultTheme.spacing(0, 0.5)} !important`,
        borderRadius: 0,
      },
      containedPrimary: {
        fontWeight: 700,
        color: defaultTheme.palette.common.white,
        backgroundColor: defaultTheme.palette.primary.main,
        border: `1px solid ${defaultTheme.palette.primary.main}`,
        boxShadow: defaultTheme.shadows[0],
        '&:hover': {
          border: '1px solid #33668b',
        },
      },
      outlinedPrimary: {
        fontWeight: 500,
        color: defaultTheme.palette.secondary.light,
        backgroundColor: defaultTheme.palette.common.white,
        border: `1px solid ${defaultTheme.palette.secondary.light}`,
        boxShadow: defaultTheme.shadows[0],
        '&:hover': {
          color: defaultTheme.palette.secondary.main,
          border: `1px solid ${defaultTheme.palette.secondary.main}`,
          boxShadow: defaultTheme.shadows[2],
        },
      },
    },
  },
});

export default () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  /**
   * URL parachuting.
   */
  useEffect(() => {
    const query = queryString.parse(history.location.search);
    setConfig({
      ...DEFAULT_CONFIG,
      ...query,
      provinces: query.provinces ? query.provinces.split(',') : REGION_ORDER,
      provinceOrder: query.provinceOrder ? query.provinceOrder.split(',') : REGION_ORDER,
      sources: query.sources ? query.sources.split(',') : SOURCE_ORDER,
      sourceOrder: query.sourceOrder ? query.sourceOrder.split(',') : SOURCE_ORDER,
    });
  }, []);

  /**
   * Update the URL if the control setting is modified.
   */
  useEffect(() => {
    history.replace({
      pathname: '/energy-future/',
      search: `?\
page=${config.page}&\
mainSelection=${config.mainSelection}&\
unit=${config.unit}&\
view=${config.view}&\
sector=${config.sector}&\
year=${config.year || '2019'}&\
scenario=${config.scenario}&\
provinces=${config.provinces.join(',')}&\
provinceOrder=${config.provinceOrder.join(',')}&\
sources=${config.sources.join(',')}&\
sourceOrder=${config.sourceOrder.join(',')}\
      `,
    });
  }, [config]);

  return (
    <ThemeProvider theme={theme}>
      <ConfigContext.Provider value={{ config, setConfig }}>
        <CssBaseline />

        {config.page === 'landing' ? <Landing /> : (
          <PageLayout
            showRegion
            disableDraggableRegion={['by-sector', 'electricity', 'scenarios', 'demand'].includes(config.page)}
            singleSelectRegion={['by-sector', 'electricity', 'scenarios', 'demand'].includes(config.page)}
            showSource={['by-sector', 'electricity'].includes(config.page)}
            disableDraggableSource={['electricity'].includes(config.page)}
          >
            {config.page === 'by-region' && <ByRegion />}
            {config.page === 'by-sector' && <BySector />}
            {config.page === 'electricity' && <Electricity />}
            {config.page === 'scenarios' && <Scenarios />}
            {config.page === 'demand' && <Demand />}
          </PageLayout>
        )}
      </ConfigContext.Provider>
    </ThemeProvider>
  );
};
