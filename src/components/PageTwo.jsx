import React, {useState} from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Navbah from './Navbah'
//could use radium for some fancy stuff
const PageTwo = () => {
  const [inputText, setInputText] = useState('')
  return (
    <AbsoluteWrapper>
      <Navbah/>
      <section className="row justify-content-center text-center p-5">
        <article className="col-md-6">
        <input className="mt-5 mb-5"type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
          <div className="card p-1 m-1 shadow">
            <div className="card-body">
              <h4 className="card-title mt-1" >{inputText? inputText : 'I am a default text, start typing in the box above me!'}</h4>
            </div>
          </div>
        </article>
      </section>
    </AbsoluteWrapper>
  );
};

export default PageTwo;
