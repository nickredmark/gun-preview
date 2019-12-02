import React from "react";

import marked from "marked";

export const Preview = ({ id, priv, epriv, document, onPublish }) => {
  return (
    <div className="document">
      <div className="editor">
        <iframe
          src={`https://gun-editor.nmaro.now.sh?id=${id}#priv=${priv ||
            ""}&epriv=${epriv || ""}`}
          frameBorder="0"
        />
        <div className="controls">
          <button onClick={onPublish}>Publish</button>
        </div>
      </div>
      <div className="preview">
        <span>preview</span>
        <h1>{document.title}</h1>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: marked(document.atoms.map(atom => atom.atom).join(""), {
              sanitize: true
            })
          }}
        />
      </div>
      <div className="public">
        <span>public</span>
        <h1>{document.title}</h1>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: marked(document.content || "", {
              sanitize: true
            })
          }}
        />
      </div>
    </div>
  );
};
