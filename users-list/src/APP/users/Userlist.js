import React from "react";
import UserListItem from "./UserListItem.js";
import CardItemList from './UserCardItem';
import PropTypes from 'prop-types';
import Counter from './usersCounter';
import UserNotFound from './UserNotFound'

class Userlist extends React.Component {
    constructor(props) {
        super(props);
    }

    filterUserList = (element) => {            
        if (!this.props.searchText) {
            return true;                  
        }
        return (element.name.first.toLowerCase() + element.name.last.toLowerCase()).includes(this.props.searchText.toLowerCase())
    }
    render() {
        return (
            < div className="container content" >
                {(this.props.users.filter(this.filterUserList).length === 0) ? <UserNotFound /> : <Counter users={this.props.users.filter(this.filterUserList)} />}
                {this.props.users.filter(this.filterUserList).map((ingredient, i) => (
                    (!this.props.isCardView) ? <UserListItem ingredient={ingredient} key={i} /> : <CardItemList ingredient={ingredient} key={i} />
                ))}
            </div >
        )
    }
}

Userlist.propTypes = {
    users: PropTypes.array.isRequired
}
Userlist.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        mediumPicture: PropTypes.string.isRequired,
        largePicture: PropTypes.string.isRequired
    })
}

export default Userlist;