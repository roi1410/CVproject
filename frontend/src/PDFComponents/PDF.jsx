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
  const [state, dispach] = useReducer(PDFredocer, {
    fullName: "roi",
    experiences: [
      {
        period: "4",
        company: "Microsoft",
        summary: {
          Frontend: ["Figma", "reactjsx"],
          Backend: ["node.js", "Technology"],
          management: ["head of  a fullstack team ", "head of cyber"],
        },
      },
    ],
    primaryPosition: "primaryPosition",
    aboutDescription:
      "bgjbgdryhrbydhdyhfhfhbdhfhfhdryhrbhdhdfhdfnfgjcchfbcgchfbffjbgdryhrbydhdyhfhfhbdhfhfhdryhrbhdhdfhdfnfgjcchfbcgchfbffjbgdryhrbydhdyhfhfhbdhfhfhdryhrbhdhdfhdfnfgjcchfbcgchfbffj",
    contactInfo: {
      tel: "0502855522",
      email: "Email@gmail.com",
      address: "Narnia",
    },
    education: [
      {
        period: "period 4.5 month",
        titled: "fullstack coures in cyberpro",
        awarded: ["react.jsx", "Html", "CSS "],
      },
      {
        period: "period 4.5 month",
        titled: "highschool",
        awarded: ["react.jsx", "Html", "CSS "],
      },
      {
        period: "period 4.5 month",
        titled: "havard pHD",
        awarded: ["react.jsx", "Html", "CSS "],
      },
      {
        period: "period 4.5 month",
        titled: "fullstack coures in cyberpro",
        awarded: ["react.jsx", "Html", "CSS "],
      },
      {
        period: "period 4.5 month",
        titled: "highschool",
        awarded: ["react.jsx", "Html", "CSS "],
      },
      {
        period: "period 4.5 month",
        titled: "havard pHD",
        awarded: ["react.jsx", "Html", "CSS "],
      },
    ],
    certification: {
      urls: [
        "data:image/png;base64,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",
        "data:image/png;base64,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",
      ],
    },
    profileImg: "",
    backgroundImg: "",
    url: {
      git: "https://github.com/roi1410/CVproject",
      LinkedIn: "",
      website: "",
    },
  });

  // Create PDFstyles
 const {PDFstyles}=useContext(allContext)
  return (
    <div
      style={PDFstyles.containerDiv}
      className="h-80vh max-w-50vw p-1 box-border overflow-hidden"
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
            {state.experiences.length > 0 &&
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

            {state.education.length > 0 &&
              state.education.map((elment, i) => {
                if ((i + 1) % 3 === 0) {
                  return (
                    <Education
                      key={i}
                      education={[
                        state.education[i],
                        state.education[i - 1],
                        state.education[i - 2],
                      ]}
                      certification={state.certification}
                    />
                  );
                }
              })}
            <Certificates certification={state.certification} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default PDF;
