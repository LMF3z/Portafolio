document.addEventListener('DOMContentLoaded', () => {

  // initials variables

  const refActual_yeat = document.querySelector('#actual_year');

  const date = new Date()
  const actual_year = date.getFullYear()

  refActual_yeat.innerHTML = actual_year;

  // VARIABLES DEL MODAL
  const contiene_miniaturas = document.querySelector('#contiene_miniaturas')
  const modal = document.querySelector('#contiene_video_one')
  const contiene_video = document.querySelector('#video_modal')
  const video = document.querySelector('#videoTag')
  const btn_cerrar = document.querySelector('#btn_cerrar')

  // eventos para el modal

contiene_miniaturas.addEventListener('click', (e) => {
  const { localName, id } = e.target

  if(localName == 'img'){

    modal.style.opacity = "1"
    modal.style.visibility = "visible"
    contiene_video.classList.toggle("modal_close")
    video.src = "videos/"+id+".mp4"
    video.play()

  }

})

  video.addEventListener('ended', e => {
    video.src = ""
    contiene_video.classList.toggle("modal_close")
    setTimeout(() => {
      modal.style.opacity = "0"
      modal.style.visibility = "hidden"
    }, 700)
  })

  // CERRAR modal

  btn_cerrar.addEventListener('click', () => {
    video.src = ""
    contiene_video.classList.toggle("modal_close")

    setTimeout(() => {
      modal.style.opacity = "0"
      modal.style.visibility = "hidden"
    }, 500)
  })

  window.addEventListener('click', (e) => {
    // console.log(e.target)

    if(e.target == modal){
      video.src = ""
      contiene_video.classList.toggle("modal_close")

      setTimeout(() => {
        modal.style.opacity = "0"
        modal.style.visibility = "hidden"
      }, 500)
    }
  })

// MODAAL ------------------------------

// BODY

const barra = document.querySelector('.barra')
const btnUp = document.querySelector('#subir')


const form =  document.querySelector('#form_contact')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const newForm = new FormData(form)
  validar(newForm)

})

const progressBar = () => {
  let scrollTop = document.documentElement.scrollTop
  let scrollTotal = document.documentElement.scrollHeight
  let scrollClient = document.documentElement.clientHeight
  let windowHeight = scrollTotal - scrollClient
  let porcentaje = scrollTop/windowHeight * 100

  barra.style.width = porcentaje+'%'
}


btnUp.style.display = 'none'
window.addEventListener('scroll', () => {

  progressBar()

  let medida = window.scrollY

  if(medida > 600){
    btnUp.style.display = 'block'
  }else if(medida < 600){
    btnUp.style.display = 'none'
  }
})

btnUp.addEventListener('click', () => {
 window.scroll(x = 0, y=0)
})


});

const validar = form =>{
  if(form.get('name_contac') === '' || form.get('lastname_contac') === '' ||
    form.get('correo_enterprise') === '' || form.get('mensaje') === ''){
      alert('don´t forget to fill all the fields')
      return null
    }else if (!isNaN(form.get('name_contac')) || !isNaN(form.get('lastname_contac')) ||
              !isNaN(form.get('correo_enterprise')) ||
              !isNaN(form.get('mensaje')) ) {

        alert('No numerican fields')
        return null

    }else if(!isNaN(form.get('name_enterprise')) && form.get('name_enterprise') != ''){

      alert('No numerican fields')
      return null

    }else{
      // FALTA AGREGAR LA VALIDACION DE CORREO VALIDO
      enviarMensaje(form)
    }
}

const enviarMensaje = async form =>{
  // enviar datos al archivo php que se encarga de enviar los corrreos
  document.querySelector('#form_contact').reset()

  alert('At this time this form is maintenance. Please, if you want to contact me, go to the link to my curriculum vitae.');

}
