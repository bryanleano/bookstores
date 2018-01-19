import React, { Component } from 'react';
import books_image from '../images/BooksPic.png';
import { getBooks } from '../actions/books';
import { Header, Segment, Grid, Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Books extends Component {

  componentDidMount() {
    this.props.dispatch(getBooks())
  }

  displayBooks = () => {
    const { books } = this.props
    return books.map( book => {
      return(
        <Grid.Column
          key={book.id}
          computer={4}
          tablet={6}
          phone={16}
        >
          <Card centered raised fluid style={box}>
            <Card.Content>
              <Card.Header>{book.title}</Card.Header>
              <Card.Meta> ${book.price}</Card.Meta>
              <Card.Meta>{book.author}</Card.Meta>
              <Card.Description>{book.genre}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        
      )
    })
  }

  render() {
    const { admin } = this.props.user
    if ( admin === true )
    return (
      <Header as='h1' textAlign='center'>Books</Header>
    );
    else 
    return (
        <div style={styles.backgroundImage}>
        <Header 
          as='h1' 
          textAlign='center'
          style={styles.headerText}>Books</Header>
        <Segment basic textAlign='center'>
          <Link to={`/create`}>
            <Button
              color='blue'
              icon
              labelPosition='left'>
              <Icon name='add' />
              Add book
            </Button>
          </Link>
        </Segment>
        <Segment basic style={styles.bottom}>
          <Grid columns={12} centered >
            <Grid.Row >
              {this.displayBooks()}
            </Grid.Row>
          </Grid>
        </Segment>
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books, user: state.user }
}

const box = {
  margin: '4px',
}


const styles = {
  backgroundImage: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .55) ), url(${books_image})`,
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

export default connect(mapStateToProps)(Books);