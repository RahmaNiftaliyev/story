/** @jsxImportSource @emotion/react */
import React from "react";
export default function Banner({ variant = "info", children }) {
  return <aside>{children}</aside>;
}
Banner.propTypes = {
  variant: "info" | "congrats" | "documentation" | "danger",
};
