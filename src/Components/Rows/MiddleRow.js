import React, {Component} from 'react'
import {updateMiddleRow} from '../../ducks/rows_reducer'
import {connect} from 'react-redux'


 class MiddleRow extends Component {
    

    handleSquare = (val) => {
        let index = +val
        if (this.props.middleRow.length){
            if(this.props.cross === true){
                this.props.board.splice(index, 1, 1)
            } if(this.props.circle === true){
                this.props.board.splice(index, 1, 2)
            }
        } else {alert('row is full')}
        
        console.log(this.props.board)
    }
    



    render() {
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
        middleRow: reduxState.rows_reducer.middleRow,
        circle: reduxState.player_reducer.circle,
        cross: reduxState.player_reducer.cross

    }
}
const mapDispatchToProps = {
    updateMiddleRow
}
export default connect(mapStateToProps, mapDispatchToProps)(MiddleRow)
