import React from 'react';
import PropTypes from 'prop-types';

export default class Orchid extends React.Component {
    static propTypes = {
        borderColor: PropTypes.string
    }

    render() {
        const {borderColor} = this.props;

        return (
            <div className="Orchid">
                <img
                    className="Orchid__image"
                    src={'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg'}
                    alt={'Orchid'}
                    style={
                        {
                            width: '25%',
                            border: `2px solid ${borderColor}`
                        }
                    }
                />
            </div>
        )
    }

}


// Here's a URL to get you started
//const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';
