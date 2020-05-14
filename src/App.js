import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnumber: '',
      secondnumber: '',
    };
    this.firstnumber_c = this.firstnumber_c.bind(this);
    this.secondnumber_c = this.secondnumber_c.bind(this);
    this.calculate = this.calculate.bind(this);
    this.calculate_a = this.calculate_a.bind(this);
    this.calculate_b = this.calculate_b.bind(this);
    this.calculate_c = this.calculate_c.bind(this);
  }

  calculate() {
    this.setState(
      (state) => ({
        answerdivide: parseFloat(state.firstnumber) / parseFloat(state.secondnumber) 
      }),
    );
  }
  calculate_a() {
    this.setState(
      (state) => ({
        answermultiply: parseFloat(state.firstnumber) * parseFloat(state.secondnumber) 
      }),
    );
  }
  calculate_b() {
    this.setState(
      (state) => ({
        answeradd: parseFloat(state.firstnumber) + parseFloat(state.secondnumber) 
      }),
    );
  }
  calculate_c() {
    this.setState(
      (state) => ({
        answersubtract: parseFloat(state.firstnumber) - parseFloat(state.secondnumber) 
      }),
    );
  }

  firstnumber_c(event) {
    this.setState({ firstnumber: event.target.value });
    this.calculate();
    this.calculate_a();
    this.calculate_b();
    this.calculate_c();
  }

  secondnumber_c(event) {
    this.setState({ secondnumber: event.target.value });
    this.calculate();
    this.calculate_a();
    this.calculate_b();
    this.calculate_c();
  }

  render() {
    return (
      <div className="input">
        <h4>Введите первое число: <input type="number" id="firstnumber" onInput={this.firstnumber_c} value={this.state.firstnumber} /></h4>
        <h4>Введите второе число: <input type="number" id="secondnumber" onChange={this.secondnumber_c} value={this.state.power} /></h4>
        <div id="answer" className="answerdivide"><h4>Частное:</h4>{this.state.answerdivide}</div>
        <div id="answer" className="answermultiply"><h4>Произведение:</h4>{this.state.answermultiply}</div>
        <div id="answer" className="answeradd"><h4>Сумма:</h4>{this.state.answeradd}</div>
        <div id="answer" className="answersubtract"><h4>Разность:</h4>{this.state.answersubtract}</div>
      </div>
    );
  }
}
export default App;