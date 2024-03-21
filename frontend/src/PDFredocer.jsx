// experiences: [
//   {
//     period: "4",
//     company: "Microsoft",
//     summary: {
//       Frontend: ["Figma", "reactjsx"],
//       Backend: ["node.js", "Technology"],
//       management: ["head of  a fullstack team ", "head of cyber"],
//     },
//   },
// ],

export function PDFredocer(state, action) {
  switch (action.type) {
    case "fullnameChange":
      return {
        ...state,
        fullName: action.fullName,
      };
    case "experiencesChange":
      return {
        ...state,
        experiences: action.experiences,
      };

    case "primaryPositionChange":
      return {
        ...state,
        primaryPosition: action.primaryPosition,
      };
    case "aboutDescriptionChange":
      return {
        ...state,
        aboutDescription: action.aboutDescription,
      };
    case "contactInfoChange":
      return {
        ...state,
        contactInfo: {
          tel: action.contactInfo.tel,
          email: action.contactInfo.email,
          address: action.contactInfo.address,
        },
      };
    case "educationChange":
      return {
        ...state,
        education: action.education,
      };
    case "certification":
      return {
        ...state,
        certification: action.certification,
      };
    case "profileImgChange":
      return {
        ...state,
        profileImg: action.profileImg,
      };

    case "urlChange":
      return {
        ...state,
        url: action.url,
      };
    case "company":
      return {
        ...state,
        company: action.company,
      };
    case "addProfileImg":
      return {
        ...state,
        profileImg: action.profileImg,
      };
    default:
      return state;
  }
}
