import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaFilePdf } from "react-icons/fa6";

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return (<button onClick={downloadPdfDocument} className="style-button-pdf">
        <FaFilePdf />
        PDF
        </button>)

}

export default GenericPdfDownloader;