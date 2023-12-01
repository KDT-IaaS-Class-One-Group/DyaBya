const prompt = `<div id="prompt">
  <div style="color : white; background-color:black;   font-weight:bold;
  ">DYABYA</div>
  <section id="memo-list"></section>
  <section class="container">
    <form id="memo-Form" method="POST">
      <input type="text" id="title" placeholder="이름">
      <textarea id="content" placeholder="내용"></textarea>
      <button type="button" id="saveBtn">저장</button>
      <button type="button" id="clear">초기화</button>
    </form>
  </section>
</div>`;

export default prompt;
