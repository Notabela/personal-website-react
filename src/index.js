import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Page from './Page';
import * as serviceWorker from './serviceWorker';

const videoWalkthroughs = [
    {size: 4, url: 'http://imgur.com/2GXHgHp.gif', link:'https://github.com/Notabela/2048'},
    {size: 4, url: 'http://i.imgur.com/WDz83Ni.gif', link:'https://github.com/Notabela/belaShare'},
    {size: 4, url: 'http://i.imgur.com/E5XN9eb.gif', link: 'https://github.com/Notabela/Twitter-Redux'},
    {size: 12, url: 'https://i.imgur.com/UDdzYi5.gif', link: 'https://github.com/Notabela/Camper-Plus'},
    {size: 12, url: 'https://i.imgur.com/yqwWSZN.gif', link: 'https://github.com/Notabela/Lie_to_me'},
]

ReactDOM.render(<Page videoWalkthroughs={videoWalkthroughs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
