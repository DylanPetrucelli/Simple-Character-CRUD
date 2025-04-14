import { Link, useLocation } from "react-router-dom"
import { Heading, Flex, Box } from "@chakra-ui/react"
import BasicButton from "./BasicButton";
//import "../styles/Header.css"

const Header = () => {
  const location = useLocation();

  return (
    <Box as="header" w="100%" px="3" py="2" borderBottom="solid 2px gray">
      <Flex justify="space-between" align="center">
        
          <Link to="/" style={{ textDecoration: "none" }}>
            <Heading size="4xl" fontFamily="mono">Character Manager</Heading>
          </Link>
        
  
        {location.pathname !== "/create" && (
          <Link to="/create">
            <BasicButton>Create New Character</BasicButton>
          </Link>
        )}
      </Flex>
    </Box>
  );
  
}

export default Header;