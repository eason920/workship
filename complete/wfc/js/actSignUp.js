nua = navigator.userAgent;
// time
// if(nua.match(/(iPhone|iPod|Android)/)){ //1070910 AWD bug 
    // default
    $('.act-areabox-box').css({display:'none'});
    $('.layout-section-first').find('.act-areabox-box').css({display:'block'});
    $('.layout-section-first').find('.act-areabox').addClass('open');
    // action
    $('.act-areabox-switch').click(function(){
        $(this).siblings().slideToggle(300);
        $(this).parent().toggleClass('open');
    });
// }; //1070910 AWD bug

// attention
$(".act-attention").click(function(){
    $(this).toggleClass('open');
    $(this).siblings().slideToggle(300);
    // $('.act-attention-content').slideToggle(300);
    // $('.act-attention')
});
// check
$(".attention-check label").click(function(){
    var target = $(".attention-check input");
    if( !target.is(":checked") ){
        target.prop("checked", true);
    }else{
        target.prop("checked", false);
    }
});



/*======== 3. SELECT BOX ========*/
$('.select-drop').selectbox();


// HIDDEN TIME
function hideReTime(target){
    var $eq2 = target.next(),
        $eq3 = target.next().next(),
        $eq4 = target.next().next().next(),
        $strVal = target.find('.act-timebox-time').html(),
        $eq2Val = $eq2.find('.act-timebox-time').html(),
        $eq3Val = $eq3.find('.act-timebox-time').html(),
        $eq4Val = $eq4.find('.act-timebox-time').html();
    switch(true){
        case $eq2Val == $strVal && $eq3Val == $strVal && $eq4Val == $strVal:
            $eq4.addClass('is-repeat').find('.act-timebox-time').css({ 'color': '#fff' });
            $eq3.addClass('is-repeat').find('.act-timebox-time').css({ 'color': '#fff' });
            $eq2.addClass('is-repeat').find('.act-timebox-time').css({ 'color': '#fff' });
            break;
        case $eq2Val == $strVal && $eq3Val == $strVal:
            $eq3.addClass('is-repeat').find('.act-timebox-time').css({ 'color': '#fff' });
            $eq2.addClass('is-repeat').find('.act-timebox-time').css({ 'color': '#fff' });
            break;    
        case $eq2Val == $strVal:
            $eq2.addClass('is-repeat').find('.act-timebox-time').css({ 'color': '#fff' });
            break;
        default:
    }
};

$('.act-timebox-cap img').click(function(){
    if( $(this).attr('src').indexOf('c05') >= 0 ){
        $(this).parent().parent().addClass('is-capstr');
    }
}).click();

setTimeout(function(){
    hideReTime( $('.is-capstr') );
},500);
