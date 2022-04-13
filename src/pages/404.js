import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'

const NotFoundPage = () => (
  <Layout title="Nicht gefunden">
    <Container>
      <h1>Nicht gefunden</h1>
      <p>
        Du bist auf einen Link gestoßen, dessen Seite nicht (mehr) existiert.
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
