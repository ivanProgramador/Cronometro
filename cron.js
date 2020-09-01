"user strict" // entender essa diretiva

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 50; // mil milisegunos vale 1 minuto
var cron;




function start(){
   
      cron = setInterval(() => {timer();}, tempo);
}


function pause(){

      clearInterval(cron);

}


function stop(){

	  clearInterval(cron);
      
      var hh = 0;
      var mm = 0;
      var ss = 0;

      document.getElementById('counter').innerText = '00:00:00';

}


function timer(){

    ss ++;

    if(ss == 60){

    	ss = 0;

    	mm++;


    }



	 var format = (hh < 10? '0'+hh:hh) + ':' + (mm < 10 ? '0' + mm:mm) + ':' + (ss <10 ? '0' + ss:ss);

	

     document.getElementById('counter').innerText = format;


} 