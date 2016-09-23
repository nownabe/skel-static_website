import React from "react"
import { render } from "react-dom"

import styles from "./index.css"

render(<h1 className={styles.hello}>Hello, world!</h1>, document.getElementById("app"))
