import React, { Component } from 'react';
import books_image from '../images/BooksPic.png';
import { getBooks } from '../actions/books';
import { Header, Segment, Grid, Card } from 'semantic-ui-react';
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
          computer={12}
          tablet={6}
          phone={12}
        >
          <Card centered raised fluid style={box} >
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
      <div>
        <Segment basic>
        <Header as='h1' textAlign='center'>Books</Header>
        </Segment>
        <Segment basic>
          <Grid columns={12}>
            <Grid.Row centered>
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
    background: `linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .55) ), url(${books_image})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    margin: '0',
    padding: '0',
  }
}



export default connect(mapStateToProps)(Books);