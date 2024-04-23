<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/menu.css">
    <link rel="stylesheet" href="estilos/style_btn.css">
    <link rel="stylesheet" href="estilos/formulario.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body bgcolor="#2D3250">
<nav class="menu">
    <ul>
        <li><a href="index.html">INICIO</a></li>
        <li><a href="practicasprogramacion.html">Prácticas de programación</a></li>
        <li><a href="practicasjs.html">Prácticas de JavaScript</a></li>
        <li><a href="actividades.html">Actividades de Aprendizaje</a></li>
        <li><a class="resacer" href="acercade.html">Acerca de mí</a></li>
    </ul>
</nav>
      <!--<input class="controles" type="text" name="name" id="nombre" placeholder="Ingrese su Nombre">
      <input class="controles" type="number"  name="number" id="numero" placeholder="Ingrese su telefono">
      <input class="controles" type="email" name="email" id="correo" placeholder="Ingrese su Correo">
      <input class="controles2" type="text" name="text" id="contraseña" placeholder="Ingrese su Mensaje">
      <input class="boton" type="submit" value="Enviar">-->
      
        <form action="" method="post">
            <h3 class="regg">Contacto</h3>
            <ul>
                <l1>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="user_name"/>
                </l1>
                <l1>
                    <label for="mail">Correo Electronico:</label>
                    <input type="text" id="mail" name="user_mail"/>
                </l1>
                <l1>
                    <label for="number">Telefono:</label>
                    <input type="number" id="number" name="user_number"/>
                </l1>
                <l1>
                    <label for="msg">Mensaje:</label>
                    <textarea id="masg" name="user_message"></textarea>
                </l1>
                <li class="button">
                    <button type="submit">Enviar</button>
                </li>
            </ul>
        </form>
</body>
</html>