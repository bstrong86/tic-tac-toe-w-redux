import React, {Component} from 'react'
import {updateMiddleRow} from '../../ducks/rows_reducer'
import {connect} from 'react-redux'


 class WinCheck extends Component {
    state={
        boardArray:[]
    }

componentDidMount(){
    this.createBoardArray()
    
}

checkWin(currentValue) {
    if(currentValue===2){return true}
    else if(currentValue===1){return true}
    else{return false}
}

createBoardArray=()=> {
    this.state.boardArray.push(this.props.topRow, this.props.middleRow, this.props.bottomRow)
    
}


arrayCheck =(arr) =>{
  let columnArr = []
  for(let i=0;i<arr.length;i++){
    if(arr[i].every(this.checkWin) === true) {return 'rows true'}
     else if ( arr[i].every(this.checkWin) === false){ console.log('rows false')
      for(let j=0; j< arr[i].length; j++){
        columnArr.push(arr[j][i])
        if(columnArr.length===3 && columnArr.every(this.checkWin) === true){console.log('column true')
        } else if (columnArr.every(this.checkWin)===false){
          console.log('column false')
          columnArr=[]
          for(let j=0; j< arr[i].length; j++){
            columnArr.push(arr[j][i])
            console.log(columnArr)
            if(columnArr.length===3 && columnArr.every(this.checkWin)===true){ return 'ifcheck'}
          } 
        }
      }
  }

  
  }
}

    render() {
        return(
            <div>
                <h1>test </h1>
                
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        topRow: reduxState.rows_reducer.topRow,
        middleRow: reduxState.rows_reducer.middleRow,
        bottomRow: reduxState.rows_reducer.bottomRow,
        

    }
}
const mapDispatchToProps = {
    updateMiddleRow
}
export default connect(mapStateToProps, mapDispatchToProps)(WinCheck)




