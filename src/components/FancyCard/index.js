import React from 'react';
import styled from 'styled-components';


class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">News</h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    const { title, text, date } = this.props;
    return (
      <div className="card-body py-3">
        <p className="date">{date}</p>
        
        <h2>{title}</h2>
        
        <p className="body-content">{text}</p>
        
        <Button />
      </div>
    )
  }
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 30%;
  margin: auto;
`

class Card extends React.Component {
  render() {
    const { image, title, text, date } = this.props;
    return (
      <CardWrapper className="card m-3">
        <CardHeader image={image}/>
        <CardBody title={title} text={text} date={date}/>
      </CardWrapper>
    )
  }
}

export { CardHeader, Button, CardBody, Card };