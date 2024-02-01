import {Text, View, StyleSheet} from 'react-native';

const TextComponent = () => {
    return(
        <View>
            <Text style={styles.text}>Nombre: Geralt de Rivia</Text>
            <Text style={styles.text}>Ocupacion: Brujo</Text>
            <Text style={styles.text}>Edad: 100</Text>
            <Text style={styles.text}>Fecha de nacimiento: 1200</Text>
            <Text style={styles.text}>Estado Civil: Casado con mamasita Yennefer</Text>
            <Text style={styles.text}>Sobre mi: Mato monstruos a sueldo y cuando no mato monstruos a sueldo fornico brujas</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9',
      }
})

export default TextComponent;