import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export default class Dropdown extends React.Component {
    static propTypes = {
        header: PropTypes.any.isRequired,
    }

    state = { isOpen: false }

    toggleDropdown = (e) => {
        if(this.state.isOpen === false) {
            this.setState({
                isOpen: true,
            })
        } else {
            this.setState({
                isOpen: false,
            })
        }
    }

    render() {
        const { header, children } = this.props;

        return (
            <div className="Dropdown">
                <div className="Dropdown__header" onClick={this.toggleDropdown}>{header}</div>
                {this.state.isOpen && <div className="Dropdown__content">{children}</div>}
            </div>
        )
    }
}