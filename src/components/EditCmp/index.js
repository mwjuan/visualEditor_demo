import { useCanvasByContext } from "../../store/hooks";
import Item from "@/lib/Item";
import styles from "./index.less";

export default function EditCmp(props) {
  const canvas = useCanvasByContext();

  const selectedCmp = canvas.getSelectedCmp();

  const { valueEnglish, value, style, sn, channel } = selectedCmp;

  const handleValueChange = (e, type) => {
    const newValue = e.target.value;
    canvas.updateSelectedCmp(null, newValue, type);
    canvas.recordCanvasChangeHistory();
  };

  const handleStyleChange = (e, { name, value }) => {
    const newStyle = { [name]: value };

    canvas.updateSelectedCmp(newStyle);
    canvas.recordCanvasChangeHistory();
  };

  const canvasData = canvas.getCanvas();
  const canvasWidth = canvasData.style.width;
  const selectCmpWidth = selectedCmp.style.width;

  return (
    <div className={styles.main}>
      <div className={styles.title}>属性设置</div>

      <Item label="类型名称: ">
        <input
          type="text"
          className={styles.itemRight}
          value={value}
          onChange={e => handleValueChange(e, 'value')}
        />
      </Item>

      <Item label="类型英文名称: ">
        <input
          type="text"
          className={styles.itemRight}
          value={valueEnglish}
          onChange={e => handleValueChange(e, 'valueEnglish')}
        />
      </Item>

      <Item label="模块编号: ">
        <input
          type="text"
          className={styles.itemRight}
          value={sn}
          onChange={e => handleValueChange(e, 'sn')}
        />
      </Item>

      <Item label="回路编号: ">
        <input
          type="number"
          min={1}
          className={styles.itemRight}
          value={channel}
          onChange={e => handleValueChange(e, 'channel')}
        />
      </Item>

      {style.borderRadius !== undefined && (
        <Item label="圆角: ">
          <input
            className={styles.itemRight}
            type="text"
            value={style.borderRadius}
            onChange={(e) =>
              handleStyleChange(e, {
                name: "borderRadius",
                value: e.target.value,
              })
            }
          />
        </Item>
      )}

      <Item label="对齐页面: ">
        <select
          className={styles.itemRight}
          value={
            style.left == 0
              ? "left"
              : style.left == canvasWidth / 2 - selectCmpWidth / 2
                ? "center"
                : style.left == canvasWidth - selectCmpWidth
                  ? "right"
                  : "default"
          }
          onChange={(e) => {
            const newValue = e.target.value;
            let newLeft = 0;

            if (newValue !== "left") {
              if (newValue === "center") {
                newLeft = canvasWidth / 2 - selectCmpWidth / 2;
              } else if (newValue === "right") {
                newLeft = canvasWidth - selectCmpWidth;
              }
            }
            handleStyleChange(e, { name: "left", value: newLeft });
          }}>
          <option value="default">--选择--</option>
          <option value="left">居左</option>
          <option value="center">居中</option>
          <option value="right">居右</option>
        </select>
      </Item>

      <Item label="边框样式: ">
        <select
          className={styles.itemRight}
          value={style.borderStyle}
          onChange={(e) => {
            handleStyleChange(e, {
              name: "borderStyle",
              value: e.target.value,
            });
          }}>
          {/* <option value="none">none</option> */}
          <option value="dashed">虚线</option>
          {/* <option value="dotted">dotted</option>
          <option value="double">double</option>
          <option value="groove">groove</option>
          <option value="hidden">hidden</option> */}
          <option value="solid">实线</option>
        </select>
      </Item>

      <Item label="旋转: ">
          <input
            className={styles.itemRight}
            type="number"
            value={style.transform}
            onChange={(e) =>
              handleStyleChange(e, {
                name: "transform",
                value: e.target.value,
              })
            }
          />
        </Item>
    </div>
  );
}
