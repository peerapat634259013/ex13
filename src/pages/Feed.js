import React, {useEffect, useState} from 'react';
import {Box, Stack, Typograpy} from '@mui/material';
import { SideBar } from '../components';

const Feed = () => {
    const Feed = (selectedCatagory, selectedCatagory) = useState ("New")
  return (
    <Stack sx={{flexDirection:{ sx: "coloumn", md: "row"}}}>
        <Box sx={{height:{sx:"auto", md:"92vh"},
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2}
    }}>
    </Box>
        <Box>Video</Box>
    </Stack>
  )
}

export default Feed
