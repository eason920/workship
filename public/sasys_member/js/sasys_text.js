// v 烤貝文字事件
const sasysText = function(val){
	//console.log('include text to textarea');
    var text = $('#Info').val();
    var msg = "";
    switch (val) {
        case 1: msg = "響底未接"; break;
        case 2: msg = "目前沒空，需再聯絡"; break;
        case 3: msg = "不需要"; break;
        case 4:
            msg = "首次帶上課內容：\r\n" +
            "首次上課日期 / 時間：\r\n" +
            "首堂教室名稱：\r\n" +
            "授課老師：\r\n" +
            "上課人數：\r\n" +
            "學習感受：\r\n" +
            "顧問反饋內容：\r\n" +
                "下次上課日期：";
            break;//七日內首次關懷
        case 5:
            msg = "登入次數：\r\n" +
            "文章閱讀篇數：\r\n" +
            "學生喜愛文章類型：\r\n" +
            "顧問推薦文章(文章程度)：\r\n" +
            "客戶習慣上課時間：\r\n" +
            "目前使用中的功能：\r\n" +
            "客戶意見反饋：\r\n" +
            "顧問建議教室：\r\n" +
                "客戶課程使用量：";
            break;//七日內二次關懷
        case 6:
            msg = "登入次數：\r\n" +
            "文章閱讀篇數：\r\n" +
            "課程使用量(至少3堂以上)：\r\n" +
            "喜歡的老師，原因為何：\r\n" +
            "客戶是否願意在FB or IG做學習分享：\r\n" +
            "客戶反饋：\r\n" +
            "下次上課時間：\r\n" +
                "是否願意推荐親友：";
            break;//七日內三次關懷
    }
    //console.log('Copy*' + val + '*' + msg + '*');
    $('#Label105').html("");//清空錯訊
    if (msg != "")
    {
        $('#Info').val(msg + "\r\n" + text);
    }
}

// v submit 時，名單等級、狀態、電訪筆記 三欄的錯訊處理
const sasysErr = function (type) {
    //console.log('error*' + type + '*');
    var msg = "";
    switch (type) {
        case 1: msg="名單等級、狀態，均為必填！"; break;
        case 2: msg = "電訪筆記至多可輸入一千個字元，請修改輸入內容！"; break;
        case 3: msg = "名單等級，為必填欄位！"; break;
    }
    $('#Label105').html(msg);
}

// v submit 時，送出post值
const sasysSuccess = function (lv, status, lv_New, status_New, Txt, indx, role_id) {
    $('#Label105').html("");//清空錯訊
    //console.log('success*' + lv + '*' + status + '*' + lv_New + '*' + status_New + '*' + Txt + '*' + indx + '*' + role_id + '*');

    $.ajax({
        'url': "SA_sys_member_ajax.aspx",
        'type': 'POST',
        'dataType': 'html',
        'data': {
            lv: lv,
            status: status,
            lv_New: lv_New,
            status_New: status_New,
            Txt: Txt,
            indx: indx,
            role_id: role_id
        },
        success: function (data) {
            alert("電訪筆記更新"+data);
            location.reload();
            /*
            if (data == "OK") {
                location.reload();//alert("Reload");
            } else {
                alert("ajax2 success:*" + data + "*");
                if (confirm("reload?")) location.reload();
            }
            */
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("ajax2 error:" + XMLHttpRequest.status);
            /*0 － （未初始化）還沒有呼叫send()方法
            1 － （載入）已呼叫send()方法，正在傳送請求
            2 － （載入完成）send()方法執行完成，已經接收到全部響應內容
            3 － （互動）正在解析響應內容
            4 － （完成）響應內容解析完成，可以在客戶端呼叫了
            */
            //alert(XMLHttpRequest.readyState);
            //alert(textStatus);
        }
    });
}
