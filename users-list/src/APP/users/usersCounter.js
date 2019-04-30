import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let counterFemale = 0;
        let counterMale = 0;
        for (let i in this.props.users) {
            if (this.props.users[i].gender === 'female') {
                counterFemale++;
            } else {
                counterMale++;
            }
        }
        return (
            <div className='container' id="counter">
                <p>
                    Female: {counterFemale}  Male: {counterMale}
                </p>
            </div>
        )
    }
}

export default Counter;