import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby from a component"/>
        <Link to="/">Home</Link>
      <p>Such wow. Very React.</p>
    </div>
  )
}