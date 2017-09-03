import ReactDOM from 'react-dom';

import './styles/main.scss';

import MainFrame from './containers/MainFrame/MainFrame.container';

const targetNode = document.getElementById('app');

ReactDOM.render(MainFrame, targetNode);
