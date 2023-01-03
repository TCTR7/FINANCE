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
    pdfExportComponent.current.save();
  };
  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 50,
      }}
    >
      <Button onClick={exportHandle}> Export</Button>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <Header />
      </PDFExport>
      <Control />
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <TableResult />
      </PDFExport>
    </div>
  );
}

export default App;
