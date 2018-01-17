import React, { Component } from 'react';
import books_image from '../images/BooksPic.png';
import { Header, Segment, Grid } from 'semantic-ui-react';

class Books extends Component {
  render() {
    return (
      <Segment style={styles.backgroundImage}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const styles = {
  backgroundImage: {
    background: `linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .55) ), url(${books_image})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    margin: '0',
    padding: '0',
  }
}

export default Books;