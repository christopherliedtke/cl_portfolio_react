import React, { useEffect } from 'react';

import { withTranslation } from 'react-i18next';

function Impressum({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="impressum container-fuid my-5" id="impressum">
      <div className="container py-5">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Digital Web Solutions (DWS) – Christopher Liedtke
          <br />
          Am Bauernwäldchen 38 <br />
          12559 Berlin
        </p>
        <p>
          <strong>Vertreten durch:&nbsp;</strong> <br />
          Christopher Liedtke <br />
          Steuernummer: 36/420/01345
        </p>
        <p>
          <strong>Kontakt:</strong> <br />
          E-Mail: christopherliedtke@gmx.com
        </p>
        <p>
          <strong>Haftungsausschluss:&nbsp;</strong>
        </p>
        <p>
          <strong>Haftung für Inhalte</strong>
        </p>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        <p>
          <strong>Haftung für Links</strong>
        </p>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
          Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
        <p>
          <strong>Urheberrecht</strong>
        </p>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
        <p>Das Copyright für das Bild KatharinaSommer(49von109)_800x800.jpg liegt bei Julia Liebmann.</p>
        <p>Das Copyright für das Bild SommerKatharina_STA5129©TorstenStapel.jpg liegt bei Torsten Stapel.</p>
      </div>
    </div>
  );
}

export default withTranslation()(Impressum);
