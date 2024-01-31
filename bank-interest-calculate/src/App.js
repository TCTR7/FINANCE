import "./App.css";
import Control from "./components/Control";
import TableResult from "./components/TableResult";
import Header from "./components/Header";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import { Button } from "@mui/material";

function App() {
  const pdfExportComponent = useRef(null);
  const exportHandle = () => {
    console.log("exportHandle", pdfExportComponent.current)
    if (pdfExportComponent.current) {
      console.log("pdfExportComponent.current: ", pdfExportComponent.current)
      pdfExportComponent.current.save();
    }
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 50,
      }}
    >
      <Button onClick={exportHandle}> Export</Button>
      <Header />
      <Control />
      <PDFExport ref={pdfExportComponent} paperSize="A1">
        <TableResult />
      </PDFExport>
    </div>
  );
}

export default App;
