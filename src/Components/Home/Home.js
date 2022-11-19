import React from "react";
import {
  Box,
  Button,
  chakra,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Flex,
  Link,
  Modal,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../../Images/mainLogo.png";
import box1 from "../../Images/box1.jpg";
import box2 from "../../Images/box2.png";
import box3 from "../../Images/box3.jpg";
import bgImg from "../../Images/HomeBanner.png";
import { useState, useEffect } from "react";
import { MdOutlineContactPage, MdEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import Footer from "../Common/Footer";
import ScrollIntoView from "react-scroll-into-view";
import firstImg from "../../Images/img1.jpg";
import secondImg from "../../Images/first.jpg";
import ThirdImg from "../../Images/img3.jpg";
import axios from "axios";
import "./index.css";
import { motion } from "framer-motion";
// ThirdImg
function Home() {
  const [styles, setStyles] = useState({
    bx1: 70,
    bx2: 40,
    bx3: 10,
    bx1List: false,
    bx2List: false,
    bx3List: false,
  });
  const [isMobileView, setIsMobileView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    name: false,
    phone: false,
    email: false,
  });
  useEffect(() => {
    console.log(detectMob());
    const isMobile = detectMob();
    if (isMobile) {
      setIsMobileView(true);
    }
  }, []);
  const toast = useToast();
  const showSuccesToast = () => {
    toast({
      title: "We recieved you're request",
      description: "Our professional expert will contact you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  const warningTost = () => {
    toast({
      title: "Something went wrong!",
      description:
        "Please check your internet connection (or) try again later.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };
  const saveData = async () => {
    setIsLoading(true);
    console.log("DataTosave:", formData);
    let data = {
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      Reason: "General Information",
    };
    axios
      .post(
        "https://sheet.best/api/sheets/039677ea-486d-4278-b5a0-f3fe874331c5",
        data
      )
      .then((response) => {
        showSuccesToast();
        console.log(response);
        setIsLoading(false);
        onClose();
        setFormData({
          name: "",
          phone: 0,
          email: "",
        });
      })
      .catch(function (error) {
        console.log(error);
        warningTost();
        setIsLoading(false);
        onClose();
      });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (formData.name) {
      setIsError((prev) => ({
        ...prev,
        name: false,
      }));
    }
    if (formData.phone) {
      setIsError((prev) => ({
        ...prev,
        phone: false,
      }));
    }
    if (formData.email) {
      setIsError((prev) => ({
        ...prev,
        email: false,
      }));
    }
  }, [formData.name, formData.email, formData.phone]);
  const recordData = () => {
    let check = false;
    if (formData.name.length === 0) {
      check = true;
      setIsError((prev) => ({
        ...prev,
        name: true,
      }));
    }
    if (formData.phone === 0 || formData.phone < 1000000000) {
      check = true;
      setIsError((prev) => ({
        ...prev,
        phone: true,
      }));
    }
    if (formData.email.length === 0) {
      check = true;
      setIsError((prev) => ({
        ...prev,
        email: true,
      }));
    }
    if (check) {
      showTostError();
    } else {
      saveData();
    }
  };
  const showTostError = () => {
    toast({
      title: "Error.",
      description: "Please enter the form details accurately.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };
  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }
  const changeStyle = (style, box, event) => {
    console.log(style, event, box);
    if (!isMobileView) {
      if (event === "over") {
        if (style === "shadow") {
          switch (box) {
            case "bx1":
              setStyles({
                ...style,
                bx1: 50,
                bx1List: true,
              });
              break;
            case "bx2":
              setStyles({
                ...style,
                bx2: 30,
                bx2List: true,
              });
              break;
            case "bx3":
              setStyles({
                ...style,
                bx3: 30,
                bx3List: true,
              });
              break;
            default:
              break;
          }
        }
      } else if (event === "exit") {
        if (style === "shadow") {
          switch (box) {
            case "bx1":
              setStyles({
                ...style,
                bx1: 70,
                bx1List: false,
              });
              break;
            case "bx2":
              setStyles({
                ...style,
                bx2: 40,
                bx2List: false,
              });
              break;
            case "bx3":
              setStyles({
                ...style,
                bx3: 40,
                bx3List: false,
              });
              break;
            default:
              break;
          }
        }
      }
    }
  };
  const onCLoseModal = () =>{
    onClose()
    setFormData({
      name:"",
      phone:"",
      email:"",
      title:""
    })
    setIsError({
      name:false,
      email:false,
      phone:false,
    })
  }
  return (
    <chakra.div w="100%" h="100vh">
      <Modal isOpen={isOpen} size="sm" onClose={onCLoseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" borderBottom="0.5px solid #e8e8e8">
            We will contact you
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <chakra.div
              w="100%"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Flex
                justifyContent="flex-start"
                flexDirection="column"
                gap="20px"
                w="100%"
                alignItems="center"
                padding="20px"
              >
                <Box w="80%">
                  <Heading size="sm" fontWeight="semibold">
                    Please fill the form below:
                  </Heading>
                  <InputGroup margin="10px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineContactPage />}
                      color="blue.500"
                      value={formData.name}
                    />
                    <Input
                      placeholder="Your Name"
                      variant="filled"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                      }}
                      isError={isError.name}
                    />
                  </InputGroup>
                  {isError.name && (
                    <Box fontSize="sm" color="red.500">
                      <p>
                        Please enter your <b>name!</b>
                      </p>
                    </Box>
                  )}
                  <InputGroup margin="10px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPhone />}
                      color="green.500"
                    />
                    <Input
                      placeholder="Phone Number"
                      variant="filled"
                      type="number"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }));
                      }}
                      isError={isError.phone}
                    />
                  </InputGroup>
                  {isError.phone && (
                    <Box fontSize="sm" color="red.500">
                      <p>
                        Please enter your <b>phone number accurately!</b>{" "}
                      </p>
                    </Box>
                  )}
                  <InputGroup margin="10px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdEmail />}
                      color="orange.300"
                    />
                    <Input
                      placeholder="Your Email"
                      variant="filled"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                      isError={isError.email}
                    />
                  </InputGroup>
                  {isError.email && (
                    <Box fontSize="sm" color="red.500">
                      <p>
                        Please enter your <b>email!</b>
                      </p>
                    </Box>
                  )}

                  <InputGroup margin="10px">
                    <Button
                      w="100%"
                      bg="#0E4E9B"
                      color="white"
                      onClick={() => recordData()}
                      isLoading={isLoading}
                    >
                      Submit
                    </Button>
                  </InputGroup>
                </Box>
              </Flex>
            </chakra.div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        w="100%"
        h="60vh"
        marginTop="-10px"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Image src={bgImg} w="100%" h="100%" objectFit="cover" />
        <Flex
          h="20vh"
          alignItems="center"
          justifyContent="space-between"
          w="90%"
          position="absolute"
          top="0px"
        >
          <Image
            src={logo}
            // marginLeft={{ base: "20px", md: "100px", lg: "150px" }}
            h={{ base: "33px", md: "43px", lg: "53px" }}
            w={{ base: "100px", md: "143px", lg: "173px" }}
          />
          <Flex
            w={{ base: "60%", md: "40%" }}
            justifyContent="space-evenly"
            alignItems="center"
            fontWeight="semibold"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color="white"
            mt="16px"
          >
            <a href="/">
              <Box cursor="pointer">Home</Box>
            </a>
            <a href="/card">
              <Box cursor="pointer">Services</Box>
            </a>
            <Box cursor="pointer">About us</Box>
          </Flex>
        </Flex>
        <Flex
          height="20vh"
          position="absolute"
          w="90%"
          bottom="0px"
          alignItems="flex-start"
          gap={8}
          justifyContent={{ base: "center", md: "space-between" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Heading
            color="white"
            fontSize={{ base: "xl", md: "3xl", lg: "50px" }}
          >
            <motion.p animate={{}}>Just Because you can,</motion.p>
            <p> </p>
            <p>doesn’t mean you should !!</p>
          </Heading>
          <ScrollIntoView selector="#footer">
            <Button
              padding={{ base: "15px", lg: "20px", xl: "30px" }}
              w={{ base: "70px", md: "240px", lg: "340px", xl: "400px" }}
              bg="#0E4E9B"
              color="white"
              fontSize={{ base: "10px", md: "large" }}
            >
              Contact Us
            </Button>
          </ScrollIntoView>
        </Flex>
      </Box>
      {/* heading-1 - desktop */}
      <Flex
        display={{ base: "none", md: "flex" }}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        h="20vh"
      >
        <Flex padding="2px" width="35%" bg="#0E4E9B" borderRadius="10px" />
        <Heading fontSize={{ md: "4xl", lg: "5xl" }} padding="10px">
          What We Do
        </Heading>
        <Flex padding="2px" width="35%" bg="#0E4E9B" borderRadius="10px" />
      </Flex>
      {/* heading-1 - mobile */}
      <Box
        display={{ base: "flex", md: "none" }}
        mt="50px"
        marginLeft="30px"
        flexDirection="column"
        mb="20px"
      >
        <Heading fontSize="30px">What We Do</Heading>
        <Box
          padding="3px"
          width="calc(100vw - 30px)"
          bg="#0E4E9B"
          borderLeftRadius="10px"
        />
      </Box>
      {/* Hero - view */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft={{ base: "20px" }}
        id="services"
      >
        <SimpleGrid
          columns={{ base: 3, md: 3, lg: 3 }}
          gap={10}
          width="fit-content"
          borderRadius={{ base: "28px", md: "45px" }}
          spacingX={{ base: "240px", md: "40px" }}
          overflowX={{ base: "scroll", md: "hidden" }}
        >
          {/* bx-1 */}
          <motion.div whileHover={{ scale: 0.95 }}>
            <chakra.div
              width={{ base: "210px", md: "402px" }}
              h={{ base: "264px", md: "505px" }}
              position="relative"
              cursor="pointer"
              onMouseEnter={() => {
                changeStyle("shadow", "bx1", "over");
              }}
              onMouseLeave={() => {
                changeStyle("shadow", "bx1", "exit");
              }}
            >
              <Link href="/card?num=1" isExternal>
                <Image
                  src={box1}
                  w="100%"
                  h="100%"
                  borderRadius={{ base: "28px", md: "45px" }}
                  fit="cover"
                  style={{
                    filter: `brightness(${styles.bx1}%)`,
                  }}
                />
                <Heading
                  position="absolute"
                  top={{ base: "24px", md: "50px" }}
                  // {{ base: "24px", md: "50px" }}
                  left={{ base: "24px", md: "50px" }}
                  color="whiteAlpha.900"
                  fontSize={{ base: "lg", md: "26px" }}
                >
                  Your Virtual Accountant
                </Heading>

                {styles.bx1List || isMobileView ? (
                  <UnorderedList
                    position="absolute"
                    top={{ base: "80px", md: "120px" }}
                    left={{ base: "15px", md: "40px" }}
                    color="whiteAlpha.900"
                    fontWeight="semibold"
                    fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
                    transition="ease-in-out"
                    transitionDelay="inherit"
                    transitionDuration="100"
                    padding="10px"
                  >
                    <ListItem padding="2px">Accouting on the Go</ListItem>
                    <ListItem padding="2px">Global Presence</ListItem>
                    <ListItem padding="2px">
                      Industry Specific Analysis
                    </ListItem>
                    <ListItem padding="2px">Business Analytics</ListItem>
                    <ListItem padding="2px">Management Consulting</ListItem>
                  </UnorderedList>
                ) : (
                  <></>
                )}
              </Link>
            </chakra.div>
          </motion.div>

          {/* bx-2 */}
          <motion.div whileHover={{ scale: 0.958 }}>
            <chakra.div
              width={{ base: "210px", md: "402px" }}
              h={{ base: "264px", md: "505px" }}
              position="relative"
              onMouseEnter={() => {
                changeStyle("shadow", "bx2", "over");
              }}
              onMouseLeave={() => {
                changeStyle("shadow", "bx2", "exit");
              }}
              cursor="pointer"
            >
              <Link href="/card?num=2" isExternal>
                <Image
                  src={box2}
                  w="100%"
                  h="100%"
                  borderRadius={{ base: "28px", md: "45px" }}
                  fit="cover"
                  style={{
                    filter: `brightness(${styles.bx2}%)`,
                  }}
                />
                <Heading
                  position="absolute"
                  top={{ base: "24px", md: "50px" }}
                  left={{ base: "24px", md: "50px" }}
                  color="whiteAlpha.900"
                  fontSize={{ base: "lg", md: "26px" }}
                >
                  Startup Advisory & Incorporation
                </Heading>
                {(styles.bx2List || isMobileView) && (
                  <UnorderedList
                    position="absolute"
                    top={{ base: "80px", md: "120px" }}
                    left={{ base: "15px", md: "40px" }}
                    color="whiteAlpha.900"
                    fontWeight="semibold"
                    fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
                    transition="ease-in-out"
                    transitionDelay="inherit"
                    transitionDuration="100"
                    padding="10px"
                  >
                    <ListItem padding="2px">
                      {" "}
                      Incorporation's and Registrations
                    </ListItem>
                    <ListItem padding="2px">
                      {" "}
                      Documentation & Draftings
                    </ListItem>
                    <ListItem padding="2px">Startup Advisory</ListItem>
                  </UnorderedList>
                )}
              </Link>
            </chakra.div>
          </motion.div>
          {/* bx-3 */}
          <motion.div whileHover={{ scale: 0.95 }}>
            <chakra.div
              cursor="pointer"
              width={{ base: "210px", md: "402px" }}
              h={{ base: "264px", md: "505px" }}
              position="relative"
              onMouseEnter={() => {
                changeStyle("shadow", "bx3", "over");
              }}
              onMouseLeave={() => {
                changeStyle("shadow", "bx3", "exit");
              }}
            >
              <Link href="/card?num=3" isExternal>
                <Image
                  src={box3}
                  w="100%"
                  h="100%"
                  borderRadius={{ base: "28px", md: "45px" }}
                  fit="cover"
                  style={{
                    filter: `brightness(${styles.bx3}%)`,
                  }}
                />
                <Heading
                  position="absolute"
                  top={{ base: "24px", md: "50px" }}
                  left={{ base: "24px", md: "50px" }}
                  color="whiteAlpha.900"
                  fontSize={{ base: "lg", md: "26px" }}
                >
                  Compliance
                </Heading>
                {(styles.bx3List || isMobileView) && (
                  <UnorderedList
                    position="absolute"
                    top={{ base: "80px", md: "120px" }}
                    left={{ base: "15px", md: "40px" }}
                    color="whiteAlpha.900"
                    fontWeight="semibold"
                    fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
                    transition="ease-in-out"
                    transitionDelay="inherit"
                    transitionDuration="100"
                    padding="10px"
                  >
                    <ListItem padding="2px"> ITR filing</ListItem>
                    <ListItem padding="2px"> Business Filings</ListItem>
                  </UnorderedList>
                )}
              </Link>
            </chakra.div>
          </motion.div>
        </SimpleGrid>
      </Box>
      {/* heading-2-desktop */}
      <Flex
        display={{ base: "none", md: "flex" }}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        h="20vh"
      >
        <Flex padding="2px" width="35%" bg="#0E4E9B" borderRadius="10px" />
        <Heading fontSize={{ md: "4xl", lg: "5xl" }} padding="10px">
          Our Services
        </Heading>
        <Flex padding="2px" width="35%" bg="#0E4E9B" borderRadius="10px" />
      </Flex>
      {/* box display - desktop */}
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Box display={{ base: "none", md: "flex" }} height="100vh" w="100%">
          <Box
            w="50%"
            h="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            position="relative"
          >
            <Box
              position="absolute"
              width="800px"
              height="800px"
              bottom="-200px"
              zIndex={-1}
              left="-300px"
              bg="#0E4E9B"
              borderRadius="100%"
            ></Box>

            <Box
              w="67%"
              borderRadius="40px"
              height="80%"
              bg="lightgray"
              position="absolute"
              zIndex={2}
            >
              <Image
                src={firstImg}
                height="100%"
                width="100%"
                borderRadius="40px"
                objectFit="cover"
              />
            </Box>
          </Box>
          <Box
            w="50%"
            h="80%"
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="flex-end"
            textAlign="left"
            paddingLeft="50px"
          >
            <Heading paddingTop="20px" fontSize="6xl">
              <p>There is never a wrong time </p>
              <p>to start something good!</p>
            </Heading>
            <Box paddingTop="20px" fontSize="2xl">
              <b>Talk to a startup professional right away</b>
            </Box>
            <Box color="GrayText" paddingTop="20px">
              <p>Advisory in choosing the right entity</p>
              <p>End-to-end incorporation advisory</p>
              <p>Post incorporation benefits</p>
            </Box>
            <Button
              width="250px"
              bg="#0E4E9B"
              color="white"
              mt="20px"
              onClick={onOpen}
            >
              Know more
            </Button>
          </Box>
        </Box>
      </motion.div>
      <Box
        mt="20px"
        display={{ base: "none", md: "flex" }}
        height="100vh"
        w="100%"
      >
        <Flex
          w="50%"
          h="80%"
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          justifyContent="flex-end"
          textAlign="left"
          paddingLeft="50px"
        >
          <Box w="80%" h="80%">
            <Heading paddingTop="20px" fontSize="6xl">
              <p>Relax we are here to </p>
              <p>take care of your accounting</p>
            </Heading>

            <Box paddingTop="20px" fontSize="2xl">
              <b>India's only 100% virtual accounting firm!</b>
            </Box>
            <Box color="GrayText" paddingTop="20px">
              <p>Advisory in choosing the right entity</p>
              <p>End-to-end incorporation advisory</p>
              <p>Post incorporation benefits</p>
            </Box>
            <Button
              width="250px"
              bg="#0E4E9B"
              color="white"
              mt="20px"
              onClick={onOpen}
            >
              Know more
            </Button>
          </Box>
        </Flex>

        <Box
          w="50%"
          h="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          position="relative"
        >
          {/* <Box
            position="absolute"
            width="50%"
            height="50%"
            bottom="-200px"
            zIndex={-1}
            right="-200px"
            bg="#0E4E9B"
            borderRadius="100%"
          ></Box> */}

          <Box
            w="67%"
            borderRadius="40px"
            height="80%"
            bg="lightgray"
            position="absolute"
          >
            <Image
              src={secondImg}
              height="100%"
              width="100%"
              borderRadius="40px"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>
      <Box
        mt="20px"
        display={{ base: "none", md: "flex" }}
        height="100vh"
        position="relative"
        w="100%"
      >
        <Box
          w="50%"
          h="100%"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            width="800px"
            height="800px"
            bottom="-200px"
            zIndex={-1}
            left="-300px"
            bg="#0E4E9B"
            borderRadius="100%"
          ></Box>

          <Box
            w="67%"
            borderRadius="40px"
            height="80%"
            bg="lightgray"
            position="absolute"
            zIndex={2}
          >
            <Image
              src={ThirdImg}
              height="100%"
              width="100%"
              borderRadius="40px"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box
          w="50%"
          h="80%"
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="flex-end"
          textAlign="left"
          paddingLeft="50px"
        >
          <Heading paddingTop="20px" fontSize="6xl">
            <p>Paperwork has never been </p>
            <p>this easy before!</p>
          </Heading>
          <Box paddingTop="20px" fontSize="2xl">
            <b>Talk to ITR professional right away</b>
          </Box>
          <Box color="GrayText" paddingTop="20px">
            <p>
              Submit your <b>Form-16</b>
            </p>
            <p>Sit back & Relax</p>
            <p>
              Your ITR is <b>Filed</b>
            </p>
          </Box>
          <Button
            width="250px"
            bg="#0E4E9B"
            color="white"
            mt="20px"
            onClick={onOpen}
          >
            Know more
          </Button>
        </Box>
      </Box>

      {/* Mobile view for the services */}
      <Box
        display={{ base: "flex", md: "none" }}
        mt="20px"
        marginLeft="30px"
        flexDirection="column"
        mb="20px"
      >
        <Heading fontSize="30px">Services</Heading>
        <Box
          padding="3px"
          width="calc(100vw - 30px)"
          bg="#0E4E9B"
          borderLeftRadius="10px"
        />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="20px"
      >
        <Box width="80%" height="400px" borderRadius="40px" bg="lightgray">
          <Image
            src={firstImg}
            w="100%"
            h="100%"
            borderRadius="40px"
            objectFit="cover"
          />
        </Box>
        <Box
          width="80%"
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Heading paddingTop="10px" fontSize="3xl">
            <p>There is never a wrong time </p>
            <p>to start something good !</p>
          </Heading>
          <Box paddingTop="10px" fontSize="xl">
            <b>Talk to startup professional right away</b>
          </Box>
          <Box color="GrayText" paddingTop="10px">
            <p>Advisory in choosing the right entity</p>
            <p>End to end incorporation advisory</p>
            <p>Post incorporation benifits</p>
          </Box>
          <Button
            width="150px"
            bg="#0E4E9B"
            color="white"
            mt="20px"
            onClick={onOpen}
          >
            Know more
          </Button>
        </Box>

        <Box width="80%" height="400px" borderRadius="40px" bg="lightgray">
          <Image
            src={secondImg}
            w="100%"
            h="100%"
            borderRadius="40px"
            objectFit="cover"
          />
        </Box>
        <Box
          width="80%"
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Heading paddingTop="10px" fontSize="3xl">
            <p>Relax we are here to </p>
            <p>take care of your accounting</p>
          </Heading>
          <Box paddingTop="10px" fontSize="xl">
            <b>India's only 100% virtual accounting firm !</b>
          </Box>
          <Box color="GrayText" paddingTop="10px">
            <p>Advisory in choosing the right entity</p>
            <p>End to end incorporation advisory</p>
            <p>Post incorporation benifits</p>
          </Box>
          <Button
            width="150px"
            bg="#0E4E9B"
            color="white"
            mt="20px"
            onClick={onOpen}
          >
            Know more
          </Button>
        </Box>

        <Box width="80%" height="400px" borderRadius="40px" bg="lightgray">
          <Image
            src={ThirdImg}
            w="100%"
            h="100%"
            borderRadius="40px"
            objectFit="cover"
          />
        </Box>
        <Box
          width="80%"
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Heading paddingTop="10px" fontSize="3xl">
            <p>Paperwork never been </p>
            <p>this easy before!</p>
          </Heading>
          <Box paddingTop="10px" fontSize="xl">
            <b>Talk to ITR professional right away</b>
          </Box>
          <Box color="GrayText" paddingTop="10px">
            <p>
              Submit your <b>Form-16</b>
            </p>
            <p>Sit back & Relax</p>
            <p>
              Your ITR is <b>Filed</b>
            </p>
          </Box>
          <Button
            width="150px"
            bg="#0E4E9B"
            color="white"
            mt="20px"
            onClick={onOpen}
          >
            Know more
          </Button>
        </Box>
      </Box>
      {/* footer-Desktop-view */}
      <div id="footer">
        <Footer />
      </div>
    </chakra.div>
  );
}

export default Home;
