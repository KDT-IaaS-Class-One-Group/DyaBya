const headstateData = [
  {hash: "#home", text: "Home", name: "Home"},
  {hash: "#team", text: "Team", name: "Team"},
  {hash: "#member", text: "Member", name: "Member"},
  {hash: "#purpose", text: "Purpose", name: "Purpose"},
];

export function hashCheck(num) {
  const hashData = headstateData[num].hash;
  const hashDataCheck = hashData.includes("#");
  if (hashDataCheck) {
    return headstateData[num].hash;
  } else {
    console.error("적절한 해쉬가 아닙니다.");
  }
}