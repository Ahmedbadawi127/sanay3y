
var images =[]
images[0]="../Resource/clients.png";
images[1]="../Resource/worker.png"

var validationData=[]
var isValidation=true;
var flip=0;
var currentClient='user';

class Person{
    constructor(name,address,governorate,region,phone,password,job=null){
        this.name=name;
        this.address=address;
        this.governorate=governorate;
        this.region=region;
        this.phone=phone;
        this.password=password;
        this.job=job;
    }
}

function $(id){return document.getElementById(id)}

window.onload = function(){
    $('workerTitle').style.display='none';
    $('workerJob').style.display='none';
   // $('workerError').style.display='none';

}

function flipIcon(){
        if(flip == 0)
            {
                $('user').src=images[++flip];
                $('workerTitle').style.display='';
                $('workerJob').style.display='';
                currentClient='worker'
               // $('workerError').style.display='';
            }
        else
           {
                $('user').src=images[--flip];
                $('workerTitle').style.display='none';
                $('workerJob').style.display='none';
                currentClient='user'
                //$('workerError').style.display='none';
           }
}


function clearAstric(id){
   $(id).nextSibling.innerText=" ";
   
}

function validation(id){
    switch(id){
        case 'name':
            nameValidation(id);
            break;
        case 'address':
            addressValidation(id);
            break;
        case 'phone':
            phoneValidation(id);
            break;
        case 'password':
            passwordValidation(id);
            break;
        case 'workerTxt':
            professionValidation(id);
            break;
    }
   
}

function nameValidation(id){
  // let regExp=RegExp('^([ء-ي]|\W)*[ء-ي]$')
  let regExp=RegExp('^([ء-ي]|\W)*')
   console.log($(id).value)
    if(!regExp.test($(id).value))
        isValidation=false;

}

function addressValidation(id){
    var address=$(id).value
    if(address.length<10)
       isValidation=false;

}


function phoneValidation(id){
    console.log(id)
     let regExp=RegExp('^(010|012|011)[0-9]{9}')
     if(!regExp.test(phone))
        isValidation=false;
}

function passwordValidation(id){
    if($(id).value.length < 10)
        isValidation=false;

}

function professionValidation(id){
    

}

function saveData(){

    
    var name=$('name').value;
    var address=$('address').value;
    var governorate=$('governorate').options[$('governorate').selectedIndex].value;
    var region = $('region').options[$('region').selectedIndex].value;
    var phone = $('phone').value;
    var password=$('password').value;
    var workerJob;
    if(currentClient == 'worker')
         workerJob=$('workerJob').options[$('workerJob').selectedIndex].value;
    else
        workerJob=null

        client = new Person(name,address,governorate,region,phone,password,workerJob);
        console.log(client)


}
