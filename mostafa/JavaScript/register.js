
var images =[]
images[0]="../Resource/clients.png";
images[1]="../Resource/worker.png"

var validationData=[]
var isValidation=new Array(false,false,false,false,false,false);
var flip=0;
var currentClient='user';
var accountSelected=false;

var governorate_=new Array('أسيوط','المنياء','الجيزة','القاهرة')
var region=[];
            region[1]=["عين شمس","المرج","شبرا","الشرابية","الساحل"]
            region[2]=["العمرانية","العجوزة","الدقي","الهرم","الوراق","بولاق الدكرور","6 أكتوبر"]
            region[3]=["العدوة","مغاغة","بني مزار","مطاي","سمالوط","أبو قرقاص","ملوي"]
            region[4]=["ديروط","القوصيه","أبنوب","منفلوط","أبو تيج","الغنايم","ساحل سليم"]

var workerJob = ['مراكز صيانة','فني تبريد','فني سخانات','فني غسلات','فني سيراميك','فني محارة','فني نجارة','فني نقاشة','فني سباكة','فني كهرباء']




function $(id){return document.getElementById(id)}

window.onload = function(){
    $('nameCorrect').style.visibility='hidden';
    $('addressCorrect').style.visibility='hidden';
    $('phoneCorrect').style.visibility='hidden';
    $('passwordCorrect').style.visibility='hidden';
    //$('regionCorrect').style.visibility='hidden';
    $('jobCorrect').style.visibility='hidden';
    //$('submit').disabled = true;
    
}

function select(id){
    
    if(id=='icon1')
    {
        $('icon1').style.height = 100;
        $('icon1').style.width= 100;

        $('icon2').style.height = 50;
        $('icon2').style.width = 50;
        $('workerRow').style.visibility='hidden'
        currentClient='client'
    }
    else{
        $('icon2').style.height = 100;
        $('icon2').style.width = 100;

        $('icon1').style.height = 50;
        $('icon1').style.width= 50;
        $('workerRow').style.visibility='visible'
        currentClient='worker'
    }
    console.log(currentClient)
    accountSelected=true;
    isValidation[0]=true
}
   
function getRegions()
    {
        $("region").length=0;
        var gov = $("governorate").value
        //console.log(region[gov])
        for(let i=0;i<region[gov].length;i++)
            {
            let option = document.createElement('option');
            option.text=region[gov][i]
            $("region").add(option)
             }
        isValidation[3]=true;
    }

function focusElement(id){
    $(id).style.backgroundColor='greenyellow'
}

function validation(id){
    switch(id){
        case 'name':
            if(!nameValidation(id))
                {
                    $(id).style.backgroundColor='red';
                }
                else
                {
                    $(id).style.backgroundColor='gainsboro'
                    $('nameCorrect').style.visibility='visible';
                    isValidation[1]=true;
                }
                    
            break;
        case 'address':
            if(!addressValidation(id)){
                console.log('red')
                $(id).style.backgroundColor='red';
            }
            else
                {
                    $('addressCorrect').style.visibility='visible';
                    $(id).style.backgroundColor='gainsboro';
                    isValidation[2]=true;
                }
            break;
        case 'phone':
            if(!phoneValidation(id)){
                $(id).style.backgroundColor='red';
            }
            else
               {
                $('phoneCorrect').style.visibility='visible';
                $(id).style.backgroundColor='gainsboro';
                isValidation[4]=true;
               }
            break;
        case 'password':
            if(!passwordValidation(id)){
                $(id).style.backgroundColor='red';

            }
            else
                {
                    $('passwordCorrect').style.visibility='visible';
                    $(id).style.backgroundColor='gainsboro';
                    isValidation[5]=true;
                }
            break;
    }
}

function nameValidation(id){
  let regExp=RegExp(/[\u0600-\u06FF]/)
    if(!regExp.test($(id).value))
        return false;
    else
        return true;
}

function addressValidation(id){
    var address=$(id).value
    console.log(address.length)
    if(address.length<7)
       return false;
    else
       return true;
}


function phoneValidation(id){
    console.log(id)
     let regExp=RegExp('^(010|012|011)[0-9]{9}')
     if(!regExp.test($(id).value))
        return false;
    else
        return true;
}

function passwordValidation(id){
    if($(id).value.length < 10)
        return false;
    else
        return true;

}

function enableSendData(){


    if(!isValidation[0])
        {
            alert("Please Select Account ???");
            return false;
        }
    else if(!isValidation[1] || !isValidation[2] ||!isValidation[3] ||!isValidation[4] || !isValidation[5])
       {
        alert("Please Enter Correct Data Or Missing Some Fields ???");
        return false;
       }
    else
       return true
}


function saveData(){

    var newAccount;
     if(enableSendData())
     {
         $('submit').disabled = true;
         console.log("data send")
         if(currentClient == 'worker')
           {
             // worker
                newAccount ={
                name:$('name').value,
                address:$('address').value,
                governorate:governorate_[$('governorate').options[$('governorate').selectedIndex].value],
                region:$('region').options[$('region').selectedIndex].value,
                phone:$('phone').value,
                password:$('password').value,
                job:workerJob[$('workerJob').options[$('workerJob').selectedIndex].value -1 ]
            }
           }
   else
           {
            // client
                newAccount ={
                name:$('name').value,
                address:$('address').value,
                governorate:governorate_[$('governorate').options[$('governorate').selectedIndex].value],
                region:$('region').options[$('region').selectedIndex].value,
                phone:$('phone').value,
                password:$('password').value,
                }
           }

           // // POST request
           var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
            xmlhttp.open('POST', 'http://m0stafaeladawy00.pythonanywhere.com/UsersAccounts/');

            // set `Content-Type` header
            xmlhttp.setRequestHeader('Content-Type', 'application/json');

            // send rquest with JSON payload
            xmlhttp.send(JSON.stringify(newAccount));
           setTimeout(()=>{
                window.location.replace("/mohamed ashrsf/html/Login.htm");
           },2000)
            
     }
}


