import GameCarousal from "./components/gameCarousal";
import {ChakraProvider} from '@chakra-ui/react';

function App() {

  return (
    <>
      <ChakraProvider>
        <GameCarousal />
      </ChakraProvider>
      
    </>
  )
}

export default App
