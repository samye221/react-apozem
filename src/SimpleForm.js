import React from "react";
import { SharedContext } from "./Shared";
import arrow from './assets/arrow.png';
import './App.css';

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  const [, setSharedState] = React.useContext(SharedContext);
  React.useEffect(() => {
    setSharedState({ status, message });
  }, [status, message, setSharedState]);

  return (
    <div className={className} style={style}>
      <div className="label">Subscribe: </div>
			<div className="submit">
				<input
					ref={node => (input = node)}
					type="email"
					placeholder="e-mail"
					className="input"
				/>
				<button className="btn" onClick={submit}><img className="submitIcon" src={arrow} /></button>
			</div>
      
    </div>
  );
};

export default SimpleForm;

