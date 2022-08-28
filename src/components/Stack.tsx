import { ReactNode} from "react"

export interface StackProps{
    children?: ReactNode,
    spacing ?: number,
    direction ?: "row" | "column", 
    wrap?: boolean,
}

const Stack = ({ children, spacing = 2, direction = "row", wrap = false }:StackProps) => {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexDirection: direction,
    // flexWrap: wrap ? "wrap" : "nowrap",
  }
  return <div style={style}>{children}</div>
}


export default Stack