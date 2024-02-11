import { useContext, useReducer, useState } from "react";
import {
  PDFViewer,
  Page,
  Document,
  View,
  Font,
  StyleSheet,
  Text,
  Image,
} from "@react-pdf/renderer";
import Experience from "./Experience";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Certificates from "./Certificates";
import { PDFredocer } from "../PDFredocer";
import { allContext } from "../PDFContex";

function PDF() {
  const { dispatch, state } = useContext(allContext);

  // Create PDFstyles
  const { PDFstyles } = useContext(allContext);
  return (
    <div
      style={PDFstyles.containerDiv}
      className="border border-gray-300 rounded-lg p-4 bg-yellow-100"
    >
      <PDFViewer style={PDFstyles.pdfViewer}>
        <Document>
          <Page size="A4" style={{ ...PDFstyles.page, ...PDFstyles.whiteText }}>
            <Header
              fullName={state.fullName}
              primaryPosition={state.primaryPosition}
              url={state.url}
            />
            <AboutMe
              aboutDescription={state.aboutDescription}
              contactInfo={state.contactInfo}
            />
            <View>
              <Text style={PDFstyles.headingPrimary}>
                {"professionalExperience"}
              </Text>
            </View>
            {state.experiences &&
              state.experiences.length > 0 &&
              state.experiences.map((element, key) => {
                return (
                  <Experience
                    key={key}
                    period={element.period}
                    company={element.company}
                    summary={element.summary}
                  />
                );
              })}
            <Text style={PDFstyles.headingPrimary}>{"education"}</Text>
            {state.education &&
              state.education.length > 0 &&
              Array.from(
                { length: Math.ceil(state.education.length / 3) },
                (_, groupIndex) => {
                  const startIndex = groupIndex * 3;
                  const endIndex = startIndex + 3;
                  const group = state.education.slice(startIndex, endIndex);

                  return (
                    <Education
                      key={groupIndex}
                      education={group}
                      certification={state.certification}
                    />
                  );
                }
              )}
            <Certificates certification={state.certification} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default PDF;
