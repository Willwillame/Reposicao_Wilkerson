import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet} from 'react-native';
import Alunos from './screens/Alunos';
import PerfildoAluno from './screens/PerfildoAluno';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name = 'Alunos' component={Alunos} options={{title:'Lista de Alunos'}}/>
        <Stack.Screen name = 'PerfildoAluno' component={PerfildoAluno} options={{title:'Perfil do Aluno'}}/> 
      </Stack.Navigator>  
    </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
