import { Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (

    <>
        <Flex p={'10px'} ml={{sm: '1rem', md: '5rem'}} justify={'space-between'} align={'center'}>
            <Image 
            src="/NeuroNotes.png"
            boxSize={'90px'}
            alt="NeuroNotes"
            draggable={false}
            />
            <Flex p={'10px'} mr={{sm: '0.5rem', md: '5rem'}} mt={'-0.5rem'} align={'center'} gap={'1rem'}>
                <Button onClick={handleSignOut} _hover={{backgroundColor: 'default.300'}} _active={{transform: 'scale(0.98)' }} variant={'outline'} colorScheme="black" size={'lg'}>
                    Sign out
                </Button>
            </Flex> 
        </Flex>
    </>
  )
}

export default NavBar