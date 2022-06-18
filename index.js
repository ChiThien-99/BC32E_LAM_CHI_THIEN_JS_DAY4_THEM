// Bài tập 1
/**
 * ++Input:
 * date:string (giá trị người dùng nhập vào)
 * day:number;
 * month:number;
 * year:number;
 *
 * ++Progress:
 * Nếu ngày 1 thì trả về cuối tháng trước
 * Nếu ngày 1 tháng 1 thì trả về 31/12 năm trước
 * Nếu > ngày 1 thì lấy ngày - 1
 * ++Output:
 * dayBefore:string;
 * monthBefore:string;
 * yearBefore:string;
 */
document.getElementById("btnBefore").onclick = function () {
  var date = document.getElementById("myDate").value;
  var day = Number(date.slice(8, 10));
  var month = Number(date.slice(5, 7));
  var year = Number(date.slice(0, 4));
  var dayBefore = "";
  var monthBefore = "";
  var yearBefore = "";
  if (day == 1) {
    switch (month) {
      case 1:
        {
          dayBefore = "31";
          monthBefore = "12";
          yearBefore = String(year - 1);
        }
        break;
      case 2:
        {
          dayBefore = "31";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 3:
        {
          dayBefore = "28";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 4:
        {
          dayBefore = "31";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 5:
        {
          dayBefore = "30";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 6:
        {
          dayBefore = "31";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 7:
        {
          dayBefore = "30";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 8:
        {
          dayBefore = "31";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 9:
        {
          dayBefore = "31";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 10:
        {
          dayBefore = "30";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 11:
        {
          dayBefore = "31";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
      case 12:
        {
          dayBefore = "30";
          monthBefore = String(month - 1);
          yearBefore = String(year);
        }
        break;
    }
  } else {
    dayBefore = String(day - 1);
    monthBefore = String(month);
    yearBefore = String(year);
  }
  document.getElementById("outputBT1").innerHTML =
    dayBefore + "/" + monthBefore + "/" + yearBefore;
};
/**
 * ++Input:
 * date:string (giá trị người dùng nhập vào)
 * day:number;
 * month:number;
 * year:number;
 *
 * ++Progress:
 * Nếu ngày cuối tháng thì trả về ngày 1/1 tháng sau
 * Nếu ngày cuối tháng 12 thì trả về 1/1 năm sau
 * Nếu < ngày cuối tháng thì lấy ngày + 1
 * ++Output:
 * dayAfter:string;
 * monthAfter:string;
 * yearAfter:string;
 */
document.getElementById("btnAfter").onclick = function () {
  var date = document.getElementById("myDate").value;
  var day = Number(date.slice(8, 10));
  var month = Number(date.slice(5, 7));
  var year = Number(date.slice(0, 4));
  var dayAfter = "";
  var monthAfter = "";
  var yearAfter = "";
  dayAfter = String(day + 1);
  monthAfter = String(month);
  yearAfter = String(year);
  if (day == 31) {
    switch (month) {
      case 1:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        // continue inRa;
        break;
      case 3:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 5:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 7:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 8:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 10:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 12:
        {
          dayAfter = "1";
          monthAfter = "1";
          yearAfter = String(year + 1);
        }
        break;
    }
  } else if (day == 30) {
    switch (month) {
      case 6:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 9:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
      case 11:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
    }
  } else if (day == 28) {
    switch (month) {
      case 2:
        {
          dayAfter = "1";
          monthAfter = String(month + 1);
          yearAfter = String(year);
        }
        break;
    }
  }

  document.getElementById("outputBT1").innerHTML =
    dayAfter + "/" + monthAfter + "/" + yearAfter;
};
// Bài tập 2
/**
 * ++Input:
 * date:string (giá trị người dùng nhập vào)
 * month:number;
 * year:number;
 * ++Progress:
 * Dựa vào month mà trả về day tương ứng vd:Tháng 1 -> 31 ngày
 * Riêng năm nhuận (năm chia hết cho 4 và ko chia hết cho 100) thì tháng 2 có 29 ngày
 * ++Output:
 * day:number
 */
document.getElementById("tinhBT2").onclick = function () {
  var date = document.getElementById("date2").value;
  var month = Number(date.slice(5, 7));
  var year = Number(date.slice(0, 4));
  var day = 0;
  switch (month) {
    case 1:
      {
        day = 31;
      }
      break;
    case 2:
      {
        day = 28;
      }
      break;
    case 3:
      {
        day = 31;
      }
      break;
    case 4:
      {
        day = 30;
      }
      break;
    case 5:
      {
        day = 31;
      }
      break;
    case 6:
      {
        day = 30;
      }
      break;
    case 7:
      {
        day = 31;
      }
      break;
    case 8:
      {
        day = 31;
      }
      break;
    case 9:
      {
        day = 30;
      }
      break;
    case 10:
      {
        day = 31;
      }
      break;
    case 11:
      {
        day = 30;
      }
      break;
    case 12:
      {
        day = 31;
      }
      break;
  }
  if (month == 2 && year % 4 == 0 && year % 100 !== 0) {
    day = 29;
  }
  document.getElementById("outputBT2").innerHTML =
    "Tháng " + month + " có " + day + " ngày";
};
// Bài tập 3
/**
 * ++Input:
 * number:number (giá trị người dùng nhập vào)
 * hangTram:number;
 * hangChuc:number;
 * hangDonVi:number;
 * ++Progress:
 * Tách số nguyên 3 số thành hàng trăm,hàng chục,hàng đơn vị
 * Dựa vào số chuyển thành đoạn text bằng switch case
 * ++Output:
 * hangTramText:string;
 * hangChucText:string;
 * hangDonViText:string;
 */
document.getElementById("tinhBT3").onclick = function () {
  var number = Number(document.getElementById("number").value);
  var hangTram = Math.floor(number / 100);
  var hangChuc = Math.floor((number % 100) / 10);
  var hangDonVi = number % 10;
  var hangTramText = "";
  var hangChucText = "";
  var hangDonViText = "";
  switch (hangTram) {
    case 1:
      {
        hangTramText = "MỘT TRĂM";
      }
      break;
    case 2:
      {
        hangTramText = "HAI TRĂM";
      }
      break;
    case 3:
      {
        hangTramText = "BA TRĂM";
      }
      break;
    case 4:
      {
        hangTramText = "BỐN TRĂM";
      }
      break;
    case 5:
      {
        hangTramText = "NĂM TRĂM";
      }
      break;
    case 6:
      {
        hangTramText = "SÁU TRĂM";
      }
      break;
    case 7:
      {
        hangTramText = "BẢY TRĂM";
      }
      break;
    case 8:
      {
        hangTramText = "TÁM TRĂM";
      }
      break;
    case 9:
      {
        hangTramText = "CHÍN TRĂM";
      }
      break;
  }

  switch (hangChuc) {
    case 1:
      {
        hangChucText = "MƯỜI";
      }
      break;
    case 2:
      {
        hangChucText = "HAI MƯƠI";
      }
      break;
    case 3:
      {
        hangChucText = "BA MƯƠI";
      }
      break;
    case 4:
      {
        hangChucText = "BỐN MƯƠI";
      }
      break;
    case 5:
      {
        hangChucText = "NĂM MƯƠI";
      }
      break;
    case 6:
      {
        hangChucText = "SÁU MƯƠI";
      }
      break;
    case 7:
      {
        hangChucText = "BẢY MƯƠI";
      }
      break;
    case 8:
      {
        hangChucText = "TÁM MƯƠI";
      }
      break;
    case 9:
      {
        hangChucText = "CHÍN MƯƠI";
      }
      break;
  }
  switch (hangDonVi) {
    case 1:
      {
        hangDonViText = "MỘT";
      }
      break;
    case 2:
      {
        hangDonViText = "HAI";
      }
      break;
    case 3:
      {
        hangDonViText = "BA";
      }
      break;
    case 4:
      {
        hangDonViText = "BỐN";
      }
      break;
    case 5:
      {
        hangDonViText = "LĂM";
      }
      break;
    case 6:
      {
        hangDonViText = "SÁU";
      }
      break;
    case 7:
      {
        hangDonViText = "BẢY";
      }
      break;
    case 8:
      {
        hangDonViText = "TÁM";
      }
      break;
    case 9:
      {
        hangDonViText = "CHÍN";
      }
      break;
  }
  document.getElementById("outputBT3").innerHTML =
    hangTramText + " " + hangChucText + " " + hangDonViText;
};
// Bài tập 4
/**
 * ++Input:
 * nameSV1:string;
 * tdoX_SV1:number;
 * tdoY_Sv1:number;
 * ---------------
 * nameSV2:string;
 * tdoX_SV2:number;
 * tdoY_Sv2:number;
 * --------------
 * nameSV3:string;
 * tdoX_SV3:number;
 * tdoY_Sv3:number;
 * --------------
 * tdoX_TH:number;
 * tdoY_TH:number;
 * ++Progress:
 * Tính quãng đường từng bạn bằng công thức tính quãng đường dựa vào tọa độ nhà và trường
 * So sánh quảng đường 3 bạn => bạn nào xa nhất
 * ++Output:
 * nameXN:string => tên bạn có quãng đường xa nhất
 */
document.getElementById("tinhBT4").onclick = function () {
  // sinh viên 1
  var nameSV1 = document.getElementById("nameSV1").value;
  var tdoX_SV1 = Number(document.getElementById("tdoX_SV1").value);
  var tdoY_SV1 = Number(document.getElementById("tdoY_SV1").value);
  // sinh viên 2
  var nameSV2 = document.getElementById("nameSV2").value;
  var tdoX_SV2 = Number(document.getElementById("tdoX_SV2").value);
  var tdoY_SV2 = Number(document.getElementById("tdoY_SV2").value);
  // sinh viên 3
  var nameSV3 = document.getElementById("nameSV3").value;
  var tdoX_SV3 = Number(document.getElementById("tdoX_SV3").value);
  var tdoY_SV3 = Number(document.getElementById("tdoY_SV3").value);
  //Trường học
  var tdoX_TH = Number(document.getElementById("tdoX_TH").value);
  var tdoY_TH = Number(document.getElementById("tdoY_TH").value);
  //Độ dài quảng đường
  var qd1 = 0;
  var qd2 = 0;
  var qd3 = 0;
  //Bạn xa nhất
  var nameXN = "";
  qd1 = Math.sqrt(
    Math.pow(tdoX_TH - tdoX_SV1, 2) + Math.pow(tdoY_TH - tdoY_SV1, 2)
  );
  qd2 = Math.sqrt(
    Math.pow(tdoX_TH - tdoX_SV2, 2) + Math.pow(tdoY_TH - tdoY_SV2, 2)
  );
  qd3 = Math.sqrt(
    Math.pow(tdoX_TH - tdoX_SV3, 2) + Math.pow(tdoY_TH - tdoY_SV3, 2)
  );
  if (qd1 > qd2 && qd1 > qd3) {
    nameXN = nameSV1;
  } else if (qd2 > qd1 && qd2 > qd3) {
    nameXN = nameSV2;
  } else if (qd3 > qd1 && qd3 > qd2) {
    nameXN = nameSV3;
  }
  document.getElementById("outputBT4").innerHTML =
    "Bạn xa trường nhất là " + nameXN;
};
