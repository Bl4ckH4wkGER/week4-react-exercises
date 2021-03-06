// You're on your own
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default class InfoCard extends React.Component {
    render() {
        return (
            <div className="InfoCard">
                <FontAwesomeIcon className="InfoCard__icon" icon={faInfoCircle} />
                <span>{this.props.children}</span>
            </div>
        )
    }
}

