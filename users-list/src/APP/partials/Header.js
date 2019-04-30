import React from 'react';

const Header = (props) => {

    return(

        <header className='App-header'>
            <div className='container'>
            <button onClick={props.handler}>
                    {(props.isCardView) ? <img className="icon" src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/list2.png" alt='' /> : <img className="icon" src="https://image.flaticon.com/icons/svg/56/56844.svg" alt='' />}
                </button>
                <button onClick={props.refresh}><img className="icon" src="https://cdn0.iconfinder.com/data/icons/essentials-solid/100/Refresh-512.png" alt='' /></button>
                <h1 className="App-title col-4 offset-5">BIT People</h1>
            </div>
        </header>
    )
}

export default Header;