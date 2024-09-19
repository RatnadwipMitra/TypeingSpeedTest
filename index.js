
document.addEventListener('DOMContentLoaded',fetchapi)

async function fetchapi() {
    let data;

    try {
        let url = 'https://dummyjson.com/quotes';
        let response =await fetch(url);
        data = await response.json();
          
        
    } catch (error) {
        let err = error;
        
    }
    finally{
        let quoteDisplay = document.getElementById('quote');
        let inputBox = document.getElementById('inputBox');
        let startButton=document.getElementById('startTest');
        let resultDisplay = document.getElementById('result-div');

        if(data.quotes){
            startButton.addEventListener('click',startTest);
            inputBox.addEventListener("input",checkInput);

            let correntQuote ;
            let startTime;

            function startTest(){
                inputBox.value='';
                resultDisplay.innerHTML='';
                const randomIndex = Math.floor(Math.random() * data.quotes.length);
                let randomcode = data.quotes[randomIndex];
                correntQuote = randomcode.quote;
                quoteDisplay.innerHTML=correntQuote;
                inputBox.removeAttribute('disabled')
                inputBox.focus();
                startTime=new Date().getTime();
                // console.log(correntQuote);

            }
            function checkInput(){
                const typeText = inputBox.value;
                if(correntQuote === typeText){
                    const endTime = new Date().getTime();
                    const timeTaken=(endTime - startTime) / 1000;
                    const wordsPerMinute = (typeText.split('').length / timeTaken) * 60;
                    inputBox.setAttribute('disabled','true');
                    resultDisplay.innerHTML=`you typed at ${wordsPerMinute.toFixed(2)} words per minute.`
                    // console.log(wordsPerMinute)
                }
                
            }
            // document.getElementById('quote').addEventListener('copy', function(e) {
            //     e.preventDefault(); // Prevents copy action
            //     alert("Copying is disabled!");
            // });

        }
    }
    
}