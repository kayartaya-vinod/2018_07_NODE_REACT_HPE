import React, { Component } from 'react';

import { Header, Title, Anchor, Menu } from 'grommet';

// import Header from 'grommet/components/Header';
// import Title from 'grommet/components/Title';
// import Menu from 'grommet/components/Menu';
// import Anchor from 'grommet/components/Anchor';
import BookIcon from 'grommet/components/icons/base/Book';

class AppHeader extends Component {
    render() {
        return (
            <Header fixed={true} primary={true} colorIndex="light-1">
                <BookIcon size="medium" />
                <Title>Phonebook Grommet App</Title>
                <Menu responsive={true}>
                    <Anchor href='#'
                        onClick={() => this.props.showHideContactForm(true)}
                        className='active'>
                        New Contact</Anchor>
                </Menu>

            </Header>
        );
    }
}

export default AppHeader;