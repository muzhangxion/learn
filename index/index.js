window.onload = function(){

};

let ulClick = document.getElementById('ul_click')
ulClick.addEventListener('click', function(e) {
    let liList = document.getElementsByClassName('nav_item')
    let content = document.getElementsByClassName('switch_content')
    let event = e || window.event;
    let target = event.target;
    for(i = 0; i < liList.length; i++) {
        // 检查有没有某个class
        if(liList[i].classList.contains('nav_active')) {
            // 删除class
            liList[i].classList.remove('nav_active')
        }
    }
    // 动态添加class
    target.classList.add('nav_active')
    // 设置内容
    content[0].innerText = target.innerText
})
