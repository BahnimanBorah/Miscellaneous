function putValues(){
    var name = document.getElementById('student_name').value;
    var age = document.getElementById('student_age').value;
    var city = document.getElementById('city').value;
    var hobbies="";
    if(document.getElementById('painting').checked){
        hobbies+="#painting";
    }
    if(document.getElementById('dancing').checked){
        hobbies+="dancing#";
    }
    if(document.getElementById('sports').checked){
        hobbies+="sports#";
    }
    if( name.match(/[0-9]/g) || name=="" || name==null){
        document.getElementById('name_value').innerHTML="invalid";
    }else{
        document.getElementById('name_value').innerHTML=name;
    }
    if(age=="" || age==null || (isNaN(age))){
        document.getElementById('age_value').innerHTML="invalid";
    }else{
        document.getElementById('age_value').innerHTML=age;
    }
    if(city==null || city==""){
        document.getElementById('city_value').innerHTML="invalid";
    }else{
        document.getElementById('city_value').innerHTML=city;
    }
    if(hobbies=="" || hobbies==null){
        document.getElementById('hobbies_value').innerHTML="invalid";
    }else{
        document.getElementById('hobbies_value').innerHTML=hobbies;
    }
}