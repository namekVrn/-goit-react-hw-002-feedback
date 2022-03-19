import react, {Component} from "react";
// console.log(react)
import css from '../ButtonEvolution/ButtonEvolution.css'
class ButtonEvolution extends Component {
   
    render(){
        
        return (
            <>
            <h2 className="css.feedback__title">Пожалуйста оцените нашу работу</h2>
            <div className = "feedback__buttonItemsBox">
                <button type="button" className="feedback__buttonItem" onClick={this.props.goodAction}>Good</button>
                <button type="button" className="feedback__buttonItem" onClick={this.props.neutralAction}>Neutral</button>
                <button type="button" className="feedback__buttonItem" onClick={this.props.badAction}>Bad</button>
            </div>
            </>
        )
    }
}
export default ButtonEvolution