$(document).ready(function () {
  let index = 0;
  const imgWidth = 170; // mỗi ảnh + margin
  const visible = 5; // hiển thị 5 ảnh
  const total = $(".slide-track img").length;

  // Tự động trượt
  function autoSlide() {
    index++;
    if (index > total - visible) index = 0;
    $(".slide-track").css("transform", `translateX(${-index * imgWidth}px)`);
  }

  let slideTimer = setInterval(autoSlide, 3000); // 3 giây

  // Nút điều hướng
  $(".next").click(function () {
    clearInterval(slideTimer);
    index++;
    if (index > total - visible) index = 0;
    $(".slide-track").css("transform", `translateX(${-index * imgWidth}px)`);
  });

  $(".prev").click(function () {
    clearInterval(slideTimer);
    index--;
    if (index < 0) index = total - visible;
    $(".slide-track").css("transform", `translateX(${-index * imgWidth}px)`);
  });
});
