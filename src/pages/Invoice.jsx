import React, { useRef } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";

const Invoice = () => {
    const pdfRef = useRef();
    const data = [
        { slNo: 1, description: "Item 1", quantity: 3, price: 10.0 },
        { slNo: 2, description: "Item 2", quantity: 2, price: 15.0 },
        { slNo: 3, description: "Item 3", quantity: 1, price: 20.0 },
    ];

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4", true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save("invoice.pdf");
        });
    };
    const handlePrint = useReactToPrint({
        content: () => pdfRef.current,
    });
    return (
        <div className="px-12 grow">
            <div className="flex gap-8 mb-8">
                <button
                    onClick={downloadPDF}
                    className={`px-5 py-2 text-sm border rounded-md text-orange hover:bg-orange hover:text-bg_secondary duration-300`}
                >
                    <FileDownloadOutlinedIcon /> Download
                </button>
                <button
                    onClick={handlePrint}
                    className={`px-5 py-2 text-sm border rounded-md text-purple hover:bg-purple hover:text-bg_secondary duration-300`}
                >
                    <PrintOutlinedIcon /> Print
                </button>
                <button
                    className={`px-5 py-2 text-sm border rounded-md text-green hover:bg-green hover:text-bg_secondary duration-300`}
                >
                    <ShareOutlinedIcon /> Share
                </button>
            </div>
            <div className=" min-h-[500px] bg-bg_secondary rounded-2xl p-6" ref={pdfRef}>
                <div className="flex justify-between mb-6">
                    <span className="text-sm">Invoice No :000756</span>
                    <span className="text-sm">Date:3/29/2023</span>
                </div>
                <div className="flex justify-between mb-8">
                    <h1 className="text-lg font-bold text-black">Invoice</h1>
                    <span className="text-sm">Company Logo</span>
                </div>
                <hr className="mb-6 border border-hr_gray" />
                <div className="flex justify-between mb-14">
                    <div className="flex flex-col">
                        <span className="mb-3 text-sm font-semibold">Bill From</span>
                        <span className="text-sm">81 Fulton Park</span>
                        <span className="text-sm">India/kerala</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="mb-3 text-sm font-semibold">Bill to</span>
                        <span className="text-sm ">51 Fulton Park</span>
                        <span className="text-sm">India/kerala</span>
                    </div>
                </div>
                {/* table */}
                <div className="container mx-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-2 text-sm font-normal">Sl No</th>
                                <th className="px-4 py-2 text-sm font-normal">Description</th>
                                <th className="px-4 py-2 text-sm font-normal">Quantity</th>
                                <th className="px-4 py-2 text-sm font-normal">Price</th>
                                <th className="px-4 py-2 text-sm font-normal">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.slNo}>
                                    <td className="px-4 py-2 text-sm text-center border-b border-b-hr_gray">{item.slNo}</td>
                                    <td className="px-4 py-2 text-sm text-center border-b border-b-hr_gray">
                                        {item.description}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-center border-b border-b-hr_gray">
                                        {item.quantity}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-center border-b border-b-hr_gray">
                                        ${item.price.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-center border-b border-b-hr_gray">
                                        ${(item.quantity * item.price).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between">
                    <div></div>
                    <div className="flex flex-col space-y-2 mt-14">
                        <span className="text-sm">Sub Total : $183</span>
                        <span className="text-sm">Shipping : Free</span>
                        <span className="text-sm">Tax(18%) : $2547</span>
                        <span className="text-lg font-bold">Total : $2365</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
