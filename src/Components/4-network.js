import React from 'react'
import { connect } from 'react-redux'


class Networks extends React.Component{
    constructor(){
        super()
        this.state={
            sortAction: "-- select network --"
        }
    }

    handleChange=(e)=>{
        const sortAction = e.target.value
        this.setState({sortAction: sortAction})
    }


    render(){
        return(
            <div>
                <h2>Select Network</h2>
                {this.props.networks.map(network=>{
                    return (
                        <div key={network.id}>
                            <input type="radio" name="sort" value={network.message} checked={this.state.sortAction == network.message}  onChange={this.handleChange} /><label>{network.name}</label>
                        </div>
                    )
                })}
                <br/>
                <textarea type="text" value={this.state.sortAction} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      networks: state.networks
    }
}
  
  export default connect(mapStateToProps)(Networks);