$(document).ready(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy"
  });
  function isValidEmail(email) {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

  $(".add-row").click(function () {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var birthdate = $("#datepicker").val().trim();

    if (name === "" || email === "" || birthdate === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Email không hợp lệ!");
      return;
    }
    var newRow = `
      <tr>
        <td><input type="checkbox" class="select-row"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${birthdate}</td>
      </tr>
    `;

    $("table tbody").append(newRow);
    $("#name, #email, #datepicker").val("");
  });

  $(".delete-row").click(function () {
    $("table tbody").find('input.select-row:checked').each(function () {
      $(this).closest("tr").remove();
    });
  });
});
