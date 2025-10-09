import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import letas from "/letas/letas.pdf"

// Set up the worker for PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
    const [numPages, setNumPages] = useState<any>(null);
    const [pageNumber, setPageNumber] = useState(1);

    // Runs when PDF is loaded
    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    // Simple page navigation
    const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
    const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

    return (
        <div className="flex flex-col items-center">
            {/* PDF File */}
            <Document
                file={letas} // path to your converted PPTX file
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<p>Loading PDF...</p>}
            >
                <Page pageNumber={pageNumber} width={800} />
            </Document>

            {/* Navigation Buttons */}
            <div className="mt-4 flex gap-4">
                <button onClick={prevPage} disabled={pageNumber <= 1}>
                    ◀ Prev
                </button>
                <span>
                    Page {pageNumber} of {numPages}
                </span>
                <button onClick={nextPage} disabled={pageNumber >= numPages}>
                    Next ▶
                </button>
            </div>
        </div>
    );
}
