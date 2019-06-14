// Context.js
import React from "react"

const defaultContextValue = {
  headerLeftTheme: 'dark',
  headerRightTheme: 'light',
  setHeaderLeftTheme: () => {},
  setHeaderRightTheme: () => {},
}

const LayoutContext = React.createContext(defaultContextValue)

class LayoutContextProvider extends React.Component {
  constructor() {
    super();

    this.setHeaderLeftTheme = this.setHeaderLeftTheme.bind(this);
    this.setHeaderRightTheme = this.setHeaderRightTheme.bind(this);

    this.state = {
      ...defaultContextValue,
      setHeaderLeftTheme: this.setHeaderLeftTheme,
      setHeaderRightTheme: this.setHeaderRightTheme
    };
  }

  setHeaderLeftTheme(theme) {
    if(theme !== this.state.headerLeftTheme){
      setTimeout(() => {
        this.setState({
          headerLeftTheme: theme
        });
      });
    }
  }

  setHeaderRightTheme(theme) {
    if(theme !== this.state.headerRightTheme){
      setTimeout(() => {
        this.setState({
          headerRightTheme: theme
        });
      });
    }
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        {this.props.children}
      </LayoutContext.Provider>
    )
  }
}

export { LayoutContext as default, LayoutContextProvider}