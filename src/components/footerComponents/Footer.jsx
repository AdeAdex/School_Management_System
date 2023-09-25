import React, { useEffect, useState } from "react";
import FooterHeader from "./FooterHeader";
import OurTagBtn from "./OurTagBtn";
import FooterGallary from "./FooterGallary";
import FooterReachBtn from "./FooterReachBtn";
import Contact_Us_Form from "./Contact_Us_Form";
import FooterHero from "./FooterHero";
import Small_hr from "../generalComponents/Small_hr";
import MulticolorLine from "../generalComponents/MulticolorLine";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import FooterCarousel from "./FooterCarousel";




const galleryImages1 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_13_s6nfrc.jpg",
    imageName:"1" 
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg",
    imageName:"1"
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_16_mydc4f.jpg",
    imageName:"1"
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_19_ap7ihu.jpg",
    imageName:"1"
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_18_xjzpbq.jpg",
    imageName:"1"
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_14_esjffp.jpg",
    imageName:"1"
  },
]

const galleryImages2 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1693830496/cc1zqlglcnkj1esgvupi.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634107/jss2_student_donz5y.webp",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632152/bg-image-6_tibn5o.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632170/loginImage7_jqkq7f.png",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632157/bg-image-2_xfvcqi.jpg",
    imageName: "Image 2",
  },
  
];

const galleryImages3 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632158/signupimg_jbc9ys.jpg",
    imageName: "Image 3",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634051/Science_Fair_Extravaganza_bnabp4.jpg",
    imageName: "Image 3",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632154/bg-image-4_sixgsj.jpg",
    imageName: "Image 3",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632157/gallary6_jqjgju.jpg",
    imageName: "Image 3",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632161/gallary4_doecm8.png",
    imageName: "Image 3",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695632170/gallary8_j2xdnc.jpg",
    imageName: "Image 3",
  },
  
];

const galleryImages4 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633195/teacher23_r8mpga.jpg",
    imageName: "Image 4",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633195/teacher24_o2rai6.jpg",
    imageName: "Image 4",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633193/teacher21_vkswie.jpg",
    imageName: "Image 4",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633196/teacher20_gkyxa0.jpg",
    imageName: "Image 4",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633195/teacher1414_dk6hun.jpg",
    imageName: "Image 4",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633194/teacher18_v38gv2.jpg",
    imageName: "Image 4",
  },

  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633194/teacher22_gjthgu.webp",
    imageName: "Image 4",
  },

  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633193/teacher19_yys6xy.webp",
    imageName: "Image 4",
  },

  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633192/teacher17_sykjad.avif",
    imageName: "Image 4",
  },

  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633191/admin_yp1hnf.webp",
    imageName: "Image 4",
  },

  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633192/teacher13_higxnp.jpg",
    imageName: "Image 4",
  },
  
];

const galleryImages5 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694647086/l32mjyxe5ktnrrkkowlq.jpg",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694645967/zw5ljhi2cw0z9yyw5hez.jpg",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694644126/iis8s6e1nxkudjcchmpu.jpg",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694643333/szuwnde5apdk1zjfmofq.png",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694640968/gp2lgd9iw2pm6iumf7jq.jpg",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694639957/jx9npjefyuayw3kfkqvh.jpg",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694023868/e5v5pdumpommlo3b6fcz.jpg",
    imageName: "Image 5",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694014250/lfotsv9pitdvinhvbarm.jpg",
    imageName: "Image 5",
  },
  
];

const galleryImages6 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634160/art_fnsqly.jpg",
    imageName: "Image 6",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634156/ANNUAL_SCHOOL_ANNIVERSARY_CELEBRATION_ixxc63.jpg",
    imageName: "Image 6",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634157/Athletics_and_Sport_gnf3rd.jpg",
    imageName: "Image 6",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435025/images_9_joxtyd.jpg",
    imageName: "Image 6",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435025/images_6_x43nrl.jpg",
    imageName: "Image 6",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435025/images_5_m9uf3f.jpg",
    imageName: "Image 6",
  },
  
];


