import { Theme, useMediaQuery } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import React, { FunctionComponent } from 'react';
import { useStyles } from './styles';

const DashedFrame: FunctionComponent<BoxProps> = (props) => {
  const { children, height, ...rest } = props;
  const classes = useStyles();

  const isTabletOrLessScreen = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down(1024)
);

  return (
    <Box
      className={classes.greyContainer}
      height={isTabletOrLessScreen ? "auto" : height}
      padding={isTabletOrLessScreen? 2: 5}
      {...rest}
    >
      <Box className={classes.whiteContainer}
        display="flex" justifyContent={"center"} alignItems="center"
        height={"100%"}
        padding={4}
      >
        <Box width={"100%"} >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashedFrame;
