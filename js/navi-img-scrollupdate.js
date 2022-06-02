
const gnb = document.querySelector('.gnb');
const gnbList= document.querySelectorAll('.gnb li');
const section= document.querySelectorAll('.section');


const updateScroll = () => {
    const nowScroll = window.scrollY;
    gnbList.forEach((li,index)=>{
        const selectedSection =section[index] ; 
        const start =  nowScroll + selectedSection.getBoundingClientRect().top
        const end  = start +  selectedSection.getBoundingClientRect().height
        console.log(nowScroll+"\n"+start+"\n"+end); 
        if(nowScroll>=start && nowScroll<end){
            //네비색상 업데이트 
            const nowColor = window.getComputedStyle(selectedSection).backgroundColor;
            gnbList.forEach((ele)=>{
                ele.style.color='#999'
              })
            gnbList[index].style.color=nowColor;
            //해당 섹션의 이미지 show 
            section.forEach((ele)=>{
                ele.children[0].classList.remove('up')
            })
            selectedSection.children[0].classList.add('up')
        } // 각섹션의 구간 사이 if 
    }) 
}


window.addEventListener('scroll',updateScroll)