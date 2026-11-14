export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: 'dynamische-stromtarife',
    title: 'Dynamische Stromtarife erklärt — § 41a EnWG | StrompreiseHeute.de',
    description:
      'Was ein dynamischer Stromtarif ist, wann er sich lohnt und wann ein Festpreis günstiger bleibt. Mit den heutigen Börsenstunden zum direkten Vergleich.',
    kicker: 'Tarifwahl',
    h1: 'Dynamische Stromtarife: wann sie sich lohnen',
    intro:
      'Ein dynamischer Stromtarif gibt den stündlichen Börsenpreis an den Haushalt weiter. Dazu kommen Netzentgelt, Abgaben, eine Marge und die Mehrwertsteuer. Der Tarif ist kein Rabattmodell und nicht an jedem Tag günstiger als die Grundversorgung.',
    sections: [
      {
        heading: 'Was der Vertrag wirklich weitergibt',
        paragraphs: [
          'Seit 2025 müssen Lieferanten Haushaltskunden mit intelligentem Messsystem mindestens einen dynamischen Tarif anbieten (§ 41a EnWG). Abgerechnet wird der Day-Ahead-Preis der Gebotszone Deutschland/Luxemburg, Stunde für Stunde. Der Lieferant legt Netzentgelte, Umlagen, Stromsteuer, Konzessionsabgabe und seine Marge darauf.',
          'Der Preis auf der Startseite trennt deshalb Börsenpreis und geschätzten Endpreis. Nur der zweite Wert ist mit einem Festpreis in Cent je Kilowattstunde vergleichbar. Anbieter wie Tibber, Ostrom oder ein Stadtwerk mit Börsentarif unterscheiden sich vor allem in der Marge und in der App, nicht im Börsenpreis.',
        ],
      },
      {
        heading: 'Wann der Festpreis die bessere Wahl ist',
        paragraphs: [
          'Liegt der Tagesdurchschnitt des Endpreises über dem Arbeitspreis der Grundversorgung, zahlt ein Haushalt ohne Lastverschiebung an diesem Tag mehr. Das kommt an windarmen Winterabenden vor. Ein dynamischer Tarif lohnt sich dann nur für den Teil des Verbrauchs, der in die günstigen Stunden wandert: Wallbox, Wärmepumpe, Speicher, Geschirrspüler.',
          'Grundlast wie Kühlschrank, Router und Stand-by lässt sich nicht verschieben. Je höher dieser Anteil, desto näher liegt die Rechnung am Tagesdurchschnitt und desto weniger hilft die günstigste Einzelstunde.',
        ],
      },
      {
        heading: 'Was Sie vor dem Wechsel prüfen',
        paragraphs: [
          'Ohne stündliche Messung gibt es keine stündliche Abrechnung. Dafür reicht ein intelligentes Messsystem oder, bei einigen Anbietern, ein Lesekopf auf der modernen Messeinrichtung. Die Vertragslaufzeit, die Kündigungsfrist und der Umgang mit negativen Preisen sollten im Preisblatt stehen.',
          'Nutzen Sie den Ersparnisrechner als Orientierung und die Stundentabelle als Fahrplan für morgen. Die Preise für den Folgetag stehen nach der Auktion um 12 Uhr in der Regel ab etwa 13 Uhr bereit.',
        ],
      },
    ],
  },
  {
    slug: 'negative-strompreise',
    title: 'Negative Strompreise — was sie für den Haushalt bedeuten | StrompreiseHeute.de',
    description:
      'Warum der Börsenpreis unter null fallen kann, was davon auf der Stromrechnung ankommt und worauf dynamische Tarife bei Negativstunden achten.',
    kicker: 'Börse',
    h1: 'Negative Strompreise verstehen',
    intro:
      'Ein negativer Börsenpreis heißt: Erzeuger zahlen dafür, dass jemand den Strom abnimmt. Für Haushalte ist das kein Guthaben in gleicher Höhe, weil Netz, Steuern und Umlagen weiter auf der Kilowattstunde liegen.',
    sections: [
      {
        heading: 'Wie der Preis unter null rutscht',
        paragraphs: [
          'In der Day-Ahead-Auktion treffen Angebot und Nachfrage auf 24 Stunden des Folgetages. Speisen Wind und Sonne mehr ein, als verbraucht und exportiert werden kann, und lassen sich konventionelle Anlagen nicht schnell genug drosseln, fällt der Preis unter 0 €/MWh. Das tritt häufiger an Wochenenden, Feiertagen und in Sturmlagen auf.',
          'Die Ampel markiert diese Stunden als besonders günstig. Auf der Startseite zählt das Feld „negative Stunden“, sobald der Großhandelspreis unter null liegt.',
        ],
      },
      {
        heading: 'Was auf der Rechnung übrig bleibt',
        paragraphs: [
          'Der Endpreis in unserem Modell ist (Börsenpreis + Netzentgelt + Stromsteuer 2,05 ct + Konzessionsabgabe 1,66 ct + 1,50 ct Umlagen-Näherung + 1,50 ct Marge) mal 1,19 Mehrwertsteuer. Selbst bei einem Börsenpreis von 0 ct bleiben damit rund 20 ct Netz und Abgaben, darauf die Steuer.',
          'Erst deutlich negative Börsenpreise drücken den Endpreis in den einstelligen Bereich. Manche Lieferverträge geben Negativpreise nicht voll weiter oder setzen eine Untergrenze. Das steht im Preisblatt, nicht in der SMARD-Tabelle.',
        ],
      },
      {
        heading: 'Wie Sie die Stunde nutzen',
        paragraphs: [
          'Legen Sie Wallbox, Speicherbeladung und Wärmepumpe in die günstigste veröffentlichte Stunde, nicht pauschal in jede Nacht. Negative Stunden sind selten genug, dass sich ein Blick in die Morgen-Tabelle lohnt, sobald sie ab etwa 13 Uhr online ist.',
          'Erzeuger mit Einspeisevergütung sollten die Regeln ihres Vertrags kennen: Bei negativen Preisen kann die Vergütung für Neuanlagen entfallen. Das betrifft die Einspeisung, nicht den Haushaltsbezug.',
        ],
      },
    ],
  },
  {
    slug: 'strompreis-bestandteile',
    title: 'Strompreis Bestandteile — Börse, Netz, Steuern | StrompreiseHeute.de',
    description:
      'Wie sich der geschätzte Endpreis aus Börsenpreis, Netzentgelt, Abgaben und Mehrwertsteuer zusammensetzt. Dieselbe Formel wie in den Tabellen.',
    kicker: 'Rechnung',
    h1: 'Woraus der Endpreis besteht',
    intro:
      'Der Börsenpreis ist nur der Einkauf. Auf jeder Kilowattstunde liegen Netz, staatliche Abgaben und die Marge des Lieferanten. Die Tabellen auf dieser Website rechnen das mit einer festen, nachvollziehbaren Formel.',
    sections: [
      {
        heading: 'Die Formel auf dieser Website',
        paragraphs: [
          'Endpreis brutto = (Börsenpreis in ct/kWh + Netzentgelt + 2,05 ct Stromsteuer + 1,66 ct Konzessionsabgabe + 1,50 ct für KWKG/Offshore-Näherung + 1,50 ct Lieferantenmarge) × 1,19.',
          'Der Börsenpreis kommt von SMARD (Bundesnetzagentur) und entspricht der EPEX-Spot-Day-Ahead-Auktion für DE-LU. 10 €/MWh sind 1 ct/kWh. Das Standard-Netzentgelt in der bundesweiten Tabelle beträgt 11,50 ct/kWh. Auf den Länder- und Städte-Seiten ersetzen wir nur diesen einen Baustein.',
        ],
      },
      {
        heading: 'Was sich je Stadt ändert — und was nicht',
        paragraphs: [
          'Die Gebotszone ist bundesweit. München zahlt in einer gegebenen Stunde denselben Börsenpreis wie Hamburg. Unterschiedlich sind Verteilnetzbetreiber, Netzentgelt und der Höchstsatz der Konzessionsabgabe. In Gemeinden über 500.000 Einwohner liegt dieser Höchstsatz bei 2,39 ct/kWh. Unser Modell rechnet konservativ mit 1,66 ct, damit die Schätzung die Rechnung nicht nach oben treibt.',
          'Grundpreis, Messstellenbetrieb und Boni fehlen absichtlich. Sie hängen am Vertrag und lassen sich nicht aus dem Börsenpreis ableiten. Der ausgewiesene Endpreis ist ein Arbeitspreis-Vergleich, keine Angebotskalkulation.',
        ],
      },
      {
        heading: 'So vergleichen Sie mit Ihrem Tarif',
        paragraphs: [
          'Nehmen Sie den Arbeitspreis aus der letzten Rechnung in ct/kWh, nicht die Abschlagszahlung. Liegt der heutige mittlere Endpreis darunter, ist der Börsentag für unflexiblen Verbrauch teurer. Liegt er darüber, ist schon der Durchschnitt günstiger — Verschieben vergrößert den Abstand.',
          'Die Methodik-Seite listet Quelle, Aktualisierung und die Grenzen der Schätzung. Für ein verbindliches Angebot bleibt der Tarifvergleich des Lieferanten maßgeblich.',
        ],
      },
    ],
  },
  {
    slug: 'e-auto-laden',
    title: 'E-Auto günstig laden — Börsenstunden nutzen | StrompreiseHeute.de',
    description:
      'Wie Sie die Wallbox auf die günstigsten Day-Ahead-Stunden legen, was 10 kWh Unterschied ausmachen und wann Nachtladen teurer ist.',
    kicker: 'E-Auto',
    h1: 'E-Auto laden, wenn der Börsenpreis niedrig ist',
    intro:
      'Eine Wallbox ist der einfachste flexible Verbraucher im Haushalt. 10 kWh in der teuersten statt in der günstigsten Stunde kosten an Spreiztagen spürbar mehr. Die Stunde steht am Vortag fest.',
    sections: [
      {
        heading: 'Nicht automatisch nachts laden',
        paragraphs: [
          'Nachtstrom war im alten HT/NT-Tarif günstig, weil Kraftwerke durchlaufen mussten. An der Börse ist die günstigste Stunde oft mittags, wenn Photovoltaik einspeist, oder in einer windigen Nacht. Die Tabelle des Tages sagt, welche es ist. Ein festes Ladezeitfenster ab 23 Uhr trifft sie nur zufällig.',
          'Die Day-Ahead-Preise für morgen sind nach der Auktion um 12 Uhr veröffentlicht. Wer das Auto über Nacht anschließt, kann das Lademanager-Fenster auf die günstigsten Stunden des bereits bekannten Folgetages setzen.',
        ],
      },
      {
        heading: 'Was 10 Kilowattstunden ausmachen',
        paragraphs: [
          'Der Abstand zwischen Tiefst- und Höchststunde steht auf der Startseite. Multiplizieren Sie die Differenz des Endpreises in Cent mit 10 und teilen Sie durch 100: Das sind Euro für eine typische Alltagsnachladung. Bei 20 ct Abstand sind das 2 Euro pro Ladevorgang, über das Jahr ein dreistelliger Betrag, wenn Sie oft zu Hause laden.',
          'Öffentliches Schnellladen folgt anderen Tarifen und ist mit dem Haushalts-Börsenpreis nicht vergleichbar. Diese Seiten gelten für die Wallbox hinter Ihrem Zähler.',
        ],
      },
      {
        heading: 'Steuerbare Wallbox nach § 14a',
        paragraphs: [
          'Private Ladeeinrichtungen können als steuerbare Verbrauchseinrichtung ein reduziertes Netzentgelt bekommen. Der Netzbetreiber darf die Leistung im Engpass dimmen, nicht den Börsenpreis ändern. Beides zusammen — niedrigeres Netzentgelt und günstige Börsenstunde — ist der eigentliche Hebel.',
          'Stellen Sie die Wallbox so ein, dass sie in der günstigsten Stunde startet und vor der teuersten Abendstunde fertig ist. Die drei niedrigsten Stunden des Tages stehen in der Städte- und Länderansicht mit lokalem Endpreis.',
        ],
      },
    ],
  },
  {
    slug: 'waermepumpe',
    title: 'Wärmepumpe und Börsenstrom — Stunden sinnvoll legen | StrompreiseHeute.de',
    description:
      'Wie Wärmepumpen den stündlichen Strompreis nutzen, ohne das Haus auskühlen zu lassen, und wie § 14a das Netzentgelt separat senkt.',
    kicker: 'Wärme',
    h1: 'Wärmepumpe am stündlichen Strompreis',
    intro:
      'Eine Wärmepumpe kann Vorlauftemperatur und Pufferspeicher in günstige Stunden ziehen. Sie kann nicht beliebig abschalten, wenn es draußen kalt ist. Der Börsenpreis ersetzt keine Heizlast-Planung.',
    sections: [
      {
        heading: 'Puffer nutzen, Komfort behalten',
        paragraphs: [
          'Liegt ein Puffer- oder Warmwasserspeicher zwischen Pumpe und Heizkreis, kann die Pumpe in der günstigsten Stunde arbeiten und die Wärme später abgeben. Ohne Speicher folgt die Pumpe der Raumtemperatur und läuft oft genau dann, wenn abends alle heizen und der Preis hoch ist.',
          'Die Sperrzeiten des Netzbetreibers nach § 14a und Ihr eigenes Preis-Zeitfenster müssen zusammenpassen. Ein Fenster, das nur die absolut billigste Stunde freigibt, ist im Winter oft zu kurz.',
        ],
      },
      {
        heading: 'Netzentgelt und Börse sind zwei Hebel',
        paragraphs: [
          '§ 14a EnWG senkt das Netzentgelt für steuerbare Wärmepumpen, pauschal oder über einen reduzierten Arbeitspreis. Das ist unabhängig davon, ob der Börsenpreis bei 5 oder 30 ct liegt. Ein dynamischer Tarif ersetzt diesen Nachlass nicht.',
          'Rechnen Sie den heutigen Endpreis mit dem Netzentgelt Ihres Bundeslandes, nicht mit dem Bundeswert von 11,50 ct. Auf der Länderseite ist diese Abweichung ausgewiesen.',
        ],
      },
      {
        heading: 'Welche Stunde Sie nehmen',
        paragraphs: [
          'Nehmen Sie für Warmwasser die günstigste Stunde. Für die Raumheizung an kalten Tagen die drei günstigsten Stunden, die noch vor der morgendlichen Aufheizung liegen. Die Ampel ist dafür die Kurzform: Grün und Gelb vor Rot, sofern die Stunde zu Ihrer Heizkurve passt.',
          'An Tagen ohne grüne Stunde — der Börsenpreis liegt durchgehend über 8,5 ct/kWh — bleibt die relativ günstigste Stunde die richtige Wahl. „Teuer“ in der Ampel heißt nicht, dass Sie nicht heizen sollen.',
        ],
      },
    ],
  },
  {
    slug: 'paragraf-14a-enwg',
    title: '§ 14a EnWG — Netzentgelt für Wärmepumpe und Wallbox | StrompreiseHeute.de',
    description:
      'Was § 14a EnWG für steuerbare Verbraucher regelt, welche Module es gibt und warum das etwas anderes ist als der Börsenpreis.',
    kicker: 'Netz',
    h1: '§ 14a EnWG für Wärmepumpe und Wallbox',
    intro:
      '§ 14a EnWG betrifft das Netzentgelt steuerbarer Verbrauchseinrichtungen. Es ist kein Börsentarif. Wer beides kombiniert, senkt zwei verschiedene Bestandteile der Kilowattstunde.',
    sections: [
      {
        heading: 'Wer darunter fällt',
        paragraphs: [
          'Steuerbar sind unter anderem private Wallboxen, Wärmepumpen und Klimaanlagen ab einer bestimmten Leistung, die der Netzbetreiber im Engpass dimmen darf. Im Gegenzug sinkt das Netzentgelt. Die genauen Leistungsgrenzen und Übergangsregeln stehen in der Festlegung der Bundesnetzagentur, nicht im Börsenpreis.',
          'Der Netzbetreiber dimmt die Leistung, er schaltet den Haushalt nicht ab. Für die Börse ist das unsichtbar: Der Stundenpreis gilt weiter für jede bezogene Kilowattstunde.',
        ],
      },
      {
        heading: 'Modul 1 und Modul 2',
        paragraphs: [
          'Modul 1 ist ein pauschaler Nachlass auf das Netzentgelt, grob im Bereich von etwas über 100 Euro im Jahr, je nach Netzgebiet. Modul 2 senkt den Arbeitspreis des Netzentgelts prozentual, typischerweise um etwa 60 Prozent. Welches Modul günstiger ist, hängt an Ihren Kilowattstunden und am lokalen Entgelt.',
          'Diese Website zieht den §-14a-Nachlass nicht vom ausgewiesenen Endpreis ab. Sonst würden Länderseiten einen Rabatt zeigen, den nicht jeder Zähler hat. Den Nachlass rechnen Sie zusätzlich.',
        ],
      },
      {
        heading: 'Zusammenspiel mit dem dynamischen Tarif',
        paragraphs: [
          'Der dynamische Tarif bewegt den Börsenanteil. § 14a bewegt den Netzanteil. Ein Haushalt kann den einen ohne den anderen haben. Das Maximum entsteht, wenn die gedimmte Wallbox oder Wärmepumpe zusätzlich in einer günstigen Börsenstunde läuft.',
          'Fragen Sie Netzbetreiber und Lieferant getrennt: Der eine zum Modul, der andere zur stündlichen Abrechnung und zum Smart Meter.',
        ],
      },
    ],
  },
  {
    slug: 'smart-meter',
    title: 'Smart Meter und iMSys — Voraussetzung für Stundentarife | StrompreiseHeute.de',
    description:
      'Unterschied zwischen moderner Messeinrichtung und intelligentem Messsystem, und warum dynamische Tarife eine stündliche Messung brauchen.',
    kicker: 'Messung',
    h1: 'Smart Meter: was der Zähler können muss',
    intro:
      'Ein dynamischer Tarif braucht Verbrauchsdaten pro Stunde. Dafür ist ein intelligentes Messsystem vorgesehen. Eine moderne Messeinrichtung allein zeigt den Zählerstand, überträgt ihn aber nicht stündlich.',
    sections: [
      {
        heading: 'mME und iMSys',
        paragraphs: [
          'Die moderne Messeinrichtung (mME) ist ein digitaler Zähler ohne Gateway. Das intelligente Messsystem (iMSys) ergänzt das Smart-Meter-Gateway und überträgt die Werte verschlüsselt an den Messstellenbetreiber. Nur damit kann der Lieferant Stunde für Stunde abrechnen.',
          'Einige Anbieter setzen zusätzlich einen optischen Lesekopf auf die Infrarotschnittstelle der mME und holen die Daten über das WLAN. Das ist ein Vertragsmodell des Lieferanten, kein Ersatz für die gesetzliche Einbaupflicht in den Fällen, in denen der Messstellenbetreiber ein iMSys setzen muss.',
        ],
      },
      {
        heading: 'Wer den Einbau beauftragt',
        paragraphs: [
          'Zuständig ist der grundzuständige Messstellenbetreiber, oft der Netzbetreiber. Den Lieferanten wechseln Sie separat. Ein Börsentarif ohne passende Messung wird in der Praxis auf Standardlastprofil abgerechnet und verliert den Stundenvorteil.',
          'Der Messstellenbetrieb erscheint als eigener Posten auf der Rechnung. Er ist in unserem Endpreis nicht enthalten, weil er ein Jahresbetrag ist und kein Cent-je-Kilowattstunde-Satz der Börse.',
        ],
      },
      {
        heading: 'Was Sie mit den Daten anfangen',
        paragraphs: [
          'Die Preise brauchen Sie schon am Vortag, die Messung erst in der Abrechnung. Deshalb können Sie Waschmaschine und Wallbox nach der hier veröffentlichten Tabelle steuern, noch bevor der Zähler jede Viertelstunde sendet.',
          'Die Datenherkunft der Preise bleibt SMARD. Der Zähler ändert den Börsenpreis nicht, er macht ihn nur auf Ihrer Rechnung wirksam.',
        ],
      },
    ],
  },
  {
    slug: 'stromampel-lesen',
    title: 'Stromampel lesen — Grün, Gelb, Rot | StrompreiseHeute.de',
    description:
      'Welche Schwellen die Stromampel verwendet, was eine rote Stunde praktisch heißt und wie Sie die günstigste Stunde trotzdem finden.',
    kicker: 'Ampel',
    h1: 'Die Stromampel richtig lesen',
    intro:
      'Die Ampel übersetzt den Börsenpreis in drei Stufen. Sie sagt nicht, dass Sie bei Rot keinen Strom nutzen dürfen. Sie zeigt, welche Stunden im Vergleich teuer sind.',
    sections: [
      {
        heading: 'Die Schwellen',
        paragraphs: [
          'Grün: Börsenpreis bis 8,5 ct/kWh (85 €/MWh), und jede negative Stunde als besonders günstig. Gelb: über 8,5 bis 15 ct/kWh. Rot: darüber. Die Grenzen liegen auf dem Großhandelspreis, nicht auf dem Endpreis. Ein roter Börsenpreis von 20 ct kann nach Netz und Steuer bei etwa 45 ct Endpreis landen.',
          'Dieselben Grenzen stehen in der Legende der Stundengrafik. Sie sind fest und werden nicht jeden Tag neu an den Durchschnitt angepasst. Dadurch bleibt eine teure Woche durchgehend rot, statt eine relativ günstige teure Stunde grün zu färben.',
        ],
      },
      {
        heading: 'Was Sie tun',
        paragraphs: [
          'Flexible Geräte gehören in die günstigste Stunde, nicht in irgendeine grüne. Gibt es keine grüne Stunde, bleibt die niedrigste rote Stunde die beste Wahl. Die Startseite nennt sie mit Uhrzeit.',
          'Die Ampel gilt für die Gebotszone DE-LU. Sie berücksichtigt weder Ihr Netzentgelt noch eine Dimmung nach § 14a. Dafür sind die Länder- und Städte-Seiten da: gleicher Börsenpreis, anderer Endpreis.',
        ],
      },
      {
        heading: 'Morgen planen',
        paragraphs: [
          'Die Ampel für morgen erscheint, sobald die Day-Ahead-Stunden da sind, in der Regel ab etwa 13 Uhr. Vorher zeigt die Morgen-Seite den Hinweis auf die Auktion und keinen erfundenen Preis.',
          'Aktualisiert wird nach dem Datenlauf. Die Uhrzeit steht im Seitenkopf als Datenstand, Zeitzone Europe/Berlin.',
        ],
      },
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
