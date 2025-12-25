import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function ChakraSection({ children }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
