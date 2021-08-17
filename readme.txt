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

Estructura
----------
1. src/ assets/ fonts : con las fuentes del proyecto
2. src/ components : los ocmponentes creados para nuestro proyecto
3. src/ navigation :
4. src/ screens :
5. src/ utils: Defino archivos
      constants.ts : con vbles globales del Sistema Operativo del dispositivo
      dimensions.ts : con vbles globales de tamaño del dispositivo
      theme.ts : con los colores de la app
