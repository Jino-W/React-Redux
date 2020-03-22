import React from 'react'
import { connect } from 'react-redux'
import {sortUsers} from '../../action/users'


class ListingUser extends React.Component{
    constructor(){
        super()
        this.state={
            sortAction:"Default"
        }
    }

    handleChange=(e)=>{
        const sortAction = e.target.value
        this.setState({sortAction: sortAction})
        this.props.dispatch(sortUsers(sortAction, this.props.users))
    }


    render(){
        return(
            <div>
                <h2>Listing Users - {this.props.users.length}</h2>
                <input type="radio" name="sort" value="ASC" checked={this.state.sortAction == 'ASC'}  onChange={this.handleChange} /><label>ASC</label>
                <input type="radio" name="sort" value="DESC" checked={this.state.sortAction == 'DESC'}   onChange={this.handleChange} /><label>DESC</label>
                <input type="radio" name="sort" value="Default" checked={this.state.sortAction == 'Default'}  onChange={this.handleChange} /><label>Default</label>
                <ul>{this.props.users.map(user=>{
                    return <li key={user.id}>{user.name}</li>
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
  
export default connect(mapStateToProps)(ListingUser);