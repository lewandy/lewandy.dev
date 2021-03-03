import React, { CSSProperties } from "react";

export default function HamburgerMenu(props: any) {
  const width = `${props.width || 36}px`,
    height = `${props.height || 30}px`,
    halfHeight = `${parseInt(height.replace("px", "")) / 2}px`,
    isOpen = props.isOpen || false,
    strokeWidth = props.strokeWidth || 2,
    halfStrokeWidth = `-${strokeWidth / 2}px`,
    animationDuration = props.animationDuration || "0.4";

  const getTransformValue = (
    isOpen: boolean,
    defaultPos: any,
    rotateVal: any
  ) =>
    `translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${
      isOpen ? `${rotateVal}deg` : "0"
    })`;

  const container: CSSProperties = {
    width,
    height,
    position: "relative",
    transform: `rotate(${props.rotate || 0}deg)`,
  };

  const lineBase: CSSProperties = {
    display: "block",
    height: `${strokeWidth}px`,
    width: "100%",
    background: props.color || "#000",
    transitionTimingFunction: "ease",
    transitionDuration: `${animationDuration}s`,
    borderRadius: `${props.borderRadius || 0}px`,
    transformOrigin: "center",
    position: "absolute",
  };

  const firstLine: CSSProperties = {
    transform: getTransformValue(isOpen, 0, 45),
    marginTop: halfStrokeWidth,
  };

  const secondLine: CSSProperties = {
    transitionTimingFunction: "ease-out",
    transitionDuration: `${animationDuration / 4}s`,
    opacity: isOpen ? "0" : "1",
    top: halfHeight,
    marginTop: halfStrokeWidth,
  };

  const thirdLine: CSSProperties = {
    transform: getTransformValue(isOpen, height, -45),
    marginTop: halfStrokeWidth,
  };

  const styles = {
    container,
    lineBase,
    firstLine,
    secondLine,
    thirdLine,
  };

  return (
    <div
      style={styles.container}
      className={props.className}
      onClick={props.menuClicked}
    >
      <span style={Object.assign({}, styles.lineBase, styles.firstLine)}></span>
      <span
        style={Object.assign({}, styles.lineBase, styles.secondLine)}
      ></span>
      <span style={Object.assign({}, styles.lineBase, styles.thirdLine)}></span>
    </div>
  );
}
