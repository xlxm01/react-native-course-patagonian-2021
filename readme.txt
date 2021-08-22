Components de React
--------------------

- Image

- SafeAreaView:

- ScrollView: Es un contenedor de todo lo que queremos que se pueda deslizar o scrollear, para poder desplazar la barra.

- StyleSheet: Es para definir los estilos del proyecto.

- View: Similar a un div. SIempre debe tener definido style.

- React.Fragment: se utiliza asi, es un artilugio, agrupa mi render en una sola cosa.
                                <>
                                  Todo lo que se quiera colocar
                                </>
                porque todo retun en React me debe retornar un solo componente, que contenga todos los demás,
                y no mas de uno.
                No usar <View> para esto porque le agregamos un componente mas a la aplicacion.
                No es un componente ni un elemento visual.

Componentes Custom
------------------
1. Crear carpeta src/components
2. Crear una carpeta por cada componente, con el mismo nombre del componente (inicia en mayusculas)
3. Dentro tendremos 3 archivos (el de styles puede estar o no segun necesidad):
      Componente.tsx
      index.ts
      styles.ts
4. Los mas importantes son:
      Typography
      DefaultBotton
      Separator
      AlertModal
5. Crear un archivo index.ts dentro de src/components para exportar los componentes creados

Hooks (gancho)
-----
componente + funcion = estado interno
const [contador, setContador] = useState(estadoInicial)
contador-> es el estado del componente
setConytador-> funcion para cambiar de estado

Instalaciones
-------------

* Fonts

1. Crear la carpeta src/assets/fonts
2. Copiar las fuentes ahi
3. Crear un archivo en mi carpeta raiz llamado react-native.config.js
con el sgte codigo /* module.exports = {
  assets: ['./src/assets/fonts/'],
};*/
4. Ejecutar npx react-native link

* React-Navigation
Instalar con
  npm install @ react-navigation / native
  npm install react-native-screens react-native-safe-area-context
Para Android:
  Android/app/src/main/java/com/cursopatagonian...
  En el archivo
          MainActivity.java

  Agregar
        import android.os.Bundle;
          @Override
          protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(null);
          }
  Ultimo
    npm install @react-navigation/native-stack

 Ir a ios/cursopatagonian/AppDelegate.m
 y Agregar
        #if RCT_DEV
          #import <React/RCTDevLoadingView.h>
        #endif
y #if RCT_DEV
    [bridge moduleForClass:[RCTDevLoadingView class]];
  #endif

Estructura
----------
1. src/ assets/ fonts : con las fuentes del proyecto
2. src/ components : los ocmponentes creados para nuestro proyecto. Tiene un index
3. src/ navigation :
    MainNavigator.tsx
4. src/ screens :
5. src/ utils: Defino archivos
      constants.ts : con vbles globales del Sistema Operativo del dispositivo
      dimensions.ts : con vbles globales de tamaño del dispositivo
      theme.ts : con los colores de la app.
6. src/screens:Tiene index.
  y una carpeta por cada componente de una screens

Nota: las carpetas nop deben parecerse al flujo de navegacion.

Instalar y configurar el Husky.
------------------------------

1. Instalar las dependencias

  npm install husky@3.0.9 --save-dev
  npm install lint-staged --save-dev


2. Agregar el siguiente comando dentro de la sección de "scripts" en el package.json

"check-ts": "tsc --watch --noEmit --skipLibCheck"


3. Agregamos las siguientes configuraciones dentro del package.json

"husky": {
    "hooks": {
      "pre-commit": "tsc --noEmit --skipLibCheck && lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json}" : [
      "prettier \"src/**/*.{js,jsx,json,tsx,ts}\" --write",
      "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
    ]
  },

ICONOS
------

1. Instalar la libreria
  npm install --save react-native-vector-icons
  npm i -D @types/react-native-vector-icons
opcion con COCOA PODS

2. List of all available fonts to copy & paste in Info.plist

<string>MaterialIcons.ttf</string>

3. Agregar estas lineas a build.gradle en anroid/app

project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

Nota: Si la app funciono esta bien!

Buenas Practicas
----------------

1. Respecto a como importar - import
Importar de manera consistente primero las librerias de react
luego las librerias externas
etc

2. Respecto a las tabs (iconos de abajo)
Un solo tab no t iene sentido
2 o hasta 4 esta bien
si son 5 hay que esconder el titulo de la tab

TIPS
----

1. En proyectos reales de la industris:
No usar los header de react navigator, en lo posible. Ni de cualquier navegacion. Son bonitos
se acomodan automaticamente, etcProblema son librerias q se mantienen actualizando mucho, cambian muchas cosas,
entre menos fictures use de cada libreria es mejor
asi el pryecto queda mas desacoplado e independiente de la libreria misma.

2. Que se evalua en las pruebas tecniocas
- Que tan limpio es el codigo
- Estructura
- Buenas Practicas estan siguiendo y cuales no
- Errores

