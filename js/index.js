FormObj=document.querySelector('form .form-question');


for(var i=1;i<=6;i++){
    FormObj.innerHTML+=`<div class="line"></div>`
    for(let j=1;j<=9;j++){
        FormObj.innerHTML+=`<div class="question-group-text">

        <span class="text-group-box">
            ${j}. tôi có tính tự lập
        </span>
        <div class="checkbox-question">
    
            <div class="answer-box">
                <input type="radio" name="answer-c${i}_${j}" id="c${i}_${j}-a" >
                <label for="c${i}_${j}-a">1</label>
            </div>
            <div class="answer-box">
                <input type="radio" name="answer-c${i}_${j}" id="c${i}_${j}-b">
                <label for="c${i}_${j}-b">2</label>
            </div>
            <div class="answer-box">
                <input type="radio" name="answer-c${i}_${j}" id="c${i}_${j}-c" checked>
                <label for="c${i}_${j}-c">3</label>
            </div>
            <div class="answer-box">
                <input type="radio" name="answer-c${i}_${j}" id="c${i}_${j}-d">
                <label for="c${i}_${j}-d">4</label>
            </div>
            <div class="answer-box">
                <input type="radio" name="answer-c${i}_${j}" id="c${i}_${j}-e">
                <label for="c${i}_${j}-e">5</label>
            </div>
        </div>`
    }

}
