import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import createbook_image from '../images/CreateBook.png';

class CreateBook extends Component {
  render() {
    return(
      <div style={styles.backgroundImage}>
        <Header as='h1' textAlign='center'>Create Book Component</Header>
      </div>
    )
  }
}

const styles = {
  backgroundImage: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .55) ), url(${createbook_image})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh',
    padding: '0',
    position: 'relative',
  },
  headerText: {
    color: '#fffdef',
    fontFamily: 'helvetica',
    fontSize: '5em',
    letterSpacing: '5px',
    marginTop: '4px',
  },
  bottom: {
    marginBottom: '85px',
  }
}

export default CreateBook;
