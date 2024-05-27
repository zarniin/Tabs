//GET UI
let gettablinks = document.getElementsByClassName('tablinks'),
    gettabpanels = document.getElementsByClassName('tab-panel'),
    getbtnclose = document.querySelectorAll('.btn-close');


let tabpanels = Array.from(gettabpanels);
//console.log(tabpanels);

function gettab(evn,link){
 // console.log(eve.target);
 //console.log(evn.currentTarget);
 // console.log(link);


// Remove Active

   for(var x=0; x < gettabpanels.length; x++){

  //  console.log(x); // 0 to 3
    gettablinks[x].className = gettablinks[x].className.replace(' active','');

    //hide tabpenelbox form btn-close
    getbtnclose[x].addEventListener('click',function(){
      this.parentElement.style.display = "none";
    })

   }

  //Add active 

  // evn.target.className = "tablinks active";
 // evn.target.className += " active";
 // evn.currentTarget.className += " active";
 // evn.target.className = evn.target.className.replace('tablinks','tablinks active');
   evn.target.classList.add('active');

 //Hide Panel
   tabpanels.forEach(function(tabpanel){
    tabpanel.style.display = "none";
   });

 //Show Panel
  document.getElementById(link).style.display = "block";

}

 document.getElementById('autoclick').click();