import React, { Component } from 'react';
import { Header, Segment, Form, Button, Divider } from 'semantic-ui-react';
import { addBook } from '../actions/books';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import createbook_image from '../images/CreateBook.png';

const genreOptions = [
  { key: '1', value: '1', text: 'Thriller' },
  { key: '2', value: '2', text: 'Suspense' },
  { key: '3', value: '3', text: 'Adventure' },
  { key: '4', value: '4', text: 'Fiction' },
  { key: '5', value: '5', text: 'Erotic' },

]


class CreateBook extends Component {
  state = { title: '', author: '', genre: '', price: '', description: '' }

  // handleSubmit = (e) => {
  //   const { history, dispatch } = this.props
  //   const { title, author, genre, price, description } = this.state
  //   e.preventDefault();
  //   let book = { title, author, genre, price, description }
  //   dispatch(addBook(book, history))
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
  render() {
    const { title, description, author, price, genre } = this.state
    return(
      <div style={ styles.backgroundImage }>
      <Segment basic>
        <Header as='h1' textAlign='center' style={styles.headerText}>Create a Book</Header>
        <Segment style={styles.form}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input 
                fluid
                name='title'
                placeholder='Title' 
                label='Title' 
                value={title} 
                autoFocus={true}
                required
                onChange={this.handleChange} />
              <Form.Input
                fluid
                name='author'
                placeholder='Author'
                label='Author'
                value={author}
                autoFocus={true}
                required
                onChange={this.handleChange} />
              <Form.Input
                fluid
                name='price'
                placeholder='Price'
                label='Price'
                value={price}
                autoFocus={true}
                required
                width={3}
                onChange={this.handleChange} />
              <Form.Select
                fluid
                label='Genre' 
                options={ genreOptions } 
                placeholder='Genre' 
                required 
                width={2} />
            </Form.Group>
              <Form.TextArea 
                name='description'
                value={description}
                style={ styles.textArea }
                label='Description'
                placeholder='Description'
                required
                onChange={this.handleChange} />
              <Divider />
            
            <Form.Group>
            
              <Button color='green' type='submit'>Create</Button>              
              <Link to={'./lectures'}>
                <Button onClick={this.props.history.goBack}>Cancel</Button> 
              </Link>
           
            </Form.Group>
           
          </Form>
        </Segment>
      </Segment>
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
  },
  form: {
    paddingTop: '2%',
    backgroundColor: 'rgba(0, 0, 0, .60)',
  },
  textArea: {
    minHeight: '150px',
  },
}

export default connect()(CreateBook);
