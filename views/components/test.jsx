/* REACT */
var React = require('react');
var ReactDOMServer = require('react-dom/server');

/*Components*/
var ImageILO = <img src="images/ilo.png" className="img-responsive" />;
var ImageACTEMP = <img src="images/actemp.png" className="img-responsive pull-right css-index-footer-right" />;
var DivLeft6 = <div className="col-lg-6 text-left"><ImageILO /></div>;
var DivRight6 = <div className="col-lg-6 text-right"><ImageACTEMP /></div>;
var Footer = <div className="container css-index-footer"><DivLeft6 /><DivRight6 /></div>