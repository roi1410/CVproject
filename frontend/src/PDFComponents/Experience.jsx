import  { memo } from "react";
import { Text, View, Image, StyleSheet,Font } from "@react-pdf/renderer";
import { cleanText } from "../util/utils";
import SourceCode from "../assets/image/source-code.png";
import Services from "../assets/image/services.png";
import Console from "../assets/image/console.png";


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
  // fontWeight: 600,
});

const styles = StyleSheet.create({
  body: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: "TitilliumWeb-SemiBold",
    fontWeight: 600,
  },
  containerExperience: {
    margin: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    fontSize: 12,
    color: "#fff",

  },
  containerCols: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  col: {
    flexGrow: 4,
    flexDirection: "row",
  },
  containerListHeading: {
    paddingRight: 9,
    flexDirection: "row",
    rowGap:4,
    fontFamily: "TitilliumWeb-SemiBold",
    fontWeight: 400,
  },
  icon: {
    width: 20,
    height:20,
    fontWeight: 400,
  },
  listColumnInner: {
    paddingLeft: "2%",
    fontSize: 11,
    fontWeight: 400,
  },
  containerPositionHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    backgroundColor: "rgba(3, 248, 189, 0.9)",
    fontFamily: "TitilliumWeb-Black",
  },
  description: {
    padding: 10,
  },
  textPeriod: {
    fontSize: 10,
    fontWeight: "100",
    fontFamily: "TitilliumWeb-SemiBold",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "TitilliumWeb-Black",
  },
  textCompany: {
    fontSize: 12,
    fontWeight: "200",
    fontFamily: "TitilliumWeb-Black",
  },
});

const Experience = ({ period, title, company, description, summary }) => {
  return (
    <View style={styles.containerExperience}>
      <View style={styles.containerPositionHeading}>
        <View style={{ width: "190px" }}>
          <Text style={styles.textPeriod}>{"period: 4 years"}</Text>
        </View>
        <View style={{ width: "300px", textAlign: "center" }}>
          <Text style={styles.textTitle}> {"Experience"}</Text>
        </View>
        <View style={{ width: "190px", textAlign: "right" }}>
          <Text style={styles.textCompany}>{"company:Microsoft"}</Text>
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.body}>{cleanText("Experience")}</Text>
      </View>

      <View style={styles.containerCols}>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Image
              // src="https://img.icons8.com/material/200/ffffff/source-code.png"
              src={SourceCode}
              style={styles.icon}
            />
          </View>
          <View style={styles.listColumnInner}>
            <Text>{"Frontend" }:</Text>
            {summary.Frontend.map((item, index) => (
              <Text key={index}>
                <Text style={{ marginHorizontal: 8 }}>• </Text>
                {item}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Image
              // src="https://img.icons8.com/material/200/ffffff/services.png"
              src={Services}
              style={styles.icon}
            />
          </View>
          <View style={styles.listColumnInner}>
            <Text>{"Backend "}:</Text>
            {summary.Backend.map((item, index) => (
              <Text key={index}>
                <Text style={{ marginHorizontal: 8 }}>• </Text>
                {item}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Image
              // src="https://img.icons8.com/material/200/ffffff/console.png"
              src={Console}
              style={styles.icon}
            />
          </View>
          <View style={styles.listColumnInner}>
            <Text>{"management"}:</Text>
            {summary.management.map((item, index) => (
              <Text key={index}>
                <Text style={{ marginHorizontal: 8 }}>• </Text>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Experience;
