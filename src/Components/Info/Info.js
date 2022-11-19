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
  useToast,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import {
  BsFillCheckCircleFill,
  BsPhone,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdOutlineContactPage, MdEmail } from "react-icons/md";
import axios from "axios";
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
  const [formData, setFormData] = useState({
    name: "",
    phone: 0,
    email: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const toast = useToast();
  useEffect(() => {
    setFlashCardData(startUpAdvisory.flashCards);
    setCardData(startUpAdvisory.startUpAdvisory);
  }, []);

  const HandleChange = (name) => {
    for (let i = 0; i < flashCardsData.length; i++) {
      if (flashCardsData[i].name === name) {
        console.log("dataToDisp:", flashCardsData[i]);
        setDataTodisp(flashCardsData[i]);
      }
    }
    setFormData({ name: "", phone: "", email: "" });
    setIsError({ name: false, phone: false, email: false });
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
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1000);
    } else if (number === 3) {
      const element = document.getElementById("3");
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1500);
    }
  }, []);
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
  const recordData = (title) => {
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
    setFormData((prev) => ({
      ...prev,
      title: title,
    }));
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
  const saveData = async () => {
    setIsLoading(true);
    console.log("DataTosave:", formData);
    let data = {
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      Reason: "Start up advisory",
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
      })
      .catch(function (error) {
        console.log(error);
        warningTost();
        setIsLoading(false);
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
  const showSuccesToast = () => {
    toast({
      title: "We recieved you're request",
      description: "Our professional expert will contact you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
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
                  justifyContent="flex-start"
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
                        onClick={() => recordData(dataTodisp?.title)}
                        isLoading={isLoading}
                      >
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
          <Heading fontSize={{ base: "xl", md: "5xl", lg: "5xl" }}>
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
            h={{ base: "40vh", md: "40vh" }}
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
            h={{ base: "20vh", md: "40vh" }}
            // paddingLeft={{base:"0px",md:"20px",lg:"100px"}}
            alignItems={{ base: "center", md: "flex-end" }}
            justifyContent={{ base: "center" }}
          >
            <Heading
              w={{ base: "80%", md: "80%" }}
              fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            >
              <p>Accounting now</p>
              <p>Hassel-free,</p>
              <p>with Audit Lens</p>
            </Heading>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Heading
            w="80%"
            padding={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          >
            How we do it!
          </Heading>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Box
            w="80%"
            paddingLeft={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
          >
            <p>
              Auditlens offers Virtual Accounting Services to manage your
              accounts payable, accounts receivable, projects, general ledger
              postings, bank reconciliations, preparation of financial
              statements, and MIS Reporting* for the Small and Medium Enterprise
              (SME) Sector. We are equipped with accounting software to minimise
              the chances of miscalculations. Our ultimate goal is to be a
              valuable addition to your business for making you focus on your
              core business functions, let us provide accounting, Tax compliance
              services.
            </p>
          </Box>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Heading
            w="80%"
            padding={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
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
            fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
          >
            <UnorderedList>
              <ListItem>
                Bookkeeping for your Business like capturing the invoices both
                the Sales, Purchase sides and voucher entries.
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
        <Flex
          mt="20px"
          w="60%"
          alignItems="flex-end"
          flexDirection="column"
          id="2"
        >
          <Heading fontSize={{ base: "xl", md: "5xl", lg: " 5xl" }}>
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
                position="relative"
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

                  <Heading fontSize="16px" textAlign="center">
                    {value.title}
                  </Heading>
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
                    <Heading fontSize="18px">
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
                <Flex flexDirection="column" padding="10px">
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
                <Flex
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  bottom="50px"
                >
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
        <Flex mt="20px" w="60%" alignItems="flex-end" flexDirection="column">
          <Heading
            fontSize={{ base: "xl", md: "5xl", lg: " 5xl" }}
            mt={{ base: "10px", md: "20px", lg: "60px" }}
            id="3"
          >
            Compliance
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
            h={{ base: "40vh", md: "40vh" }}
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
            h={{ base: "20vh", md: "40vh" }}
            // paddingLeft={{base:"0px",md:"20px",lg:"100px"}}
            alignItems={{ base: "center", md: "flex-end" }}
            justifyContent={{ base: "center" }}
          >
            <Heading
              w={{ base: "80%", md: "80%" }}
              fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
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
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          >
            Filing ITR is now made easy
          </Heading>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Box
            w="80%"
            paddingLeft={{ base: "0px", md: "40px", lg: "60px" }}
            textAlign="start"
            fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
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
