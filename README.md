#Antes que nada ejecutamos el archivo "crearUsuario.js" con el siguinmte comando "node .\crearUsuario.js" 
y esto creara un usuario en la base de datos para asi poder buscar un usario que no sea y su contraseña no sea a null 

#Levantamos el servidor con el siguiete comando "node .\conection.js" 
y en el url http://localhost:3000/login podremos ver el formulario 

#Desde postman:
    hacemos una peticion POST a "http://localhost:3000/login" e ingresamos el siguiente body de forma JSON:
    {
        "username": { "$ne": null },
        "password": { "$ne": null }
    }

#Desde el formulario en la pagina en el mismo anterior link, 
en el campo usario y contraseña insertamos lo siguiente: { "$ne": null }