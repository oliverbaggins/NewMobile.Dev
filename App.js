import { NavigationContainer } from '@react-navigation/native';
import StartingRoute from './src/routes/starting_route';

export default function App() {
  return (
    <NavigationContainer>
      <StartingRoute/>
    </NavigationContainer>
  );
}
