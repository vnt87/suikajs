/**
 * Tuyên bố: Dự án này chỉ nhằm mục đích giúp mọi người học tập kỹ thuật và giải trí, vui lòng không lan truyền rộng rãi hoặc sử dụng trang web đã chỉnh sửa cho mục đích thương mại để tránh vi phạm bản quyền!
 */

// Điểm cộng thêm: Sửa đổi con số
let extraScore = 1;

// Chế độ bất tử: true đổi thành false
let wuDi = true;

// Trái cây đầu tiên: Sửa đổi con số từ 0-10, 0 là nho, 9 là nửa quả dưa hấu
let firstFruit = 0;

// Đảo ngược tổng hợp trái cây: false đổi thành true
let reverseLevelUp = false;

// Chỉ định trái cây được tạo ra: Mặc định: Không bật đảo ngược 0-5, Bật đảo ngược 6-11, sửa đổi con số tương ứng để kiểm soát phạm vi trái cây ngẫu nhiên
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // Giá trị nhỏ nhất của trái cây ngẫu nhiên (0-10) 0 là nho, 9 là nửa quả dưa hấu
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // Giá trị lớn nhất của trái cây ngẫu nhiên (1-11) 0 là nho, 9 là nửa quả dưa hấu
let setFruits = {
  // Chỉ định những trái cây được tạo ra trong vài lần đầu tiên, có thể điền số lượng bất kỳ, 0 là nho, 9 là nửa quả dưa hấu
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// Làm trái cây đàn hồi hơn: false đổi thành bất kỳ số thập phân nào lớn hơn 0 và nhỏ hơn 1 (khuyên dùng 0.9)
let fruitQTan = false;

// Làm trái cây rơi chậm hơn: false đổi thành bất kỳ số nào lớn hơn 0, giá trị càng lớn lực cản càng lớn, rơi càng chậm (khuyên dùng 5)
let fruitSlowDown = false;

// Click vào icon góc trên bên phải để đổi trái cây: Đổi false thành true
let clickChangeFruit = true;

// Liên kết quảng cáo: false hoặc chuỗi trống nghĩa là không nhảy đến quảng cáo
let adLink = 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png';

// Sửa tiêu đề trang web: Thay thế "Tổng hợp Dưa Hấu Lớn"
document.getElementsByTagName("title")[0].innerText = 'Tổng hợp Dưa Hấu Lớn';

// Bật cửa sổ chọn điểm: Đổi false thành true
let selectModal = false;
