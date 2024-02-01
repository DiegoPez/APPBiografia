import {View, Text, StyleSheet, SafeAreaView, ScrollView, image} from 'react-native';
import  TextComponent  from './components/TextComponents.js';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style= {styles.title}>Mi Biografia </Text>
        <Image style={ styles.image} source ={require('./assets/images/poss4.jpg')}/>
        <Text style= {styles.text}>Nombre: Diego Julian Pescador Cordova</Text>
        <Text style= {styles.text}>Ocupacion: Senior Software Engineer</Text>
        <Text style= {styles.text}>Edad: 20</Text>
        <Text style= {styles.text}>Fecha de Nacimiento: 28/10/2003</Text>
        <Text style= {styles.text}>Estado civil: Soltero</Text>
        <Text style= {styles.text}>Biografia</Text>
        <Text style= {styles.text}>
        Capítulo 1: Los Inicios

Nací en las pintorescas tierras austriacas en medio de la agitación de la cuarta guerra mundial. Mi familia, experta en la tradición de los chicharrones, siempre había sido reconocida por la calidad de sus productos. A pesar del caos que reinaba en el mundo, decidimos continuar con nuestro negocio familiar y llevar alegría a las personas a través de nuestras crujientes delicias.

Capítulo 2: La Receta Secreta

La clave de nuestro éxito siempre fue nuestra receta secreta de chicharrón. En un pequeño rincón de Austria, entre bombardeos y refugios antiaéreos, mi abuela me enseñó todos los secretos. Aprendí a seleccionar los cortes de carne perfectos, a sazonar con las especias justas y a freír cada pedazo hasta la perfección. Nuestros chicharrones se convirtieron en un refugio de sabor en medio del caos.

Capítulo 3: Chicharrones en las Trincheras

Con la guerra rugiendo a nuestro alrededor, decidimos llevar nuestro negocio a las trincheras. Armados con sartenes y la receta de la abuela, nos convertimos en vendedores ambulantes de chicharrones. Las tropas y los civiles por igual buscaban consuelo en el crujir de nuestras creaciones mientras enfrentaban los desafíos de la guerra.

Capítulo 4: Amistades Inesperadas

Durante nuestros días como vendedores ambulantes, entablamos amistades con soldados de diversas nacionalidades. Descubrimos que, a pesar de las diferencias políticas, todos compartíamos la necesidad de momentos de felicidad y distracción. Los chicharrones se convirtieron en un símbolo de paz y camaradería en medio de la destrucción.

Capítulo 5: El Legado Chicharronero

A medida que la guerra llegaba a su fin, decidimos seguir adelante con nuestro legado chicharronero. Abrimos una tienda permanente en Viena, donde las personas venían a disfrutar de la tranquilidad después de los años turbulentos. Nuestros chicharrones se convirtieron en un símbolo de resiliencia y esperanza, recordando a todos que incluso en los tiempos más oscuros, siempre puede surgir algo delicioso.

        </Text>

      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#dfe6e9',
  }

});


export default App;