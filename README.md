# ParkingNowDBdata
Aqui se encuentran los 3 archivos necesarios para la creacion , validacion e insercion de datos de nestro proyecto.:disguised_face::smiling_imp::disguised_face::smiling_imp::disguised_face::smiling_imp:	




Para poder ejecutar todos los comandos de manera satisfactoria deberas hacer lo siguiente: 
--
Dirijete a la carpeta principal donde se encuentran los documentos brindados en este repositorio (createcollections.js / InsertPARKINGNOW.js / ValidacionPARKINGNOW.js)

abre el cmd desde la carpeta en la que te encuentras
de esta forma:
> [!IMPORTANT]
>Si no se realiza este paso el mongosh no econtrara los archivos que desea cargar


![image](https://github.com/LowMathzzz/ParkingNowDBdata/assets/104606795/6413c4f2-bd2e-4167-a1d8-4903cf3b0c53)

Una vez dentro ejecutaras los siguientes comandos:
--
>[!IMPORTANT]
>Uno a la vez y en ese mismo orden: 

```
mongosh

use PARKINGNOW  

load("createcollections.js")

load("ValidacionPARKINGNOW.js")

load("InsertPARKINGNOW.js.")
```

En caso desee verificar que todos los scripts funcionaron
--
La primera forma : Ingresar a mongodbcompass mediante localhost , e ingresar a PARKINGNOW que deberia figurar con todos sus datos.

La segunda forma :

-Para ver si las colecciones se crearon ejecuta el siguiente comando :   
```
show collections
```

-Para ver las validaciones ingresadas y sus tipos , se usa este comando : 
```
 db.getCollectionInfos()
```

 -Y para verificar los datos de cada tabla lo que deberias hacer es un find individualmente, aqui brindo un ejemplo(en el ejemplo el nombre de la coleccion que deseas ver  va sin comillas): 
``` 
db."nombredelacollecionquedeseasver".find()
```


