import { TextRun } from "docx";



let contentText = (contentList) => {
    let renderTextList = [];
    if (contentList.length === 1) return [new TextRun({
        text: contentList[0],
        size: 28,
    })]
    else {
        for (let i = 0; i < contentList.length; i++) {
            if (i === 0) {
                renderTextList.push(new TextRun({
                    text: contentList[0],
                    size: 28,
                }))
            } else {
                renderTextList.push(new TextRun({
                    text: contentList[i],
                    size: 28,
                    break: 1,
                }))
            }
        }
    }
    return renderTextList

}
export default contentText;