$(document).ready(function () {
  let skills = [];
  $("#addSkill").click(function () {
    const name = $("#skillName").val().trim();
    const level = $("#skillLevel").val();

    if (name === "") {
      alert("Vui lòng nhập tên kỹ năng!");
      return;
    }

    skills.push({ name, level });
    alert(`Đã thêm kỹ năng: ${name} (${level}%)`);

    $("#skillName").val("");
    $("#skillLevel").val(0);
  });
  $("#submitBtn").click(function () {
    const name = $("#name").val();
    const job = $("#job").val();
    const address = $("#address").val();
    const phone = $("#phone").val();
    const email = $("#email").val();

    if (!name || !job || !address || !phone || !email) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    $("#cvName").text(name);
    $("#cvJob").text(job);
    $("#cvAddress").text(address);
    $("#cvPhone").text(phone);
    $("#cvEmail").text(email);

    // Ảnh đại diện
    const file = $("#avatar")[0].files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#cvAvatar").attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
    $("#cvSkills").empty();
    skills.forEach(s => {
      $("#cvSkills").append(`
        <div class="skill-bar">
          <span>${s.name}</span>
          <div class="bar"><div class="progress" style="width:${s.level}%;">${s.level}%</div></div>
        </div>
      `);
    });

    $("#cvForm").hide();
    $("#cvDisplay").show();
  });
});
