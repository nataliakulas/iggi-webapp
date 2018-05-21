import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


const LandingPage = () =>
  <div className="background landing">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title"><b>I</b>ndeks&nbsp;<b>G</b>likemiczny&nbsp;-&nbsp;<b>G</b>lycemic&nbsp;<b>I</b>ndex</h2>
            </div>
            <div className="card-body">
              <p>Indeks glikemiczny określa szybkość wzrostu stężenia glukozy we krwi po spożyciu danego produktu, w porównaniu do wzrostu jaki następuje po spożyciu tej samej ilości węglowodanów w postaci czystej glukozy.</p>
              <p>Na podstawie indeksu glikemicznego, produkty spożywcze dzieli się na grupy o:</p>
              <ul>
                <li>{"niskim indeksie glikemicznym (IG < 55)"}</li>
                <li>{"średnim indeksie glikemicznym (IG 55 -70)"}</li>
                <li>{"wysokim indeksie glikemicznym (IG > 70)"}</li>
              </ul>
              <div className="separator"/>
              <p>Aplikacja IG-GI umożliwia zapoznanie się z indeksem glikemicznym produktów, filtrowanie ich oraz personalizację (dostępne wkrótce!) pod względem preferowanej diety.</p>
              <p>Baza produktów jest jeszcze ograniczona, pracujemy nad jej rozszerzeniem!</p>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;

export default LandingPage;