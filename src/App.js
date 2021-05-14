import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { ThemeContext } from './contexts/ThemeContext'

class App extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, darkTheme, lightTheme } = context;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                    <div className="App" >
                        <div className="ui raised very padded text container segment" style={{ background: theme.globalBackground }}>
                            <Navbar />
                            <TodoList />
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default App;