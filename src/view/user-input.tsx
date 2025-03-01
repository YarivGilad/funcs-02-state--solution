
import { useState, ChangeEvent, useEffect, useRef } from "react";

interface Props {
  question: string;
  placeholder: string;
}

export function UserInput({ question, placeholder }:Props) {
  const [output, setOutput] = useState<string>("???");
  const [flag, setFlag] = useState(true);

  const myInput = useRef<HTMLInputElement>(null);
  const count = useRef(8);

  useEffect(()=> {
    console.log('UserInput render')
    return ()=> console.log('cleanup code');
  },[])

  useEffect(()=> {
    console.log('flag was changed');
    // return ()=> console.log('flag cleanup code')
  },[flag])


  // function onInputUpdate(event:ChangeEvent<HTMLInputElement>){
    // const txt = event.target.value
  function onInputUpdate(){
    if(!myInput.current) return
    const txt = myInput.current.value
    count.current++;
    setOutput(txt);
    

    if(txt.length % 3 === 0 ){
      setFlag(!flag);
    }
  }

  return (
    <div className="vbox mt20">
      <div className="hbox space-between">
        <h1 className="paragraph">{question}</h1>
        <h1 className="paragraph">count: {count.current}</h1>
        <input
          ref={myInput}
          type="text"
          className="input cap"
          placeholder={placeholder}
          onChange={onInputUpdate}
        />
      </div>
      <br />
      <h3 className="paragraph text-left white-text cap">
        Your answer: {output}
      </h3>
    </div>
  );
}

/* import { ChangeEvent, Component } from "react";

interface Props {
  question: string;
  placeholder: string;
}

interface State {
  output: string;
}

export class UserInput extends Component<Props, State> {
  state = {
    output: "???",
  };

  update_answer = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ output: event.target.value });
  };

  render() {

    const { question, placeholder } = this.props;
    const { output } = this.state;

    return (
      <div className="vbox mt20">
        <div className="hbox space-between">
          <h1 className="paragraph">{question}</h1>

          <input
            type="text"
            className="input cap"
            placeholder={placeholder}
            onChange={this.update_answer}
          />
        </div>
        <br />
        <h3 className="paragraph text-left white-text cap">
          Your answer: {output}
        </h3>
      </div>
    );
  }
}
 */