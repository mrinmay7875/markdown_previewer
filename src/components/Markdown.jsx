import React, { useState } from "react";
import Reactmarkdown from "react-markdown";
import "./markdown.css";

const defaultPlaceholder = `# React Markdown Parser!
### You can type any markdown text here and it will parsed and shown beside
  
Heres some code, \`<div></div>\`, between 2 backticks.
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

* And last but not least, let's not forget embedded images:
![A kitten w/ Text](https://source.unsplash.com/featured/?desk,office)
`;

function Markdown(props) {
  const [input, setInput] = useState(defaultPlaceholder);

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          name=""
          id=""
          value={input}
          cols="30"
          rows="10"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></textarea>
        <article  className="result">
          <Reactmarkdown>{input}</Reactmarkdown>
        </article>
      </section>
    </main>
  );
}

export default Markdown;
