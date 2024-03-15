import {
  Card,
  CardBody,
  Text,
  HStack,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
  Divider,
  Flex,
  Input,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FaClipboard } from "react-icons/fa";
const Cards = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const textInputRef = useRef(null);

  const translateText = () => {
    fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}&langpair=en|fr`
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          data &&
          data.responseData &&
          data.responseData.translatedText &&
          data.responseStatus === 200
        ) {
          setTranslatedText(data.responseData.translatedText);
        } else {
          setTranslatedText("Translation not available");
        }
      })
      .catch((error) => {
        console.log(error);
        setTranslatedText("Error occurred during translation");
      });
  };

  useEffect(() => {
    if (inputText) {
      translateText();
    } else {
      setTranslatedText("");
    }
  }, [inputText][translateText]);
  const copyClipboard = () => {
    navigator.clipboard
      .writeText(translatedText)
      .then(() => {
        console.log("Text Copied To Clipboard", translatedText);
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard: ", error);
      });
  };

  return (
    <>
      <Card
        width={{ lg: "40%", base: "71%", md: "71%" }}
        height="400px"
        display="flex"
        bgColor="#212936cc"
        borderRadius="34px"
        border="1px solid white"
      >
        <CardBody>
          <HStack mt="3" spacing="2">
            <Button colorScheme="blue">English</Button>
          </HStack>
          <Divider mt={4} />
          <Input
            marginTop={7}
            color="white"
            height="200px"
            border="none"
            fontSize="24px"
            onChange={(e) => setInputText(e.target.value)}
          />
          <CardFooter>
            <Button variant="solid" colorScheme="blue" onClick={translateText}>
              Translate
            </Button>
          </CardFooter>
        </CardBody>
      </Card>

      <Card
        width={{ lg: "40%", base: "71%", md: "71%" }}
        height="400px"
        display="flex"
        bgColor="#212936cc"
        borderRadius="34px"
        border="1px solid white"
      >
        <CardBody>
          <HStack mt="3" spacing="2">
            <Button colorScheme="blue">French</Button>
          </HStack>
          <Divider mt={4} />
          <Input
            marginTop={7}
            value={translatedText}
            readOnly
            height="200px"
            border="none"
            color="white"
            fontSize="24px"
          />
          <CardFooter>
            <Button>
              <FaClipboard onClick={copyClipboard} />
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
};

export default Cards;
