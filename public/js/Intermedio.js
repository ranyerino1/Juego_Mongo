let btn = document.getElementById("btn")

function intermedio() {

    let respuesta1 = document.getElementById("res1").value
    respuesta1 = parseInt(respuesta1)
    let respuesta2 = document.getElementById("res2").value
    respuesta2 = parseInt(respuesta2)
    let respuesta3 = document.getElementById("res3").value
    respuesta3 = parseInt(respuesta3)
    let respuesta4 = document.getElementById("res4").value
    respuesta4 = parseInt(respuesta4)
    let respuesta5 = document.getElementById("res5").value
    respuesta5 = parseInt(respuesta5)

    if (respuesta1 == 3 && respuesta2 == 2 && respuesta3 == 4 && respuesta4 == 1 && respuesta5 == 1) {

        Swal.fire({ icon: 'success', title: 'Tus respuestas son correctas, has aprobado el primer nivel y puedes avanzar al nivel avanzado.' })

    }

    else {

        Swal.fire({ icon: 'error', title: 'Lastima has fallado, por favor verifica tus respuestas y vuelve a intentarlo.' })

    }

}

btn.addEventListener('click', intermedio)