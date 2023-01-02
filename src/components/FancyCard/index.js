import React from 'react';
import styled from 'styled-components';

class CardHeader extends React.Component {
  render() {
    const { image, title } = this.props;

    return (
      <header style={{backgroundColor:'#888'}} id={image} className="card-header">
        <h4 className="card-header--title">{title}</h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    const { projectLink } = this.props;
    return (
      <div>
      <button 
        className="button button-primary"
        onClick={() => window.open(projectLink, '_blank')}
        >
        <i className="fa fa-chevron-right"></i> Link
      </button>
      </div>
    )
  }
}

const CardBodyImage = styled.img`
height: 50%;
width: 50%;
`

class CardBody extends React.Component {
  render() {
    const { text, date, image, projectLink } = this.props;
    return (
      <div className="card-body py-1 mx-1">
        <p className="date">{date}</p>
        <CardBodyImage src={image} alt={text}></CardBodyImage>
        <p className="body-content">{text}</p>
        
        <Button projectLink={projectLink}/>
      </div>
    )
  }
}

const CardWrapper = styled.article`
  height: 45%;
  width: 30%; 
  overflow: auto;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 5%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
    margin: 5%;
  }
`

class Card extends React.Component {
  render() {
    const { image, title, text, date, projectLink } = this.props;
    return (
      <CardWrapper className="card">
        <CardHeader title={title} image={image}/>
        <CardBody title={title} text={text} date={date} image={image} projectLink={projectLink}/>
      </CardWrapper>
    )
  }
}

export { CardHeader, Button, CardBody, Card };