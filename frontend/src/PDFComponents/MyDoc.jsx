import { useContext, useReducer, useState } from "react";
import { Page, Document, View, Text } from "@react-pdf/renderer";
import Experience from "./Experience";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";

const MyDoc = ({ PDFstyles, state }) => {
  if (Array.isArray(state)) {
    console.log("why that shit is Array?");
    return <></>;
  }
  


  return (
    <Document>
      <Page size="A4" style={{ ...PDFstyles.page, ...PDFstyles.whiteText }}>
        <Header
          fullName={state?.fullName}
          primaryPosition={state?.primaryPosition}
          url={state?.url}
          profileImg={state?.profileImg}
        />
        <AboutMe
          aboutDescription={state?.aboutDescription}
          contactInfo={state?.contactInfo}
        />

        {state?.experiences &&
          state?.experiences.length > 0 &&
          state?.experiences.map((element, key) => {
            return (
              <View key={key}>
                <View>
                  <Text style={PDFstyles.headingPrimary}>
                    {"professionalExperience"}
                  </Text>
                </View>
                ;
                <Experience
                  
                  period={element?.period}
                  company={element?.company}
                  summary={element?.summary}
                />
              </View>
            );
          })}

        {state.education &&
          state.education.length > 0 &&
          Array.from(
            { length: Math.ceil(state.education.length / 3) },
            (_, groupIndex) => {
              const startIndex = groupIndex * 3;
              const endIndex = startIndex + 3;
              const group = state.education.slice(startIndex, endIndex);

              return (
                <View key={groupIndex}>
                  <Text style={PDFstyles.headingPrimary}>{"education"}</Text>

                  <Education
                    
                    education={group}
                    certification={state?.certification}
                  />
                </View>
              );
            }
          )}

        {/* <Certificates certification={state?.certification} /> */}
      </Page>
    </Document>
  );
};
export default MyDoc;