const Footer = ({ contactUsRef }) => {

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImages, setSelectedImages] = useState(galleryImages1);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup by removing event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const navigate = useNavigate();

  const primarySchool = (para) => {
    if (para == "call") {
      window.open("tel:+2347033959586");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Currently Unavailable, Please Try Again Later",
      });
    }
  };

  const toRespectiveLocation = (para) => {
    if (para == "teacher") {
      navigate("/ourteachers");
    } else if (para == "courses") {
      navigate("/our_courses");
    } else if (para == "events") {
      navigate("/ourevent");
    } else if (para == "secondary") {
      navigate("/");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Currently Unavailable, Please Try Again Later",
      });
    }
  };

 

  const modalStyles = {
    modal: {
      width: "400px !important",
    },
  };


  const handleClick = (images) => {
    setSelectedImages(images);
    open()
  };


  return (
    <>
      <div
        className=" w-100"
        style={{ backgroundColor: "#495052", paddingBottom: "50px" }}
      >
        <MulticolorLine />
        <div
          className="top-footer mx-auto d-flex gap-4 w-75"
          style={{ paddingTop: "50px" }}
        >
          <div className="each-footer text-white" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="our primary school"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div>
              Welcome to Our Primary School, where learning is an exciting
              adventure every day! 🌟 Our school is a place filled with
              laughter, curiosity, and endless opportunities to grow and
              explore. 📚🌈
            </div>
            <div className="d-flex mt-3 gap-3">
              <FooterReachBtn
                btn_classes="bt orange"
                classes="fas fa-envelope text-white"
                icon="msg"
                onClick={() => primarySchool("msg")}
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt yellow"
                classes="fas fa-home "
                onClick={() => primarySchool("home")}
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt pink"
                classes="fas fa-phone"
                onClick={() => primarySchool("call")}
              ></FooterReachBtn>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="our tag"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 flex-wrap w-100">
                <OurTagBtn
                  onClick={() => toRespectiveLocation("teacher")}
                  btn_txt="teacher"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("courses")}
                  btn_txt="courses"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("events")}
                  btn_txt="events"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("nursery")}
                  btn_txt="nursery"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("primary")}
                  btn_txt="primary"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("secondary")}
                  btn_txt="secondary"
                ></OurTagBtn>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="school gallery"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg"
                  cover="Image 1"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg"
                  onClick={() => handleClick(galleryImages1)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg"
                  cover="Image 2"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg"
                  onClick={() => handleClick(galleryImages2)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634051/Science_Fair_Extravaganza_bnabp4.jpg"
                  cover="Image 3"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634051/Science_Fair_Extravaganza_bnabp4.jpg"
                  onClick={() => handleClick(galleryImages3)}
                ></FooterGallary>
              </div>
              <div className="d-flex gap-3">
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633195/teacher24_o2rai6.jpg"
                  cover="Image 4"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695633195/teacher24_o2rai6.jpg"
                  onClick={() => handleClick(galleryImages4)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694023868/e5v5pdumpommlo3b6fcz.jpg"
                  cover="Image 5"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694023868/e5v5pdumpommlo3b6fcz.jpg"
                  onClick={() => handleClick(galleryImages5)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634160/art_fnsqly.jpg"
                  cover="Image 6"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1695634160/art_fnsqly.jpg"
                  onClick={() => handleClick(galleryImages6)}
                ></FooterGallary>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="contact us"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <Contact_Us_Form contactUsRef={contactUsRef} />
          </div>
        </div>

        <div className="mx-auto d-flex gap-4 w-100 mt-5">
          <FooterHero></FooterHero>
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="School Gallary"
        centered
        size={`${isSmallScreen ? '100%' : '70%'} `}
      >
        <FooterCarousel images={selectedImages}/>
      </Modal>
    </>
  );
};

export default Footer;
