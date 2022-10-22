//question_area
		var question1=document.forms["quiz_tour"]["q1"];
		var question2=document.forms["quiz_tour"]["q2"];
		var question3=document.forms["quiz_tour"]["q3"];
		var question4=document.forms["quiz_tour"]["q4"];
		var question5=document.forms["quiz_tour"]["q5"];
		var question6=document.forms["quiz_tour"]["q6"];
		var question7=document.forms["quiz_tour"]["q7"];
		var question8=document.forms["quiz_tour"]["q8"];
		var question9=document.forms["quiz_tour"]["q9"];
		var question10=document.forms["quiz_tour"]["q10"];
		//variable to keep track of the points
		var correct=0;
		var total = 10;
		//Array for the questions
		var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
		
		
		
		
		function displayRadioValue(){
		
		//checking answer 
			if (question1.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question2.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question3.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question4.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question5.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question6.value=="r"){
				correct+=2;	
			}
			else{
				correct--;
			}
			if (question7.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question8.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question9.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
			if (question10.value=="r"){
				correct+=2;
			}
			else{
				correct--;
			}
		
			
			
			
			// stop timer
			clearInterval(timer);
			
			// disable form
			var elements = document.getElementById("quiz_tour").elements;
			for (var i = 0, len = elements.length; i < len; ++i) {
			elements[i].disabled = true;
			
			}
			
		//CSS for questions
		var q = document.getElementById("col");
		if (correct>=15){
		  document.querySelector("form").style.background= "#cbf1f5"
		}else if (correct>=10) {
		  document.querySelector("form").style.background= "#f5c0c0"
		}else if (correct>=5){
		  document.querySelector("form").style.background= "#94ebcd"
		}else{
		  document.querySelector("form").style.background= "#c5d7bd"
		}


        q.innerHTML = "You got " + correct + " Marks" +
        "<br />" + "You used " + (59 - Math.floor(total_seconds)) + " seconds";

        return false;

		
			
		}
		
	
		
		//Timer
		var total_seconds = 60 * 1;
        var c_minutes = parseInt(total_seconds / 60);
        var c_seconds = parseInt(total_seconds % 60);
        var timer;
		
		function CheckTime() {
		document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

		  if (total_seconds <= 0) {
			displayRadioValue();
		  } else {
			total_seconds = total_seconds - 1;
			c_minutes = parseInt(total_seconds / 60);
			c_seconds = parseInt(total_seconds % 60);
			timer = setTimeout(CheckTime, 1000);
		  }
		}
		timer = setTimeout(CheckTime, 1000);
		
		
