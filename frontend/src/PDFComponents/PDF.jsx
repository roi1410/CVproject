import { useContext} from "react";
import { PDFViewer } from "@react-pdf/renderer";

import { allContext } from "../context/PDFContex";
import MyDoc from "./MyDoc";
function PDF() {
  const { state } = useContext(allContext);
  const { PDFstyles } = useContext(allContext);

  return (
    <div
      id="PDF"
      style={PDFstyles.containerDiv}
      className="border border-gray-300 rounded-lg p-4 bg-secondary"
    >
      <PDFViewer className="react-pdf__Viewer" style={PDFstyles.pdfViewer}>
        <MyDoc state={state} PDFstyles={PDFstyles} />
      </PDFViewer>
    </div>
  );
}
export default PDF;
