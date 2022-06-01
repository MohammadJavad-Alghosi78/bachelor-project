import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Container>
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default Layout;