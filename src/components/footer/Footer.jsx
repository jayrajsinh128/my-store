import { Flex, Text, HStack, Button, VStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {

    return (
        <Flex h={'160px'} bg={'#1a202c'} color={'white'} justify={'center'} mt={20}>
            <VStack>
                <Text my={'26px'}>Made with ❤️ by jayrajsinh rathod</Text>
                <HStack>
                    <Button variant={'solid'} bg={'#0863be'} size='sm' leftIcon={<FaLinkedin />}>
                        <Link _hover={{ 'textDecoration': 'none' }} target={"_blank"} href={""}>LinkedIn</Link>
                    </Button>
                    <Button _hover={{ 'bg': 'red.500' }} variant={'solid'} bg={'red'} size='sm' leftIcon={<FaGithub />}>
                        <Link _hover={{ 'textDecoration': 'none' }} target={"_blank"} href={""}>GitHub</Link>
                    </Button>
                </HStack>
            </VStack>
        </Flex>
    );
};