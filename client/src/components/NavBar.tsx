import { Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { IoPersonSharp } from "react-icons/io5";


const NavBar = () => {
  return (
    <>
        <Flex p={'10px'} ml={'5rem'} justify={'space-between'} align={'center'}>
            <Image 
            src="NeuroNotes.svg"
            alt="NeuroNotes"
            draggable={false}
            />
            <Flex p={'10px'} mr={'5rem'} mt={'-0.5rem'} align={'center'} gap={'1rem'}>
                <Button _active={{transform: 'scale(0.98)' }} variant={'outline'} colorScheme="black" size={'lg'}>
                    Sign out
                </Button>
            </Flex> 
        </Flex>
    </>
  )
}

export default NavBar