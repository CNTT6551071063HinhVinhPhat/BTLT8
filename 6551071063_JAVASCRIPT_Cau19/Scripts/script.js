$(document).ready(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy"
  });

  $("#buyBtn").click(function () {
    let date = $("#datepicker").val();
    let film = $("#film option:selected");
    let time = $("#time option:selected");
    let room = $("#room option:selected");
    let seats = $("#seat option:selected");

    if (!date || !film.val() || !time.val() || !room.val() || seats.length === 0) {
      alert("Vui lòng nhập đầy đủ thông tin trước khi mua vé!");
      return;
    }

    // Tính tiền
    let base = parseFloat(film.data("price"));
    let rate = parseFloat(time.data("rate"));
    let roomPrice = parseFloat(room.data("room"));
    let total = base * rate * roomPrice * seats.length;

    // Hiển thị thông tin vé
    $("#showDate").text(date);
    $("#showFilm").text(film.val());
    $("#showTime").text(time.val());
    $("#showRoom").text(room.val());
    $("#showSeat").text(seats.map(function(){return $(this).text();}).get().join(", "));
    $("#showTotal").text(total.toLocaleString("vi-VN"));

    $("#ticketInfo").show();
  });
});
