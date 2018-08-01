import React from 'react';
import ReactDOM from 'react-dom';

import ContactCard from './components/ContactCard';

const url = 'http://localhost:4000/api/contacts/11';

fetch(url)
    .then(resp => resp.json())
    .then(c1 => {
        ReactDOM.render(<ContactCard contact={c1} />,
            document.getElementById('root'));
    });

