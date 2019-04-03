import React, {Component} from 'react'
import {bottomRow} from '../../ducks/rows_reducer'
import {connect} from 'react-redux'


 class BottomRow extends Component {
    

    handleSquare = (val) => {
        let index = +val
        let topRow = [0,0,0]
        // if (this.props.topRow.length){
            if(this.props.cross === true){
                bottomRow.splice(index, 1, 1)
                console.log(topRow)
            } if(this.props.circle === true){
                bottomRow.splice(index, 1, 2)
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
        bottomRow: reduxState.rows_reducer.bottomRow

    }
}
const mapDispatchToProps = {
    bottomRow
}
export default connect(mapStateToProps, mapDispatchToProps)(BottomRow)
