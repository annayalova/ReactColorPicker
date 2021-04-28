import React from "react";
import {ColorPicker} from './ColorPicker';

import "./App.css";

class App extends React.Component {
    state = {
        color: '#ffcc33',
    }

    change = color => {
        this.setState({color})
    }

    render() {
        return (
            <ColorPicker value={this.state.color} onChange={this.change}/>
        )
    }
}

export default App