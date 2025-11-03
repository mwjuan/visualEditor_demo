import styles from "./index.less";
import { useEffect, useState } from "react";
import { getCanvas } from "../request/canvas";

export default function ShowPage(props) {
  const [canvasData, setData] = useState();

  useEffect(() => {
    setData(getCanvas)
  }, [])

  if (!canvasData) return <></>
  const { style, cmps } = canvasData;

  let configs = [];

  cmps.map((cmp, index) => {
    configs.push({ sn: cmp.sn, channel: cmp.channel, value: cmp.value, valueEnglish: cmp.valueEnglish })
  })

  return (
    <div
      id="center"
      tabIndex="0">
      <p style={{ marginBottom: 20 }}>{canvasData.name} | {canvasData.adjust ? '可调节' : '不可调节'} | {canvasData.mode === 'talking' ? '讨论模式' : '演讲模式'} |</p>
      <p>{JSON.stringify(configs)}</p>
      <div
        id="center"
        className={styles.main}
        tabIndex="0">
        <div
          id="canvas"
          className={styles.canvas}
          style={{
            ...canvasData.style,
            border: 'solid 2px #dee0e3',
            boxShadow: '#ccc 1px 1px 20px',
            borderRadius: '12px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ color: '#BBBFC4', fontSize: 10, fontWeight: 400, border: 'solid 2px #dee0e3', borderTop: 0, width: 64, height: 20, borderRadius: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Screen
            </div>
          </div>
          <div
            style={{
              width: canvasData.style.width,
              height: canvasData.style.height,
            }}>
            {cmps.map((cmp, index) => (
              <div
                key={cmp.key}
                id={cmp.key}
                style={{
                  ...cmp.style,
                  transform: `rotate(${cmp.style.transform}deg)`
                }}>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
