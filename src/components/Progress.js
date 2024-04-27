import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress, Box, Typography } from "@mui/material";

Progress.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default function Progress(props) {
    const [progress, setProgress] = React.useState(20);


    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
        </Box>
    );
}

