import React from 'react';
import reactCSS from 'reactcss';

export class Palette extends React.Component {
    change = () => {
        this.props.onSelect({
            color: this.props.color,
            value: this.props.value
        })
    }
    render() {
        const styles = reactCSS({
            'default': {
                color: {
                    width: '20px',
                    height: '20px',
                    background: `${this.props.value}`,
                    display: 'inline-block',
                },
                items: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#97989a',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: '10px 15px',
                    borderBottom: '1px solid #f2f2f2',
                }
            }
        });

        return (
            <li style={styles.items} color={this.props.color} value={this.props.value} onClick={this.change}>{this.props.color} <span style={styles.color}></span></li>
        );
    }
}