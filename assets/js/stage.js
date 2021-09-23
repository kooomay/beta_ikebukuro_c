var storyNum =0;

function answer_0()
        {
          // "こうもり"の部分を変えて答えを変更
          if(form.ans_input.value=="くも"){
          window.location.href = 'loading-ok.html';
        }
          else{
           window.location.href = 'loading-return.html';
          }
        }

function answer_1(){
    var input_answer_1 = document.getElementById('ans_input_1'); 
    var input_answer_2 = document.getElementById('ans_input_2'); 
    var input_answer_3 = document.getElementById('ans_input_3'); 

    const Answer1 = input_answer_1.value ;
    const Answer2 = input_answer_2.value ;
    const Answer3 = input_answer_3.value ;
    
    if(Answer1==3&&Answer2==1&&Answer3==2){
        window.location.href = 'stage2.html';
        console.log(storyNum +=1);
    }
    else{
        window.location.href = 'else-1.html';
    }
}

function answer_2()
        {
          // "こうもり"の部分を変えて答えを変更
          if(form.ans_input.value=="kumonoito"){
          window.location.href = 'stage3.html';
          console.log(storyNum +=1);
        }
          else{
           window.location.href = 'else-2.html';
          }
        }

function answer_3()
        {
          // "こうもり"の部分を変えて答えを変更
          if(form.ans_input.value=="さくじょ"){
          window.location.href = 'stage1.html';
          console.log(storyNum +=1);
        }
          else{
           window.location.href = 'else-3.html';
          }
        }


//初期表示は非表示
// document.getElementById("story-0").style.display ="none";
// document.getElementById("story-1").style.display ="none";
// document.getElementById("story-2").style.display ="none";
// document.getElementById("story-3").style.display ="none";

window.onload = function(){
    const s0 = document.getElementById("story-0");
    const s1 = document.getElementById("story-1");
    const s2 = document.getElementById("story-2");
    const s3 = document.getElementById("story-3");

    if(storyNum==0){
        s0.style.display="block";
    }
    if(storyNum>=1){
        s1.style.display="block";
    }
    if(storyNum>=2){
        s2.style.display="block";
    }
    if(storyNum>=3){
        s3.style.display="block";
    }
}

// function none(){
//     const p1 = document.getElementsById("navigate");
//     if(p1.style.display=="block"){
//     p1.style.display ="none";
//     }
// }



// function clickBtn1(){
// 	const p1 = document.getElementById("story-0");

// 	if(p1.style.display=="block"){
// 		// noneで非表示
// 		p1.style.display ="none";
// 	}else{
// 		// blockで表示
// 		p1.style.display ="block";
// 	}
// }

