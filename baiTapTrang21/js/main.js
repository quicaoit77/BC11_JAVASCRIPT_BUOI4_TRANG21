const tinhTienBtn = document.getElementById('tinhTienBtn');
const tenMatHang = document.getElementById('tenMatHang');
const soLuong = document.getElementById('soLuong');
const donGia = document.getElementById('donGia');
const outPut = document.getElementById('outPut');

var tongTien;

tinhTienBtn.addEventListener('click', e => {
    e.preventDefault()
    if (soLuong.value <= 0 || donGia.value <= 0) {
        alert('Số lượng và đơn giá phải là số dương và không đuợc bỏ trống. Hãy nhập lại!')
    } else {
        if (soLuong.value < 50) {
            tongTien = soLuong.value * donGia.value;

        } else if (soLuong.value >= 50 && soLuong.value <= 100) {
            tongTien = (49 * donGia.value) + (soLuong.value - 49) * donGia.value * 92 / 100;

        } else {
            tongTien = (49 * donGia.value) + (100 - 49) * donGia.value * 92 / 100 + (soLuong.value - 100) * donGia.value * 88 / 100;
        }
    }

    outPut.innerHTML = `<tt>
        <h3>QUÍ CAO FOOD MART</h3>
        <p>Xin chan thanh cam on quy khach da su dung dich vu cua chung toi!</p>
        <p class="text-muted">xx:xx:xx Thu xx, ngay xx thang xx nam xxxx</p>
        <h4>HOA DON</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Tên mặt hàng </th>
                    <th>Số lượng</th>
                    <th>Đơn giá (VND)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${tenMatHang.value}</td>
                    <td>${soLuong.value}</td>
                    <td>${Number(donGia.value).toLocaleString()}</td>
                </tr>
                <tr>
                    <td class="font-weight-bolder">Thanh tien</td>
                    <td></td>
                    <td class="font-weight-bolder">${tongTien.toLocaleString()} VND</td>
                </tr>
            </tbody>
        </table>
        <p class="text-muted m-0">Hoa don da xuat ra, khong duoc doi lai!</p>
        <p class="text-muted m-0">Kiem tra ky hoa don truoc khi roi khoi quay.</p>
        </tt>
    `
})