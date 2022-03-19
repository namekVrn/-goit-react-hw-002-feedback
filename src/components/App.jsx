import css from '../components/container.module.css'
import react,{Component} from "react";
import ButtonEvolution from "./ButtonEvolution";
import Statistic from './Statistic'
console.log(react);

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
ifRender = () => {
  const totalArray = Object.values(this.state);
  let totalCount = 0
  console.log(totalArray)
  for(let value of totalArray){
    totalCount += value
    console.log(totalCount)
    if(totalCount){
      return true
    }
  }
  return false
}
goodAction = () => {
    this.setState((preState)=>{
        return {good: this.state.good + 1}
    })
}
neutralAction = () => {
  this.setState((preState)=>{
      return {neutral: this.state.neutral + 1}
  })
}

badAction = () => {
  this.setState((preState)=>{
      return {bad: this.state.bad + 1}
  })
}

 render(){
   return(
     <div className={css.containerCenter}> 
      <ButtonEvolution 
      goodAction={this.goodAction} 
      neutralAction={this.neutralAction}
      badAction={this.badAction}/>
      {this.ifRender() ?<Statistic stateStat={this.state} countTotalFeedback={this.countTotalFeedback}/> : <p>Пока нет ни одной оценки</p>}
     </div>
   )
 }
};
export default App