'use strict';

/* REACT */
var React = require('react');
var ReactDOMServer = require('react-dom/server');

/*Components*/
var ImageILO = React.createElement('img', { src: 'images/ilo.png', className: 'img-responsive' });
var ImageACTEMP = React.createElement('img', { src: 'images/actemp.png', className: 'img-responsive pull-right css-index-footer-right' });
var DivLeft6 = React.createElement(
  'div',
  { className: 'col-lg-6 text-left' },
  React.createElement(ImageILO, null)
);
var DivRight6 = React.createElement(
  'div',
  { className: 'col-lg-6 text-right' },
  React.createElement(ImageACTEMP, null)
);
var Footer = React.createElement(
  'div',
  { className: 'container css-index-footer' },
  React.createElement(DivLeft6, null),
  React.createElement(DivRight6, null)
);