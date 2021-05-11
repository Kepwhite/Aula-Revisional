$(document).ready(
    function(){
        alert("concorda com o titulo professor")
        $.ajax({
            type: 'GET',
            url: "http://192.168.10.85:9000/users",
            success: function(data){
                $.each(data, function(i, user){
                    console.log(user.name)
                    $("#NomeDaTable").append(
                    "<tr><td>"+user.name+"<td/><td>"+user.name+"<td/><tr/>"
                )
            }
                )},
            error: function(data){
                console.log(data);
            }
        })
    }
)