import React, { Component } from 'react';
import CookiesContext from './Context';
import ClientManager from './ClientManager';

export default class CookiesProvider extends Component {
    static defaultProps = {
        manager: new ClientManager()
    };

    render() {
        const { manager, children } = this.props;

        return (
            <CookiesContext.Provider value={manager}>
                {children}
            </CookiesContext.Provider>
        );
    }
}
