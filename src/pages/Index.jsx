import React, { useState } from "react";
import { Container, VStack, Text, IconButton, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("https://www.dropbox.com/s/your_audio_file.mp3?raw=1")); // Replace with your Dropbox link
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    audio.volume = value / 100;
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Audio Player</Text>
        <Box>
          <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} size="lg" onClick={togglePlayPause} />
        </Box>
        <Box width="100%">
          <Text>Volume</Text>
          <Slider aria-label="volume-slider" value={volume} onChange={handleVolumeChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
