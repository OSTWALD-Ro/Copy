'use strict';
    
// Constantes

// Variables

var var_if_exist_html_index__index;

var var_current_html__init = 0;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_window_width__index, var_window_height__index;
var var_window_diagonal__index;

var var_Pixels_Per_Inch__index = 1;
var var_inches__index;

var var_current_device__init;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_window_orientation__index;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_if_browser_OSTWALD__index;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_if_exists_html_Ostwald_Ro_television_1__index;
var var_if_exists_html_Ostwald_Ro_desktop_1__index;
var var_if_exists_html_Ostwald_Ro_tablet_1__index;
var var_if_exists_html_Ostwald_Ro_mobile_1__index;
var var_if_exists_html_Ostwald_Ro_watch_1__index;

// Funciones

function Pixels_Per_Inch(var_pixels__index)
{
  console.log("Pixels_Per_Inch__index()");

  var_inches__index = var_pixels__index * var_Pixels_Per_Inch__index;

  return var_inches__index;
}

function window_diagonal__index() 
{
  console.log("window_diagonal__index()");

  // ancho de la ventana en píxeles
  var_window_width__index = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  // alto de la ventana en píxeles
  var_window_height__index = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Calcula la longitud de la diagonal usando el teorema de Pitágororas C = raiz(A² + B²)
  var_window_diagonal__index = Math.sqrt(Math.pow(var_window_width__index, 2) + Math.pow(var_window_height__index, 2));

  console.log(var_window_diagonal__index + " = raíz((" + var_window_width__index + "^2) + (" + var_window_height__index + "^2))");

  // var_window_diagonal_inches__index = var_window_diagonal__index * var_Pixels_Per_Inch__index;

  // Redondea el resultado a dos decimales
  // var_window_diagonal_inches__index = var_window_diagonal_inches__index.toFixed(2);

  return var_window_diagonal__index;
}

