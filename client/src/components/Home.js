import React, { Component } from 'react';
import home_image from '../images/HomePic.png';
import { Header, Segment, Grid } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Segment style={styles.backgroundImage}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header
                textAlign='center'
                style={styles.headerText}
              >
              Our books are your world
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  backgroundImage: {
    background: `linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .55) ), url(${home_image})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    margin: '0',
    padding: '0',
  },
    headerText: {
    color: '#fffdef',
    fontFamily: 'helvetica',
    fontSize: '7em',
    letterSpacing: '5px',
    marginTop: '20%',
  },
}

export default Home;
