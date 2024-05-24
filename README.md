# Proyecto de Backend para Gestión de Refugios de Animales

Este proyecto es una API de backend desarrollada con Node.js, JavaScript y MongoDB. La API permite gestionar usuarios, refugios (shelters) y animales. Está documentada con Swagger para facilitar su uso y comprensión.

## Contenidos

- [Descripción]
- [Características]
- [Modelos]
  - [Usuario (user)]
  - [Refugio (shelter)]
  - [Animal (animal)]
- [Instalación]
- [Documentación]
- [Contribuciones]
- [Aspectos pendientes de mejora]

## Descripción

Esta API proporciona endpoints para gestionar usuarios, refugios y animales. Los usuarios pueden registrarse e iniciar sesión. Cada refugio puede tener varios animales y cada animal está asociado a un refugio específico.

## Características

- Registro e inicio de sesión de usuarios.
- Gestión de refugios y animales.
- Asociaciones entre refugios y animales.
- Documentación interactiva con Swagger.

## Modelos

### Usuario (user)

{
  
  "user_name": "string",
  "user_password": "string",
  "user_email": "string",
  "user_city": "string",
  "user_rol": "string"
}

### Refugio (shelter)

{
  "shelter_name": "string",
  "shelter_location": "string",
  "shelter_size": "number",
  "animals": "id"
}

### Animal (animal)

{
  "animal_name": "string",
  "animal_race": "string",
  "animal_specie": "string",
  "animal_sex": "string",
  "animal_disease": "string",
  "animal_vaccine": "string",
  "animal_stirilize": "boolean",
  "animal_hospitalization": "boolean",
  "shelter": "id"
}


## Instalación

clona el repositorio:

git clone git@github.com:Mikelondrio/animal_shelter.git

Navega al directorio del proyecto:

cd animal_shelter

instala dependencias:

npm install

Crea un archivo .env y rellenalo con los elementos de .env.example .


## Documentación

La documentacion esta implementada con swagger editor.


# Aspectos pendientes de mejora.

Se tiene planteado añadir un front con React, e implementar en las rutas la autenticacion para toda la aplicacion.