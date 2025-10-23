$(document).ready(function () {

  // Thêm công việc mới
  $("#addBtn").click(function () {
    let text = $("#newItem").val().trim();
    if (text === "") {
      alert("Vui lòng nhập nội dung công việc!");
      return;
    }

    let li = `
      <li>
        <span class="task">${text}</span>
        <button class="delete">X</button>
      </li>
    `;
    $("#todoList").append(li);
    $("#newItem").val("");
  });

  // Đánh dấu hoàn thành
  $("#todoList").on("click", ".task", function () {
    $(this).parent().toggleClass("completed");
  });

  // Xóa công việc
  $("#todoList").on("click", ".delete", function () {
    $(this).parent().fadeOut(300, function () {
      $(this).remove();
    });
  });

  // Cho phép nhấn Enter để thêm công việc
  $("#newItem").keypress(function (e) {
    if (e.which === 13) $("#addBtn").click();
  });
});
