import React from 'react';
import reactCSS from 'reactcss';

export class SliderRGB extends React.Component {

    render() {
        const styles = reactCSS({
            'default': {
                row: {
                    color: '#97989a',
                    padding: '10px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                slider: {
                  flexGrow: '1',
                  marginLeft: '10px',
                }
            }
        });

        return (
            <div style={styles.row}>
                <span>{this.props.col}</span>
                <input style={styles.slider} ref="input"
                       value={this.props.val}
                       type="range"
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       onChange={this.props.update}
                       className={this.props.className}
                />
            </div>

        );
    }
}