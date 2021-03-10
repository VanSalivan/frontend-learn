import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <HookSwitcher />
        </div>
    );
};

const HookSwitcher = () => {

    const [color, setColor] = useState('black');

    return (
        <div style={{ padding: '10px', backgroundColor: color }}>
            <button onClick={() => { setColor('red') }}>Red</button>
            <button onClick={() => { setColor('green') }}>Green</button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
