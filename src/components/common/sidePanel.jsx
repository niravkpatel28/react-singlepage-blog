import React from "react";
import "./sidePanel.style.css";
// this component will receive an onclick event
// this event will trigger a new api call
// which will fetch new data and the blog component will be rerendered

// const SidePanel = () => (
//   <div className="create-link">
//     <h1> Related Posts</h1>
//     <p> Link 1 </p>
//     <p> Link 2 </p>
//   </div>
// );

const SidePanel = (props) => (
  <div className="create-link">
    <h1> Related Link</h1>
    {props.relatedLinks.map((link) => (
      <p key={link.id} onClick={props.changeBlog} id={link.id}>
        {" "}
        {link.title}{" "}
      </p>
    ))}
  </div>
);
export default SidePanel;
