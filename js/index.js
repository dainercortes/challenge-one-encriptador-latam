function filtrarEntrada(event) {
    var textarea = event.target;
    var texto = textarea.value;

    // Eliminar mayúsculas y caracteres especiales
    var textoFiltrado = texto.replace(/[A-ZÁÉÍÓÚÜÑñ!@#$%^&*()]/g, '').toLowerCase();
    // Actualizar el valor del textarea con el texto filtrado
    textarea.value = textoFiltrado;
    if (textoFiltrado !== texto){
        alert('No se permiten mayúsculas ni caracteres especiales')
    }
  }

  window.addEventListener("DOMContentLoaded", function(event) {
    var textarea = document.getElementById("txta-entrada");
    textarea.addEventListener("input", filtrarEntrada);
  });

function mostrarEtiquetas(mostrar, ocultar){    
            document.getElementById('txta-salida').style.display = mostrar
            document.getElementById('btn-copiar').style.display = mostrar
            document.getElementById('h3-nme').style.display = ocultar
            document.getElementById('p-imessage').style.display = ocultar        
        if (screen.width > 768) {
            document.getElementById('image-muneca').style.display = ocultar
        }else {
            document.getElementById('image-muneca').style.display = 'none'        
        }
}

function agregarClase() {
    if(document.getElementById('image-muneca').style.display === 'none'){
        document.getElementById('section-result').classList.remove('section-centrar')
        document.getElementById('section-result').classList.add('section-expandir')
    }else {
        document.getElementById('section-result').classList.remove('section-expandir')
        document.getElementById('section-result').classList.add('section-centrar')
    }
}

function mostrar(texto, textoE){
    if(texto != '') {
        mostrarEtiquetas('initial', 'none')
        document.getElementById('txta-salida').value = textoE
        
    } else {    
        mostrarEtiquetas('none', 'initial')      
    }
}

function scrollEnd(){
      let rootElement = document.documentElement || document.body
      rootElement.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function encriptarTexto(){
    let texto = document.getElementById('txta-entrada').value.toLowerCase();

    //Rempleza las letras
    let textoEncriptado = texto.replace(/e/img, 'enter')
    .replace(/i/img, 'imes')
    .replace(/a/img, 'ai')
    .replace(/o/img, 'ober')
    .replace(/u/img, 'ufat')
 
    mostrar(texto, textoEncriptado)
    agregarClase()
    scrollEnd()
}

function desencriptarTexto(){
    let texto = document.getElementById('txta-entrada').value.toLowerCase();

    //Remplaza las palabras
    let textoDesencriptado = texto.replace(/enter/img, 'e')
    .replace(/imes/img, 'i')
    .replace(/ai/img, 'a')
    .replace(/ober/img, 'o')
    .replace(/ufat/img, 'u')

    mostrar(texto, textoDesencriptado)
    agregarClase()
    scrollEnd()
}

function copiarTexto(){
    let textoCopiado = document.getElementById('txta-salida')
    textoCopiado.select()
    document.execCommand('copy')
}