import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './index.css';
import Page from './Page';
import * as serviceWorker from './serviceWorker';

const videoWalkthroughs = [
    {size: 4, 
     url: 'http://imgur.com/2GXHgHp.gif',
     link:'https://github.com/Notabela/2048',
     caption: 'Implementation of the popular 2048 Game using Python and PyGame'
    },
    {size: 4, 
     url: 'http://i.imgur.com/WDz83Ni.gif', 
     link:'https://github.com/Notabela/belaShare', 
     caption: 'A photo sharing iOS app using Parse as its backend.'
    },
    {size: 4, 
     url: 'http://i.imgur.com/E5XN9eb.gif',
     link: 'https://github.com/Notabela/Twitter-Redux',
     caption: 'A basic twitter iOS app to read and compose tweets using the Twitter API.'
    },
    {size: 12, 
     url: 'https://i.imgur.com/UDdzYi5.gif', 
     link: 'https://github.com/Notabela/Camper-Plus',
     caption: 'A Python/Flask app to ease the work of summer camp administrators and the lives of parents'
    },
    {size: 12,
     url: 'https://i.imgur.com/yqwWSZN.gif',
     link: 'https://github.com/Notabela/Lie_to_me',
     caption: 'A Python/Flask Lie detection app using facial and voice analysis'
    },
]

const messageCaptions = ["an enginer..", "a programa..", "a coder..", "&lt;code/&gt;"]

ReactDOM.render(<Page videoWalkthroughs={videoWalkthroughs}
                     messageCaptions={messageCaptions} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
