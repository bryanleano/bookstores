import React, { Component } from 'react';

const Footer = () => (
  <div class="ui inverted vertical footer segment" style={styles.footer}>
  <div class="ui center aligned container">
      <h4 class="ui header">&copy; Copyright 2018 | All rights reserved | BryGuy Studios</h4>
      <a href="https://www.facebook.com/" target="_blank"><i class="facebook square icon big"></i></a>
      <a href="https://twitter.com/" target="_blank"><i class="twitter square icon big"></i></a>
      <a href="https://instagram.com/" target="_blank"><i class="instagram square icon big"></i></a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><i class="youtube square icon big"></i></a>
      <a href="https://www.linkedin.com/in/bryan-leano" target="_blank"><i class="linkedin square icon big"></i></a>
  </div>
  </div>
)

const styles = {
  footer: {
    backgroundColor: '#a9a9a9',
    bottom: '0px',
    left: '0px',
    right: '0px',
    position: 'relative'
  }
}

export default Footer;