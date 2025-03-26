var account = 123456;
var password = 123456;
let loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function () {
  let acctext = document.getElementById("account").value;
  let passtext = document.getElementById("password").value;
  if (account != acctext) {
    alert("账号不存在！");
    return;
  }
  if (passtext != password) {
    alert("密码错误！");
    return;
  }
  alert("登录成功！");
  location.href = "index.html";
});