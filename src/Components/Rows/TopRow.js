import React, {Component} from 'react'
import {updateTopRow} from '../../ducks/rows_reducer'
import {connect} from 'react-redux'


 class TopRow extends Component {
    

    handleSquare = (val) => {
        let index = +val
        let topRow = [0,0,0]
        // if (this.props.topRow.length){
            if(this.props.cross === true){
                topRow.splice(index, 1, 1)
                console.log(topRow)
            } if(this.props.circle === true){
                topRow.splice(index, 1, 2)
            }
        // } else {alert('row is full')}
        
        
    }
    



    render() {
        console.log(this.props.cross)
        return(
            <div>
                
                <input type="button" value="0" onClick={e => this.handleSquare(e.target.value)}/>
                <input type="button" value="1" onClick={e => this.handleSquare(e.target.value)}/>
                <input type="button" value="2" onClick={e => this.handleSquare(e.target.value)}/>
                
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        topRow: reduxState.rows_reducer.topRow,
        circle: reduxState.player_reducer.circle,
        cross: reduxState.player_reducer.cross

    }
}
const mapDispatchToProps = {
    updateTopRow
}
export default connect(mapStateToProps, mapDispatchToProps)(TopRow)
