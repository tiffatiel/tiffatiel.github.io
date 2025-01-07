import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>Tiffatiel Art</h1>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tiffatiel Art | Independent Comics and Art</title>
