$(document).ready(function () {
    //Nhấn mua
    $('#buy').click(function () {
        var alertString = '';
        var fullName = $('input#fullName').val();
        var quantity = $('input#quantity').val();
        var date = $('input#timeReceive').val();
        var methodToPay = document.getElementsByName('payment');
        console.log(methodToPay[0].checked);
        if (fullName && quantity && quantity > 0 && date && (methodToPay[0].checked === true || methodToPay[1].checked === true)) {
            $('#validateAlert').text('Đăng kí mua hàng thành công!');
        } else {
            if (fullName === '') {
                alertString += 'Họ không được để trống <br/>';
            }

            if (quantity === '' && quantity <= 0) {
                alertString += 'Số lượng không được để trống và phải lớn hơn 0 <br/>';
            }

            if (date === '') {
                alertString += 'Ngày không được để trống <br/>';
            }

            if (methodToPay[0].checked === false && methodToPay[1].checked === false) {
                alertString += 'Bạn phải chọn một kiểu thanh toán <br/>';
            }

            $('#validateAlert').html(alertString);
        }
    });

    //Nhấn hủy
    $('#cancel').click(function () {
        $('#validateAlert').html('');
    });

    //Quay số
    $('#play').click(function () {
        var a = parseInt(Math.round(Math.random() * 9) + 1);
        var b = parseInt(Math.round(Math.random() * 9) + 1);
        var c = parseInt(Math.round(Math.random() * 9) + 1);
        var sum = a + b + c;
        $('div.content__number:first-child').text(a);
        $('div.content__number:nth-child(2)').text(b);
        $('div.content__number:last-child').text(c);
        $('#resultGame').text(sum);
    });

    //Quay xúc sắc

    function getImage(n) {
        return `/Images/dice-${n}.png`;
    }
    $('#playDice').click(function () {
        var a = Math.round(Math.random() * 5) + 1;
        var b = Math.round(Math.random() * 5) + 1;
        var c = Math.round(Math.random() * 5) + 1;
        var sum = a + b + c;
        document.querySelector('.content__number:first-child>img').setAttribute('src', getImage(a));
        document.querySelector('.content__number:nth-child(2)>img').setAttribute('src', getImage(b));
        document.querySelector('.content__number:last-child>img').setAttribute('src', getImage(c));
        $('#resultGame').text(sum);
    });
});