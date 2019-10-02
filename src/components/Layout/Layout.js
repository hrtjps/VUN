import React from "react"

import Header from "../LayoutHeader"
import { LayoutContextProvider } from "./LayoutContext"

import styles from "./Layout.module.scss"
import { LayoutContext } from ".";
import Footer from "../LayoutFooter";

const Layout = ({ children, location, pageContext }) => {
  return (
    <>
      <div className={styles.Layout}>
        <LayoutContextProvider>

          <LayoutContext.Consumer>
            {({headerLeftTheme, headerRightTheme}) => (
              <Header themeLeft={headerLeftTheme} themeRight={headerRightTheme} />
            )}
          </LayoutContext.Consumer>
          <main className={styles.Main}>
            {children}         
          </main>

          <Footer />
        </LayoutContextProvider>
      </div>
    </>
  )
}

export default Layout
