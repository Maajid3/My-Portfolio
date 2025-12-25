import { Avatar, HStack } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <>
    
    <div className="landing-ui" id="landing-page">
      <HStack mb="10">
        <Avatar.Root w={"120px"} h={"120px"} size="2xl" variant="solid">
          <Avatar.Fallback name="Maajid Ali" />
        </Avatar.Root>
      </HStack>

      <h2>Hello, I am</h2>
      <h1>Maajid Ali</h1>
      <p>Frontend Developer | React.js | UI Developer</p>
    </div>
    </>
  );
}
