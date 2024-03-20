import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

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
  containerEducation: {
    fontSize: 11,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    margin: 20,
    fontFamily: "TitilliumWeb-SemiBold",
    fontWeight: 400,
  },
  containerColInner: {
    flexGrow: 2,
    flexWrap: "wrap",
    flexDirection:"column",
    padding: 4,
    marginLeft: 4,
    border: "1px solid #ccc",
    width: "30%",
  },
  containerAwardedHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(3, 248, 189, 0.9)",
    fontFamily: "TitilliumWeb-Black",
  },
  textPeriod: {
    fontSize: 10,
    fontWeight: "100",
    fontFamily: "TitilliumWeb-SemiBold",
  },
  headingPeriod: {
    fontWeight: 400,
  },
  headingTitled: {
    fontWeight: 800,
  },
  containerList:{
    flexGrow: 2,
    flexWrap: "wrap",
    flexDirection:"column",
    padding: 4,
    marginLeft: 4,
    border: "1px solid #ccc",
    width: "30%",
  }
});

const Education = ({ education }) => {
  if (!education || education.length === 0) {
    return null;
  }
  return (
    <>
      <View style={styles.containerEducation} wrap={false}>
        <View style={styles.containerAwardedHeading}>
          <Text>{"awarded"}</Text>
        </View>
        {education.map((item, index) => (
          <View key={index} style={styles.containerColInner}>
            <View>
              <Text style={styles.headingPeriod}>{item.period}</Text>
            </View>
            <View>
              <Text style={styles.headingTitled}>{item.titled}</Text>
            </View>
            <View style={styles.containerList}>
              {item.awarded && item.awarded.map((award, awardIndex) => (
                <Text style={{flexDirection:"row"}} key={awardIndex}>
                  {award}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default Education;
