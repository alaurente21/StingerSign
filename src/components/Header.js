import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const Header = () =>  {
    return (<Box display="flex" direction="row" paddingY={2} color={'white'}>
    <Column span={10}>
      <Box padding={3}>
        <Heading size="lg" color="004e38">StingerSign</Heading>
      </Box>
    </Column>
    </Box>);
}

export default Header;