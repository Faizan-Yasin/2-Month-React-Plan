import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from './CardHeader'

const Card = (props) => {
    return (
        <div>
            <CardHeader icon={props.icon} title={props.title} action={props.action} />
            {props.subtitle && <h4>{props.subtitle}</h4>}
            <div>{props.children}</div>
            <div>{props.footer}</div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    footer: PropTypes.node,
    children: PropTypes.node,
    icon: PropTypes.node,
    action: PropTypes.node
}

Card.defaultProps = {
    subtitle: ""
}

export default Card
