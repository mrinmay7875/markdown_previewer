import React, { useState } from "react";
import Reactmarkdown from "react-markdown";
import "./markdown.css";

const defaultPlaceholder = `# React Markdown Parser!
### You can type any markdown text here and it will parsed and shown beside
  
Here is some code, \`<div></div>\`, between 2 backticks. You can also write multiLineCode
\`\`\`
// this is multi-line code:
function someFunction(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://github.com/mrinmay-santra), and lot more interesting things

Here is an [article](https://www.markdownguide.org/cheat-sheet/) where you can read more about Markdown syntax
`;

function Markdown(props) {
  const [input, setInput] = useState(defaultPlaceholder);

  return (
    <div className="main-container">
      <div className="markdown-container">
        {/* <Topbar text="This is editor section" icon={<i class="fas fa-edit fa-lg icons" ></i>} /> */}
        
            <div  >
              <h3 className="topbar-heading" style={{ padding:"10px",width:"100%",}} >
                  <i className="fas fa-edit fa-lg icons"></i>Editor section</h3>
            </div>
            <textarea
              className="input"
              name=""
              id=""
              value={input}
              cols="60"
              rows="25"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            ></textarea>
 
  </div>
        <div className="markdown-preview-container">

            <div style={{marginRight:"0px"}}  >
              <h3 className="topbar-heading" >
                  <i className="fas fa-tv icons"></i>Viewer section</h3>
            </div>


          <div className="result">
            <Reactmarkdown style={{backgroundColor:"lightblue"}} >{input}</Reactmarkdown>
          </div>
        </div>
     
    </div>
  );
}

export default Markdown;
