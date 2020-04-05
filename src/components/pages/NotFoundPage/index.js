import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title || 'Страница не найдена';
  }

  render() {
    return (
      <div>
        <div className="page__icon">
          <i className="fa fa-exclamation-triangle" />
        </div>

        <h1 className="page__heading">{this.title}</h1>

        <Link to={'/'}>
          На главную
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
