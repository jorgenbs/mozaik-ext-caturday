import React, { Component, PropTypes } from 'react';
import Mozaik from 'mozaik/browser';


class Caturday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      v: 0,
      refresh: null
    };
  }

  getInitialState() {
    return {
      v: 0,
      refresh: null
    }
  }

  componentDidMount() {
    const inteval = (this.props.intervalSeconds || 5) * 1000;
    const refresh = setInterval(() => {
      this.setState({v: Math.random()})
    }, inteval);
  }

  render() {
    const { title } = this.props;

    return (
      <div className="widget-markup__container">
        <div className="widget__header">
          {title ||' Caturday'}
        </div>
        <div className="widget-markup__body">
          <img src={`http://thecatapi.com/api/images/get?format=src&type=gif&v=${this.state.v}`} className='widget-markup__img'/>
        </div>
      </div>
    );
  }
}

Caturday.propTypes = {
  intervalSeconds: PropTypes.number
};

export default Caturday;
