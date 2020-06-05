import Article from "../components/article";
import getSelection from "./get-selection";
import focusAt from "./focus-at";
import { getComponentById } from "../components/util";

// 修改选区中整块内容的呈现
const exchangeParagraph = (newClass: any, ...args: any[]) => {
  let selection = getSelection();
  let start = selection.range[0];
  let end = selection.range[1];
  let article = getComponentById<Article>("article");
  let idList = article.getIdList(start.id, end.id)[2];
  idList.forEach((id) => {
    getComponentById(id).exchangeToOther(newClass, args);
  });
  focusAt();
};

export default exchangeParagraph;
