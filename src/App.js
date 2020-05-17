import React from 'react';
import calculate from './calculate';
import calculate_a from './calculate_a';
import calculate_b from './calculate_b';
import calculate_c from './calculate_c';
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnumber: '',
      secondnumber: '',
    };
    this.firstnumber_c = this.firstnumber_c.bind(this);
    this.secondnumber_c = this.secondnumber_c.bind(this);
    this.recalculate = this.recalculate.bind(this);
    this.recalculate_a = this.recalculate_a.bind(this);
    this.recalculate_b = this.recalculate_b.bind(this);
    this.recalculate_c = this.recalculate_c.bind(this);
  }

  recalculate() {
    this.setState(
      (state) => ({
        answerdivide: calculate(state.firstnumber, state.secondnumber),
      }),
    );
  }

  recalculate_a() {
    this.setState(
      (state) => ({
        answermultiply: calculate_a(state.firstnumber, state.secondnumber),
      }),
    );
  }

  recalculate_b() {
    this.setState(
      (state) => ({
        answeradd: calculate_b(state.firstnumber, state.secondnumber),
      }),
    );
  }

  recalculate_c() {
    this.setState(
      (state) => ({
        answersubtract: calculate_c(state.firstnumber, state.secondnumber),
      }),
    );
  }

  firstnumber_c(event) {
    this.setState({ firstnumber: event.target.value });
    this.recalculate();
    this.recalculate_a();
    this.recalculate_b();
    this.recalculate_c();
  }

  secondnumber_c(event) {
    this.setState({ secondnumber: event.target.value });
    this.recalculate();
    this.recalculate_a();
    this.recalculate_b();
    this.recalculate_c();
  }

  render() {
    return (
      <div className="input">
        <h4>
          Введите первое число:
          <input type="number" id="firstnumber" onInput={this.firstnumber_c} value={this.state.firstnumber} />
        </h4>
        <h4>
          Введите второе число:
          <input type="number" id="secondnumber" onChange={this.secondnumber_c} value={this.state.power} />
        </h4>
        <div id="answer" className="answerdivide">
          <h4>Частное:</h4>
          {this.state.answerdivide}
        </div>
        <div id="answer" className="answermultiply">
          <h4>Произведение:</h4>
          {this.state.answermultiply}
        </div>
        <div id="answer" className="answeradd">
          <h4>Сумма:</h4>
          {this.state.answeradd}
        </div>
        <div id="answer" className="answersubtract">
          <h4>Разность:</h4>
          {this.state.answersubtract}
        </div>
      </div>
    );
  }
}
export default App;
