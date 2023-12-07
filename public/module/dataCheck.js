function dataCheck(firstName) {
  const url = memberData[firstName].url;
  const hobby = memberData[firstName].hobby;
  const urlCheck = url.includes("https://github.com/");
  const hobbyCheck = Object.keys(hobby).length !== 0;

  if (urlCheck && hobbyCheck) {
    return `Url : ${memberData[firstName].url}<br> Hobby : ${memberData[firstName].hobby}<br> Resolution : ${memberData[firstName].resolution}`;
  } else {
    return `적절한 데이터를 입력해주세요`;
  }
}