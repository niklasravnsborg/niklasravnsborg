import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'

const Imprint = () => (
  <Layout title="Impressum">
    <Container className="prose">
      <h1>Impressum</h1>

      <b>Anbieter i.S.d. TMG</b>

      <p>
        Niklas Ravnsborg-Gjertsen
        <br />
        c/o Exposify UG (haftungsbeschränkt)
        <br />
        Schaarreihe 24G
        <br />
        26389 Wilhelmshaven
      </p>

      <p>
        <b>Kontakt</b>
        <br />
        Mail-Adresse: hej@niklasravnsborg.com
      </p>
    </Container>
  </Layout>
)

export default Imprint
