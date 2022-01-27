import Box, { BoxProps } from '@mui/material/Box';
import React, { FunctionComponent } from 'react';
import { useStyles } from './styles';

const DashedFrame: FunctionComponent<BoxProps> = (props) => {
  const {children } = props;
  const classes = useStyles();

  return (
    <Box 
    className={classes.greyContainer}
    {...props}
    >
    <Box     className={classes.whiteContainer}
    display="flex" justifyContent={"center"} alignItems="center"
    height={"100%"}
>
  <Box  >
      {children}
      </Box>
    </Box>
    </Box>
  );
};

export default DashedFrame;
