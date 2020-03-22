import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';


class usersList extends React.Component{

    render(){
        return(
            <div>
                <h2>Listing Users - {this.props.users.length}</h2>
                <ul>{this.props.users.map(user=>{
                return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })}</ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      users: state.users
    }
}
  
  export default connect(mapStateToProps)(usersList);
