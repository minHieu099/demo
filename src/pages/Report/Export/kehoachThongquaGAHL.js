const { Document, Paragraph, AlignmentType, TextRun, Table, TableCell, TableRow, PageBreak, WidthType, BorderStyle, TabStopPosition, TabStopType, PositionalTabLeader } = require("docx");
const { formatParagraph } = require("./formatParagraph");
const data = [
    {
        "id": 2,
        "thoigian": "Ngày 01 tháng 01 năm 2024",
        "ten_bai": "Huấn luyện TCTT",
        "nguoi_giang": "Trung tá fsdfsdaf",
        "dia_diem": "Hội trường T286",
        "noidung_pheduyet": "aaaaaaaaaaaaaaaaaaa",
        "ketluan": "bbbbbbbbbbbbbbb",
        "doitruong": "Thiếu tá fsdgfd",
        "mucdich": "fjlkaljfkls",
        "yeucau": "54",
        "noidung": "-2321321",
        "thoigian_thongqua": "90",
        "giangthu": "1",
        "diadiem_thongqua": "Xử lí FMCfhjsdkljfkldjsf sdjlkfsdfkls",
        "tailieu": "ABC",
        "vatchat": "1",
        "thutuc": "Xử lí FMCfhjsdkljfkldjsf sdjlkfsdfkls",
        "phobien_ydinh": "cho học viên hiểu",
        "thongqua_ydinh": "ABC",
        "thongqua_thuchanh": "XYZ",
        "thongqua_thaoluan": "Xử lí FMCfhjsdkljfkldjsf sdjlkfsdfkls",
        "thongqua_ketluan": "Xử lí FMCfhjsdkljfkldjsf sdjlkfsdfkls",
        "thongqua_nhanxet": "ABC",
        "thongqua_trienkhai": "Phải tiến hành"
    }
];
const dotTab = [
    {
        type: TabStopType.LEFT,
        position: TabStopPosition.MAX,
        leader: PositionalTabLeader.DOT,
    },
]
const spaCing = {
    line: 276
}
let renderThongquaGAHL = (data) => {
    return doc = new Document({

        sections: [
            {
                properties: {
                    pageNumberStart: 1,
                    page: {
                        size: {
                            height: 16837, // (don vi tinh twip)
                            width: 11905,
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
                                text: data.thoigian,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "PHÊ DUYỆT",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "CỦA CHỈ HUY ĐỘI",
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "1. Phê duyệt kế hoạch",
                                size: 28,
                                bold: true,
                            }),
                        ],
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "THÔNG QUA GIÁO ÁN HUẤN LUYỆN",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "Bài: " + data.ten_bai,
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                            new TextRun({
                                text: "Của: Đồng chí " + data.nguoi_giang,
                                size: 28,
                                break: 1
                            }),
                        ],
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "2. Địa điểm phê duyệt",
                                size: 28,
                                bold: true,
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "- Địa điểm: " + data.dia_diem,
                                size: 28,
                            }),
                            new TextRun({
                                text: "- Thời gian: " + data.thoigian,
                                size: 28,
                                break: 1,
                            }),
                        ],
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "3. Nội dung phê duyệt",
                                size: 28,
                                bold: true,
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: formatParagraph(7, [data.noidung_pheduyet]),
                        tabStops: dotTab,
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "4. Kết luận",
                                size: 28,
                                bold: true,
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: formatParagraph(8, [data.ketluan]),
                        tabStops: dotTab,
                    }),

                    new Table({
                        margins: {
                            top: 100,
                        },
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "aaaaaaaaaaaaaaaaaaa",
                                                        size: 28,
                                                        color: "FFFFFF",

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
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "ĐỘI TRƯỞNG",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: data.doitruong,
                                                        size: 28,
                                                        bold: true,

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
                    new Paragraph({
                        children: [new PageBreak()],
                    })
                    ,
                    // Phần 1
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "Phần I",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "Ý ĐỊNH THÔNG QUA",
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "I. MỤC ĐÍCH, YÊU CẦU",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "1. Mục đích",
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(3, [data.mucdich]),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "2. Yêu cầu",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.yeucau]),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "II. NỘI DUNG",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(3, [data.noidung_pheduyet]),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "III. THỜI GIAN",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(3, [data.thoigian_thongqua, data.thongqua_ydinh, data.thongqua_trienkhai]),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "IV. TÔ CHỨC, PHƯƠNG PHÁP",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "1. Tổ chức",
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                            new TextRun({
                                text: "Thành một bộ phận để thông qua",
                                size: 28,
                                break: 1
                            }),
                            new TextRun({
                                text: "2. Phương pháp",
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                            new TextRun({
                                text: "- Báo cáo ý định huấn luyện",
                                size: 28,
                                break: 1
                            }),
                            new TextRun({
                                text: "- Giảng thử phần thực hành huấn luyện " + data.giangthu,
                                size: 28,
                                break: 1
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "V. ĐỊA ĐIỂM: ",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: data.diadiem_thongqua,
                                size: 28,
                                bold: false,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "VI. BẢO ĐẢM",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "1. Tài liệu",
                                size: 28,
                                bold: true,
                                break: 1
                            })
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.tailieu]),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "2. Vật chất",
                                size: 28,
                                bold: true,
                            })
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.vatchat]),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: [new PageBreak()],
                    })
                    ,

                    // Phần 2
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "Phần II",
                                size: 28,
                                bold: true,
                            }),
                            new TextRun({
                                text: "THỰC HÀNH THÔNG QUA",
                                size: 28,
                                bold: true,
                                break: 1
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "I. THỦ TỤC THAO TRƯỜNG",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thutuc],false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "II. PHỐ BIẾN Ý ĐỊNH THÔNG QUA",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.phobien_ydinh],false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "I. THÔNG QUA CÁC NỘI DUNG",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "1. Thông qua phần ý định huấn luyện",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thongqua_ydinh],false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "2. Thông qua phần thực hành huấn luyện",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thongqua_thuchanh],false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "3. Thảo luận",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thongqua_thaoluan], false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "4. Kết luận",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thongqua_ketluan], false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "IV. NHẬN XÉT KẾT THÚC BUỔI THÔNG QUA GIÁO ÁN VÀ CHỈ THỊ NHỮNG CÔNG VIỆC TIẾP THEO CẦN LÀM",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "1. Hội ý chỉ huy",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "2. Nhận xét",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thongqua_nhanxet], false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: "3. Chỉ huy triển khai công việc tiếp theo",
                                size: 28,
                                bold: true,
                            }),
                        ],
                        spacing: spaCing
                    }),
                    new Paragraph({
                        children: formatParagraph(2, [data.thongqua_trienkhai], false),
                        tabStops: dotTab,
                        spacing: spaCing
                    }),
                    new Table({
                        margins: {
                            top: 100,
                        },
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "aaaaaaaaaaaaaaaaaaa",
                                                        size: 28,
                                                        color: "FFFFFF",

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
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: "ĐỘI TRƯỞNG",
                                                        size: 28,
                                                        bold: true,
                                                    }),
                                                ],
                                            }),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph(""),
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        text: data.doitruong,
                                                        size: 28,
                                                        bold: true,

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
                ]
            }]
    })
}


module.exports = renderThongquaGAHL;



