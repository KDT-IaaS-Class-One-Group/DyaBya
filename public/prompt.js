const prompt = `<div id="prompt">
  <div>DYABYA</div>

  <section class="memo-list"></section>

  <section class="container">
    <form id="memo-Form" method="POST">
      <input type="text" id="title" placeholder="이름">
      <textarea id="content" placeholder="내용"></textarea>
      <button type="submit" id="saveBtn">저장</button>
    </form>
  </section>
</div>`;

export default prompt;
