class Converter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            submit: ""
        };
        this.handlePower = this.handlePower.bind(this);
        this.powerSubmit = this.powerSubmit.bind(this);
        
    }
    handlePower(event) {
        this.setState({
            input: event.target.value
        });
    }
    powerSubmit(event){
        event.preventDefault();
        this.setState({
            submit: (this.state.input * 0.74569987).toFixed(3)
        });
        
    }
    
    render() {
        return(
        <div>
            <div className="subtitle">Horsepower value:</div>
            <form className="for" onSubmit={this.powerSubmit}>
                <div className="inp"><input id="inpr" value={this.state.input}
                   onChange={this.handlePower} placeHolder="hp"
                    /></div>
                <button className="conv btn-small" type="submit">Convert</button>
            </form>
            <div className="subtitle">Kilowatts result:</div>
            <div className="sub">{this.state.submit} kw</div>
        </div>
        )
    }
}

class Reverse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            submit: ""
        };
        this.handlePower = this.handlePower.bind(this);
        this.powerSubmit = this.powerSubmit.bind(this);
        
    }
    handlePower(event) {
        this.setState({
            input: event.target.value
        });
    }
    powerSubmit(event){
        event.preventDefault();
        this.setState({
            submit:  (this.state.input / 0.74569987).toFixed(3)
        });
        
    }
    
    render() {
        return(
        <div>
            <div className="subtitle">Kilowatts value:</div>
            <form className="for" onSubmit={this.powerSubmit}>
                <div className="inp"><input id="inpr" value={this.state.input}
                   onChange={this.handlePower} placeHolder="hp"
                    /></div>
                <button className="conv btn-small" type="submit">Convert</button>
            </form>
            <div className="subtitle">Horsepower result:</div>
            <div className="sub">{this.state.submit} kw</div>
        </div>
        )
    }
}

function App() {
    const [click, setClick] = React.useState(true);
  
    const ShowA = () => setClick(true);
    const ShowB = () => setClick(false);
  
    return (
      <>
        <br />
  
        <button className="btn change" onClick={ShowA}>Horsepower to Kilowatts</button>
  
        <button className="btn change" onClick={ShowB}>Kilowatts to Horsepower</button>
  
        <div className="App">
          {click && <Converter/>}
  
          {!click && <Reverse />}
        </div>
      </>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"))