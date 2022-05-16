// main()
// document.getElementById("box").addEventListener("click", main());
// Hàm xử lý chính
// function main(){
//     Exp_of_y = 10
//     Customer = 200
//     Staff = 20
//     Factory_acreage =3000
//     const arr_Exp_of_y = set_delay(Exp_of_y)
//     const arr_Customer = set_delay(Customer)
//     const arr_Staff = set_delay(Staff)
//     const arr_Factory_acreage = set_delay(Factory_acreage)
//     animate_process(Staff,arr_Staff['plus'],arr_Staff['delay'],'Staff',' NHÂN SỰ')
//     animate_process(Factory_acreage,arr_Factory_acreage['plus'],arr_Factory_acreage['delay'],'Factory_acreage',' m2')
//     animate_process(Exp_of_y,arr_Exp_of_y['plus'],arr_Exp_of_y['delay'],'Exp_of_y',' NĂM')
//     animate_process(Customer,arr_Customer['plus'],arr_Customer['delay'],'Customer','')
// }
// // hàm chạy hiệu ứng
// function animate_process(finalNumber, plus, delay,id_tag,str_end){
//     animateNumber(finalNumber,plus, delay,0, function (number) {
//         const round_number = Math.round(number)
//         const formattedNumber = '+'+round_number.toLocaleString()+str_end
//         document.getElementById(id_tag).innerText = formattedNumber
//     })
// }
// // Hàm xử lý delay để chạy số trong 2s
// function set_delay (finalNumber){
//     let delay = 2000 / finalNumber
//     let plus = 1
//     const arr = {'delay':'','plus':''}
//     if(delay>=17){
//         plus = 1
//     }else{
//         plus = Math.ceil(17/delay)
//         delay = 17
//     }
//     arr['delay']=delay
//     arr['plus']=plus
//     return arr
// }
// // Hàm animate
// function animateNumber(finalNumber, plus, delay, startNumber = 0, callback) {
//     let crNo = startNumber
//     const interval = window.setInterval(updateNumber, delay)
//     function updateNumber() {
//         if (crNo >= finalNumber) {
//             crNo=finalNumber
//         clearInterval(interval)
//         } else {
//         crNo+= plus
//         }
//         callback(crNo)
//     }
// // }

var process_status = true;
// Hàm nhận biết scroll đến phần intro thì chạy animation
// function scroll_to_intro() {
//     const element = document.getElementById("bg_intro");
//     let y = element.scrollTop();
//     if(y>=10){
//         main()
//     }
//   }
function mouse_leave_intro(){
    process_status==true
}
function main(){
    if(process_status==true){
        process()
        process_status = false
    }
    // process()
}
function process(){
    
    icon_size=0
    intro_width=0
    startNumber = 0
    Customer=200
    Exp_of_y=10
    Staff=20
    Factory_acreage=3000
    let icon_customer = document.getElementById("icon_customer")
    let icon_history = document.getElementById("icon_history")
    let icon_staff = document.getElementById("icon_staff")
    let icon_factory = document.getElementById("icon_factory")
    let icon_intro = document.getElementById("icon_intro")
    let intro_animate = document.getElementById("intro_animate")
    icon_customer.style.width = ''
    icon_customer.style.padding = ''
    icon_history.style.all = ''
    icon_staff.style.all = ''
    icon_factory.style.all = ''
    animate(Customer,Exp_of_y,Staff,Factory_acreage,icon_size=0,intro_width=0,startNumber = 0,function(crNo_Customer,crNo_Exp_of_y,crNo_Staff,crNo_Factory_acreage,crNo_icon_size,crNo_intro_width){
        display_increase(crNo_Customer,'Customer','')
        display_increase(crNo_Exp_of_y,'Exp_of_y','NĂM')
        display_increase(crNo_Staff,'Staff','NHÂN SỰ')
        display_increase(crNo_Factory_acreage,'Factory_acreage','m2')
        icon_customer.style.width = crNo_icon_size.toLocaleString() + 'px'
        icon_customer.style.padding = (84-crNo_icon_size).toLocaleString() + 'px'
        icon_history.style.width = crNo_icon_size.toLocaleString() + 'px'
        icon_history.style.padding = (84-crNo_icon_size).toLocaleString() + 'px'
        icon_staff.style.width = crNo_icon_size.toLocaleString() + 'px'
        icon_staff.style.padding = (84-crNo_icon_size).toLocaleString() + 'px'
        icon_factory.style.width = crNo_icon_size.toLocaleString() + 'px'
        icon_factory.style.padding = (84-crNo_icon_size).toLocaleString() + 'px'
        icon_intro.style.visibility = 'visible'
        // intro_animate_h2.style.width = crNo_intro_width.toLocaleString().replace('.','') + 'px'
        // intro_animate_img.style.width = crNo_intro_width.toLocaleString().replace('.','') + 'px'
        intro_animate_p.style.width = crNo_intro_width.toLocaleString().replace('.','') + 'px'
        if(crNo_intro_width==1140){
            intro_animate_p.style.overflow = 'visible'
        }
    }) 
}
function animate(Customer,Exp_of_y,Staff,Factory_acreage,icon_size=0,intro_width=0,startNumber = 0,callback){
    let crNo_icon_size = icon_size
    let crNo_intro_width = intro_width
    let crNo_Customer = startNumber
    let crNo_Exp_of_y = startNumber
    let crNo_Staff = startNumber
    let crNo_Factory_acreage = startNumber
    let Customer_stop = false
    let Exp_of_y_stop = false
    let Staff_stop = false
    let Factory_acreage_stop = false
    const delay = 10
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
        // crNo_Customer=crNo_Customer>Customer?Customer:crNo_Customer+1
        if(crNo_Customer>=Customer){
            crNo_Customer=Customer
            Customer_stop = true
        }
        if(crNo_Exp_of_y>=Exp_of_y){
            crNo_Exp_of_y=Exp_of_y
            Exp_of_y_stop = true
        }
        if(crNo_Staff>=Staff){
            crNo_Staff=Staff
            Staff_stop = true
        }
        if(crNo_Factory_acreage>=Factory_acreage){
            crNo_Factory_acreage=Factory_acreage
            Factory_acreage_stop = true
        }
        if (Customer_stop&&Exp_of_y_stop&&Staff_stop&&Factory_acreage_stop) {
            clearInterval(interval)
        } else {
            crNo_intro_width+=30
            crNo_icon_size+=4
            crNo_Customer+=plus_val(Customer)
            crNo_Exp_of_y+=plus_val(Exp_of_y)
            crNo_Staff+=plus_val(Staff)
            crNo_Factory_acreage+=plus_val(Factory_acreage)
        }
        if(crNo_icon_size>84){crNo_icon_size=84}
        if(crNo_intro_width>1140){crNo_intro_width=1140}
        callback(crNo_Customer,crNo_Exp_of_y,crNo_Staff,crNo_Factory_acreage,crNo_icon_size,crNo_intro_width)
    }
}
function plus_val(finalNumber){
    let plus = finalNumber/(3000/10)*3
    return plus
}
function display_increase(number,id_tag,str_end){

    const round_number = Math.round(number)
    const formattedNumber = '+ '+round_number.toLocaleString()+' '+str_end
    document.getElementById(id_tag).innerText = formattedNumber
}

// -----------------------------------------Xử lý scroll------------------------
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.body');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 300){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('menutora');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('menutora');
            trangthai="duoi300";}
        }
    
    })
})