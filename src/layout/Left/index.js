import classNames from "classnames";
import {useState, useEffect} from "react";
import TextSide from "@/components/LeftSide/TextSide";
import GraphSide from "@/components/LeftSide/GraphSide";

import styles from "./index.less";

export const isTplSide = "TplSide";
export const isTextComponent = 1;
export const isImgComponent = 2;
export const isGraphComponent = 3;

export default function Left(props) {
  const [showSide, setShowSide] = useState(0);

  const _setShowSide = (which) => {
    if (showSide === which) {
      setShowSide(0);
    } else {
      setShowSide(which);
    }
  };

  useEffect(() => {
    document.getElementById("center").addEventListener("click", () => {
      setShowSide(0);
    });
  }, []);

  return (
    <div className={styles.main}>
      <ul className={styles.cmps}>
        {/* <li
          className={classNames(
            styles.cmp,
            showSide === isTextComponent ? styles.selected : ""
          )}
          onClick={() => _setShowSide(isTextComponent)}>
          <i className={classNames("iconfont icon-wenben", styles.cmpIcon)} />
          <span className={styles.cmpText}>文本</span>
        </li> */}
        <li
          className={classNames(
            styles.cmp,
            showSide === isGraphComponent ? styles.selected : ""
          )}
          onClick={() => _setShowSide(isGraphComponent)}>
          <i
            className={classNames("iconfont icon-graphical", styles.cmpIcon)}
          />
          <span className={styles.cmpText}>图形</span>
        </li>
      </ul>

      {/* {showSide === isTextComponent && <TextSide />} */}
      {showSide === isGraphComponent && <GraphSide />}
    </div>
  );
}
