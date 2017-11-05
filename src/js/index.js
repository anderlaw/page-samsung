(function(){
    //添加导航hover事件
    let navList = document.querySelectorAll('nav .list li');
    for(let item of navList){      
        item.onmouseover = ()=>{
            for(let item of navList){
                item.className = ''
            }
            item.className = 'active'
        }
    }
    //添加工具条的搜索hover效果
    let tabList = document.querySelectorAll('#service .tab li');
    for(let item of tabList){      
        item.onmouseover = ()=>{
            for(let item of tabList){
                item.className = ''
            }
            item.className = 'active'
        }
    }
})()