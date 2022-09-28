function showdata(){
    var name = document.getElementById('name');
    var father = document.getElementById('fathername');
    var student  = document.getElementById('studentid');
    var math = document.getElementById('math');
    var urdu = document.getElementById('urdu');
    var English = document.getElementById('English');

    var nname = document.getElementById('nname');
    var nfather = document.getElementById('nfather');
    var nstudent = document.getElementById('nstudent');
    var nmath = document.getElementById('nmath');
    var nurdu = document.getElementById('nurdu');
    var nEnglish = document.getElementById('nEnglish');

    nname.innerHTML = name.value;
    nfather.innerHTML = fathername.value;
    nstudent.innerHTML = studentid.value;
    nmath.innerHTML = math.value;
    nurdu.innerHTML = urdu.value;
    nEnglish.innerHTML = English.value;
}    

// function showdata() {
//     var name = document.getElementById('txtname');
//     var fname = document.getElementById('txtfname');
//     var id    = document.getElementById('txtid');
//     var mths = document.getElementById('txtmths');
//     var phy = document.getElementById('txtphy');
//     var urdu = document.getElementById('txturdu');

//     var nname = document.getElementById('nname');
//     var nfname = document.getElementById('nfname');
//     var nid    = document.getElementById('nid');
//     var nmths = document.getElementById('nmths');
//     var nphy = document.getElementById('nphy');
//     var nurdu = document.getElementById('nurdu');            

//     nname.innerHTML = name.value;
//     nfname.innerHTML = fname.value;
//     nid.innerHTML = id.value;
//     nmths.innerHTML = mths.value;
//     nphy.innerHTML = phy.value;
//     nurdu.innerHTML = urdu.value;
// }



