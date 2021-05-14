import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1',
            globalBackground: '#c7ccdd'
        },
        darkTheme: {
            text: '#eee',
            background: '#5c5c5c',
            globalBackground: '#4f4f4f'
        }
    }

    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme });
    }

    render() {
        return(
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;