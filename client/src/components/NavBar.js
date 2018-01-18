import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary style={styles.header}>
          <Link to='/'>
            <Menu.Item name='Home' />
          </Link>
          <Link to='/books'>
            <Menu.Item name='Books' />
          </Link>
          <Link to='/storeandhours'>
            <Menu.Item name='Store Info' />
          </Link>
          <Link to='/contact'>
            <Menu.Item name='Contact' />
          </Link>
          <Link to='/cart'>
            <Menu.Item name='Shopping Cart' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: 'rgba(0, 0, 0, .20)',
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
