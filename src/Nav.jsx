import React from 'react';
import { NavLink as A } from 'react-router-dom';
import { Flex, Box } from '@primer/components';

export default function Nav(props) {
    let boxProps = {
        width: 'max-content',
    }
    let flexItemProps = {
        py: '1em',
        px: '1em',
        
    }
    let navLinkProps = {
        className: 'navLink'
    }
    return (
        <nav className='nav'>
            <Flex>
                <Flex.Item {...flexItemProps}>
                    <Box {...boxProps}>
                        <A to='/'>Octicon</A>
                    </Box>
                </Flex.Item>
                <Flex.Item {...flexItemProps}>
                    <Box {...boxProps}>
                        <input type="text" placeholder="Search or jump to..." />
                    </Box>
                </Flex.Item>
                <Flex.Item {...flexItemProps}>
                    <Box {...boxProps}>
                        <A to='/pulls'> Pull Requests</A>
                    </Box>
                </Flex.Item>
                <Flex.Item {...flexItemProps}>
                    <Box {...boxProps}>
                        <A to='/issues'>Issues</A>
                    </Box>
                </Flex.Item>
                <Flex.Item {...flexItemProps}>
                    <Box {...boxProps}>
                        <A to='/marketplace'>Marketplace</A>
                    </Box>
                </Flex.Item>
                <Flex.Item {...flexItemProps}>
                    <Box {...boxProps}>
                        <A {...navLinkProps}to='/explore'>Explore</A>
                    </Box>
                </Flex.Item>
            </Flex>
        </nav>
    )
}