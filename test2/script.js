window.onbeforeunload = function () {return false;}

function numberOneTriangle(){

    var n = document.getElementById("number").value;
    if (n < 1 || n > 10){
        alert('sai, nhập lại')
        window.location.reload();
        return;
    }
    for (let i = 0; i < n; i++){
        for (let j = 0; j <= i; j++) {
            const p_tag = document.createElement("span");
            p_tag.innerHTML = "* ";
            document.body.appendChild(p_tag);
        }
        const br_tag = document.createElement("br");
        document.body.appendChild(br_tag);
    }
}