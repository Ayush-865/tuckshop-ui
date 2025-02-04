import { Box, Heading, Tooltip } from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";
import { BsGithub } from "react-icons/bs";
import "./App.css";
import EmojiCard from "./components/EmojiCard";
import SlotCard from "./components/SlotCard";
import { getRandomEmoji } from "./utils/generateEmoji";

function App() {
  return (
    <Box mx={{ base: 2, md: 16 }}>
      <Heading as="h1" fontSize={48} my={16}>
        Tuckshop UI
      </Heading>
      {Array.from({ length: 10 }).map(() => {
        const dummyText = loremIpsum({
          count: 1,
          units: "paragraph",
          sentenceUpperBound: 10,
        });
        const emoji = getRandomEmoji();
        return (
          <EmojiCard
            emoji={emoji}
            mb={8}
            background={"Background"}
            width="100%"
          >
            {dummyText}
          </EmojiCard>
        );
      })}
      <SlotCard transitionDistance={500} />
      {Array.from({ length: 10 }).map(() => {
        const dummyText = loremIpsum({
          count: 1,
          units: "paragraph",
          sentenceUpperBound: 10,
        });
        const emoji = getRandomEmoji();
        return (
          <EmojiCard
            emoji={emoji}
            mb={8}
            background={"Background"}
            width="100%"
          >
            {dummyText}
          </EmojiCard>
        );
      })}
      <Tooltip label="Check out the source code on GitHub">
        <Box
          as="a"
          href="https://github.com/ayush-865/tuckshop-ui"
          color={"rgb(255 255 255 / 1)"}
          position="fixed"
          top={4}
          right={6}
          fontSize="3rem"
        >
          <BsGithub />
        </Box>
      </Tooltip>
    </Box>
  );
}

export default App;
