import { useCanvasByContext } from "@/store/hooks";
import Item from "@/lib/Item";
import styles from "./index.less";

export default function EditCanvas(props) {
  const canvas = useCanvasByContext();
  const canvasData = canvas.getCanvas();
  const style = canvas.getCanvas().style;

  const handleStyleChange = (e, { name, value }) => {
    canvas.updateCanvasStyle({ [name]: value });
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>灯光设置</div>
      <Item label="设备名称: ">
        <input
          type="text"
          className={styles.itemRight}
          value={canvasData.name}
          onChange={(e) => {
            let newValue = e.target.value;
            canvas.setCanvas({ name: newValue });
          }}
        />
      </Item>

      <Item label="是否支持调节亮度: ">
        <select
          className={styles.itemRight}
          value={canvasData.adjust}
          onChange={(e) => {
            let newValue = e.target.value;
            canvas.setCanvas({ adjust: newValue });
          }}>
          <option value={false}>不支持</option>
          <option value={true}>支持</option>
        </select>
      </Item>

      <Item label="默认模式: ">
        <select
          className={styles.itemRight}
          value={canvasData.mode}
          onChange={(e) => {
            let newValue = e.target.value;
            canvas.setCanvas({ mode: newValue });
          }}>
          <option value={'talking'}>讨论模式</option>
          <option value={'presentation'}>演讲模式</option>
        </select>
      </Item>

      <Item label="画布宽度: ">
        <input
          type="number"
          className={styles.itemRight}
          value={style.width}
          onChange={(e) => {
            handleStyleChange(e, { name: "width", value: e.target.value - 0 });
          }}
        />
      </Item>

      <Item label="画布高度: ">
        <input
          type="number"
          className={styles.itemRight}
          value={style.height}
          onChange={(e) => {
            handleStyleChange(e, { name: "height", value: e.target.value - 0 });
          }}
        />
      </Item>
    </div>
  );
}
