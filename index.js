/** Bài 1
 *
 * Đầu vào:
 * lấy giá trị input ngày làm vào biến day
 * tạo biến salary
 *
 * Xử lý:
 * salary = day * 100000
 *
 * Đầu ra:
 * xuất ra số tiền lương salary
 */

document.getElementById("tinhLuong").onclick = function () {
  //Đầu vào
  var day = +document.getElementById("day").value;
  var salary = 0;
  //quy đổi tiền ra VND
  var currentFormat = new Intl.NumberFormat("vn-VN");
  //Xử lý
  salary = day * 100000;
  //Đầu ra
  alert("Lương: " + currentFormat.format(salary));
};



/** Bài 2
 *
 * Đầu vào:
 * lấy giá trị input của 5 số thực vào các biến n1, n2, n3 ,n4, n5
 * tạo biến cho giá tị trung bình là average
 *
 * Xử lý:
 * average = (n1 + n2 + n3 + n4 + n5) / 5
 *
 * Đầu ra:
 * xuất ra giá trị trung bình
 */

document.getElementById("tinhTrungBinh").onclick = function () {
  //Đầu vào
  var n1 = +document.getElementById("n1").value;
  var n2 = +document.getElementById("n2").value;
  var n3 = +document.getElementById("n3").value;
  var n4 = +document.getElementById("n4").value;
  var n5 = +document.getElementById("n5").value;
  var average = 0;
  //Xử lý
  average = (n1 + n2 + n3 + n4 + n5) / 5;
  //Đầu ra
  alert("Giá trị trung bình: " + average);
};



/** Bài 3
 *
 * Đầu vào:
 * lấy giá trị input của số tiền USD vào biến usd
 * tạo biến số tiền VND là vnd
 *
 * Xử lý:
 * VND = USD * 23500
 *
 * Đầu ra:
 * xuất ra số tiền VND
 */

document.getElementById("quyDoi").onclick = function () {
  //Đầu vào
  var usd = +document.getElementById("usd").value;
  var vnd = 0;
  //Xử lý
  vnd = usd * 23500;
  //quy đổi tiền ra VND
  var currentFormat = new Intl.NumberFormat("vn-VN");
  //Đầu ra
  alert("Số tiền VND: " + currentFormat.format(vnd));
};



/** Bài 4
 *
 * Đầu vào:
 * lấy giá trị input chiều dài và chiều rộng của HCN vào các biến edge1 và edge 2
 * tạo biến diện tích HCN là S
 * tạo biến chu vi HCN là P
 *
 * Xử lý:
 * S = edge1 * edge2
 * P = (edge1 + edge2) * 2
 *
 * Đầu ra:
 * xuất ra diện tích và chu vi của HCN
 */

document.getElementById("tinhDienTichChuVi").onclick = function () {
  //Đầu vào
  var edge1 = +document.getElementById("edge1").value;
  var edge2 = +document.getElementById("edge2").value;
  var S = 0;
  var P = 0;
  //Xử lý
  S = edge1 * edge2;
  P = (edge1 + edge2) * 2;
  //Đầu ra
  alert("Diện tích HCN: " + S + "  Chu vi HCN: " + P);
};



/** Bài 5
 *
 * Đầu vào:
 * lấy gí trị input của số có 2 ký số vào biến n
 * tạo biến tổng 2 ký số của số vừa nhập là sum 
 * 
 * Xử lý:
 * sum = Math.floor(n / 10) + n % 10
 * 
 * Đầu ra:
 * xuất ra tổng của 2 ký số
 */

 document.getElementById("tinhTong").onclick = function () {
  //Đầu vào
  var n = +document.getElementById("n").value;
  var sum = 0;
  //Xử lý
  sum = Math.floor(n / 10) + n % 10;
  //Đầu ra
  alert("Tổng của 2 ký số: " + sum);
};