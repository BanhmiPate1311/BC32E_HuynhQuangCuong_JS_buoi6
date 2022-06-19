//Bài 1: Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + .. + n >10000
document.getElementById("timSo").onclick = function () {
  //input: none
  //output: n: number
  var n = 1;
  //progress
  var tong = 0;

  while (tong <= 10000) {
    tong += n;
    if (tong > 10000) {
      break;
    } else n++;
  }
  document.getElementById("soNguyenDuong").innerHTML =
    "Số nguyên dương nhỏ nhất: " + n;
};

//Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x ^ 3 + ... + x ^ n
document.getElementById("tinhTong").onclick = function () {
  //progress: ketQua: number
  var ketQua = 0;
  ketQua = tinhTongMuN("soX", "soY");

  //in kết quả ra
  document.getElementById("ketQua_b2").innerHTML = "Tổng là: " + ketQua;
};

function tinhTongMuN(id1, id2) {
  //input id của 2 thẻ input nào đó
  value1 = Number(document.getElementById(id1).value);
  value2 = Number(document.getElementById(id2).value);
  //output: tong: number
  var tong = 0;
  var i = 1; //i là biến chạy
  while (i <= value2) {
    tong += Math.pow(value1, i);
    i++;
  }
  return tong; //output
}

//Bài 3: Tính giai thừa
document.getElementById("tinhGiaiThua").onclick = function () {
  //progress: ketQua: number
  var ketQua = 0;
  ketQua = tinhGiaiThua("soGiaiThua");

  //in kết quả ra
  document.getElementById("ketQua_b3").innerHTML = ketQua;
};

function tinhGiaiThua(id) {
  //input id của thẻ input nào đó
  value = Number(document.getElementById(id).value);
  //output: giaiThua: number
  var giaiThua = 1;
  var i = 1; //i là biến chạy
  while (i <= value) {
    giaiThua *= i;
    i++;
  }
  return giaiThua; //output
}

//Bài 4: Viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu Div ở vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
document.getElementById("taoTheDiv").onclick = function () {
  //progress: ketQua: string
  ketQua = "";
  ketQua = taoTheDiv();

  //in kết quả ra
  document.getElementById("ketQua_b4").innerHTML = ketQua;
};

function taoTheDiv() {
  var html = "";
  var dem = 1;
  while (dem <= 10) {
    if (dem % 2 !== 0) {
      html += "<div class='bg-primary'>Div lẻ " + dem + "</div>";
    } else {
      html += "<div class='bg-danger'>Div chẵn " + dem + "</div>";
    }
    dem++;
  }
  return html;
}
