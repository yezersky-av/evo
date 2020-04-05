import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from 'components/pages/NotFoundPage';

import ErrorPage from './ErrorPage';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error });

        // TODO Sentry
    }

    render() {
        if (this.state.error) {
            return <ErrorPage />;
        }

        return (
            <Switch>
                {this.props.routes
                    .map(({ available = true, ...route }, i) => (
                        available
                            ? <Route key={i} {...route} />
                            : null
                    ))}

                {this.props.children}

                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}

export const RouteShape = PropTypes.shape({
    available: PropTypes.boolean,
    path: PropTypes.string.isRequired,
    exact: PropTypes.boolean,

    render: PropTypes.func,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
});

Section.propTypes = {
    routes: PropTypes.arrayOf(RouteShape),
};

Section.defaultProps = {
    routes: [],
};

export default Section;
