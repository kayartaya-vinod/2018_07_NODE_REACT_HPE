import React from 'react'; // required for JSX

// this function accpets a component
// and returns the same or another or modified component
export const loadingHoc = prop => OldComponent => {
    return (props) => {
        if (isEmpty(props[prop])) {
            return (
                <div className="alert alert-info text-center">
                    <img src="https://i.gifer.com/BA5o.gif" />
                    <h3>Loading...</h3>
                </div>
            );
        }
        return (
            <div>
                <OldComponent {...props} />
            </div>
        )
    };
}

function isEmpty(data) {
    if (!data) return true;
    if (data instanceof Array && data.length === 0) return true;
    if (typeof data === 'object' && Object.keys(data).length === 0) return true;

    return false;
}