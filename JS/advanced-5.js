$(document).ready(function () {
    //Trang chủ 
    $('#home').click(function () {
        $('.content__1').css('display', 'block');
        $('.content__2').css('display', 'none');
    });

    //Trang thống kê
    $('#statist').click(function () {
        $('.content__1').css('display', 'none');
        $('.content__2').css('display', 'block');
    });

    //Tạo mảng
    $('#init').click(function () {
        var initValue = $('input#input_value').val();
        if (initValue !== '') {
            var result = "";
            for (var i = 0; i < initValue; i++) {
                result += Math.round(Math.random() * 50) + 1;
                if (i < initValue - 1) {
                    result += ', ';
                }
            }
            $('input#output_value').val(result);
        }
    });
    
    //Xóa các số chẵn
    $('#del_even').click(function () {
        var listOdd = [];
        var indexOdd = 0;
        var resultString = $('#output_value').val();
        resultString = resultString.split(', ');
        for (var i = 0; i < resultString.length; i++) {
            if (resultString[i] % 2 != 0) {
                listOdd[indexOdd++] = resultString[i];
            }
        }
        listOdd = listOdd.join(', ');
        console.log(listOdd);
        $('input#output_value').val(listOdd);
    });

    //Quay trái
    $('#turn_left').click(function () {
        var resultString = $('#output_value').val();
        resultString = resultString.split(', ');
        resultString.push(resultString.shift());
        resultString = resultString.join(', ')
        $('input#output_value').val(resultString);
    });

    //Quay phải
    $('#turn_right').click(function () {
        var resultString = $('#output_value').val();
        resultString = resultString.split(', ');
        resultString.unshift(resultString.pop());
        resultString = resultString.join(', ')
        $('input#output_value').val(resultString);
    });
});