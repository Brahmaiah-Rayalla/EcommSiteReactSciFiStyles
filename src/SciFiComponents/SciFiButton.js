import React, { Component } from "react";
import { ThemeProvider, createTheme, withStyles, Arwes, Image, Frame, Button } from 'arwes';

const MyColor = withStyles(theme => ({
    root: {
        width: 300,
        height: 120,
        transition: `background-color ${theme.animTime}ms ease-out`,
        backgroundColor: theme.color.primary.base,
    },
}))(props => (
    <div className={props.classes.root} />
));
class SciFiButton extends Component {
    constructor () {
        super(...arguments);
        const color = '#22179a';
        this.state = {theme: this.getTheme(color) };
      
    }
  render() {
    var layer = this.props.layer;
    var styleClass = this.props.styleClass
    var buttonName = this.props.buttonName;
    const {theme } = this.state;
    return (
        <ThemeProvider theme={theme}>
            
                <Button animate layer={{layer}}>
                    <i className={{styleClass}} /> {{buttonName}}
                </Button>
            
      </ThemeProvider>
    );
  }

  getTheme (color) {
    return createTheme({
        color: {
            primary: { base: color }
        }
    });
}
}

export default SciFiButton;
