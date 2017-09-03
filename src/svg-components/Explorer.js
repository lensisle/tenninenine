import React, { Component } from 'react';

export default class Explorer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeMiterlimit="1.41421" viewBox="0 0 30 45" clipRule="evenodd" strokeLinejoin="round">
        <path fill="none" d="M0 0h29.059v44.427H0z"/>
        <clipPath id="a">
          <path d="M0 0h29.059v44.427H0z"/>
        </clipPath>
        <g clipPath="url(#a)">
          <ellipse cx="14.514" cy="27.522" rx="6.085" ry="6.505"/>
          <path d="M10.133 27.015L.175 37.173l.867 7.103 7.188-7.145 3.025-8.991-1.122-1.125zM18.997 26.892l9.917 10.158-.863 7.103-7.159-7.145-3.012-8.991 1.117-1.125z"/>
          <ellipse cx="7.078" cy="18.206" rx="2.409" ry="2.351"/>
          <ellipse cx="22.186" cy="17.775" rx="2.409" ry="2.351"/>
          <ellipse cx="12.339" cy="18.997" rx="1.149" ry="1.136"/>
          <ellipse cx="16.958" cy="18.968" rx="1.172" ry="1.131"/>
          <path d="M14.672.138l4.84 14.222h-9.68L14.672.138zM12.799 36.647l1.545-1.325 1.466 1.312-1.405 8.771-1.606-8.758z"/>
        </g>
      </svg>
    );
  }
}
