import { Document, Paragraph, AlignmentType, TextRun, Table, TableCell, TableRow, WidthType, BorderStyle } from "docx";
import formatParagraph, {dotTab} from "./formatParagraph";

// const strToList_Quanso = (quanSo) => {
//     let mangQuanSo = quanSo.split(";").map(item => item.trim() + '; ');
//     let mang = Array();
//     mang[0] = mangQuanSo[0];
//     let j = 1;

//     for (let i = 1; i < mangQuanSo.length; i++) {
//         if (i % 5 === 0) {
//             j++;
//             mang[j] = mangQuanSo[i];
//         } else {
//             if (!mang[j]) {
//                 mang[j] = '';
//             }
//             mang[j] += mangQuanSo[i];
//         }
//     }
//     return mang;
// }
// const strToList_Vukhi = (vuKhi)=>{
//     mangVuKhi = [];
//     vuKhi.indexOf("-") !== -1 ? mangVuKhi = vuKhi.split(";") : mangVuKhi.push(vuKhi);
//     return mangVuKhi;
// }

let renderGbnBTL = (data) => {
    const doc = new Document({
        sections: [
            {
                properties: {
                    pageNumberStart: 1,
                    page: {
                        size: {
                            height: 11905, // (don vi tinh twip)
                            width: 16837,
                        },
                        margin: {
                            top: 1440,
                            right: 1440,
                            bottom: 1440,
                            left: 1440,
                        },
                    },
                },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "GIAO BAN NGÀY " + data.thoigian,
                                size: 28,
                                bold: true,
                            }),
                        ],
                    }),
                    new Table({
                        margins: {
                            top: 100,
                        },
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: "TRỰC CHỈ HUY BỘ TƯ LỆNH:",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: "TRỰC CHỈ HUY TRUNG TÂM:",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: "TRỰC BAN TÁC CHIẾN:",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: "TRỰC BAN NỘI VỤ:",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                                spacing: {
                                                    after: 200, // Khoảng cách phía dưới (đơn vị là 1/20 point)
                                                },
                                            }),
                                        ],
                                        borders: {
                                            top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        },

                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: data.truc_CH_BTL,
                                                        size: 28,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: data.truc_CH_TT,
                                                        size: 28,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: data.trucban_tacchien,
                                                        size: 28,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        text: data.trucban_noivu,
                                                        size: 28,
                                                    }),
                                                ],
                                            }),
                                        ],
                                        borders: {
                                            top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        },


                                    }),
                                ],
                            }),

                        ],

                    }),

                    new Paragraph(""),
                    new Table({
                        width: {
                            size: 100,
                            type: WidthType.PERCENTAGE,
                        },
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "I.Quân số - vũ khí, trang bị",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "1.Quân số",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(6,[data.noidung_quanso]),
                                                tabStops: dotTab,
                                            }),
                                            // new Paragraph({
                                            //     children: [
                                            //         new TextRun({
                                            //             text: "- Tổng quân số: có mặt/biên chế:",
                                            //             size: 28,
                                            //         }),
                                            //     ],
                                            // }),
                                            // new Paragraph({
                                            //     children: [
                                            //         new TextRun({
                                            //             text: "SQ:",
                                            //             size: 28,
                                            //         }),
                                            //         new TextRun({
                                            //             text: " ;QNCN:",
                                            //             size: 28,
                                            //         }),
                                            //     ],
                                            // }),
                                            // new Paragraph({
                                            //     children: [
                                            //         new TextRun({
                                            //             text: "HSQ-BS:",
                                            //             size: 28,
                                            //         }),
                                            //         new TextRun({
                                            //             text: " ;CCQP:",
                                            //             size: 28,
                                            //         }),
                                            //     ],
                                            // }),
                                            // new Paragraph({
                                            //     children: [
                                            //         new TextRun({
                                            //             text: "Phép:",
                                            //             size: 28,
                                            //         }),
                                            //         new TextRun({
                                            //             text: " ;Học:",
                                            //             size: 28,
                                            //         }),
                                            //     ],
                                            // }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "2. Vũ khí, khí tài trang bị",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(2,[data.noidung_vukhi]),
                                                tabStops: dotTab
                                            }),
                                            // new Paragraph({
                                            //     children: [
                                            //         new TextRun({
                                            //             text: "- Súng K54:",
                                            //             size: 28,
                                            //         }),
                                            //     ],
                                            // }),
                                            // new Paragraph({
                                            //     children: [
                                            //         new TextRun({
                                            //             text: "- Súng AK:",
                                            //             size: 28,
                                            //         }),
                                            //     ],
                                            // }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "II. Kết quả thực hiện nhiệm vụ trong ngày",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(6,[data.noidung_ketqua]),
                                                tabStops: dotTab,

                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "VI. Kết luận của trực chỉ huy Trung tâm",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(12,[data.noidung_ketluan]),
                                                tabStops: dotTab,

                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "VII. Dự kiến kế hoạch ngày tới Bộ Tư Lệnh",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(11,[data.noidung_KH_BTL]),
                                                tabStops: dotTab,

                                            }),


                                          
                                        ],
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "III. Dự kiến Kế hoạch ngày tới đơn vị",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children:formatParagraph(4,[data.noidung_dukien]),
                                                tabStops: dotTab
                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "IV. Kiến nghị, đề nghị (nếu có)",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children:formatParagraph(5,[data.noidung_dukien]),
                                                tabStops: dotTab
                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "V. Ý kiến của các cơ quan, đơn vị",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(6,[data.noidung_ykien]),
                                                tabStops: dotTab
                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "VIII. Ý kiến chỉ đạo chỉ huy Bộ Tư lệnh",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph({
                                                children: formatParagraph(12,[data.noidung_chidao_BTL]),
                                                tabStops: dotTab
                                            }),
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "TRỰC CHỈ HUY",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),

                        ],
                        margins: {
                            left: 200,
                            top: 100,
                            bottom: 100,
                     
                        },
                    }),

                ],
            },
        ],
    });
    return doc;
}


export default renderGbnBTL;



