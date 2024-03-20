import {memo} from "react";
import { View, StyleSheet, Image, Text, Font, Link } from "@react-pdf/renderer";
import ProfileImage from "../assets/image/cv-square_300x300.jpg";
import headerBackground from "../assets/image/code-bkg.jpg";
import InternetIcon from "../assets/image/internet.png";
import GitHubIcon from "../assets/image/github.png";
import LinkedInIcon from "../assets/image/linkedin.png";

//Primary Bold Font
import TitilliumWebBlack from "../assets/fonts/TitilliumWeb-Black.ttf";

Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});

//Secondary title font
import TitilliumWebSemiBold from "../assets/fonts/TitilliumWeb-SemiBold.ttf";

Font.register({
  family: "TitilliumWeb-SemiBold",
  src: TitilliumWebSemiBold,
});

// Define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
    color: "#fff",
  },
  headerBackgroundContainer: {
    overflow: "hidden",
    height: "200px",
  },
  headingPrimary: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "TitilliumWeb-Black",
  },
  headingSecondary: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "TitilliumWeb-SemiBold",
  },
  borderCircle: {
    borderRadius: "100%",
  },
  containerHeader: {
    height: "60vh",
    maxHeight: "1050px",
    padding: 0,
    color: "#fff",
    backgroundPosition: "center center",
    marginBottom: "5%",
  },
  profileImageContainer: {
    alignSelf: "center",
    backgroundColor: "#999",
    width: "100px",
    height: "100px",
    border: "4px solid #999",
    borderRadius: "100%",
    marginTop: "5%",
    overflow: "hidden",
  },
  profileImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  containerIcons: {
    zIndex: 2,
    fontSize: 10,

    objectFit: "cover",
    borderRadius: "50%",
  },
  iconBackgroundCircle: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #03f8bd",
    borderRadius: "75%",
    height: "30px",
    width: "30px",
    zIndex: 9999,
  },
  linkSocial: {
    color: "white",
    textDecoration: "none",
    fontSize: 10,
    marginRight: 3,
    zIndex: 9999,
  },
  iconSocial: { color: "#fff", width: 20, height: 20 },
});

// Define your component
const Header = ({ fullName, primaryPosition,url,profileImg }) => {
 
  return (
    <>
      <View style={styles.headerBackgroundContainer}>
        <Image src={headerBackground} style={{ height: "100%" }} />
      </View>
      <View style={{ top: "0px", ...styles.container }}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            src={profileImg?profileImg:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
          />
        </View>
        <View>
          <View>
            <Text style={styles.headingPrimary}>{fullName}</Text>
          </View>
          <View>
            <Text style={styles.headingSecondary}>{primaryPosition}</Text>
          </View>
          <View style={styles.containerIcons}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: "10",
              }}
            >
              <Link style={styles.linkSocial} src={url.LinkedIn}><Image src={LinkedInIcon} style={styles.iconSocial} /></Link>
              <Link src={url.git} ><Image src={GitHubIcon} style={styles.iconSocial} /></Link>
              <Link src={url.website}><Image src={InternetIcon} style={styles.iconSocial} /></Link>
            
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default  Header;
