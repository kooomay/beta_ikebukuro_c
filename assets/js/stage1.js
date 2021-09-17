function answer(){
    var input_answer_1 = document.getElementById('ans_input_1'); 
    var input_answer_2 = document.getElementById('ans_input_2'); 
    var input_answer_3 = document.getElementById('ans_input_3'); 

    const Answer1 = input_answer_1.value ;
    const Answer2 = input_answer_2.value ;
    const Answer3 = input_answer_3.value ;
    
    if(Answer1==1&&Answer2==3&&Answer3==2){
        window.location.href = 'stage2.html';
    }
    else{
        window.location.href = 'stage3.html';
    }
}
