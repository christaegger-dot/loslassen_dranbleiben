// ============================================================
// CONTENT DATA: Loslassen und Dranbleiben
// Vollständige Gesamtfassung — 1:1 aus der verbindlichen Vorlage
// Schweizer Orthografie: ss statt ß
// «…» für Hervorhebungen, „…" für direkte Selbstaussagen
// Halbgeviertstrich — mit Leerzeichen
// ============================================================

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  content: Section[];
  keyQuote?: string;
  example?: string;
  isIntro?: boolean;
}

export interface Section {
  type: 'paragraph' | 'heading' | 'quote' | 'list' | 'steps' | 'highlight';
  text?: string;
  items?: string[];
  steps?: { title: string; text: string; quote?: string }[];
}

export const chapters: Chapter[] = [
  {
    id: 'intro',
    number: 0,
    title: 'Loslassen und Dranbleiben',
    subtitle: 'Eine Orientierung für Angehörige von Menschen mit einer psychischen Erkrankung',
    isIntro: true,
    keyQuote: 'Loslassen heisst hier nicht, den Menschen loszulassen, den Sie lieben. Dranbleiben heisst nicht, sich selbst zu vergessen. Hilfreich wird beides dort, wo Sie anerkennen, was ist, unterscheiden, worauf Sie Einfluss haben und worauf nicht, und gut für sich sorgen — damit Sie bleiben können, ohne selbst unterzugehen.',
    content: [
      {
        type: 'paragraph',
        text: 'Wenn ein nahestehender Mensch psychisch erkrankt, verändert das nicht nur sein Leben, sondern auch Ihres. Als Mutter, Vater, Partnerin, Kind, Geschwister oder Freundin begleiten Sie jemanden durch eine Zeit, die sich kaum planen lässt — und oft gerät dabei innerlich vieles in Bewegung: Sicherheit, Selbstwert, Zugehörigkeit, Kontrolle, Gewohnheit und das Bild davon, wie Ihr gemeinsames Leben verlaufen sollte.',
      },
      {
        type: 'paragraph',
        text: 'Viele Angehörige erleben diese Situation nicht als Übergang mit klarem Ende, sondern als andauernde Belastung. Etwas, das vertraut war, trägt nicht mehr. Pläne lassen sich nicht mehr halten. Und während Sie da sind und tragen, bleibt oft unklar, wie es weitergeht — Hoffnung und Sorge wechseln sich ab, manchmal mehrmals am Tag.',
      },
      {
        type: 'paragraph',
        text: 'In solchen Phasen entsteht häufig ein inneres Tauziehen: Ein Teil von Ihnen möchte ganz für den anderen da sein. Ein anderer Teil spürt, dass auch Sie selbst Kraft, Halt und ein eigenes Leben brauchen, um das durchzuhalten. Beides ist berechtigt — und beides gegeneinander auszuspielen hilft selten weiter.',
      },
      {
        type: 'paragraph',
        text: 'Dieser Text drängt Sie nicht, sich «endlich abzugrenzen» oder loszulassen. Er möchte Ihnen vielmehr Orientierung geben: Wie können Sie an der Seite eines erkrankten Menschen bleiben, ohne sich dabei selbst zu verlieren? Wie lässt sich anerkennen, was ist, ohne die Hoffnung aufzugeben? Und wie können Sie für sich sorgen, ohne sich schuldig zu fühlen?',
      },
      {
        type: 'paragraph',
        text: 'Die zentrale Idee lautet:',
      },
    ],
  },
  {
    id: 'verunsicherung',
    number: 1,
    title: 'Warum Veränderung so verunsichern kann',
    keyQuote: 'Festhalten ist nicht einfach Schwäche. Häufig ist es ein Schutzversuch. Die Psyche versucht, Sicherheit zu bewahren, auch wenn diese Sicherheit eng geworden ist.',
    example:
      'Seit Monaten sagen Sie sich, dass eigentlich etwas anders werden müsste — und merken doch, wie sehr Sie am Vertrauten hängen, selbst wenn es zehrt. Das ist kein Trotz und keine Bequemlichkeit: Das Bekannte gibt wenigstens Halt, Sie wissen, woran Sie sind. Vielleicht hilft die Frage, was an Ihrer jetzigen Art, mit allem umzugehen, Ihnen Sicherheit gibt — und was davon enger geworden ist, als Ihnen guttut.',
    content: [
      {
        type: 'paragraph',
        text: 'Menschen brauchen ein Mindestmass an Vorhersehbarkeit. Wir orientieren uns an Routinen, Rollen, Beziehungen, Erwartungen und inneren Bildern davon, wie unser Leben verlaufen soll. Diese Orientierung ist nicht oberflächlich. Sie gibt psychische Sicherheit. Wenn ein nahestehender Mensch psychisch erkrankt, gerät genau diese Vorhersehbarkeit oft ins Wanken — und mit ihr vieles, worauf man sich verlassen hat.',
      },
      {
        type: 'paragraph',
        text: 'Deshalb kann Wandel auch dann Angst machen, wenn er objektiv sinnvoll oder sogar notwendig ist. Vertraute Wege, mit der Situation umzugehen — auch anstrengende —, können sich sicherer anfühlen als ein noch unbekannter Weg. Das Bekannte gibt zumindest eine Form von Berechenbarkeit: Man weiss, woran man ist. Man weiss, wie man funktioniert. Man weiss sogar, wie man leidet.',
      },
      {
        type: 'paragraph',
        text: 'Das erklärt, warum Menschen manchmal in vertrauten, aber zehrenden Mustern verharren — man spricht manchmal vom «gemütlichen Elend». Der Ausdruck meint nicht, dass das Leid wirklich gemütlich wäre. Er beschreibt eine Dynamik: Ein bekanntes, anstrengendes Muster — etwa immer zu funktionieren, nie um Hilfe zu bitten oder sich selbst ganz hintanzustellen — kann sicherer erscheinen als die unsichere Möglichkeit, etwas daran zu verändern.',
      },
      {
        type: 'paragraph',
        text: 'Veränderung fordert deshalb nicht nur Mut, sondern auch Trauerarbeit. Auch beim Beginn oder Fortschreiten der Erkrankung eines nahestehenden Menschen verliert man oft mehr als eine Situation: Hoffnungen, Gewohnheiten, Selbstverständlichkeiten, eine Vorstellung davon, wie das gemeinsame Leben verlaufen sollte — und manchmal ein Bild von sich selbst.',
      },
      {
        type: 'paragraph',
        text: 'Hilfreich ist deshalb eine freundlichere Sicht auf das Festhalten:',
      },
    ],
  },
  {
    id: 'tauziehen',
    number: 2,
    title: 'Das innere Tauziehen: Sicherheit und Entfaltung',
    keyQuote: 'Suche ich gerade Schutz, weil ich ihn wirklich brauche — oder halte ich an etwas fest, das mich langfristig einengt?',
    example:
      'Sie haben sich zum ersten Mal seit Wochen mit einer Freundin verabredet. Kurz davor meldet sich Ihr Sohn, dem es gerade schlecht geht, und sofort ist der Reflex da: absagen, erreichbar bleiben. Beides ist verständlich — die Sorge und der Wunsch nach einem eigenen Abend. Die hilfreiche Frage ist dann nicht «hingehen oder bleiben», sondern: Braucht dieser Moment wirklich meine Anwesenheit — oder ist es die Gewohnheit, immer verfügbar zu sein?',
    content: [
      {
        type: 'paragraph',
        text: 'In Zeiten der Belastung stehen sich oft zwei legitime Bedürfnisse gegenüber — auch bei Angehörigen, die einen erkrankten Menschen begleiten.',
      },
      {
        type: 'paragraph',
        text: 'Auf der einen Seite steht das Bedürfnis nach Sicherheit: schützen, stabilisieren, die Lage beisammenhalten, Überforderung vermeiden. Bei Angehörigen zeigt es sich oft als Wachsamkeit und Sorge um den erkrankten Menschen. Dieses Bedürfnis ist wichtig. Ohne ein Mindestmass an Sicherheit können Menschen kaum wachsen.',
      },
      {
        type: 'paragraph',
        text: 'Auf der anderen Seite steht das Bedürfnis nach Entfaltung: nach einem eigenen Leben, nach Lebendigkeit, Autonomie und der Möglichkeit, mehr mit sich selbst in Übereinstimmung zu sein. Auch dieses Bedürfnis ist wichtig. Ohne Entfaltung kann aus Sicherheit Erstarrung werden — und aus Sorge ein Leben, das nur noch um die Krankheit kreist.',
      },
      {
        type: 'paragraph',
        text: 'Beide Kräfte haben eine gesunde und eine schwierige Seite. Das Bedürfnis nach Sicherheit gibt Halt, Orientierung und Schutz und hilft, Überforderung zu vermeiden — kann bei Übergewicht aber zu Stillstand, Vermeidung oder Resignation führen. Das Bedürfnis nach Entfaltung ermöglicht Wachstum, Autonomie und Lebendigkeit und hilft, neue Möglichkeiten zu entdecken — kann bei Übergewicht aber zu Überforderung, Rastlosigkeit oder Instabilität führen.',
      },
      {
        type: 'paragraph',
        text: 'Reifung bedeutet nicht, eine dieser Kräfte zu besiegen. Es geht um Balance. Manchmal brauchen Sie zuerst Stabilisierung, bevor Veränderung möglich ist. Manchmal brauchen Sie aber auch den Mut, eine vermeintliche Sicherheit zu verlassen, weil sie innerlich nicht mehr stimmt.',
      },
      {
        type: 'paragraph',
        text: 'Eine hilfreiche Frage lautet:',
      },
      {
        type: 'paragraph',
        text: 'Diese Frage soll nicht drängen. Sie soll unterscheiden helfen.',
      },
    ],
  },
  {
    id: 'selbstwert',
    number: 3,
    title: 'Wenn Wandel den Selbstwert trifft',
    example:
      'Bei einem Familienfest fragt eine Verwandte beiläufig, ob Sie „es früher nicht hätten merken müssen“. Der Satz hallt tagelang nach und legt sich auf einen Vorwurf, den Sie sich längst selbst machen. Doch dass die Frage so trifft, sagt nichts über Ihre Schuld — sie zeigt, wie nah Ihnen das geht und wie sehr Sie sich sorgen. Ihr Wert als Mensch hängt nicht am Verlauf einer Krankheit, die Sie nicht verschuldet haben.',
    content: [
      {
        type: 'paragraph',
        text: 'Veränderung ist besonders schmerzhaft, wenn sie nicht freiwillig gewählt wurde. Auch die Erkrankung eines nahestehenden Menschen ist nicht nur praktisch belastend — sie kann den eigenen Selbstwert treffen und als Kränkung erlebt werden.',
      },
      {
        type: 'paragraph',
        text: 'Kränkung bedeutet: Ein Mensch wird an einer empfindlichen Stelle getroffen. Nicht nur etwas Äusseres geht verloren, sondern auch das Gefühl von Wert, Würde, Anerkennung oder Zugehörigkeit.',
      },
      {
        type: 'paragraph',
        text: 'Bei Angehörigen richtet sich dieser Schmerz oft nach innen, als Selbstvorwurf. Es können Gedanken entstehen wie: „Habe ich als Mutter etwas falsch gemacht?" „Liegt es an mir?" „Ich tue zu wenig." „Ich müsste geduldiger, stärker, belastbarer sein." Manchmal kommt von aussen der Eindruck dazu, beurteilt zu werden — als trage man Schuld an der Erkrankung oder an ihrem Verlauf.',
      },
      {
        type: 'paragraph',
        text: 'Solche Gedanken sind verständlich, aber sie sind nicht wahr. Eine psychische Erkrankung ist kein Urteil über Ihren Wert als Mensch und kein Beweis, dass Sie versagt haben. Solche Gedanken zeigen vor allem, wie sehr die Situation den Selbstwert berührt — und wie sehr Sie sich sorgen.',
      },
      {
        type: 'paragraph',
        text: 'Für die Verarbeitung ist deshalb beides wichtig: Der Schmerz muss ernst genommen werden, aber er sollte nicht zur endgültigen Wahrheit über die eigene Person werden.',
      },
      {
        type: 'paragraph',
        text: 'Hilfreiche innere Unterscheidungen sind:',
      },
      {
        type: 'list',
        items: [
          'Die Situation ist schmerzhaft.',
          'Sie ist vielleicht ungerecht, beschämend oder zermürbend.',
          'Aber sie definiert nicht meinen gesamten Wert als Mensch.',
          'Ich darf verletzt und erschöpft sein, ohne mich selbst abzuwerten.',
          'Ich darf Verantwortung für meinen nächsten Schritt übernehmen, ohne mir die Schuld an der Erkrankung zu geben.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Diese Unterscheidung ist zentral. Sie verhindert, dass aus Schmerz Selbstverachtung wird oder aus Schuldgefühlen dauerhafte Verbitterung entsteht.',
      },
    ],
  },
  {
    id: 'festhalten',
    number: 4,
    title: 'Festhalten als Schutzversuch',
    keyQuote: 'Manchmal hält nicht nur die Situation selbst fest, sondern auch die verständliche Angst, etwas loszulassen, das lange Sicherheit, Hoffnung oder Identität bedeutet hat.',
    example:
      'Sie ertappen sich dabei, wie Sie an der Vorstellung festhalten, wie alles wieder werden könnte wie früher. Andere sagen, Sie sollten das endlich loslassen, und Sie werfen es sich selbst vor. Aber Sie halten nicht aus Schwäche fest, sondern weil dieses Bild lange Halt, Hoffnung und Liebe bedeutet hat. Loslassen beginnt hier nicht mit Druck, sondern mit dem Verstehen, wofür das Festhalten einmal gut war.',
    content: [
      {
        type: 'paragraph',
        text: 'Viele Menschen werfen sich vor, dass sie nicht loslassen können. Sie denken: „Ich müsste doch längst weiter sein." Oder: „Eigentlich weiss ich, dass ich etwas ändern müsste, aber innerlich komme ich nicht davon los."',
      },
      {
        type: 'paragraph',
        text: 'Doch Loslassen geschieht selten auf Befehl. Die Psyche hält oft fest, weil das Alte einmal wichtig war. Vielleicht hat es Sicherheit gegeben. Vielleicht war es mit Liebe verbunden. Vielleicht hat es Identität gestiftet. Vielleicht hat es lange funktioniert. Vielleicht war es die beste verfügbare Lösung in einer früheren Lebensphase.',
      },
      {
        type: 'paragraph',
        text: 'Deshalb ist Festhalten nicht nur Widerstand. Es kann auch Loyalität sein. Bindung. Angst. Hoffnung. Gewohnheit. Schutz. Manchmal auch ein Versuch, eine alte Verletzung nachträglich doch noch zu heilen.',
      },
      {
        type: 'paragraph',
        text: 'Wichtig ist: Menschen halten nicht fest, weil sie schwach sind. Sie halten fest, weil das Loslassen innerlich oft wie Gefahr wirkt.',
      },
      {
        type: 'paragraph',
        text: 'Eine präzise Formulierung lautet:',
      },
      {
        type: 'paragraph',
        text: 'Loslassen beginnt deshalb nicht mit Druck. Es beginnt mit Verstehen.',
      },
    ],
  },
  {
    id: 'loyalitaet',
    number: 5,
    title: 'Wenn Loslassen nicht das Richtige ist',
    subtitle: 'Über Loyalität, Bindung und Selbsterhalt',
    keyQuote: 'Wer einem leidenden Menschen verbunden bleibt, hat in der Regel kein Abgrenzungsproblem. Sondern eine Bindung. Und Bindung lässt sich nicht wie ein schlechter Vertrag kündigen.',
    example:
      'Seit Jahren hören Sie denselben Rat: „Du musst dich endlich abgrenzen.“ Und jedes Mal fühlt er sich falsch an, weil Sie den Menschen, den Sie lieben, nicht zur Gefahr erklären wollen, vor der Sie sich schützen müssen. Vielleicht bleiben Sie nicht, weil Sie sich nicht lösen können, sondern aus Überzeugung. Dann passt eine andere Frage besser: Was brauche ich, damit ich an seiner Seite bleiben kann, ohne selbst unterzugehen?',
    content: [
      {
        type: 'paragraph',
        text: 'Es gibt eine Situation, in der vieles, was bisher gesagt wurde, vorsichtiger gelesen werden muss. Sie betrifft Menschen, die einem nahestehenden Menschen verbunden bleiben, der an einer psychischen Erkrankung leidet — als Mutter, Vater, Partnerin, Sohn, Tochter, Geschwister oder Freundin. Vielleicht erkennen Sie sich darin wieder.',
      },
      {
        type: 'paragraph',
        text: 'Für Sie ist «Loslassen» oft kein hilfreiches Wort. Denn hier ist nichts vorbei. Die Beziehung ist nicht beendet, der Mensch ist nicht fort, und das Belastende ist gerade nicht ein abgeschlossener Verlust, den man betrauern und hinter sich lassen könnte. Das Belastende ist eher das Gegenteil: eine Bindung, die offen bleibt, die nicht zur Ruhe kommt, die immer wieder Hoffnung und Sorge zugleich auslöst.',
      },
      {
        type: 'paragraph',
        text: 'Vielleicht hören Sie von aussen seit Jahren denselben Rat: „Du musst dich besser abgrenzen." „Du musst mehr auf dich achten." „Du kannst doch nicht dein ganzes Leben danach ausrichten." Diese Sätze sind meist gut gemeint. Und trotzdem fühlen sie sich oft falsch an — nicht, weil Sie den Punkt nicht verstehen würden, sondern weil der Rat an Ihrer eigentlichen Erfahrung vorbeigeht.',
      },
      {
        type: 'heading',
        text: 'Festhalten kann eine Haltung sein, kein Defizit',
      },
      {
        type: 'paragraph',
        text: 'In den vorangehenden Kapiteln war oft die Rede davon, dass Festhalten ein Schutzversuch sein kann, den man verstehen darf, um sich davon zu lösen. Für Sie als Angehörige gilt etwas anderes — und Wichtigeres: Manchmal ist das Dranbleiben nicht das Problem, sondern das Wertvollste, was ein Mensch tut.',
      },
      {
        type: 'paragraph',
        text: 'Wenn Sie bei einem erkrankten Kind, einem erkrankten Partner, einem erkrankten Elternteil bleiben, obwohl es schwer ist, handeln Sie nicht aus Unfähigkeit, sich zu lösen. Sondern aus Liebe, aus Verantwortung, aus einer tief empfundenen Verbundenheit. Das ist keine fehlende Selbstfürsorge. Es ist eine Entscheidung darüber, welche Art Mensch Sie sein möchten — und für viele ist diese Entscheidung das Gegenteil von Schwäche.',
      },
      {
        type: 'paragraph',
        text: 'Es kann also zutiefst stimmig sein, nicht loszulassen. Nicht jede Bindung muss überprüft, gelockert oder aufgelöst werden. Manche Menschen bleiben nicht aus Angst oder Zwang an der Seite eines anderen, sondern aus Überzeugung. Diese Überzeugung verdient Respekt, nicht Korrektur.',
      },
      {
        type: 'quote',
        text: 'Ihre Verbundenheit muss nicht gerechtfertigt werden. Und sie muss nicht aufgegeben werden, damit Sie gut für sich sorgen können.',
      },
      {
        type: 'heading',
        text: 'Warum die übliche Abgrenzungs-Sprache nicht trägt',
      },
      {
        type: 'paragraph',
        text: 'Das Wort «Abgrenzung» legt nahe, es gehe darum, sich gegen jemanden zu schützen — eine Grenze gegen den anderen zu ziehen. Genau das wollen viele Angehörige nicht. Sie wollen den Menschen, den sie lieben, nicht zu einer Gefahr erklären, vor der sie sich abschirmen müssen.',
      },
      {
        type: 'paragraph',
        text: 'Deshalb hilft eine andere Unterscheidung mehr. Es geht nicht um Abgrenzung gegen den anderen. Es geht um Selbsterhalt für das Dranbleiben.',
      },
      {
        type: 'paragraph',
        text: 'Diese beiden Dinge sehen von aussen manchmal ähnlich aus — eine Pause, ein Nein, eine Grenze, ein Rückzug für ein paar Stunden. Aber ihre innere Bedeutung ist eine völlig andere. Abgrenzung sagt: „Ich schütze mich vor dir." Selbsterhalt sagt: „Ich sorge dafür, dass ich bei dir bleiben kann, ohne selbst unterzugehen."',
      },
      {
        type: 'paragraph',
        text: 'Das ist kein Widerspruch zur Fürsorge. Es ist ihre Voraussetzung. Niemand kann über Jahre tragen, ohne selbst getragen zu werden. Wer dauerhaft an seine Grenzen geht, hilft am Ende weder dem anderen noch sich selbst — nicht, weil die Liebe nicht reicht, sondern weil die Kraft eines Menschen begrenzt ist.',
      },
      {
        type: 'quote',
        text: 'Für sich zu sorgen ist nicht das Gegenteil von Dranbleiben. Es ist das, was Dranbleiben über lange Zeit möglich macht.',
      },
      {
        type: 'paragraph',
        text: 'Damit verschiebt sich auch die Frage. Sie lautet nicht mehr: „Wie grenze ich mich ab?" Sondern eher: Was brauche ich, damit ich das durchhalten kann, ohne zu zerbrechen? Woher kommt die Kraft, um morgen wieder da zu sein? Wer trägt mich, während ich trage? Das sind keine egoistischen Fragen. Es sind die Fragen, die das Dranbleiben langfristig sichern.',
      },
      {
        type: 'heading',
        text: 'Lieben und zugleich nicht mehr können',
      },
      {
        type: 'paragraph',
        text: 'Viele Angehörige kennen ein Gefühl, über das sie sich kaum zu sprechen trauen: Sie lieben den erkrankten Menschen — und sind zugleich erschöpft, wütend, manchmal am Ende ihrer Kraft. Sie wollen da sein — und wünschen sich zugleich, dass es anders wäre, leichter, dass die Belastung ein Ende hätte. Solche widersprüchlichen Gefühle nennt man Ambivalenz. Sie sind keine Schwäche und kein Widerspruch in Ihnen, sondern eine folgerichtige Antwort auf eine Lage, die sich nicht auflösen lässt.',
      },
      {
        type: 'paragraph',
        text: 'Gerade weil die Situation offen bleibt und sich ständig ändert, ziehen zwei Dinge gleichzeitig: die Verbundenheit und das eigene Überleben, das Mitgefühl und der Zorn, die Hoffnung und die Verzweiflung. Beides ist gleichzeitig wahr. Es muss nicht aufgelöst werden — es darf nebeneinander bestehen.',
      },
      {
        type: 'paragraph',
        text: 'Das Schwerste an diesen Gefühlen ist oft nicht das Gefühl selbst, sondern das schlechte Gewissen darüber. Wer den eigenen Sohn, die eigene Partnerin liebt und zugleich manchmal nicht mehr kann, fühlt sich schnell schuldig, «schlecht», unloyal. Doch diese Schuld trifft nicht zu. Wut neben Liebe heisst nicht, dass die Liebe fehlt. Erschöpfung neben Fürsorge heisst nicht, dass Sie versagen.',
      },
      {
        type: 'quote',
        text: 'Sie dürfen einen Menschen lieben und zugleich an Ihre Grenzen kommen. Beides ist wahr — und keines davon macht Sie zu einem schlechteren Menschen.',
      },
      {
        type: 'paragraph',
        text: 'Hilfreich ist hier dieselbe Freundlichkeit, die Sie einem guten Freund entgegenbringen würden, der in Ihrer Lage wäre: sich nicht für die eigenen widersprüchlichen Gefühle zu verurteilen, sondern sie als das zu sehen, was sie sind — menschlich, verständlich und geteilt von vielen, denen es ähnlich geht.',
      },
      {
        type: 'heading',
        text: 'Die Last, nicht verstanden zu werden',
      },
      {
        type: 'paragraph',
        text: 'Zur eigentlichen Belastung kommt für viele Angehörige eine zweite hinzu, über die selten gesprochen wird: die Erfahrung, mit alldem allein zu sein.',
      },
      {
        type: 'paragraph',
        text: 'Das Umfeld versteht oft nicht, warum Sie sich nicht einfach distanzieren. Es wird ungeduldig. Es bietet schnelle Lösungen an, die mit der Wirklichkeit wenig zu tun haben. Manche Menschen ziehen sich zurück, weil sie die Dauerbelastung nicht aushalten oder nicht wissen, was sie sagen sollen. So entsteht neben der Sorge um den erkrankten Menschen eine zweite Einsamkeit: das Gefühl, dass niemand wirklich sieht, was Sie tragen.',
      },
      {
        type: 'paragraph',
        text: 'Diese Einsamkeit ist eine eigene Belastung. Sie ist nicht eingebildet, und sie ist nicht selbstverschuldet. Wenn ein gut gemeinter Rat wie „grenz dich doch ab" sich nie richtig angefühlt hat, liegt das nicht an mangelndem Verständnis Ihrerseits. Es liegt daran, dass solche Ratschläge an der Tiefe der Bindung vorbeigehen.',
      },
      {
        type: 'quote',
        text: 'Dass andere Ihre Situation nicht verstehen, ist eine zusätzliche Last — und kein Zeichen dafür, dass mit Ihnen oder Ihrer Haltung etwas nicht stimmt.',
      },
      {
        type: 'paragraph',
        text: 'Gerade deshalb sind Räume wichtig, in denen Sie nicht erklären müssen: Angehörigengruppen, Beratungsstellen, andere Menschen in ähnlicher Lage, Fachpersonen, die diese Form der Belastung kennen. Nicht, um endlich «richtig» zu handeln — sondern um nicht länger allein zu tragen, was schwer ist.',
      },
      {
        type: 'heading',
        text: 'Eine Verbundenheit, die nicht zur Ruhe kommt',
      },
      {
        type: 'paragraph',
        text: 'Es gibt noch einen Grund, warum die übliche Trauer- und Loslass-Sprache hier nur begrenzt passt. Bei einem klaren Verlust — einem Tod, einer Trennung — gibt es, so schmerzhaft er ist, einen Abschluss, der irgendwann betrauert werden kann. Bei der Begleitung eines psychisch erkrankten Menschen fehlt dieser Abschluss oft ganz.',
      },
      {
        type: 'paragraph',
        text: 'Der Mensch ist da — und doch hat sich vieles verändert. Sie vermissen manchmal, wer dieser Mensch früher war, während er zugleich anwesend ist. Sie trauern um eine Beziehung, die es so nicht mehr gibt, während die Beziehung weiterbesteht. Sie hoffen auf Besserung und fürchten Rückschläge, oft am selben Tag.',
      },
      {
        type: 'paragraph',
        text: 'Die amerikanische Familientherapeutin Pauline Boss hat für diese Erfahrung einen Begriff geprägt: den uneindeutigen Verlust. Gemeint ist ein Verlust ohne klaren Anfang und ohne klares Ende — einer, der sich nicht auflösen lässt, weil der Mensch ja da ist und sich zugleich so vieles verändert hat. Boss betont, dass Menschen in dieser Lage nicht psychisch gestört sind, sondern in einer von aussen kaum verstandenen Situation feststecken.',
      },
      {
        type: 'paragraph',
        text: 'Das macht etwas mit Menschen. Es ist schwer, etwas zu betrauern, das nicht abgeschlossen ist. Es ist schwer, zur Ruhe zu kommen, wenn sich die Lage morgen wieder ändern kann. Und es ist schwer, sich selbst Trauer zu erlauben, solange der andere doch lebt und „es ja auch wieder besser werden kann".',
      },
      {
        type: 'quote',
        text: 'Trauer ist erlaubt, auch wenn nichts vorbei ist. Erschöpfung ist erlaubt, auch wenn Sie bleiben wollen. Beides darf nebeneinander bestehen.',
      },
      {
        type: 'paragraph',
        text: 'Hier geht es nicht um Loslassen im Sinne von Aufgeben. Es geht eher darum, eine bestimmte Last loszulassen, die viele Angehörige unbemerkt tragen: die Last, alles richten zu müssen, alles zu kontrollieren, allein verantwortlich zu sein für ein Befinden, das sich nicht in der Hand halten lässt. Diese Allzuständigkeit darf sich lockern — nicht, weil der andere Ihnen gleichgültig wäre, sondern weil sie ein Gewicht ist, das ein einzelner Mensch nicht dauerhaft halten kann.',
      },
      {
        type: 'paragraph',
        text: 'Was bleibt, ist die Verbundenheit. Und neben ihr, mit der Zeit, vielleicht die Erfahrung: Da sein, ohne alles zu sein. Tragen, ohne allein zu tragen. Bleiben — und dabei auch für sich selbst sorgen.',
      },
    ],
  },
  {
    id: 'akzeptanz',
    number: 6,
    title: 'Akzeptanz',
    subtitle: 'Die Realität anerkennen, ohne sie gutzuheissen',
    keyQuote: 'Ich muss nicht gutheissen, wie es gerade ist. Aber ich kann aufhören, meine Kraft gegen die Tatsache zu richten, dass es gerade so ist.',
    example:
      'Jahrelang haben Sie innerlich dagegen angekämpft, dass Ihr Partner Hilfe ablehnt — und jeder Tag begann mit demselben Ringen. Akzeptanz hiesse hier nicht, das gutzuheissen oder ihn aufzugeben. Sie hiesse, anzuerkennen, dass Sie diese Entscheidung gerade nicht erzwingen können. Erst wenn die Kraft nicht mehr in diesem aussichtslosen Kampf gebunden ist, wird sie frei — für Ihre Erholung und für das, was heute wirklich möglich ist.',
    content: [
      {
        type: 'paragraph',
        text: 'Akzeptanz wird häufig missverstanden. Viele Menschen denken, Akzeptanz bedeute Zustimmung, Kapitulation oder Resignation. Das stimmt nicht.',
      },
      {
        type: 'paragraph',
        text: 'Akzeptanz bedeutet nicht: „Es ist gut so." Akzeptanz bedeutet eher: „Es ist gerade so. Und ich höre auf, meine ganze Kraft gegen die Tatsache zu richten, dass es gerade so ist."',
      },
      {
        type: 'paragraph',
        text: 'Das ist ein grosser Unterschied. Resignation sagt: „Es bringt sowieso nichts." Akzeptanz sagt: „Ich erkenne an, was ich gerade nicht ändern kann. Und gerade dadurch wird Kraft frei für das, was möglich ist."',
      },
      {
        type: 'paragraph',
        text: 'Akzeptanz ist deshalb keine passive Haltung. Sie kann ein sehr aktiver Schritt sein. Denn solange Sie Ihre ganze Energie gegen die Wirklichkeit richten, bleibt viel davon gebunden — Energie, die für Trauer, Klärung, Schutz, Ihre eigene Erholung und die nächsten Schritte fehlt.',
      },
      {
        type: 'paragraph',
        text: 'Für Angehörige ist Akzeptanz besonders schwer — und besonders leicht misszuverstehen. Denn hier gibt es meist keinen abgeschlossenen Tatbestand, den man ein für alle Mal anerkennen könnte. Die Lage ist offen. Sie verändert sich. Mal scheint es besser, mal schlechter. Und oft bleibt die quälende Frage: Hätte mehr Einsatz vielleicht doch etwas verändert?',
      },
      {
        type: 'paragraph',
        text: 'Gerade deshalb hilft eine Unterscheidung. Akzeptanz heisst nicht, die Hoffnung aufzugeben oder den anderen Menschen aufzugeben. Akzeptanz richtet sich auf das, was im Moment tatsächlich ist — nicht auf ein Urteil über die Zukunft.',
      },
      {
        type: 'paragraph',
        text: 'Akzeptieren kann zum Beispiel heissen:',
      },
      {
        type: 'list',
        items: [
          'Ich kann die Krankheit eines anderen Menschen nicht durch Willen oder Liebe heilen.',
          'Ich kann niemanden zwingen, Hilfe anzunehmen.',
          'Ich habe nicht in der Hand, wie schnell — oder ob — es besser wird.',
          'Ich weiss heute nicht, wie es weitergeht.',
          'Ein anderer Mensch trifft Entscheidungen, die ich nicht gutheisse und nicht ändern kann.',
          'Auch wenn ich alles Mögliche tue, bleibt manches, worauf ich keinen Einfluss habe.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Das ist etwas anderes als Aufgeben. Wer dies anerkennt, hört nicht auf zu hoffen und wendet sich nicht ab. Er hört nur auf, sich in einem Kampf zu verausgaben, der nicht zu gewinnen ist — dem Kampf gegen die Tatsache, dass man einen anderen Menschen und seine Krankheit nicht kontrollieren kann.',
      },
      {
        type: 'paragraph',
        text: 'Ein hilfreicher Akzeptanzsatz lautet:',
      },
      {
        type: 'paragraph',
        text: 'Und weil die Lage offen bleibt, ist Akzeptanz hier kein einmaliger Entschluss. Sie ist eher etwas, das immer wieder neu nötig wird — an guten Tagen leichter, an schweren Tagen schwerer. Dass Akzeptanz nicht «hält», ist kein Versagen. Es liegt daran, dass sich die Wirklichkeit, die anzuerkennen ist, selbst immer wieder verändert.',
      },
    ],
  },
  {
    id: 'gefuehle',
    number: 7,
    title: 'Gefühle',
    subtitle: 'Wahrnehmen, benennen, dosieren',
    keyQuote: 'Gefühle müssen nicht sofort gelöst werden. Sie dürfen zuerst bemerkt, benannt und gehalten werden.',
    example:
      'Mitten im Einkaufen steigt plötzlich eine Welle hoch — Wut, Angst und Erschöpfung zugleich, ohne klaren Auslöser. Der erste Impuls ist, sie wegzudrücken und weiterzufunktionieren. Es kann mehr helfen, kurz innezuhalten und still zu benennen: „Da ist gerade Angst, und ich spüre sie im Bauch.“ Das Gefühl muss nicht sofort gelöst werden — oft reicht im Moment, es zu bemerken und auszuhalten.',
    content: [
      {
        type: 'paragraph',
        text: 'Die Begleitung eines erkrankten Menschen bringt viele Gefühle mit sich. Angst und Sorge, Wut, Scham, Ohnmacht, Schuld, Erschöpfung, manchmal auch Erleichterung können sich abwechseln. Oft sind widersprüchliche Gefühle gleichzeitig da: Sie können einen Menschen lieben und zugleich an Ihre Grenzen kommen, sich sorgen und wütend sein, hoffen und verzweifeln — oft am selben Tag.',
      },
      {
        type: 'paragraph',
        text: 'Gefühle sind nicht das Problem. Schwierig wird es eher, wenn Gefühle entweder überfluten oder dauerhaft weggedrückt werden.',
      },
      {
        type: 'paragraph',
        text: 'Wegdrücken kann kurzfristig helfen, den Alltag zu bewältigen. Langfristig kann es aber dazu führen, dass Gefühle stärker zurückkehren, sich körperlich zeigen oder innerlich starr machen. Gleichzeitig ist es nicht immer hilfreich, Gefühle ungefiltert «durchzufühlen». Bei starker Belastung, Trauma, Panik oder akuter Krise braucht es Dosierung und Stabilisierung.',
      },
      {
        type: 'paragraph',
        text: 'Eine hilfreiche Haltung lautet:',
      },
      {
        type: 'paragraph',
        text: 'Praktische Schritte:',
      },
      {
        type: 'steps',
        steps: [
          { title: 'Benennen', text: '„Ich merke Angst." „Ich spüre Wut." „Da ist Trauer." „Ich schäme mich gerade."' },
          { title: 'Im Körper verorten', text: 'Wo spüren Sie es? Brust, Bauch, Hals, Schultern, Kopf, Hände?' },
          { title: 'Intensität einschätzen', text: 'Auf einer Skala von 0 bis 10: Wie stark ist das Gefühl gerade?' },
          { title: 'Dosieren', text: 'Wenn es zu stark ist: aufstehen, Wasser trinken, atmen, jemanden kontaktieren, sich orientieren, etwas Körperliches tun.' },
          { title: 'Bedeutung prüfen', text: 'Was will dieses Gefühl schützen? Was ist mir hier wichtig? Ist das eine reale Gefahr, eine alte Angst oder ein Hinweis auf ein Bedürfnis?' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Gefühle sind keine Befehle. Aber sie enthalten Informationen. Sie zeigen, dass etwas berührt wurde.',
      },
    ],
  },
  {
    id: 'trauer',
    number: 8,
    title: 'Wenn Trauer keinen Abschluss findet',
    keyQuote: 'Ich muss nicht jeden Tag gleich weit sein. Ich darf pendeln. Ich darf um einen Menschen trauern, der noch da ist — und trotzdem weiterleben.',
    example:
      'An manchen Tagen vermissen Sie den Menschen, der Ihr Kind einmal war, so sehr, dass es wie Trauer schmerzt — obwohl es lebt und neben Ihnen sitzt. Am nächsten Tag lachen Sie über etwas und haben gleich darauf ein schlechtes Gewissen, als wäre Freude ein Verrat. Beides darf sein. Dieses Hin und Her ist kein Rückfall, sondern die Art, wie man mit einem Verlust lebt, der keinen Abschluss findet.',
    content: [
      {
        type: 'paragraph',
        text: 'Viele Angehörige würden das Wort «Trauer» für sich gar nicht verwenden. Der andere Mensch lebt ja. Es ist niemand gestorben. Und trotzdem ist da oft etwas, das sich wie Trauer anfühlt — und es auch ist.',
      },
      {
        type: 'paragraph',
        text: 'Man trauert um den Menschen, der dieser Mensch früher war. Um die Beziehung, wie sie einmal gewesen ist. Um Pläne und Selbstverständlichkeiten, die nicht mehr gelten. Um eine Vorstellung davon, wie das gemeinsame Leben verlaufen sollte. Diese Trauer ist echt, auch wenn der Mensch, um den es geht, noch da ist.',
      },
      {
        type: 'paragraph',
        text: 'Das ist der uneindeutige Verlust, von dem schon die Rede war: ein Verlust ohne Tod, ohne Abschied, ohne klaren Schluss. Und gerade weil es keinen Abschluss gibt, hört diese Trauer nicht einfach auf. Sie kehrt wieder — bei jedem Rückschlag, bei jeder Krise, bei jeder Erinnerung daran, wie es einmal war.',
      },
      {
        type: 'paragraph',
        text: 'Viele Menschen erwarten von sich, dass sie irgendwann «darüber hinweg» sein müssten. Diese Erwartung erzeugt zusätzlichen Druck. Bei einem uneindeutigen Verlust gibt es aber nichts, worüber man endgültig hinwegkommt — die Situation geht ja weiter. Dass die Trauer wiederkommt, ist deshalb kein Rückfall und kein Zeichen, dass Sie sich nicht genug bemühen. Es ist die Natur eines Verlusts, der nicht abgeschlossen ist.',
      },
      {
        type: 'paragraph',
        text: 'Hilfreicher als die Vorstellung, Trauer müsse in Schritten vorangehen und irgendwann «fertig» sein, ist das Bild eines Pendelns:',
      },
      {
        type: 'list',
        items: [
          'Manchmal ist der Blick auf den Verlust gerichtet: Schmerz, Sorge, Wut, Sehnsucht, Tränen.',
          'Manchmal ist der Blick auf das Weiterleben gerichtet: Alltag, Aufgaben, andere Menschen, Ruhe, Freude.',
          'Beides gehört dazu. Und beides darf sich abwechseln, oft am selben Tag.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Dieses Pendeln ist nicht Unentschlossenheit. Es ist die Art, wie Menschen mit etwas Schwerem über lange Zeit leben können. Niemand kann dauerhaft nur im Schmerz bleiben.',
      },
      {
        type: 'paragraph',
        text: 'Besonders wichtig ist das für die Momente von Erholung, Ablenkung, Freude und Normalität. Viele Angehörige haben dabei ein schlechtes Gewissen — als sei es ein Verrat, das eigene Leben zu leben, während der andere leidet. Das ist es nicht.',
      },
      {
        type: 'quote',
        text: 'Freude und Erholung sind kein Verrat am anderen Menschen. Sie sind das, was es möglich macht, das Schwere überhaupt zu tragen.',
      },
    ],
  },
  {
    id: 'kontrolle',
    number: 9,
    title: 'Kontrolle, Einfluss und Sorge',
    keyQuote: 'Was kann ich nicht ändern? Was kann ich beeinflussen? Was ist heute mein kleiner kontrollierbarer Schritt?',
    example:
      'Nachts liegen Sie wach und gehen durch, was alles geschehen könnte — Dinge, die Sie ohnehin nicht in der Hand haben. Am Morgen sind Sie erschöpft, bevor der Tag begonnen hat. Es kann entlasten, die Sorge bewusst von dem zu trennen, was heute wirklich in Ihrer Hand liegt: ein Glas Wasser, ein Anruf, eine kurze Pause. Nicht alles — nur der eine kleine Schritt, den Sie heute tatsächlich gehen können.',
    content: [
      {
        type: 'paragraph',
        text: 'In Veränderungsprozessen geht oft viel Energie verloren, weil Menschen versuchen, Dinge zu kontrollieren, die nicht kontrollierbar sind. Gleichzeitig übersehen sie manchmal kleine Bereiche, in denen sie tatsächlich Einfluss haben.',
      },
      {
        type: 'paragraph',
        text: 'Eine einfache, sehr hilfreiche Orientierung ist die Unterscheidung zwischen Kontrolle, Einfluss und Sorge.',
      },
      {
        type: 'highlight',
        text: 'Bereich der Kontrolle — das, was Sie direkt tun oder lassen können: wie Sie heute mit sich selbst sprechen; ob Sie eine Pause machen; ob Sie Unterstützung suchen; ob Sie eine Nachricht schreiben oder nicht; ob Sie einen Termin vereinbaren; ob Sie Grenzen formulieren; ob Sie essen, schlafen, atmen, sich bewegen; ob Sie einen kleinen nächsten Schritt machen.',
      },
      {
        type: 'highlight',
        text: 'Bereich des Einflusses — Dinge, die Sie nicht vollständig steuern, aber mitgestalten können: Beziehungsgespräche; familiäre Dynamiken; Konfliktklärungen; die Kooperation mit Fachpersonen; der Umgang mit Rückmeldungen; die Atmosphäre in Gesprächen; Ihre Art, Anliegen zu formulieren.',
      },
      {
        type: 'highlight',
        text: 'Bereich der Sorge — Dinge, die Sie beschäftigen, die Sie aber nicht direkt ändern können: Entscheidungen anderer Menschen; die Vergangenheit; die Krankheit an sich; ob andere Sie verstehen; wie schnell ein Prozess verläuft; ob eine andere Person Einsicht zeigt; ob alles wieder so wird wie früher.',
      },
      {
        type: 'paragraph',
        text: 'Sorgen sind menschlich. Aber wenn zu viel Lebensenergie im Sorgebereich gebunden ist, entsteht Hilflosigkeit. Entlastung entsteht, wenn Sie Ihre Energie immer wieder zurückholen:',
      },
      {
        type: 'heading',
        text: 'Kontrolle ist nicht dasselbe wie Sicherheit',
      },
      {
        type: 'paragraph',
        text: 'Eine der grössten Ängste beim Loslassen ist die Angst vor dem Fallen: Wenn ich diese Sorge, diese Wachsamkeit, diese Kontrolle loslasse, bleibt nichts mehr, dann passiert etwas Schlimmes. Diese Angst ist verständlich — und bei der Begleitung eines erkrankten Menschen manchmal sogar berechtigt. Es geht nicht darum, jede Wachsamkeit aufzugeben.',
      },
      {
        type: 'paragraph',
        text: 'Aber Kontrolle und Sicherheit sind nicht dasselbe. Kontrolle versucht, jede Unsicherheit zu beseitigen — was auf Dauer erschöpft und oft gar nicht gelingt. Sicherheit entsteht eher anders: dadurch, dass Sie merken, dass es auch dann, wenn nicht alles in Ihrer Hand liegt, etwas gibt, worauf Sie sich stützen können.',
      },
      {
        type: 'paragraph',
        text: 'Dieser Halt kann vieles sein: eigene Fähigkeiten; tragende Beziehungen; professionelle Unterstützung; innere Werte; Lebenserfahrung; finanzielle oder praktische Ressourcen; Atem und Körperwahrnehmung; eine Tagesstruktur; kleine Routinen; die Fähigkeit, Hilfe anzunehmen.',
      },
      {
        type: 'paragraph',
        text: 'Es kann entlasten, sich von Zeit zu Zeit zu fragen: Was trägt mich gerade — auch wenn ich nicht alles kontrollieren kann?',
      },
    ],
  },
  {
    id: 'selbstwirksamkeit',
    number: 10,
    title: 'Selbstwirksamkeit',
    subtitle: 'Wieder erleben, dass ich handeln kann',
    keyQuote: 'Ich muss nicht mein ganzes Leben heute lösen. Ich brauche nur den nächsten stimmigen Schritt.',
    example:
      'Sie hatten sich vorgenommen, «endlich alles zu regeln» — und sind an der Grösse des Vorhabens wieder gescheitert, was die Ohnmacht nur vergrössert hat. Vielleicht liegt der Unterschied nicht im Willen, sondern in der Grösse des Schritts. Ein einziger Anruf, zehn Minuten Ordnung, ein ausgesprochenes Nein zählen mehr, als sie scheinen. Jeder gelungene kleine Schritt gibt die Erfahrung zurück: Ich bin dem nicht völlig ausgeliefert.',
    content: [
      {
        type: 'paragraph',
        text: 'Nach Umbrüchen oder unter dauerhafter Belastung fühlen sich Menschen oft ausgeliefert. Gerade unfreiwillige Situationen können das Gefühl erzeugen: „Ich kann nichts tun." Diese Hilflosigkeit ist schwer auszuhalten.',
      },
      {
        type: 'paragraph',
        text: 'Selbstwirksamkeit bedeutet: Sie erleben, dass Ihr Handeln einen Unterschied machen kann. Nicht im Sinne totaler Kontrolle. Sondern im Sinne kleiner, konkreter Wirksamkeit.',
      },
      {
        type: 'paragraph',
        text: 'Selbstwirksamkeit wächst selten durch grosse Vorsätze. Sie wächst durch wiederholte kleine Erfahrungen: Ich habe den Anruf geschafft. Ich bin aufgestanden. Ich habe eine Grenze ausgesprochen. Ich habe Unterstützung angenommen. Ich habe den Tag strukturiert. Ich habe etwas nicht getan, was mir geschadet hätte. Ich habe zehn Minuten Ordnung geschaffen. Ich habe einen Gedanken bemerkt, ohne ihm blind zu folgen. Ich habe trotz Angst einen kleinen Schritt gemacht.',
      },
      {
        type: 'paragraph',
        text: 'Der wichtigste Punkt ist: Die Schritte müssen machbar sein. Zu grosse Ziele erzeugen schnell erneutes Scheitern. Kleine Schritte wirken manchmal unscheinbar, sind aber psychologisch bedeutsam. Sie geben dem Nervensystem die Erfahrung zurück: Ich bin nicht vollständig ausgeliefert.',
      },
      {
        type: 'paragraph',
        text: 'Ein hilfreicher Satz lautet:',
      },
    ],
  },
  {
    id: 'werte',
    number: 11,
    title: 'Werte als Kompass',
    example:
      'Den Wunsch „mein Sohn soll wieder gesund werden“ tragen Sie jeden Tag — und doch liegt sein Eintreffen nicht in Ihrer Hand. Was in Ihrer Hand liegt, ist die Art, wie Sie an seiner Seite stehen: verlässlich, liebevoll, ehrlich, so gut Sie können. Das eine ist ein Ziel, das andere ein Wert. Werte geben gerade dann Richtung, wenn der Ausgang über lange Zeit ungewiss bleibt.',
    content: [
      {
        type: 'paragraph',
        text: 'Wenn das Alte bricht oder eine Belastung lange anhält, entsteht oft eine Leere. Die Frage „Was soll ich jetzt tun?" ist dann nicht nur praktisch, sondern existenziell.',
      },
      {
        type: 'paragraph',
        text: 'In solchen Momenten helfen Werte. Werte sind keine Ziele, die man abhakt. Sie sind Richtungen, in die man leben möchte.',
      },
      {
        type: 'paragraph',
        text: 'Für Angehörige liegt darin eine besondere Entlastung. Vieles, was Sie sich am meisten wünschen, liegt nicht in Ihrer Hand — aber wie Sie an der Seite des erkrankten Menschen stehen wollen, das liegt sehr wohl in Ihrer Hand.',
      },
      {
        type: 'paragraph',
        text: 'Ein Ziel könnte sein: „Mein Sohn soll wieder gesund werden." Das können Sie nicht erzwingen. Ein Wert könnte sein: „Ich möchte verlässlich und liebevoll an seiner Seite sein, so gut ich kann." Das ist möglich, unabhängig vom Verlauf der Erkrankung.',
      },
      {
        type: 'paragraph',
        text: 'Ein Ziel könnte sein: „Ich will keine Angst mehr haben." Ein Wert könnte sein: „Ich möchte fürsorglich mit mir umgehen, auch wenn die Angst da ist." Ein Ziel könnte sein: „Alles soll wieder so werden wie früher." Ein Wert könnte sein: „Ich möchte verbunden, klar und ehrlich handeln — in der Situation, wie sie ist."',
      },
      {
        type: 'paragraph',
        text: 'Werte geben gerade dann Orientierung, wenn das Ergebnis ungewiss bleibt — und bei der Begleitung eines erkrankten Menschen bleibt es das oft über lange Zeit.',
      },
      {
        type: 'paragraph',
        text: 'Hilfreiche Wertefragen:',
      },
      {
        type: 'list',
        items: [
          'Was ist mir in dieser Situation wirklich wichtig?',
          'Welche Art Mensch möchte ich an der Seite dieses Menschen sein?',
          'Was möchte ich nicht länger aus Angst oder Schuldgefühl tun?',
          'Was möchte ich bewahren — auch wenn sich vieles verändert?',
          'Wie möchte ich neben aller Sorge auch für mich selbst sorgen?',
          'Was wäre ein kleiner Schritt in Richtung Würde, Klarheit, Verbundenheit oder Selbstachtung?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Werteorientierung ist kein Schönreden. Sie bedeutet nicht, dass Schmerz verschwindet. Sie bedeutet: Schmerz darf da sein — und trotzdem können Sie versuchen, so zu handeln, dass Sie sich nicht noch weiter von sich selbst entfernen.',
      },
    ],
  },
  {
    id: 'dranbleiben',
    number: 12,
    title: 'Dranbleiben ohne Selbstoptimierungsdruck',
    keyQuote: 'Ich darf langsam gehen. Ich darf Pausen machen. Entscheidend ist nicht Tempo, sondern Richtung.',
    example:
      'Sie haben eine schwere Woche hinter sich, die guten Vorsätze sind liegen geblieben, und prompt ist der Gedanke da: „Ich versage sogar daran.“ Doch Dranbleiben heisst nicht, ohne Pause stark zu sein. Es heisst, nach einer Unterbrechung einfach wieder anzufangen — heute, mit einem kleinen Schritt. Entscheidend ist nicht das Tempo, sondern die Richtung.',
    content: [
      {
        type: 'paragraph',
        text: 'Nach dem Loslassen beginnt nicht automatisch ein leichter Weg. Häufig kommt erst dann die eigentliche Arbeit: neu sortieren, üben, Grenzen halten, Rückfälle aushalten, Routinen aufbauen, Beziehungen klären, Vertrauen entwickeln.',
      },
      {
        type: 'paragraph',
        text: 'Dranbleiben ist deshalb wichtig. Aber Dranbleiben wird oft falsch verstanden. Es bedeutet nicht: immer stark sein, immer positiv denken, immer funktionieren, sich pausenlos verbessern, keine Zweifel haben, keine Rückschritte machen, sich selbst antreiben, bis man erschöpft ist.',
      },
      {
        type: 'paragraph',
        text: 'Gesundes Dranbleiben bedeutet eher: mit dem verbunden bleiben, was wichtig ist; nach Unterbrüchen wieder anfangen; kleine Schritte wiederholen; freundlich und klar mit sich bleiben; Unterstützung nutzen; Rückschritte nicht als Beweis des Scheiterns deuten; Werte wichtiger nehmen als kurzfristige Angstvermeidung.',
      },
      {
        type: 'paragraph',
        text: 'Dranbleiben ist weniger heroisch, als viele denken. Oft ist es schlicht die Bereitschaft, heute wieder einen kleinen Schritt zu tun.',
      },
      {
        type: 'paragraph',
        text: 'Ein hilfreicher Satz lautet:',
      },
    ],
  },
  {
    id: 'eigenes-leben',
    number: 13,
    title: 'Ein eigenes Stück Leben behalten',
    keyQuote: 'Ein eigenes Stück Leben zu behalten heisst nicht, sich vom anderen abzuwenden. Es heisst, nicht vollständig in der Sorge zu verschwinden.',
    example:
      'Eine Freundin fragt, wie es Ihnen geht — und Sie merken, dass Sie nur noch vom erkrankten Menschen erzählen können. Das Eigene haben Sie Stück für Stück verschoben, immer auf «später». Vielleicht lohnt sich die Frage: Was von mir gibt es noch ausser der Sorge — ein Abend, ein Kontakt, eine alte Freude —, das es verdient, weiterzubestehen? Ein Stück eigenes Leben zu behalten heisst nicht, sich abzuwenden, sondern die Kraft zu bewahren, die das Dranbleiben trägt.',
    content: [
      {
        type: 'paragraph',
        text: 'Wer einen erkrankten Menschen über lange Zeit begleitet, erlebt oft etwas Schleichendes: Die Sorge wird grösser, und alles andere wird kleiner. Termine, Telefonate, das Beobachten, das Verfügbarsein — all das nimmt immer mehr Raum ein. Und irgendwann ist kaum noch Platz für das, was einmal zu Ihrem eigenen Leben gehörte: Freundschaften, Interessen, Ruhe, Freude, ein Gefühl dafür, wer Sie ausserhalb dieser Rolle eigentlich sind.',
      },
      {
        type: 'paragraph',
        text: 'Das geschieht selten durch eine Entscheidung. Es geschieht Stück für Stück. Man sagt das Treffen ab, weil gerade keine Kraft da ist. Man verschiebt das Eigene auf später. Man funktioniert. Und nach Monaten oder Jahren merkt man, dass das «später» nie gekommen ist — und dass vom eigenen Leben wenig übrig geblieben ist ausser der Sorge.',
      },
      {
        type: 'paragraph',
        text: 'Hier geht es nicht darum, sich von dem erkrankten Menschen abzuwenden. Im Gegenteil. Es geht darum, neben der Sorge ein Stück eigenes Leben zu behalten — nicht als Luxus und nicht als Egoismus, sondern als das, was einen Menschen ganz bleiben lässt.',
      },
      {
        type: 'paragraph',
        text: 'Eine Frage, die dabei helfen kann, ist nicht: „Was will ich statt dieser Beziehung?" Sondern: „Was von mir gibt es noch — ausser der Sorge? Welches Stück meines eigenen Lebens hat es verdient, weiterzubestehen?"',
      },
      {
        type: 'paragraph',
        text: 'Die Antwort darauf ist bei jedem Menschen anders. Sie kann gross sein oder ganz klein: ein Abend in der Woche, der Ihnen selbst gehört; ein Kontakt zu einem Menschen, der nichts mit der Erkrankung zu tun hat; eine alte Leidenschaft, die wieder etwas Raum bekommt; ein Spaziergang, ein Buch, ein Garten; eine Ausbildung oder eine Aufgabe, die nur die eigene ist; ein langsamer Morgen; ein eigenes Zimmer, ein eigener Ort; etwas, das Sie wieder lernen, nur weil es Freude macht.',
      },
      {
        type: 'paragraph',
        text: 'Entscheidend ist nicht die Form. Entscheidend ist, dass es etwas gibt, das nicht von der Erkrankung bestimmt wird — einen Bereich, in dem Sie wieder mehr sind als nur «zuständig».',
      },
      {
        type: 'paragraph',
        text: 'Das steht nicht im Widerspruch zur Verbundenheit. Es ist eher ihre Voraussetzung: da sein, ohne alles zu sein. Wer ein Stück eigenes Leben behält, wendet sich nicht ab — sondern bewahrt die Kraft und die Person, die das Dranbleiben über lange Zeit überhaupt tragen.',
      },
      {
        type: 'quote',
        text: 'Was wäre — neben allem, was die Sorge verlangt — ein kleines Stück Leben, das wieder mir gehören darf?',
      },
    ],
  },
  {
    id: 'zusammen',
    number: 14,
    title: 'Loslassen und Dranbleiben gehören zusammen',
    example:
      'Sie geben den Kampf dagegen auf, dass Ihre Tochter andere Entscheidungen trifft, als Sie sich wünschen — und bleiben zugleich verlässlich erreichbar, wenn sie Sie braucht. Das eine ist Loslassen, das andere Dranbleiben, und beides geschieht im selben Moment. Es ist kein Widerspruch. Die Kunst liegt in der Unterscheidung: loszulassen, was Sie nicht ändern können, und verbunden zu bleiben mit dem, was Sie gestalten können.',
    content: [
      {
        type: 'paragraph',
        text: 'Auf den ersten Blick scheinen Loslassen und Dranbleiben Gegensätze zu sein. Doch psychologisch gehören sie eng zusammen.',
      },
      {
        type: 'paragraph',
        text: 'Loslassen heisst: Ich lasse den Kampf gegen das los, was ich nicht mehr ändern kann. Dranbleiben heisst: Ich bleibe verbunden mit dem, was ich beeinflussen und gestalten kann.',
      },
      {
        type: 'paragraph',
        text: 'Loslassen ohne Dranbleiben kann in Resignation führen. Dranbleiben ohne Loslassen kann in Verkrampfung führen.',
      },
      {
        type: 'paragraph',
        text: 'Die Kunst liegt in der Unterscheidung:',
      },
      {
        type: 'list',
        items: [
          'Woran halte ich fest, obwohl es mir nicht mehr dient?',
          'Was darf ich betrauern?',
          'Was kann ich nicht kontrollieren?',
          'Was ist dennoch wichtig?',
          'Wofür lohnt es sich, dranzubleiben?',
          'Welcher Schritt ist klein genug, dass ich ihn heute gehen kann?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Diese Balance ist kein einmaliger Entscheid. Sie muss immer wieder neu gefunden werden.',
      },
    ],
  },
  {
    id: 'orientierung',
    number: 15,
    title: 'Praktische Orientierung für Umbruchphasen',
    example:
      'Nehmen wir einen konkreten Abend: Es gab wieder einen Rückschlag, und Sie spüren, wie alles in Ihnen kreist. Sie gehen die Fragen langsam durch — was ist tatsächlich geschehen, was tut besonders weh, was liegt heute in meiner Hand, was ist mir wichtig, was wäre ein kleiner Schritt. Am Ende steht keine Lösung für alles, aber eine einzige machbare Handlung für heute Abend. Genau dafür sind diese Fragen da — nicht, um alles zu klären, sondern um wieder handlungsfähig zu werden.',
    content: [
      {
        type: 'paragraph',
        text: 'Die folgenden Fragen können helfen, einen Veränderungsprozess oder eine belastende Situation zu strukturieren.',
      },
      {
        type: 'steps',
        steps: [
          {
            title: 'Realität anerkennen',
            text: 'Was ist tatsächlich geschehen? Was weiss ich sicher? Was interpretiere ich? Was ist im Moment nicht veränderbar? Wogegen kämpfe ich innerlich immer noch?',
            quote: 'Es ist jetzt so, wie es ist. Ich muss es nicht gut finden, um damit umgehen zu können.',
          },
          {
            title: 'Schmerz ernst nehmen',
            text: 'Was habe ich verloren? Was tut besonders weh? Wo fühle ich mich gekränkt, beschämt oder enttäuscht? Was hätte ich gebraucht? Was darf betrauert werden?',
            quote: 'Mein Schmerz ist verständlich. Er ist aber nicht die ganze Wahrheit über mich.',
          },
          {
            title: 'Einflussbereiche klären',
            text: 'Was liegt ausserhalb meiner Kontrolle? Wo habe ich begrenzten Einfluss? Was kann ich direkt tun oder lassen? Was kostet mich gerade unnötig Energie? Welche Sorge darf ich vorübergehend ablegen?',
            quote: 'Ich richte meine Kraft auf das, was heute gestaltbar ist.',
          },
          {
            title: 'Werte finden',
            text: 'Was ist mir trotz allem wichtig? Welche Haltung möchte ich einnehmen? Was entspricht mir? Was will ich nicht länger aus Angst tun? Welche Art von Mensch möchte ich in dieser Situation sein?',
            quote: 'Ich muss nicht angstfrei sein, um werteorientiert handeln zu können.',
          },
          {
            title: 'Einen kleinen Schritt wählen',
            text: 'Was ist heute realistisch? Was ist klein genug, dass ich es schaffen kann? Was würde mir ein wenig mehr Halt geben? Welche Unterstützung kann ich nutzen? Was wäre ein nächster Schritt in Richtung Selbstachtung?',
            quote: 'Nicht alles auf einmal. Nur der nächste Schritt.',
          },
        ],
      },
    ],
  },
  {
    id: 'unterstuetzung',
    number: 16,
    title: 'Wann professionelle Unterstützung wichtig ist',
    example:
      'Lange haben Sie gedacht, Sie müssten das allein schaffen — Hilfe zu holen fühlte sich an wie ein Eingeständnis von Schwäche. Dann merken Sie, dass Sie seit Wochen kaum schlafen und sich von fast allen zurückgezogen haben. Der Anruf bei einer Beratungsstelle oder einer Angehörigengruppe ist kein Scheitern, sondern Fürsorge — für sich und damit auch für den Menschen, den Sie begleiten. Manchmal braucht es ein Gegenüber, das mithilft zu sortieren, was jetzt wichtig ist.',
    content: [
      {
        type: 'paragraph',
        text: 'Umbrüche und dauerhafte Belastungen können Menschen sehr fordern. Nicht jede Krise braucht Psychotherapie, aber manche Situationen sollten nicht allein getragen werden.',
      },
      {
        type: 'paragraph',
        text: 'Professionelle Unterstützung ist besonders wichtig, wenn Verzweiflung über längere Zeit sehr stark bleibt; wenn Suizidgedanken auftreten; wenn Druck zu Selbstverletzung entsteht; wenn Gewaltimpulse auftreten; wenn Schlaf, Essen oder Alltagsfunktionen deutlich zusammenbrechen; wenn Panik, Flashbacks oder starke innere Überflutung auftreten; wenn Substanzkonsum zunimmt; wenn eine depressive Symptomatik stärker wird; wenn Menschen sich vollständig isolieren; wenn die Situation mit Trauma, Gewalt oder schwerer Krankheit verbunden ist; oder wenn Angehörige dauerhaft überlastet sind.',
      },
      {
        type: 'paragraph',
        text: 'Hilfe zu suchen ist kein Scheitern. Es ist ein Ausdruck von Selbstfürsorge und Verantwortung.',
      },
      {
        type: 'paragraph',
        text: 'Gerade in belastenden Phasen brauchen Menschen manchmal ein Gegenüber, das sortieren hilft: Was ist passiert? Was ist jetzt wichtig? Was gehört zur Trauer? Was braucht Schutz? Was kann warten? Was ist der nächste Schritt?',
      },
    ],
  },
  {
    id: 'weisheit',
    number: 17,
    title: 'Die Weisheit der Unterscheidung',
    keyQuote: 'Gib mir die Gelassenheit, Dinge hinzunehmen, die ich nicht ändern kann, den Mut, Dinge zu ändern, die ich ändern kann, und die Weisheit, das eine vom anderen zu unterscheiden.',
    example:
      'An einem Tag setzen Sie eine klare Grenze, am nächsten halten Sie einfach nur aus, am dritten nehmen Sie zum ersten Mal Hilfe an. Von aussen mag das widersprüchlich wirken — in Wahrheit ist es genau diese Unterscheidung von Tag zu Tag. Weisheit ist hier kein Zustand, den man einmal erreicht und dann besitzt. Sie ist die tägliche, manchmal mühsame Übung, das eine vom anderen zu unterscheiden.',
    content: [
      {
        type: 'paragraph',
        text: 'Ein bekannter Satz, der auf den Theologen Reinhold Niebuhr zurückgeht, bringt vieles auf den Punkt:',
      },
      {
        type: 'paragraph',
        text: 'Diese Weisheit ist kein Zustand, den man einmal erreicht und dann besitzt. Sie ist eine tägliche Übung.',
      },
      {
        type: 'paragraph',
        text: 'Manchmal bedeutet Weisheit, aufzuhören zu kämpfen. Manchmal bedeutet sie, eine Grenze zu setzen. Manchmal bedeutet sie, zu trauern. Manchmal bedeutet sie, Hilfe anzunehmen. Manchmal bedeutet sie, neu anzufangen. Manchmal bedeutet sie, noch zu warten. Manchmal bedeutet sie, trotz Angst einen Schritt zu gehen.',
      },
      {
        type: 'paragraph',
        text: 'Wandel verlangt nicht, dass Sie immer stark sind. Er verlangt eher, dass Sie ehrlich werden: Was ist vorbei? Was tut weh? Was bleibt wichtig? Was kann ich nicht kontrollieren? Was kann ich heute beeinflussen? Und was wäre ein kleiner Schritt in Richtung eines Lebens, das wieder mehr mit mir übereinstimmt?',
      },
    ],
  },
  {
    id: 'schluss',
    number: 18,
    title: 'Schlussgedanke',
    subtitle: 'Raum für neue Saat',
    keyQuote: 'Was kann ich aus dem machen, was jetzt da ist?',
    content: [
      {
        type: 'paragraph',
        text: 'Ein Umbruch gleicht einem Feld, das gepflügt wird. Von aussen sieht es zunächst zerstört aus: aufgewühlt, unruhig, unordentlich. Doch das Pflügen ist nicht nur Zerstörung. Es bereitet den Boden vor.',
      },
      {
        type: 'paragraph',
        text: 'Das bedeutet nicht, dass jeder Schmerz sofort einen Sinn haben muss. Manche Erfahrungen sind zuerst einfach bitter. Sie müssen nicht schöngeredet werden. Nicht aus jeder Zitrone muss sofort Limonade werden.',
      },
      {
        type: 'paragraph',
        text: 'Aber mit der Zeit kann eine andere Frage entstehen:',
      },
      {
        type: 'paragraph',
        text: 'Vielleicht ist noch keine Antwort sichtbar. Vielleicht ist zuerst nur Atmen möglich. Dann ein kleiner Schritt. Dann ein Gespräch. Dann ein Nein. Dann ein Ja. Dann eine Entscheidung. Dann ein neuer Versuch.',
      },
      {
        type: 'paragraph',
        text: 'Loslassen bedeutet nicht, das Vergangene auszulöschen. Es bedeutet, ihm nicht mehr die ganze Zukunft zu überlassen.',
      },
      {
        type: 'paragraph',
        text: 'Dranbleiben bedeutet nicht, sich gegen sich selbst zu zwingen. Es bedeutet, dem eigenen Leben wieder Richtung zu geben — langsam, freundlich, klar und in Verbindung mit dem, was wirklich wichtig ist.',
      },
      {
        type: 'paragraph',
        text: 'So entsteht Wandel nicht als abrupter Sprung in ein neues Ich, sondern als behutsamer Prozess des Wiederankommens: bei der Realität, bei den eigenen Gefühlen, bei den eigenen Werten, bei der eigenen Handlungsfähigkeit, und vielleicht — Schritt für Schritt — wieder bei sich selbst.',
      },
    ],
  },
];

export const sources = [
  {
    category: 'Akzeptanz, Werte und werteorientiertes Handeln',
    references: [
      'Hayes, S. C., Strosahl, K. D. & Wilson, K. G. (1999, 2. Aufl. 2012): Acceptance and Commitment Therapy. The Process and Practice of Mindful Change. Guilford Press.',
      'Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A. & Lillis, J. (2006): Acceptance and Commitment Therapy. Model, processes and outcomes. Behaviour Research and Therapy, 44(1), 1–25.',
    ],
  },
  {
    category: 'Selbstwirksamkeit',
    references: [
      'Bandura, A. (1977): Self-efficacy. Toward a unifying theory of behavioral change. Psychological Review, 84(2), 191–215.',
    ],
  },
  {
    category: 'Selbstbestimmungstheorie',
    references: [
      'Ryan, R. M. & Deci, E. L. (2000): Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78.',
    ],
  },
  {
    category: 'Trauer und uneindeutiger Verlust',
    references: [
      'Stroebe, M. & Schut, H. (1999): The Dual Process Model of coping with bereavement. Rationale and description. Death Studies, 23(3), 197–224.',
      'Maciejewski, P. K., Zhang, B., Block, S. D. & Prigerson, H. G. (2007): An empirical examination of the stage theory of grief. JAMA, 297(7), 716–723.',
      'Boss, P. (1999): Ambiguous Loss. Learning to Live with Unresolved Grief. Harvard University Press.',
    ],
  },
  {
    category: 'Belastung von Angehörigen',
    references: [
      'Cham, C. Q. et al. (2022): Caregiver Burden among Caregivers of Patients with Mental Illness. A Systematic Review and Meta-Analysis. Healthcare, 10(12), 2423.',
    ],
  },
  {
    category: 'Ambivalenz und Selbstmitgefühl',
    references: [
      'Lüscher, K. & Pillemer, K. (1998): Intergenerational Ambivalence. Journal of Marriage and the Family, 60(2), 413–425.',
      'Losada-Baltar, A. et al. (2024): Longitudinal effects of ambivalent and guilt feelings on dementia family caregivers\' depressive symptoms. Journal of the American Geriatrics Society, 72(5), 1431–1441.',
      'Neff, K. D. (2003): The development and validation of a scale to measure self-compassion. Self and Identity, 2(3), 223–250.',
    ],
  },
  {
    category: 'Stigmatisierung von Angehörigen',
    references: [
      'Goffman, E. (1963): Stigma. Notes on the Management of Spoiled Identity. Prentice-Hall.',
      'Corrigan, P. W. & Miller, F. E. (2004): Shame, blame, and contamination. A review of the impact of mental illness stigma on family members. Journal of Mental Health, 13(6), 537–548.',
    ],
  },
  {
    category: 'Resilienz',
    references: [
      'American Psychological Association: Resilience (apa.org/topics/resilience).',
      'Bonanno, G. A. (2004): Loss, trauma, and human resilience. American Psychologist, 59(1), 20–28.',
    ],
  },
  {
    category: 'Hinweis',
    references: [
      'Das Gelassenheitsgebet (Kapitel 17) stammt von Reinhold Niebuhr (frühe 1930er-Jahre) und wird häufig fälschlich Franziskus von Assisi zugeschrieben.',
    ],
  },
];

export const weiterlesen = [
  {
    author: 'Boss, P.',
    year: '2014',
    title: 'Da und doch so fern. Vom liebevollen Umgang mit Demenzkranken',
    publisher: 'Hrsg. von I. Bopp-Kistler & M. Pletscher. Rüffer & Rub, Zürich.',
    note: 'Zugängliche deutschsprachige Einführung in den uneindeutigen Verlust; das Konzept ist auf psychische Erkrankung übertragbar.',
  },
  {
    author: 'Harris, R.',
    year: '2009',
    title: 'Wer dem Glück hinterherrennt, läuft daran vorbei. Ein Umdenkbuch',
    publisher: 'Kösel.',
    note: 'Laienverständliche Einführung in Akzeptanz, Werte und engagiertes Handeln.',
  },
];

export const resources = [
  {
    name: 'VASK Zürich',
    description: 'Vereinigung der Angehörigen von psychisch erkrankten Menschen: Beratung und Selbsthilfegruppen für Eltern, Partner, Kinder und Geschwister.',
    url: 'https://www.vaskzuerich.ch',
  },
  {
    name: 'Pro Mente Sana',
    description: 'Kostenlose psychosoziale und rechtliche Beratung für Betroffene und Nahestehende.',
    url: 'https://www.promentesana.ch',
  },
  {
    name: 'VASK Schweiz',
    description: 'Dachverband der kantonalen Angehörigenvereinigungen.',
    url: 'https://www.vask.ch',
  },
  {
    name: 'Dargebotene Hand',
    description: 'Telefonberatung bei Krisen und Belastungen: Tel. 143 (24h, kostenlos).',
    url: 'https://www.143.ch',
  },
];
