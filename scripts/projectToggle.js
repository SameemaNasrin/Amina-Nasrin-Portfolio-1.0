function changeProject(thisId, projectName, projectDesc, projectNo, baseSrc, backgroundSrc, floatSrc1, floatSrc2, floatSrc3, floatSrc4){
    let defaultNavClass = 'nav-rocket', defaultSrcLink = '/images/Project Page/Nav-small-rocket.svg', activeNavClass = 'nav-rocket-curr', activeSrcLink='/images/Project Page/Nav-big-rocket.svg';
    var arr = ['p1', 'p2', 'p3', 'p4', 'p5'];
    let len = arr.length;
    for(let i =0; i<len; i++){
        let temp = arr[i];
        let ele = document.getElementById(temp);
        ele.className = defaultNavClass;
        ele.src = defaultSrcLink;
    }
    let ele = document.getElementById(thisId);
    ele.className = activeNavClass;
    ele.src = activeSrcLink;
    //change the active project ui
    document.getElementById('project-name').innerHTML = projectName;
    document.getElementById('project-desc').innerHTML = projectDesc;
    document.getElementById('project-no').innerHTML = projectNo;
    document.getElementById('base-image').src = baseSrc;
    document.getElementById('background-image').src = backgroundSrc;
    document.getElementById('pic1').src = floatSrc1;
    document.getElementById('pic2').src = floatSrc2;
    document.getElementById('pic3').src = floatSrc3;
    document.getElementById('pic4').src = floatSrc4;
    if(thisId == 'p4'){        
        let pic1 = document.getElementById('pic1');
        pic1.style.maxHeight = 12 + 'vh';
        pic1.style.top = 330+'px';
        pic1.style.left = 35+'px';

        let pic2 = document.getElementById('pic2');
        pic2.style.maxHeight = 8 + 'vh';
        pic2.style.top = 360+'px';
        pic2.style.left = 270+'px';
        
        let pic3 = document.getElementById('pic3');
        pic3.style.maxHeight = 20 + 'vh';
        pic3.style.left = 250+'px';
        pic3.style.top = 150+'px';
        
        let pic4 = document.getElementById('pic4');
        pic4.style.maxHeight = 15 + 'vh';

        let pic5 = document.getElementById('pic5');
        pic5.style.visibility = 'visible';
        
    }
    else{
        let pic5 = document.getElementById('pic5');
        pic5.style.visibility = 'hidden';
    }
    if(thisId == 'p5'){        
        let pic1 = document.getElementById('pic1');
        pic1.style.maxHeight = 50 + 'vh';
        pic1.style.top = 65+'px';
        pic1.style.left = -100+'px';

        let pic2 = document.getElementById('pic2');
        pic2.style.maxHeight = 10 + 'vh';
        pic2.style.top = 300+'px';
        pic2.style.left = 255+'px';
        
        let pic3 = document.getElementById('pic3');
        pic3.style.maxHeight = 40 + 'vh';
        pic3.style.left = 130+'px';
        pic3.style.top = 40+'px';
        
        let pic4 = document.getElementById('pic4');
        pic4.style.maxHeight = 10 + 'vh';
        pic4.style.left = 50+'px';
        pic4.style.top = 120+'px';
        
        let pic5 = document.getElementById('pic5');
        pic5.style.visibility = 'hidden';
        
    }
    
}