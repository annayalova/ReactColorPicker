import React from "react";
import reactCSS from 'reactcss';
import ReactDOM from "react-dom";
import {Palette} from './Palette';
import {SliderRGB} from './SliderRGB';

const red = "#df212d";
const yellow = "#ffcc33";
const green = "#17a458";
const blue = "#1caee9";
const rgbHex = require('rgb-hex');

export class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: yellow,
            red: 255,
            green: 204,
            blue: 51,
            isRGBOpen: false,
            isPaletteOpen: false,

        };
    }

    changeColor= selection => {
        this.setState({ ...selection,  isPaletteOpen: !this.state.isPaletteOpen });
    }

    update() {
        const myRGB = `${this.state.red} , ${this.state.green} , ${this.state.blue}`
        const rgbhex = rgbHex(myRGB)

        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,

            value: `#${rgbhex}`
        });
    }

    cancelRGB() {
        this.setState({
            isRGBOpen: !this.state.isRGBOpen,
            value: yellow
        });
    }

    openRGB(){
        this.setState({isRGBOpen: !this.state.isRGBOpen})
    }
    closeRGBbtn(){
        this.setState({
            isRGBOpen: !this.state.isRGBOpen,
        })
    }
    openPalette (){
        this.setState({isPaletteOpen: !this.state.isPaletteOpen})
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);

        if ((!domNode || !domNode.contains(event.target))) {
            this.setState({
                isRGBOpen : false,
                isPaletteOpen : false
            });
        }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside.bind(this));
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    render() {

        const styles = reactCSS({
            'default': {
                wrap: {
                    position: 'relative',
                },
                holder: {
                    border: '1px solid #ccc',
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: 'white',
                },
                info: {
                    padding: '15px',
                    color: '#97989a',
                    textTransform: 'uppercase',
                    flexGrow: '1',
                },
                btn: {
                    padding: '15px',
                    height: '20px',
                    cursor: 'pointer',
                    borderLeft: '1px solid #f2f2f2',
                },
                rgb: {
                    width: '20px',
                    height: '20px',
                    background: `${this.state.value}`,
                    display: 'inline-block',
                },
                color: {
                    width: '0',
                    height: '0',
                    borderStyle: 'solid',
                    borderWidth: ' 10px 10px 0 10px',
                    borderColor: '#97989a transparent transparent transparent',
                    cursor: 'pointer',
                    display: 'inline-block',
                    marginTop: '6px',
                },
                list: {
                    margin: '0',
                    padding: '0',
                    listStyle: 'none',
                    width: '150px',
                    position: 'absolute',
                    right: '0',
                    top: '75px',
                    background: 'white',
                },
                panel: {
                    padding: '15px',
                    width: '250px',
                    position: 'absolute',
                    right: '0',
                    top: '75px',
                    background: 'white',
                },
                btnHolder: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
                button1: {
                    background: 'd1d2d4',
                    border: '1px solid #c3c3c3',
                    color: '#999a9c',
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    padding: '5px 10px',
                },
                button2: {
                    background: '#6aa458',
                    border: '1px solid #c3c3c3',
                    color: '#fff',
                    textTransform: 'uppercase',
                    marginLeft: '5px',
                    fontSize: '12px',
                    padding: '5px 10px',
                }
            }
        });

        return (
            <div>
                <h2>&lt;ColorPicker /&gt;</h2>
                <div style={styles.wrap}>
                    <div style={styles.holder}>
                        <div style={styles.info}>{this.state.value}</div>
                        <div style={styles.btn} onMouseDown={this.openRGB.bind(this)}>
                            <span style={styles.rgb}></span>
                        </div>
                        <div style={styles.btn} onMouseDown={this.openPalette.bind(this)}>
                            <span style={styles.color}></span>
                        </div>
                        {this.state.isRGBOpen ?
                            <div style={styles.panel} className="panel">
                                <div>
                                    <SliderRGB className="rangeRed" ref="red" min="0" max="255" col="R" val={this.state.red} onChange={this.update} update={() => this.update()}>{this.state.red}</SliderRGB>
                                    <SliderRGB className="rangeGreen" ref="green" min="0" max="255" col="G" val={this.state.green} onChange={this.update} update={() => this.update()}>{this.state.green}</SliderRGB>
                                    <SliderRGB className="rangeBlue" ref="blue" min="0" max="255" col="B" val={this.state.blue} onChange={this.update} update={() => this.update()}>{this.state.blue}</SliderRGB>
                                    <div style={styles.btnHolder}>
                                        <button style={styles.button1} onClick={this.cancelRGB.bind(this)}>Cancel</button>
                                        <button style={styles.button2} onMouseDown={this.closeRGBbtn.bind(this)}>Ok</button>
                                    </div>
                                </div>
                            </div>
                         : null}
                        {this.state.isPaletteOpen ?
                            <ul style={styles.list} className="list">
                                <Palette color='Red' value={red} onSelect={this.changeColor} />
                                <Palette color='Yellow' value={yellow} onSelect={this.changeColor} />
                                <Palette color='Green' value={green} onSelect={this.changeColor} />
                                <Palette color='Blue' value={blue} onSelect={this.changeColor} />
                            </ul>
                        : null}
                    </div>
                </div>
            </div>
        );
    }
}