import { useState } from "react";
import { Document, Page } from "react-pdf";
import samplepdf from "../assets/Testing.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFViewer = () => {
  const [numPages, setNumPages] = useState();
  // const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={samplepdf}
        onLoadSuccess={() => onDocumentLoadSuccess({ numPages: 2 })}
      >
        {/* <Page pageNumber={pageNumber} /> */}
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            // width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
          />
        ))}
      </Document>
    </div>
  );
};

const GenAITesting = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center shadow-md border m-6">
        <PDFViewer />
      </div>
      <div className="m-6">
        {/* <h1>Explore</h1> */}
        {/* <ul>
          <li>
            <h3 className="font-bold flex items-center">
              <span className="mr-2">API Testing</span>
              <a href={""} target="_blank" rel="noreferrer">
                <ArrowRightOutlined
                  style={{
                    color: "#FD5F07",
                    fontSize: "20px",
                  }}
                />
              </a>
            </h3>
          </li> 
        {/* </ul> */}
        {/* <div className="flex flex-col items-center border shadow-md w-28 h-28">
          <p>API Testing</p>
        </div> */}
      </div>
    </>
  );
};

export default GenAITesting;

// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// function pptViewer() {
//   const docs = [
//     {
//       uri: require("../assets/Testing.pdf"),
//     }, // Local File
//   ];

//   return (
//     <DocViewer
//       documents={docs}
//       pluginRenderers={DocViewerRenderers}
//       config={{
//         header: {
//           disableHeader: true,
//           disableFileName: true,
//           retainURLParams: true,
//         },
//         csvDelimiter: ",", // "," as default,
//         pdfZoom: {
//           defaultZoom: 1.1, // 1 as default,
//           zoomJump: 0.2, // 0.1 as default,
//         },
//         pdfVerticalScrollByDefault: true, // false as default
//       }}
//     />
//   );
// }
// const GenAITesting = () => {
//   return <div className="mt-20">{pptViewer()}</div>;
// };

// export default GenAITesting;

// import testingImage1 from "../assets/genaiSlide3.png";
// import testingImage2 from "../assets/genaiSlide4.png";
// const GenAITesting = () => {
//   return (
//     <div className="flex flex-col">
//       <img src={testingImage1} alt="testing-img-1" className="mt-16" />
//       <img src={testingImage2} alt="testing-img-2" />
//       <div>
//         <h1>Explore</h1>
//       </div>
//     </div>
//   );
// };

// export default GenAITesting;