function current_device__init() 
{
  console.log("current_device()");

  var_current_device__init = "desktop";

  return var_current_device__init;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function window_orientation__index() 
{
  console.log("window_orientation__index()");

  // Si la Pantalla esta en Modo Horizontal
  if (window.innerWidth > window.innerHeight) {
    console.log("window.innerWidth > window.innerHeight");

    var_window_orientation__index = "landscape";

  // Si la Pantalla esta en Modo Vertical
  } else if (window.innerHeight > window.innerWidth) {
    console.log("window.innerHeight > window.innerWidth");

    var_window_orientation__index = "portrait";

  // Si la Pantalla es Cuadrada
  } else {
    console.log("window.innerWidth = window.innerHeight");

    var_window_orientation = "square";
  }

  return var_window_orientation__index;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function if_browser_OSTWALD__index()
{
  // Comprobar si Ejecuta Desde el Navegador OSTWALD

  var_if_browser_OSTWALD__index = false;

  return var_if_browser_OSTWALD__index;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function OSTWALD_elements_html_1__index(html_number__index)
{
  // Si No es el Navegador OSTWALD, Crear Elementos para otra HTML
  if (!if_browser_OSTWALD__index())
  {
    // Crear Elementos HTML: <body> 1

    switch (html_number__index)
    {
      case "":
      break;
      case "":
      break;
      case "":
      break;
    }
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function if_exist_html_index__index()
{
  var_if_exist_html_index__index = true;
  return var_if_exist_html_index__index;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function delete_html__index()
{  
  /*
  while (document.html.firstChild) 
  {
    document.html.removeChild(document.html.firstChild);
  }
  */

  while (document.head.firstChild) 
  {
    document.head.removeChild(document.head.firstChild);
  }
  while (document.body.firstChild) 
  {
    document.body.removeChild(document.body.firstChild);
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function if_exists_html__index(current_device__init, html_number__index)
{
  switch (html_number__index)
  {
    case 1:
      switch (current_device__init)
      {
        case "television":
          // Comprobar si Existe HTML television 1
          if (
              if_exist_html_Ostwald_Ro_television_1__Ostwald_Ro_television_1()
             )
          {
            var_if_exists_html_Ostwald_Ro_television_1__index = true;
          } else
          {
            var_if_exists_html_Ostwald_Ro_television_1__index = false;
          }
          return var_if_exists_html_Ostwald_Ro_television_1__index;
        break;
        case "desktop":
          // Comprobar si Existe HTML Desktop 1
          if (
              if_exist_html_Ostwald_Ro_desktop_1__Ostwald_Ro_desktop_1()
             )
          {
            var_if_exists_html_Ostwald_Ro_desktop_1__index = true;
          } else
          {
            var_if_exists_html_Ostwald_Ro_desktop_1__index = false;
          }
          return var_if_exists_html_Ostwald_Ro_desktop_1__index;
        break;
        case "tablet":
          // Comprobar si Existe HTML tablet 1
          if (
              if_exist_html_Ostwald_Ro_tablet_1__Ostwald_Ro_tablet_1()
             )
          {
            var_if_exists_html_Ostwald_Ro_tablet_1__index = true;
          } else
          {
            var_if_exists_html_Ostwald_Ro_tablet_1__index = false;
          }
          return var_if_exists_html_Ostwald_Ro_tablet_1__index;
        break;
        case "mobile":
          // Comprobar si Existe HTML mobile 1
          if (
              if_exist_html_Ostwald_Ro_mobile_1__Ostwald_Ro_mobile_1()
             )
          {
            var_if_exists_html_Ostwald_Ro_mobile_1__index = true;
          } else
          {
            var_if_exists_html_Ostwald_Ro_mobile_1__index = false;
          }
          return var_if_exists_html_Ostwald_Ro_mobile_1__index;
        break;
        case "watch":
          // Comprobar si Existe HTML watch 1
          if (
              if_exist_html_Ostwald_Ro_watch_1__Ostwald_Ro_watch_1()
             )
          {
            var_if_exists_html_Ostwald_Ro_watch_1__index = true;
          } else
          {
            var_if_exists_html_Ostwald_Ro_watch_1__index = false;
          }
          return var_if_exists_html_Ostwald_Ro_watch_1__index;
        break;
      }
    break;
  }
}

function create_html__index(current_device__index, window_orientation__index, html_number__index)
{
  switch (html_number__index)
  {
    case 1:
      switch (window_orientation__index)
      {
        case "landscape":
          switch (current_device__index)
          {
            case "television":
              // Construir HTML television landscape 1
              create_html_Ostwald_Ro_television_landscape_1__index();
            break;
            case "desktop":
              // Construir HTML Desktop landscape 1
              create_html_Ostwald_Ro_desktop_landscape_1__index();
            break;
            case "tablet":
              // Construir HTML tablet landscape 1
              create_html_Ostwald_Ro_tablet_landscape_1__index();
            break;
            case "mobile":
              // Construir HTML mobile landscape 1
              create_html_Ostwald_Ro_mobile_landscape_1__index();
            break;
            case "watch":
              // Construir HTML watch landscape 1
              create_html_Ostwald_Ro_watch_landscape_1__index();
            break;
          }
        break;
        case "portrait":
          switch (current_device__index)
          {
            case "television":
              // Construir HTML television portrait 1
              create_html_Ostwald_Ro_television_portrait_1__index();
            break;
            case "desktop":
              // Construir HTML Desktop portrait 1
              create_html_Ostwald_Ro_desktop_portrait_1__index();
            break;
            case "tablet":
              // Construir HTML tablet portrait 1
              create_html_Ostwald_Ro_tablet_portrait_1__index();
            break;
            case "mobile":
              // Construir HTML mobile portrait 1
              create_html_Ostwald_Ro_mobile_portrait_1__index();
            break;
            case "watch":
              // Construir HTML watch portrait 1
              create_html_Ostwald_Ro_watch_portrait_1__index();
            break;
          }
        break;
        case "square":
          switch (current_device__index)
          {
            case "television":
              // Construir HTML television square 1
              create_html_Ostwald_Ro_television_square_1__index();
            break;
            case "desktop":
              // Construir HTML Desktop square 1
              create_html_Ostwald_Ro_desktop_square_1__index();
            break;
            case "tablet":
              // Construir HTML tablet square 1
              create_html_Ostwald_Ro_tablet_square_1__index();
            break;
            case "mobile":
              // Construir HTML mobile square 1
              create_html_Ostwald_Ro_mobile_square_1__index();
            break;
            case "watch":
              // Construir HTML watch square 1
              create_html_Ostwald_Ro_watch_square_1__index();
            break;
          }
        break;
      }
      
    break;
  }
}

function create_html_init__index(current_device__init, html_number__index)
{
  switch (html_number__index)
  {
    case 1:
      switch (current_device__init)
      {
        case "television":
          // init HTML television 1
          create_html_Ostwald_Ro_television_1_init__index();
        break;
        case "desktop":
          // init HTML Desktop 1
          create_html_Ostwald_Ro_Desktop_1_init__index();
        break;
        case "tablet":
          // init HTML tablet 1
          create_html_Ostwald_Ro_tablet_1_init__index();
        break;
        case "mobile":
          // init HTML mobile 1
          create_html_Ostwald_Ro_mobile_1_init__index();
        break;
        case "watch":
          // init HTML watch 1
          create_html_Ostwald_Ro_watch_1_init__index();
        break;
      }
    break;
  }
}

function create_html_1__index()
{
  // Crear Elementos HTML: <head> 1

  const style_1__index = document.createElement('style');  document.head.appendChild(style_1__index);  style_1__index.id = "style_1__index";
  style_1__index.textContent = `
    /* html */
  
    html {
      background-color: rgb( 31, 31, 31);

      border: ridge rgb(0, 0, 0);
      color: rgb(0, 0, 0);
      box-shadow: 0 0 1.5vh rgb(0, 0, 0);

      border-radius: 0px 0px 0px 0px;
      margin: solid;
      padding: solid;

      display: flex;
      flex-direction: row;

      visibility: visible;

      text-align: center;
      align-items: center;
      justify-content: center;

      align-self: center;

      height: 99vh;
      width: 100%;
      font-family: Arial, sans-serif;
    }
    
    html:hover {
      background-color: rgb( 191, 191, 191);
    }
  
    /* body */
  
    body {
      background-color: rgb( 0, 0, 0);

      border: ridge rgb(31, 31, 31);
      color: rgb(31, 31, 31);
      box-shadow: 0 0 1.5vh rgb(31, 31, 31);

      border-radius: 20px 20px 20px 20px;
      margin: solid;
      padding: solid;

      display: flex;
      flex-direction: column;

      visibility: visible;

      text-align: center;
      align-items: center;
      justify-content: center;

      align-self: center;

      height: 99.25%;
      width: 100%;
    }
    
    body:hover {
      border: double rgb(191, 191, 191);
      color: rgb(191, 191, 191);
      box-shadow: 0 0 1.5vh rgb(191, 191, 191);
    }

    `;

  // Crear Elementos HTML: <body> 1

  ////////////////////////////////

  /*
  // Si Existe, Crear Elementos para HTML 1 Ostwald Ro
  if (if_exists_html_Ostwald_Ro__Ostwald_Ro())
  {
    // Crear Elementos HTML: <body> 1

    create_html_Ostwald_Ro__Ostwald_Ro();
  }
  */

  ////////////////////////////////

  OSTWALD_elements_html_1__index();
}

function load_html_1__index()
{
  // Cargar Valores de Elementos Body 1
}

function save_html_1__index()
{
  // Guardar Valores de Elementos Body 1
}

function create_html_1_init__index()
{
  // Crear Elementos de inicio <html> 1

  ////////////////////////////////

  // Si Existe, Crear Elementos para HTML 1 Ostwald Ro
  if (if_exists_html_Ostwald_Ro_1__index())
  {
    // Crear Elementos HTML: <body> 1

    create_html_Ostwald_Ro_1__index();
  }
}

function create_html_init__index__index(html_number__index)
{
  /* Identificar Dispositivo y Verificar si existe pagina, 
     si existe Identificar Orientación y construir pagina */

  var_current_device__init = current_device__init();

  if (
    if_exists_html___index(var_current_device__init, html_number__index)
     )
  {
    var_current_html__init = html_number__index;
    create_html_init__index(var_current_device__init, window_orientation__index(), html_number__index);
  }
}

function create_html__index__index(html_number__index)
{
  /* Identificar Dispositivo y Verificar si existe pagina, 
     si existe Identificar Orientación y construir pagina */

  var_current_device__init = current_device__init();

  if (
    if_exists_html___index(var_current_device__init, html_number__index)
     )
  {
    delete_html__index();
    create_html__index(var_current_device__init, window_orientation__index(), html_number__index);
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function redirigir__index(page_Id__index, subpage_Id__index, error__index) {
  if (error__index === 0) {
    window.location.href = "https://ostwald-ro.github.io/" + page_Id__index + "/" + subpage_Id__index;
  } else {
    window.location.href = "https://ostwald-ro.github.io/Error/" + error__index;
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function init__index()
{
  //  Código Inicial  
}

function main__index() 
{
  //  Código Principal

  /*  Identificar dispositivo
      Verificar si Existe Pagina para redirigir a la version del Dispositivo
      bluce (si no Existe pagina versión Dispositivo) {
        si Existe, (saltar a) Identificar Orientación
        si no Existe, reintentar en la pagina descargada
        si aun no Existe, reintentar en 10 segundos la pagina de la web
      }

      Identificar Orientación

      si es dispositivo (var_dispositivo) y orientacion (var_orientación):
        create_html_(var_dispositivo)_(var_orientación)_1__index();
        create_html_(var_dispositivo)_(var_orientación)_1_init__index();

      ejemplo: 
      si es dispositivo escritorio y orientacion horizontal:
        create_html_desktop_horizontal_1__index();
        create_html_desktop_horizontal_1_init__index();
  */

  delete_html__index();
  
  create_html__index__index(1);
  create_html_init__index__index(1);
}

init__index();

document.addEventListener("DOMContentLoaded", function() 
{
  // Código Despues de Cargar la Pagina Completa

  window_orientation();

  // Ejecutar la función cuando cambie el tamaño de la ventana
  window.addEventListener("resize", function()
  {
    save_html__index__index(var_current_html__init)
  });

  main__index();
});
