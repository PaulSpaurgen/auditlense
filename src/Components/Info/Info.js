import { React, useState, useEffect } from "react";

import {
  chakra,
  Box,
  Flex,
  Icon,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import {
  BsFillCheckCircleFill,
  BsPhone,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdOutlineContactPage, MdEmail } from "react-icons/md";
import logo from "../../Images/mainLogo.png";
// MdOutlineContactPage RiCheckboxBlankCircleFill
import startUpAdvisory from "../data";
import Footer from "../Common/Footer";
import firstImg from "../../Images/img1.jpg";
import ThirdImg from "../../Images/img3.jpg";
function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cardData, setCardData] = useState([]);
  const [flashCardsData, setFlashCardData] = useState([]);
  const [dataTodisp, setDataTodisp] = useState();
  console.log(cardData.startUpAdvisory);
  useEffect(() => {
    console.log(startUpAdvisory.flashCards);
    setFlashCardData(startUpAdvisory.flashCards);
    setCardData(startUpAdvisory.startUpAdvisory);
  }, []);

  const HandleChange = (name) => {
    console.log("name:", name);
    console.log(flashCardsData);
    for (let i = 0; i < flashCardsData.length; i++) {
      if (flashCardsData[i].name === name) {
        console.log("dataToDisp:", flashCardsData[i]);
        setDataTodisp(flashCardsData[i]);
      }
    }
    onOpen();
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const number = Number(urlParams.get("num"));
    if (number === 1) {
      // const element = document.getElementById("1");
    } else if (number === 2) {
      const element = document.getElementById("2");
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 1000);
    } else if (number === 3) {
      const element = document.getElementById("3");
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1500);
    }
  });
  return (
    <>
      <Modal isOpen={isOpen} size="3xl" onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" borderBottom="0.5px solid #e8e8e8">
            {dataTodisp?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody maxH={`75vh`} overflowY="scroll">
            <chakra.div w="100%" display="flex" flexDirection="row">
              <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}>
                <Flex
                  borderLeft="0.5px solid #e8e8e8"
                  justifyContent="center"
                  padding="20px"
                  flexDirection="column"
                  gap="20px"
                >
                  <Box w="80%">
                    <Heading size="sm" fontWeight="semibold">
                      For queries:
                    </Heading>
                    <InputGroup margin="10px">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineContactPage />}
                        color="blue.500"
                      />
                      <Input placeholder="Your Name" variant="filled" />
                    </InputGroup>
                    <InputGroup margin="10px">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPhone />}
                        color="green.500"
                      />
                      <Input placeholder="Phone Number" variant="filled" />
                    </InputGroup>
                    <InputGroup margin="10px">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdEmail />}
                        color="orange.300"
                      />
                      <Input placeholder="Your Email" variant="filled" />
                    </InputGroup>

                    <InputGroup margin="10px">
                      <Button w="100%" bg="#0E4E9B" color="white">
                        Talk To Advisor
                      </Button>
                    </InputGroup>
                  </Box>
                  <Flex flexDirection="column" justifyContent="center" w="100%">
                    <Heading size="sm" fontWeight="semibold">
                      Pricing Summary:
                    </Heading>
                    <Flex flexDirection="column">
                      <Box
                        display="flex"
                        padding="10px"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <Icon
                          as={BsFillArrowRightCircleFill}
                          color="#0E4E9B"
                          mr="10px"
                          fontSize="md"
                        />
                        <p>
                          <b>Market Price -</b> <Icon as={BiRupee} />
                          <s>12000</s>
                        </p>
                      </Box>
                      <Box
                        display="flex"
                        padding="10px"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <Icon
                          as={BsFillArrowRightCircleFill}
                          color="#0E4E9B"
                          mr="10px"
                          fontSize="md"
                        />
                        <Flex>
                          <p>
                            <b>IndiaFilings -</b>
                          </p>
                          <Box textShadow="0px 0px #C6CBF9">
                            <p>
                              {" "}
                              <Icon as={BiRupee} />
                              <b>6694</b>
                            </p>
                          </Box>
                        </Flex>
                      </Box>
                      <Box
                        display="flex"
                        padding="10px"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <Icon
                          as={BsFillArrowRightCircleFill}
                          color="#0E4E9B"
                          mr="10px"
                          fontSize="md"
                        />
                        <Flex>
                          <p>
                            <b>GST Credit -</b>
                          </p>
                          <Box textShadow="0px 0px #C6CBF9">
                            <p>
                              {" "}
                              <Icon as={BiRupee} />
                              <b>1205</b>
                            </p>
                          </Box>
                        </Flex>
                      </Box>
                      <Box
                        display="flex"
                        padding="10px"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <Icon
                          as={BsFillArrowRightCircleFill}
                          color="#0E4E9B"
                          mr="10px"
                          fontSize="md"
                        />
                        <Flex>
                          <p>
                            <b>You Save -</b>
                          </p>
                          <Box textShadow="0px 0px #C6CBF9">
                            <p>
                              {" "}
                              <Icon as={BiRupee} />
                              <b>5306</b>(44%)
                            </p>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                    <Flex
                      w="100%"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Button width="250px" bg="#0E4E9B" color="white">
                        Buy Now
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" padding="20px">
                  <Heading size="sm" fontWeight="semibold">
                    Services Offered:
                  </Heading>
                  <Flex flexDirection="column">
                    {dataTodisp?.services.map((index, value) => (
                      <Box
                        display="flex"
                        padding="10px"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <Icon
                          as={BsFillCheckCircleFill}
                          color="green.500"
                          mr="10px"
                        />
                        <p>{dataTodisp.services[value]}</p>
                      </Box>
                    ))}

                    <Heading size="sm" fontWeight="semibold">
                      Documents Required:
                    </Heading>
                    {dataTodisp?.documentsRequired.map((value, index) => (
                      <Box
                        display="flex"
                        padding="10px"
                        alignItems="center"
                        fontSize="sm"
                      >
                        <Icon
                          as={BsFillCheckCircleFill}
                          color="green.500"
                          mr="10px"
                        />
                        <p>{value}</p>
                      </Box>
                    ))}
                  </Flex>
                </Flex>
              </SimpleGrid>
            </chakra.div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <chakra.div w="100%">
        <Flex
          h="20vh"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Image
            src={logo}
            marginLeft={{ base: "20px", md: "100px", lg: "150px" }}
            h={{ base: "33px", md: "43px", lg: "53px" }}
            width={{ base: "100px", md: "143px", lg: "173px" }}
          />
          <Flex
            width={{ base: "60%", md: "40%" }}
            justifyContent="space-evenly"
            alignItems="center"
            fontWeight="semibold"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            mt="16px"
          >
            <a href="/">
              <Box cursor="pointer">Home</Box>
            </a>
            <Box cursor="pointer">Services</Box>
            <Box cursor="pointer">About us</Box>
          </Flex>
        </Flex>
        {/* Virtual Accounting */}
        <Flex mt="20px" w="60%" alignItems="flex-end" flexDirection="column">
          <Heading fontSize={{ base: "xl", md: "5xl", lg: "7xl" }}>
            Virtual Accounting
          </Heading>
          <Box
            mt="20px"
            w="100%"
            padding={{ base: "2px", md: "3px", lg: "5px" }}
            bg="#0E4E9B"
          ></Box>
        </Flex>
        <Flex
          w="100%"
          flexDirection={{ base: "column", md: "row" }}
          mt={{ base: "20px", md: "40px", lg: "60px" }}
        >
          <Flex
            w={{ base: "100%", md: "63%" }}
            h={{ base: "40vh", md: "60vh" }}
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-end" }}
          >
            <Box
              height="100%"
              w={{ base: "80%", md: "80%" }}
              borderRadius={{ base: "20px", md: "40px" }}
              bg="lightgray"
            >
              <Image
                src={firstImg}
                height="100%"
                width="100%"
                borderRadius={{ base: "20px", md: "40px" }}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Flex
            w={{ base: "100%", md: "37%" }}
            h={{ base: "20vh", md: "60vh" }}
            // paddingLeft={{base:"0px",md:"20px",lg:"100px"}}
            alignItems={{ base: "center", md: "flex-end" }}
            justifyContent={{ base: "center" }}
          >
            <Heading
              w={{ base: "80%", md: "80%" }}
              fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}
            >
              <p>Accounting now</p>
              <p>Hassel free,</p>
              <p>with Audit Lens</p>
            </Heading>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Heading
            w="80%"
            padding={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}
          >
            How we do it!
          </Heading>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Box
            w="80%"
            paddingLeft={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
          >
            <p>
              Auditlens offers Virtual Accounting Services to manage your
              accounts payable, accounts receivable, projects, general ledger
              postings, bank reconciliations, preparation of financial
              statements, and MIS Reporting* for Small and Medium Enterprise
              (SME) Sector. We are equipped with accounting software tto
              minimize the chances of miscalculations. Our ultimate goal is to
              be a value addition to your business for making you focus on your
              core business functions, let us provide the accounting, Tax
              compliance services.
            </p>
          </Box>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Heading
            w="80%"
            padding={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}
            mt={{ base: "20px" }}
          >
            What we cover !
          </Heading>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Box
            w="80%"
            paddingLeft={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
          >
            <UnorderedList>
              <ListItem>
                Bookkeeping for your Business like capturing the invoices both
                Sales, Purchase side and the voucher entries.
              </ListItem>
              <ListItem>Periodic GST Filing, if applicable.</ListItem>
              <ListItem>
                Monthly TDS Payments, and Quarterly TDS Preparation and Filing.
              </ListItem>
              <ListItem>Bank Statement Reconciliation.</ListItem>
              <ListItem>General guidance, where needed.</ListItem>
              <ListItem>
                Periodic P&L, Balance sheets and other MIS reporting, where
                applicable.
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>

        {/* start up advisory */}
        <Flex mt="20px" w="60%" alignItems="flex-end" flexDirection="column">
          <Heading fontSize={{ base: "xl", md: "5xl", lg: "7xl" }}>
            Startup Advisory
          </Heading>
          <Box
            mt="20px"
            w="100%"
            padding={{ base: "2px", md: "3px", lg: "5px" }}
            bg="#0E4E9B"
          ></Box>
        </Flex>
        <Flex
          w="100%"
          justifyContent="center"
          mt={{ base: "10px", md: "20px", lg: "60px" }}
          id="1"
        >
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 4 }}
            gap={10}
            mt={{ base: "10px", md: "20px", lg: "40px" }}
            spacingX="20"
          >
            {cardData?.map((value, index) => (
              <Box
                w="300px"
                h="500px"
                borderRadius="20px"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                cursor="pointer"
                key={index}
              >
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  width="100%"
                  h="130px"
                  borderBottom="0.5px solid #e8e8e8"
                  borderTopRadius="20px"
                  gap="5px"
                >
                  <Icon
                    as={value.icon}
                    w={12}
                    h={12}
                    color={`${value.iconColor}`}
                  />

                  <Heading fontSize="18px">{value.title}</Heading>
                </Flex>
                <Flex
                  h="100px"
                  W="100%"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Box
                    fontSize="16px"
                    fontWeight="medium"
                    display="flex"
                    flexDirection="column"
                  >
                    <s>
                      <Icon as={BiRupee} />
                      {value.priceInit}{" "}
                    </s>
                    <Heading size="md">
                      <Icon as={BiRupee} />
                      {value.price}
                    </Heading>
                  </Box>
                  <Box
                    color="white"
                    bg="blackAlpha.800"
                    borderRadius="10px"
                    padding="5px"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    save 36%
                  </Box>
                  <Heading size="sm">
                    <Icon as={BiRupee} />
                    {value.price}
                  </Heading>
                </Flex>
                <Flex flexDirection="column" padding="20px">
                  <Heading size="sm" fontWeight="semibold">
                    Perks you get:
                  </Heading>
                  <Flex flexDirection="column">
                    <Box
                      display="flex"
                      padding="10px"
                      alignItems="center"
                      fontSize="sm"
                    >
                      <Icon
                        as={BsFillCheckCircleFill}
                        color="green.500"
                        mr="10px"
                      />
                      <p>Register now from anywhere</p>
                    </Box>
                    <Box
                      display="flex"
                      padding="10px"
                      alignItems="center"
                      fontSize="sm"
                    >
                      <Icon
                        as={BsFillCheckCircleFill}
                        color="green.500"
                        mr="10px"
                      />
                      <p>Get an professional advice for free</p>
                    </Box>
                    <Box
                      display="flex"
                      padding="10px"
                      alignItems="center"
                      fontSize="sm"
                    >
                      <Icon
                        as={BsFillCheckCircleFill}
                        color="green.500"
                        mr="10px"
                      />
                      <p>{value.descreption}</p>
                    </Box>
                  </Flex>
                </Flex>
                <Flex w="100%" alignItems="center" justifyContent="center">
                  <Button
                    w="80%"
                    bg="#0E4E9B"
                    color="white"
                    textAlign="center"
                    onClick={() => HandleChange(value.name)}
                  >
                    {" "}
                    Buy now
                  </Button>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
        <Flex
          mt="20px"
          w="60%"
          alignItems="flex-end"
          flexDirection="column"
          id="2"
        >
          <Heading
            fontSize={{ base: "xl", md: "5xl", lg: "7xl" }}
            mt={{ base: "10px", md: "20px", lg: "60px" }}
            id="3"
          >
            Complience
          </Heading>
          <Box
            mt="20px"
            w="100%"
            padding={{ base: "2px", md: "3px", lg: "5px" }}
            bg="#0E4E9B"
          ></Box>
        </Flex>
        <Flex
          w="100%"
          flexDirection={{ base: "column", md: "row" }}
          mt={{ base: "20px", md: "40px", lg: "60px" }}
        >
          <Flex
            w={{ base: "100%", md: "63%" }}
            h={{ base: "40vh", md: "60vh" }}
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-end" }}
          >
            <Box
              height="100%"
              w={{ base: "80%", md: "80%" }}
              borderRadius={{ base: "20px", md: "40px" }}
              bg="lightgray"
            >
              <Image
                src={ThirdImg}
                height="100%"
                width="100%"
                borderRadius={{ base: "20px", md: "40px" }}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Flex
            w={{ base: "100%", md: "37%" }}
            h={{ base: "20vh", md: "60vh" }}
            // paddingLeft={{base:"0px",md:"20px",lg:"100px"}}
            alignItems={{ base: "center", md: "flex-end" }}
            justifyContent={{ base: "center" }}
          >
            <Heading
              w={{ base: "80%", md: "80%" }}
              fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}
            >
              <p>ITR</p>
              <p>Filing,</p>
              <p>Made easy!</p>
            </Heading>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Heading
            w="80%"
            padding={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}
          >
            Filing ITR now made easy
          </Heading>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Box
            w="80%"
            paddingLeft={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
          >
            <UnorderedList>
              <ListItem>
                All you need to do is submit your <b>form-16</b>.
              </ListItem>
              <ListItem>Sit back and relax.</ListItem>
              <ListItem>
                Our <b>AI</b> now processes your form.
              </ListItem>
              <ListItem>Your ITR is now Filed.</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Footer />
      </chakra.div>
    </>
  );
}

export default Info;
