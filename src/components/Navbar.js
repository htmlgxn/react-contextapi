import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, darkTheme, lightTheme } = context;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                    <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                        <h2 style={{ textAlign: 'center' }}>
                            Oak Academy
                        </h2>
                        <div className="ui three buttons">
                            <button className='ui button' style={{
                                background: theme.globalBackground, 
                                color: theme.text 
                            }}>Overview</button>
                            <button className='ui button' style={{
                                background: theme.globalBackground, 
                                color: theme.text 
                            }}>Contact</button>
                            <button className='ui button' style={{
                                background: theme.globalBackground, 
                                color: theme.text 
                            }}>Support</button>
                        </div>
                    </nav>
                )
            }} 
            </ThemeContext.Consumer>
        )
    }
}

export default Navbar;