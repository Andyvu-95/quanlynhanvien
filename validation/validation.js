// check không để trường dữ liệu trống 
function checkInputRong(idInput, idtb) {
    var valueInput = document.getElementById(idInput).value;
    if (valueInput.length === 0) {
      document.getElementById(idtb).innerHTML = `Vui lòng không để trống`;
      return false;
    } else {
      document.getElementById(idtb).innerHTML = ``;
      return true;
    }
}

function checkTaiKhoan(idInput, idtb) {

  var regetTaiKhoan = /^[0-9]{4,6}$/ 
  var valueInput = document.getElementById(idInput).value;
  if(!regetTaiKhoan.test(valueInput) && valueInput !== ``) {
    document.getElementById(idtb).innerHTML = `Định dạng tài khoản từ 4 - 6 ký số`;
      return false
  }
  else if (regetTaiKhoan.test(valueInput) && valueInput !== ``) {
    document.getElementById(idtb).innerHTML = ``;
    return true
  }
  
}

function checkTk (idInput, idtb) {
  for (var i = 0; i < arrNhanVien.length; i++) {
    var valueInput = document.getElementById(idInput).value;
    if (arrNhanVien[i].qlTaiKhoan === valueInput) {
      document.getElementById(idtb).innerHTML = `Tài khoản bị trùng`
      return false
    }
    else {
      return true
    }
  }
}



function checkDinhDangEmail (idInput, idtb) {
  //viết regex để check Email
  var reGexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var valueInput = document.getElementById(idInput).value;
  if (!reGexEmail.test(valueInput) && valueInput !== ``) {
      document.getElementById(idtb).innerHTML = `không đúng định dạng`;
      return false
      
  } else if (reGexEmail.test(valueInput) && valueInput !== ``) {
      document.getElementById(idtb).innerHTML = ``;
      return true
      
  }

}

function checkDinhDangPass (idInput, idtb){
  var reGetPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
  var valueInput = document.getElementById(idInput).value
  if(!reGetPass.test(valueInput) && valueInput!==``){
    document.getElementById(idtb).innerHTML = `Password không đúng định dạng, password gồm 6-10 ký tự 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt `;
      return false
  }
  else if (reGetPass.test(valueInput) && valueInput !== ``) {
    document.getElementById(idtb).innerHTML = ``;
      return true
  }
}

function checkLuong(idInput, idTb){
  var regrexMoney = /^-?[0-9]+(\.[0-9]+)?$/;
  var valueInput = document.getElementById(idInput).value;
  if (!regrexMoney.test(valueInput) && valueInput !== "") {
    document.getElementById(idTb).style.display = "block";
    document.getElementById(idTb).innerHTML =
      "Vui lòng đúng định dạng lương là con số.";
    return false;
  } else if (regrexMoney.test(valueInput) && valueInput !== "") {
    if (valueInput >= 1000000 && valueInput <= 20000000) {
      document.getElementById(idTb).innerHTML = "";
      return true;
    } else {
      document.getElementById(idTb).style.display = "block";
      document.getElementById(idTb).innerHTML =
        "Mức lương cơ bản c từ 1 triệu đến 20 triệu.";
      return false;
    }
  }
}

function checkGioLam(idInput, idTb){
  var regrexGioLam = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/;
  var valInput = document.getElementById(idInput).value;
  if (!regrexGioLam.test(valInput) && valInput !== "") {
    document.getElementById(idTb).style.display = "block";
    document.getElementById(idTb).innerHTML = "Xin kiểm tra lại số. Giờ làm tối đa là 200 giờ và tối thiểu là 80 giờ";
    return false;
  } else if (regrexGioLam.test(valInput) && valInput !== "") {
    document.getElementById(idTb).innerHTML = "";
    return true;
  }
}

function checkNgayLam (idInput, idTb) {
  var regetNgayLam = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  var valueInput = document.getElementById(idInput).value;
  if(!regetNgayLam.test(valueInput) && valueInput !== ``) {
    document.getElementById(idTb).innerHTML = `Định dạng ngày làm là yy/mm/dd ví dụ 2022/12/29`;
      return false
  }
  else if (regetNgayLam.test(valueInput) && valueInput !== ``) {
    document.getElementById(idTb).innerHTML = ``;
    return true
  }

}
 


