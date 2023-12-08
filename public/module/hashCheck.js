function hashCheck(num) {
  const hashData = headstateData[num].hash;
  const hashDataCheck = hashData.includes("#");
  if (hashDataCheck) {
    return headstateData[num].hash;
  } else {
    console.error("적절한 해쉬가 아닙니다.");
  }
}