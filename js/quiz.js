(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = 
    [
      {
          "question": "Wie viel Elektroschrott wird durch eine Transaktion verursacht",
          "answers": {
          "a": "135 Gramm",
          "b": "20 Gramm",
          "c": "3 Gramm"
          },
          "correctAnswer": "a"
      },
      {
          "question": "Wie viel Prozent des Bitcoin-Mining stammen aus erneuerbarer Energie?",
          "answers": {
          "a": "30%",
          "b": "60%",
          "c": "10%"
          },
          "correctAnswer": "b"
      },
      {
          "question": "Wie viel Strom wird jährich für das Bitcoin-Mining aufgewendet?",
          "answers": {
          "a": "26122 KW/h ",
          "b": "247000 KW/h ",
          "c": "343 KW/h "
          },
          "correctAnswer": "b"
      },
      {
          "question": "Was ist Cryptomining?",
          "answers": {
          "a": "Crypto transaktionen verwaltung",
          "b": "Berechnen von crypto blockchains",
          "c": "Bezeichnet das Abschürfen und Verifizieren digitaler Währungen"
          },
          "correctAnswer": "c"
      },
      {
          "question": "Warum ist Cryptomining hauptsächlich schädlich für das Klima?",
          "answers": {
          "a": "Kryptowährungen brauchen viel Öl, um verwendet zu werden",
          "b": "Schürfen von Kryptowährungen verbraucht extrem viel Strom.",
          "c": "Nicht erneuerbare Energie "
          },
          "correctAnswer": "b"
      },
      {
          "question": "Wie viel Energie braucht eine Überweisung von Bitcoin? ",
          "answers": {
          "a": "1000 W/h",
          "b": "Wie ein Schweizer, in 1.5 Monaten",
          "c": "Wie eine Windmühle, pro Woche"
          },
          "correctAnswer": "b"
      },
      {
          "question": "Wie viel vom gesamten Stromverbrauch wird vom Bitcoin-Mining verbraucht? ",
          "answers": {
          "a": "15.69%",
          "b": "10.97%",
          "c": "23.36%"
          },
          "correctAnswer": "a"
      },
      {
          "question": "Prozentsteigung von nachhaltigem Stromix für Bitcoin-Minig von Januar-März? ",
          "answers": {
          "a": "99.99%",
          "b": "16.9%",
          "c": "21.6%"
          },
          "correctAnswer": "c"
      },
      {
          "question": "Um wieviel Prozent sank der Energieverbrauch zur Gewinnung von Bitcoin?",
          "answers": {
          "a": "25%",
          "b": "20%",
          "c": "22%"
          },
          "correctAnswer": "a"
      },
      {
          "question": "Wie viel Prozent stieg die Mining-Effizienz?",
          "answers": {
          "a": "62%",
          "b": " 63%",
          "c": "78%"
          },
          "correctAnswer": "a"
      },
      {
          "question": "Eine Bitcoin-Transaktion braucht so viel Strom wie ein US-Haushalt in ...",
          "answers": {
          "a": "2 Tagen",
          "b": " 23 Tagen",
          "c": "10 Tagen"
          },
          "correctAnswer": "b"
      }
  ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  