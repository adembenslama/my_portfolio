import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const ContactMe = () => {
  return (
    <Layout title="Contact Me">
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Let&apos;s connect!
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>

          <List spacing={3} mt={4}>
            <ListItem>
              <Link href="mailto:adembenslama2003@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                  w="100%"
                >
                  adembenslama2003@gmail.com
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/Adembenslama" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                  w="100%"
                >
                  @Adembenslama
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/adem-benslama-6b35a823b/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                  w="100%"
                >
                  Adem Ben Slama
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default ContactMe
export { getServerSideProps } from '../components/chakra' 