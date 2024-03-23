import samplepdf from "../assets/ProductivityImprovement.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PDFViewer from "../components/PDFViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ProductivityImprovement = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <PDFViewer file={samplepdf} pages={3} />
    </div>
  );
};

export default ProductivityImprovement;
