//Tạo đối tượng service tương tác backend
var svService = new SinhVienService();

var renderSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(res){
        //Tạo <tr> table
        //Tạo nội dung các thẻ tr
        console.log(res.data)
        var contentTable = '';
        for (var index = 0; index < res.data.length; index++){
            //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
            var sinhVien = res.data[index];
            //Từ đối tượng sinh viên tạo ra thẻ tr
            contentTable += `
                <tr>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.HoTen}</td>
                <td>${sinhVien.Email}</td>
                <td>${sinhVien.SoDT}</td>
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.MaSV}</td>
                </tr>
            `
        }
        //In ra giao diện
        document.getElementById('tblSinhVien').innerHTML = contentTable;
    }).catch(function(error){
        console.log(error.response.data)
    })
}

renderSinhVien();

var themSinhVien = function(){
    console.log('Thêm sinh viên');
}