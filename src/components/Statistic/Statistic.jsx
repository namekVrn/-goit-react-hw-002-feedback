import react, {Component} from "react";
import "../Statistic/Statistic.css"

class Statistic extends Component {
   
   
      countTotalFeedback = (obj) => {
        let countTotal = null
        for(let value of Object.values(obj)){
          countTotal += value
        }
        return countTotal
      }
      percentGood = (resultTotal, good)=>{
        let total = resultTotal
        let propPercent = total / good
        return  Math.floor(100 / propPercent )
      }
      render(){
        const {good,neutral,bad} = this.props.stateStat
        let totalFeedback = this.countTotalFeedback(this.props.stateStat)
        let totalPercent = this.percentGood(totalFeedback, good)
        return (
            <>
            <div className="feedback__statistic">
                <h3 className="feedback__title">Statistic</h3>
               
                <table className="table">
                   
                        <tr className="header_row">
                            <th className="header_item">Good</th>
                            <th className="header_item">Neutral</th>
                            <th className="header_item">Bad</th>
                            <th className="header_item">Total</th>
                            <th className="header_item">TotalPercent</th>
                        </tr>
                   
                    
                        <tr className="table_rows">
                            <td className="items">{good}</td>
                            <td className="items">{neutral}</td>
                            <td className="items">{bad}</td>
                            <td className="items">{totalFeedback}</td>
                            <td className="items">{totalPercent+"%"}</td>
                        </tr>
                   
                    
                </table>
                
            </div>
            </>

        )
    }
}
export default Statistic
