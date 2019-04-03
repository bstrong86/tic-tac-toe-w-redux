import React, {Component} from 'react'
import TopRow from '../Rows/TopRow'
import MiddleRow from '../Rows/MiddleRow'
import {connect} from 'react-redux'
import {updateCross, updateCircle} from '../../ducks/player_reducer'



class Board extends Component {
    

    handleCross = () => {
        this.props.updateCross()
    }

    handleCircle = () => {
       this.props.updateCircle()
    }

    render() {
        return(
            <div>
                <button onClick={this.handleCross}>Click here for X</button>
                <button onClick={this.handleCircle}>Click here for O</button>
                <TopRow />
                <MiddleRow />
                
                
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        circle: reduxState.player_reducer.circle,
        cross: reduxState.player_reducer.cross
    }
}
const mapDispatchToProps = {
    updateCircle,
    updateCross
}
export default connect(mapStateToProps, mapDispatchToProps)(Board)