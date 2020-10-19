import React, { useMemo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { makeStyles, Grid, Typography, Button, Tooltip } from '@material-ui/core';
import markdown from 'micro-down';

import useAPI from '../../hooks/useAPI';
import useConfig from '../../hooks/useConfig';
import { HintYearSelect } from '../Hint';

const useStyles = makeStyles({
  button: {
    height: 43,
    width: 43,
    '& h5': { fontWeight: 700 },
  },
});

const YearSelect = () => {
  const classes = useStyles();
  const intl = useIntl();

  const { yearIdIterations } = useAPI();
  const { config, setConfig } = useConfig();

  const yearIds = useMemo(
    () => Object.keys(yearIdIterations).sort().reverse(),
    [yearIdIterations],
  );

  const tooltip = useCallback(yearId => markdown.parse(intl.formatMessage({ id: `components.yearSelect.${yearId}.description` })), [intl]);

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <HintYearSelect>
          <Typography variant="h6" color="primary">{intl.formatMessage({ id: 'components.yearSelect.name' })}</Typography>
        </HintYearSelect>
      </Grid>

      {yearIds.map(yearId => (
        <Grid item key={`year-select-option-${yearId}`}>
          <Tooltip title={<Typography variant="caption" color="secondary" dangerouslySetInnerHTML={{ __html: tooltip(yearId) }} />}>
            <Button
              variant="contained"
              color={config.yearId === yearId ? 'primary' : 'secondary'}
              size="small"
              onClick={() => setConfig({ ...config, yearId })}
              className={classes.button}
            >
              {config.yearId === yearId ? (<Typography variant="h5">{yearId}</Typography>) : yearId}
            </Button>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default YearSelect;
