export interface CityProfile {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  population: string;
  dso: string;
  tso: string;
  netzentgeltCt: number;
  /** Konzessionsabgabe-Höchstwert für Tarifkunden in Gemeinden über 500.000 Einwohner (§ 2 KAV). */
  konzessionCapCt: number;
  gridNote: string;
  householdNote: string;
}

export const cities: CityProfile[] = [
  {
    slug: 'berlin',
    name: 'Berlin',
    state: 'Berlin',
    stateSlug: 'berlin',
    population: '3,8 Mio.',
    dso: 'Stromnetz Berlin',
    tso: '50Hertz',
    netzentgeltCt: 10.8,
    konzessionCapCt: 2.39,
    gridNote:
      'Berlin wird als Stadtstaat von Stromnetz Berlin versorgt. Das Netz ist dicht, die Wege sind kurz, und die Netzentgelte liegen unter dem Niveau der ostdeutschen Flächenländer. Der Börsenpreis selbst ist derselbe wie in München oder Kiel: Deutschland und Luxemburg bilden eine gemeinsame Gebotszone.',
    householdNote:
      'In Mehrfamilienhäusern ohne eigene Wallbox zählt vor allem der Grundverbrauch am Abend. Wer eine Wallbox in der Tiefgarage oder einen Speicher hat, kann die Mittags- und Nachtstunden nutzen. Der gesetzliche Höchstsatz der Konzessionsabgabe liegt in Berlin bei 2,39 ct/kWh.',
  },
  {
    slug: 'hamburg',
    name: 'Hamburg',
    state: 'Hamburg',
    stateSlug: 'hamburg',
    population: '1,9 Mio.',
    dso: 'Stromnetz Hamburg',
    tso: '50Hertz / TenneT (Übergang Nord)',
    netzentgeltCt: 10.6,
    konzessionCapCt: 2.39,
    gridNote:
      'Stromnetz Hamburg betreibt das städtische Verteilnetz. Windstrom aus Schleswig-Holstein und Niedersachsen drückt den bundesweiten Börsenpreis oft in den Nacht- und Morgenstunden, der Endpreis in der Hansestadt hängt danach vor allem am lokalen Netzentgelt.',
    householdNote:
      'Für Hafen, Gewerbe und Wohnungen in den Elbvororten ist der Abendpeak teuer. Wärmepumpen in den Randbezirken und E-Autos lassen sich in die günstigste Stunde des Tages legen, statt pauschal nachts zu laden.',
  },
  {
    slug: 'muenchen',
    name: 'München',
    state: 'Bayern',
    stateSlug: 'bayern',
    population: '1,5 Mio.',
    dso: 'SWM Infrastruktur',
    tso: 'TenneT',
    netzentgeltCt: 9.8,
    konzessionCapCt: 2.39,
    gridNote:
      'In München betreibt die SWM Infrastruktur das Verteilnetz. Bayern hat einen hohen Photovoltaik-Anteil: an sonnigen Tagen fällt der Day-Ahead-Preis häufig zwischen 11 und 15 Uhr, auch wenn die Stadt selbst den Strom nicht „lokal“ an der Börse kauft.',
    householdNote:
      'Einfamilienhäuser im Münchner Umland mit PV, Speicher oder Wallbox profitieren, wenn der Speicher nicht schon am Vormittag voll ist und das Auto in der günstigsten Mittagsstunde lädt. Der Orientierungswert für das Netzentgelt liegt unter dem Bundesmodell von 11,50 ct/kWh.',
  },
  {
    slug: 'koeln',
    name: 'Köln',
    state: 'Nordrhein-Westfalen',
    stateSlug: 'nordrhein-westfalen',
    population: '1,1 Mio.',
    dso: 'Rheinische NETZGesellschaft (RNG)',
    tso: 'Amprion',
    netzentgeltCt: 10.7,
    konzessionCapCt: 2.39,
    gridNote:
      'Köln hängt am Verteilnetz der Rheinischen NETZGesellschaft, das Übertragungsnetz stellt Amprion. Der industrielle Rhein-Ruhr-Raum zieht den Abendpreis oft nach oben, weil die Nachfrage zwischen 17 und 20 Uhr bundesweit am höchsten ist.',
    householdNote:
      'In der dicht bebauten Innenstadt sind Waschmaschine, Geschirrspüler und Wallbox die flexiblen Lasten. Eine Zeitschaltuhr auf die günstigste Stunde senkt die Rechnung, auch ohne Smart-Home-System.',
  },
  {
    slug: 'frankfurt-am-main',
    name: 'Frankfurt am Main',
    state: 'Hessen',
    stateSlug: 'hessen',
    population: '770.000',
    dso: 'Netzdienste Rhein-Main / Mainova',
    tso: 'TenneT / Amprion',
    netzentgeltCt: 11.4,
    konzessionCapCt: 2.39,
    gridNote:
      'Frankfurt trägt mit Rechenzentren und dem Finanzplatz eine hohe Grundlast. Verteilt wird der Strom über die Netzdienste Rhein-Main. Das ändert den Börsenpreis nicht stündlich für die Stadt, wohl aber den Aufschlag, der auf jeder Kilowattstunde liegt.',
    householdNote:
      'Wohnungen in der Innenstadt haben wenig verschiebbare Last. Der Hebel sitzt bei Haushalten in den Vororten mit Wärmepumpe oder E-Auto: dort lohnt der Blick auf die drei günstigsten Stunden, nicht auf den Tagesdurchschnitt.',
  },
  {
    slug: 'stuttgart',
    name: 'Stuttgart',
    state: 'Baden-Württemberg',
    stateSlug: 'baden-wuerttemberg',
    population: '630.000',
    dso: 'Netze BW',
    tso: 'TransnetBW',
    netzentgeltCt: 11.2,
    konzessionCapCt: 2.39,
    gridNote:
      'Stuttgart liegt im Netzgebiet von Netze BW, das Übertragungsnetz betreibt TransnetBW. Im Südwesten treffen Solarspitzen am Mittag auf eine starke industrielle Nachfrage am Abend. Genau diese Spreizung zeigt die Stundentabelle.',
    householdNote:
      'Viele Hanglagen und Einfamilienhäuser haben bereits eine Wärmepumpe. Nach § 14a EnWG lässt sich das Netzentgelt für steuerbare Verbraucher zusätzlich senken — der Börsenpreis kommt obendrauf und bleibt stündlich.',
  },
  {
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    state: 'Nordrhein-Westfalen',
    stateSlug: 'nordrhein-westfalen',
    population: '620.000',
    dso: 'Netzgesellschaft Düsseldorf',
    tso: 'Amprion',
    netzentgeltCt: 10.4,
    konzessionCapCt: 2.39,
    gridNote:
      'Die Netzgesellschaft Düsseldorf ist der lokale Verteilnetzbetreiber, Amprion der Übertragungsnetzbetreiber. Das Netzentgelt liegt etwas unter dem NRW-Schnitt, der Börsenpreis ist mit Köln und Dortmund identisch.',
    householdNote:
      'Für Büros und Wohnungen in der Landeshauptstadt ist der Feierabend-Peak die teure Phase. Laden und Vorheizen gehören in die günstigste Stunde des veröffentlichten Tages, nicht pauschal auf 22 Uhr.',
  },
  {
    slug: 'leipzig',
    name: 'Leipzig',
    state: 'Sachsen',
    stateSlug: 'sachsen',
    population: '615.000',
    dso: 'Netz Leipzig',
    tso: '50Hertz',
    netzentgeltCt: 12.2,
    konzessionCapCt: 2.39,
    gridNote:
      'Netz Leipzig verteilt den Strom in der Stadt, 50Hertz betreibt das Übertragungsnetz im Osten. Die Netzentgelte liegen über dem westdeutschen Niveau, weil Wind- und Solarausbau im Übertragungsnetz mitfinanziert werden. Der Börsenpreis selbst ist davon unabhängig und gilt für ganz DE-LU.',
    householdNote:
      'Gerade weil das Netzentgelt höher ist, fällt jede verschobene Kilowattstunde stärker ins Gewicht. Ein Haushalt mit 4.000 kWh spürt den Unterschied zwischen der teuersten und der günstigsten Stunde über das Jahr deutlich.',
  },
  {
    slug: 'dortmund',
    name: 'Dortmund',
    state: 'Nordrhein-Westfalen',
    stateSlug: 'nordrhein-westfalen',
    population: '590.000',
    dso: 'Westnetz',
    tso: 'Amprion',
    netzentgeltCt: 11.1,
    konzessionCapCt: 2.39,
    gridNote:
      'Dortmund wird überwiegend von Westnetz versorgt. Im Ruhrgebiet liegen viele Haushalte noch in der Grundversorgung. Der Vergleich auf dieser Seite stellt den heutigen Börsen-Endpreis dem üblichen Festpreis gegenüber — an teuren Tagen ist der dynamische Tarif nicht automatisch günstiger.',
    householdNote:
      'Schichtarbeit und Homeoffice verschieben den Verbrauch. Wer Geräte nach der veröffentlichten Ampel startet, statt sie an den Feierabend zu koppeln, nutzt genau die Stunden, die Westnetz-Kunden sonst teuer bezahlen.',
  },
  {
    slug: 'essen',
    name: 'Essen',
    state: 'Nordrhein-Westfalen',
    stateSlug: 'nordrhein-westfalen',
    population: '580.000',
    dso: 'Westnetz',
    tso: 'Amprion',
    netzentgeltCt: 10.8,
    konzessionCapCt: 2.39,
    gridNote:
      'Auch Essen liegt im Gebiet von Westnetz. Die Netzentgelt-Orientierung weicht leicht von Dortmund ab, weil kommunale Ansätze und Spannungsebenen nicht identisch sind. Der Stundenpreis der Börse ist derselbe.',
    householdNote:
      'In der Grundversorgung liegen die Arbeitspreise oft über 39 ct/kWh. Ob sich ein dynamischer Tarif heute lohnt, zeigt der Vergleich mit dem Tagesdurchschnitt weiter unten — nicht ein pauschales Sparversprechen.',
  },
  {
    slug: 'bremen',
    name: 'Bremen',
    state: 'Bremen',
    stateSlug: 'bremen',
    population: '570.000',
    dso: 'wesernetz Bremen',
    tso: 'TenneT',
    netzentgeltCt: 10.1,
    konzessionCapCt: 2.39,
    gridNote:
      'wesernetz Bremen versorgt die Stadt, TenneT das Übertragungsnetz. Bremen profitiert indirekt von norddeutschem Wind, weil der Wind den DE-LU-Preis senkt. Das lokale Netzentgelt gehört zu den niedrigeren unter den Großstädten.',
    householdNote:
      'Bremerhaven teilt sich den Strommarkt nicht als eigene Gebotszone. Für beide Städte gilt derselbe Börsenpreis; unterschiedlich sind Netzbetreiber und Entgelt. Diese Seite rechnet mit dem Bremer Orientierungswert.',
  },
  {
    slug: 'dresden',
    name: 'Dresden',
    state: 'Sachsen',
    stateSlug: 'sachsen',
    population: '560.000',
    dso: 'SachsenNetze',
    tso: '50Hertz',
    netzentgeltCt: 12.4,
    konzessionCapCt: 2.39,
    gridNote:
      'SachsenNetze betreiben das Verteilnetz in Dresden. Wie in Leipzig liegt das Netzentgelt über dem Bundesmodell von 11,50 ct/kWh. Deshalb ist der ausgewiesene Endpreis höher als auf der Startseite, obwohl der Börsenpreis in Cent je Kilowattstunde identisch ist.',
    householdNote:
      'Elbhang und Umland haben viele Einfamilienhäuser mit Nachtspeicher oder Wärmepumpe. Nachtspeicher an einen festen Nachtstrom zu hängen ist nur sinnvoll, wenn die Nachtstunden in der Tabelle auch wirklich die günstigen sind — das ist nicht an jedem Tag so.',
  },
  {
    slug: 'hannover',
    name: 'Hannover',
    state: 'Niedersachsen',
    stateSlug: 'niedersachsen',
    population: '540.000',
    dso: 'enercity Netz',
    tso: 'TenneT',
    netzentgeltCt: 11.6,
    konzessionCapCt: 2.39,
    gridNote:
      'enercity Netz verteilt den Strom in Hannover, TenneT überträgt ihn. Niedersachsen erzeugt viel Windstrom. Der Effekt erscheint im Börsenpreis für ganz Deutschland, nicht als eigener Stadtpreis.',
    householdNote:
      'Wärmepumpen in den Stadtteilen und der Region Hannover sind der größte flexible Verbraucher. Modul 1 oder 2 nach § 14a EnWG und die günstigste Börsenstunde wirken zusammen, ersetzen sich aber nicht.',
  },
  {
    slug: 'nuernberg',
    name: 'Nürnberg',
    state: 'Bayern',
    stateSlug: 'bayern',
    population: '520.000',
    dso: 'N-ERGIE Netz',
    tso: 'TenneT',
    netzentgeltCt: 10.2,
    konzessionCapCt: 2.39,
    gridNote:
      'N-ERGIE Netz versorgt Nürnberg. Der fränkische Netzpreis liegt nah am bayerischen Schnitt und unter dem ostdeutschen Niveau. Solarstrom aus der Region drückt vor allem die Mittagsstunden im gemeinsamen DE-LU-Preis.',
    householdNote:
      'Wer in Nürnberg ein E-Auto an der eigenen Wallbox lädt, sollte die drei günstigsten Stunden vergleichen und nicht blind auf „mittags“ stellen. An bewölkten Wintertagen kann der Tiefpunkt in der Nacht liegen.',
  },
  {
    slug: 'duisburg',
    name: 'Duisburg',
    state: 'Nordrhein-Westfalen',
    stateSlug: 'nordrhein-westfalen',
    population: '500.000',
    dso: 'Netze Duisburg',
    tso: 'Amprion',
    netzentgeltCt: 11.3,
    konzessionCapCt: 2.39,
    gridNote:
      'Netze Duisburg betreiben das Stadtnetz, Amprion das Höchstspannungsnetz. Stahl- und Logistikstandorte prägen die regionale Last, der Preis für Haushaltskunden folgt trotzdem der bundesweiten Auktion plus lokalem Netzentgelt.',
    householdNote:
      'Für Haushalte im Duisburger Norden und Süden ist der Endpreis heute der relevante Vergleich zur Grundversorgung. Liegt der Börsentag klar darüber, spart nur das Verschieben in die günstigsten Stunden — nicht der Tarifwechsel allein.',
  },
];

export function cityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
