
/**
 * Sơ đồ 3 khối
 * 
 * INPUT: lương 1 ngày,số ngày làm
 * 
 * PROCESS: (pseudo code)
 *          1.lấy lương input(hardcode)
 *          2.tính lương = lương 1 ngày * số ngày làm
 *          3.log lương ra màn hình
 * 
 * OUTPUT: lương
 */

//bai tap tien luong
var luong1ngay = 100000;
var soNgayLam = 60;
var tongluong = luong1ngay * soNgayLam;

console.log("tong luong thang:",tongluong);

//bt tinh trung binh

/**
 * Sơ đồ 3 khối
 * 
 * INPUT: tổng các số
 * 
 * PROCESS: (pseudo code)
 *          1.lấy tổng tb input (hardcode)
 *          2.tính trung bình = sum / 5
 *          3.log tổng trung bình ra màn hình
 * 
 * OUTPUT: Trung bình
 */
var a =1;
var b=2;
var c=3;
var d =4;
var e =5;
var sum = a + b + c + d + e;
var TrungBinh = sum / 5;

console.log("trung binh :",TrungBinh);

//bt tinh dien tich,chu vi

/**
 * Sơ đồ 3 khối
 * 
 * INPUT: chiều dài và chiều rộng
 * 
 * PROCESS: (pseudo code)
 *          1.lấy cv input(hardcode)
 *          2.tính diện tích (diện tích = cd * cr)
 *          3.tính chu vi (cv = tổng dài và rộng *2)
 *          4.log diện tích và chu vi.
 * OUTPUT: lương
 */
var ChieuDai = 5 ;
var ChieuRong=6;
var TongDaiVaRong = ChieuDai + ChieuRong;
var DienTich = ChieuDai * ChieuRong;
var ChuVi = TongDaiVaRong *2;

console.log("dien tich :",DienTich);
console.log("chu vi:",ChuVi);

//bt3

/**
 * Sơ đồ 3 khối
 * 
 * INPUT: 1 usd = 23500
 * 
 * PROCESS: (pseudo code)
 *          1.lấy 2usd input(hardcode)
 *          2.tính 2usd = 1usd + 1usd
 *          3.log nhập 2usd
 * 
 * OUTPUT: 2usd =
 */

var usd = 23500;
var Nhap2usd = usd + usd;

console.log("2 usd => vnd =",Nhap2usd)



//bt 5

/**
 * Sơ đồ 3 khối
 * 
 * INPUT: số ký
 * 
 * PROCESS: (pseudo code)
 *          1.lấy số ký input(hardcode)
 *          2.num 1 = n % 10 , num 2 = Math.floor(n/10)
 *          3.tính tổng số ký = num1 + num2
 *          4.log tổng số ký ra màn hình
 * 
 * OUTPUT: Tổng số ký là
 */

var n = 69

var num1= n % 10;
var num2=Math.floor(n/10);
var kq=num1 + num2;

console.log("Tong so ky la :",kq)


