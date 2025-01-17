export function removeVietnameseAccents(str) {
  return str
    .normalize("NFD") //chuẩn hóa về dạng tôt hợp
    .replace(/[\u0300-\u036f]/g, "") //Loại bỏ các dấu tổ hợp
    .replace(/đ/g, "d") //chuyển đổi in và hoa
    .replace(/Đ/g, "D");
}
