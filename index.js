var data = []

function PopulaTable(){
    if(Array.isArray(data)){
        $("#tblData tbody").html("")

        data.forEach(function(item){
            $("#tblData tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formacao}</td>
            </tr>`)
        })
    }
}

$(function (){
    data = JSON.parse(localStorage.getItem("__data__"))

    if(data){
        PopulaTable()
    }

})