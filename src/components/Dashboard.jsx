export const CodeWhispererAdoption = () => {
  return (
    <div className="my-5 flex flex-col items-center mx-2 border rounded-md shadow-xl">
      <h1 className="font-bold text-xl text-center my-4">
        CodeWhisperer Adoption Dashboard
      </h1>
      <iframe
        title="Generative AI Light"
        width="100%"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=d0f40272-a929-46c5-bf6f-c9e7af85e15e&autoAuth=true&ctid=1f4beacd-b7aa-49b2-aaa1-b8525cb257e0"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export const UsecaseWiseAdoption = () => {
  return (
    <div className="my-5 flex flex-col items-center mx-2 border rounded-md shadow-xl">
      <h1 className="font-bold text-xl text-center my-4">
        Usecase wise Adoption Dashboard
      </h1>
      <iframe
        title="Generative AI Light"
        width="100%"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=d0f40272-a929-46c5-bf6f-c9e7af85e15e&autoAuth=true&ctid=1f4beacd-b7aa-49b2-aaa1-b8525cb257e0"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

const GenAIProductivityTracker = () => {
  return (
    <div className="my-5 flex flex-col items-center mx-2 border rounded-md shadow-xl overflow-x-hidden">
      <h1 className="font-bold text-xl text-center my-4">
        GenAI Productivity Tracker
      </h1>
      <iframe
        title="Generative AI Light"
        width="100%"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=d0f40272-a929-46c5-bf6f-c9e7af85e15e&autoAuth=true&ctid=1f4beacd-b7aa-49b2-aaa1-b8525cb257e0"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
      {/* <iframe
        title="Generative AI Light"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=d0f40272-a929-46c5-bf6f-c9e7af85e15e/reportSection=f13929ec06c7a371deb5&autoAuth=true&ctid=1f4beacd-b7aa-49b2-aaa1-b8525cb257e0"
        // "https://app.powerbi.com/groups/me/reports/d0f40272-a929-46c5-bf6f-c9e7af85e15e/ReportSectionf13929ec06c7a371deb5?ctid=1f4beacd-b7aa-49b2-aaa1-b8525cb257e0&experience=power-bi"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe> */}
    </div>
  );
};

export default GenAIProductivityTracker;
