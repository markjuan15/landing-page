import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import pdfFile from "../../../assets/letas/letas.pdf";

export default function PdfViewer() {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const [width, setWidth] = useState<number>(900);
    const [pageDimensions, setPageDimensions] = useState<{ width: number; height: number } | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                setWidth(Math.min(containerWidth, 900));
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
        setPageNumber(1);
        setIsLoading(false);
    }

    function onPageLoadSuccess(page: any) {
        const { width, height } = page.getViewport({ scale: 1 });
        setPageDimensions({ width, height });
    }

    const aspectRatio =
        pageDimensions?.height && pageDimensions?.width
            ? pageDimensions.height / pageDimensions.width
            : 11 / 9.5;

    const SkeletonLoader = () => (
        <div style={{
            width: `${width}px`,
            height: `${width * aspectRatio}px`,
        }} className="relative w-full aspect-[9.5/11] rounded-md overflow-hidden bg-gray-300">
            {/* w-[900px] h-[506px]  */}
            <div className=" absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 [background-size:200%_100%] animate-[shimmer_1.8s_infinite_linear]" />
        </div>
    );

    return (
        <div ref={containerRef} className="flex flex-col w-full items-center">
            <div className="rounded-md overflow-hidden">
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => console.error("PDF load error:", err)} >
                    <Page pageNumber={pageNumber} width={width} loading={<SkeletonLoader />} onLoadSuccess={onPageLoadSuccess} renderTextLayer={false} />
                </Document>
            </div>

            {!isLoading && numPages && (
                <div className="mt-4 flex gap-4 items-center">
                    <button onClick={() => setPageNumber((p) => Math.max(p - 1, 1))} disabled={pageNumber <= 1}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer" >
                        <FaAnglesLeft /> Prev
                    </button>
                    <span className="text-gray-300">
                        Page {pageNumber} of {numPages}
                    </span>
                    <button onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer" >
                        Next <FaAnglesRight />
                    </button>
                </div>
            )}
        </div>
    );
}
