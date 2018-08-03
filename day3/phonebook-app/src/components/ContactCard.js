import React from 'react';

export default ({ contact, deleteContact, history }) => {
    return (
        <div className="card" style={{ width: '400px' }}>
            <div className="card-body">
                <h3 className="card-title">
                    {contact.gender === 'Male' ? 'Mr.' : 'Ms.'}
                    {contact.firstname}
                    {contact.lastname}
                </h3>
                <p className="card-text">
                    {contact.city}
                    <span className="fa fa-trash pull-right"
                        onClick={() => {
                            if(!window.sessionStorage['authToken']){
                                alert('You have to login before deleting a contact');
                                history.push('/login');
                                return;
                            }
                            if (!window.confirm('Are you sure?')) {
                                return;
                            }
                            deleteContact(contact.id);
                        }}
                        style={{ cursor: 'pointer' }}></span>
                </p>
            </div>
        </div>
    );
}
