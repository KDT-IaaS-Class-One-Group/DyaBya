import {component, render} from "./module/component.js";
import {memoProcess} from "./module/memoProcess.js";
import {hashChanger} from "./module/hashChanger.js";

const headstateData = [
  {hash: "#home", text: "Home", name: "Home"},
  {hash: "#team", text: "Team", name: "Team"},
  {hash: "#member", text: "Member", name: "Member"},
  {hash: "#purpose", text: "Purpose", name: "Purpose"},
];
// append
const headvirtualDom = component(headstateData);
const headcontainer = document.getElementById("head");
headcontainer.appendChild(render(headvirtualDom));

memoProcess();
hashChanger();
