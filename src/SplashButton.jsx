import React from 'react';
import { Link as A } from 'react-router-dom';
import { Button } from '@primer/components';

export default function SplashButton(props) {
    return (
        <A to='/issues'> <Button>Go to Issues</Button> </A> 
    )
}