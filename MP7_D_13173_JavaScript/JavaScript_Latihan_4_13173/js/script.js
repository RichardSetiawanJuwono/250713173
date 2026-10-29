
function fn_ValForm(){
var info;
var pilihan;
var valid=/^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;


    var sMsg = "";
    if (document.getElementById("nama").value == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (document.getElementById("email").value == ""){
        sMsg += "\n* Anda belum mengisikan email";
    }
    if(!valid.test(document.getElementById("email").value)){
        sMsg += "\n* Format Email Tidak Benar";
    }
    if (document.getElementById("umur").value == ""){
        sMsg += "\n* Anda belum mengisikan umur";
    }
    if (document.getElementById("kategori").value == ""){
        sMsg += "\n* Anda belum mengisikan kategori";
    }


if(document.getElementById("umur").value <=25){
    info="Peserta Mahasiswa";
}
else{
    info="Peserta Umum";
}

switch(document.getElementById("kategori").value){
            case "W":
                pilihan="Workshop";
                break;
            case "S":
                pilihan="Seminar";
                break;
            case "L":
                pilihan="Lomba";
                break;
        }
    
    if (sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        return true;
        print("Terima kasih " +document.getElementById("nama").value + "! Anda terdaftar di acara " + pilihan +" "+ info);
    }


    }