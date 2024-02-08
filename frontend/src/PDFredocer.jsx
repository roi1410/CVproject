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
    case "certificationChange":
      return {
        ...state,
        certification: action.certification,
      };
    case "profileImgChange":
      return {
        ...state,
        profileImg: action.profileImg,
      };
    case "backgroundImgChange":
      return {
        ...state,
        backgroundImg: action.backgroundImg,
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
    default:
      return state;
  }
}
