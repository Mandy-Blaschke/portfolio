import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
  }

  links: string[] = ['Fertig', 'WIP', 'Ideen', 'Kontakt'];


  finishedProjects: Project[] = [
    {
      title: 'Homepage',
      text: 'Das ist meine Homepage. Auf dieser finden Sie Informationen zu meiner Person, ' +
        'meiner Qualifikation und Antworten auf Fragen, die Sie vielleicht interessieren.',
      img: 'assets/homepage.png',
      url: 'https://mandy-blaschke.de',
      github: 'https://github.com/Mandy-Blaschke/homepage',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Vergieß Mein Nicht',
      text: 'Das eine App, die ich geschrieben habe, um den Überblick darüber behalten zu können, ' +
        'wann welche Pflanze gegossen werden muss.',
      img: 'assets/vergiess.png',
      url: 'https://mb89-vergiess-mein-nicht.web.app/start',
      github: 'https://github.com/Mandy-Blaschke/vergiess-mein-nicht',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Whack-a-Mole-Spiel',
      img: 'assets/whack-a-mole.png',
      url: 'https://mb89-whack-a-mole.web.app/',
      text: 'Ein Spiel, bei dem um Schnelligkeit geht. Ziel ist es möglichst viele Punkte zu erzielen. ' +
        'Diese bekommt man, indem man einem Maulwurf, der zufällig auf dem Spielfeld erscheint zurück in die ' +
        'Höhle schlägt, bevor dieser wieder verschwindet. Anfangs erscheint nur einer, ' +
        'im Verlauf des Spiels mehrere zugleich.',
      github: 'https://github.com/Mandy-Blaschke/whack-a-mole',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Memory',
      text: 'Das klassische Memory Spiel, bei dem das Ziel darin besteht, alle Kartenpaare zu finden.' +
        ' Es ist alleine, zu zweit, sowie gegen den Computer spielbar. Der Computer hat aktuell drei Schwierigkeitsstufen.',
      img: 'assets/memory.png',
      url: 'https://mb89-memory.web.app/',
      github: 'https://github.com/Mandy-Blaschke/memory-game',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Senso (Simon Says)',
      text: 'Das Spiel hat vier Felder mit unterschiedlichen ' +
        'Farben, der jeweils ein Ton zugeordnet ist. Senso beginnt damit in der ersten Runde einen (in der zweiten zwei usw.) Ton ' +
        'vorzugeben, den der Spieler sich merken und nachspielen muss. Mit wachsender Anzahl werden die Vorgaben schneller.',
      img: 'assets/senso.png',
      url: 'https://mb89-senso-game.web.app/',
      github: 'https://github.com/Mandy-Blaschke/senso-game',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Rechne Mal!',
      text: 'Diese Anwendung habe ich an einem Wochenende für meine Nichte ' +
        'geschrieben, die in der Schule ' +
        'die Malfolgen musste, aber lieber mit ihrem Handy gespielt hat. ' +
        'Hiermit konnte sie beides kombinieren.',
      img: 'assets/rechnemal.png',
      url: 'https://mb89-rechne-mal.web.app/',
      github: 'https://github.com/Mandy-Blaschke/malfolgen',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Hangman',
      text: 'Das ein Spiel, bei dem ein Wort gesucht ist. Man rät Buchstaben, um das Wort zu finden, ' +
        'möglichst bevor der "Hangman" fertig gezeichnet wurde.',
      img: 'assets/hangman.png',
      url: 'https://mb-hangman.web.app/',
      github: 'https://github.com/Mandy-Blaschke/hangman-game',
      tag: ['html', 'javascript', 'css']
    },
    {
      title: 'Schere-Stein-Papier',
      text: 'Das klassische Schere-Stein-Papier-Spiel, bei dem man gegen den Zufall antritt. ' +
        'Das war eine der ersten Anwendungen mit JavaScript.',
      img: 'assets/schere.png',
      url: 'https://mb-schere-stein-papier.web.app/',
      github: 'https://github.com/Mandy-Blaschke/scissors-stone-paper-game',
      tag: ['html', 'javascript', 'css']
    },
    {
      title: 'Kalorientracker',
      text: 'Das ist eine Anwendung, die den Local Storage nutzt, um die ' +
        'Kalorienaufnahme eines Tages zu tracken.',
      img: 'assets/kalorientracker.png',
      url: 'https://mb89-energiebedarf.web.app/',
      github: 'https://github.com/Mandy-Blaschke/energiebedarf',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: 'Zahlen Raten',
      text: 'Das ist eine der ersten Anwendungen, die ich fertig gestellt habe. Als ich diese geschrieben habe, ' +
        'habe ich gerade angefangen JavaScript zu lernen. ' +
        'Ziel ist es eine Zufallszahl zu erraten.',
      img: 'assets/zahlen.png',
      url: 'https://mb-zahlen-raten.web.app/',
      github: 'https://github.com/Mandy-Blaschke/zahlen-raten-spiel',
      tag: ['html', 'css', 'javascript']
    },
    {
      title: 'TicTacToe',
      text: 'Das ist ein Drei-Gewinnt-Spiel, bei dem zwei Leute gegeneinander antreten ' +
        'können, wobei die Münze entscheidet, wer beginnt.',
      img: 'assets/tictactoe.png',
      url: 'https://mb-tictactoe.web.app/',
      github: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
      tag: ['html', 'css', 'javascript']
    },
    {
      title: 'Kundenverwaltung',
      text: 'Hier finden Sie eine einfache Kundenverwaltung. ' +
        'Diese wurde mir als Aufgabe gestellt und ich habe alle Anforderungen erfüllen können.' +
        'Sie diente, wie andere Projekte auch, der Übung von Vertiefung verschiedener Funktionen. ' +
        'Achtung: Dieses Projekt ist nicht responsive.',
      img: '',
      url: 'https://mb89-kundenverwaltung.web.app/',
      github: 'https://github.com/Mandy-Blaschke/kundenverwaltung',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
  ];

  wipProjects: Project[] = [
    {
      title: 'Portfolio',
      text: 'Hier handelt es sich um die Seite, die sie gerade sehen. Da ich ständig neue Projekte erstelle, ' +
        'mit wechselnden Anforderungen und Anwendungsfällen, wird diese Seite den Status "fertig" ' +
        'wahrscheinlich nie erreichen.',
      img: '',
      url: '',
      github: 'https://github.com/Mandy-Blaschke/portfolio',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    {
      title: '17und4',
      text: 'Siebzehnundvier ist ein Kartenspiel. Es funktioniert fast genauso wie das bekannte Casino-Spiel \'Black Jack\'.',
      img: '',
      url: '',
      github: '',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
  ];

  projectIdeas: ProjectIdeas[] = [
    {
      title: 'Dame',
      text: 'Das Brettspiel. Zuerst soll man gegen einen anderen Spieler spielen können. ' +
        'Später soll dies dann aber um die klassischen Regeln erweitert werden.' +
        'Vielleicht schaffe ich es auch noch, dass man gegen den Computer spielen kann.'
    },
    {
      title: 'Mensch Ärgere Dich Nicht',
      text: 'Das Würfel-Spiel was jeder kennt, möchte ich zu Übungszwecken bauen. Es soll vier Spieler maximal ' +
        'geben und man soll gegen andere oder den Computer spielen können.'
    },
    {
      title: 'Kartei-Karten',
      text: 'Wie man sie oft in der Schule genutzt hat - oder auch nicht - möchte ich eine App schreiben, die genutzt werden kann, ' +
        'wie Kartei-Karten, um zum Beispiel Vokabeln für die Schule zu lernen.'
    },
    {
      title: 'Schach',
      text: 'Wie bei dem geplanten Dame-Spiel soll man auch hier gegeneinander spielen können.'
    },
    {
      title: 'Rezeptbuch',
      text: 'Dies soll ein Kochbuch werden, dass auf lange Sicht von mehreren Nutzern verwendet werden kann. ' +
        'Die Idee ist, dass man Rezepte mit anderen, z.B. Familienmitgliedern einfach teilen kann.'
    },
    {
      title: 'Pomodoro-Clock',
      text: 'Das soll eine Pomodoro- oder auch Tomato-Clock - werden. Die Idee entstand dadurch, dass ich selbst ' +
        'schnell den Überblick verliere, wie lange ich am PC sitze und statt eine fertige zu nehmen, ist ' +
        'es sinnvoller, die Notwendigkeit mit dem Lernen zu verbinden.'
    },
    {
      title: 'Haushaltsplaner',
      text: 'Die Idee ist eine Anwendung, bei der man sämtliche Haushaltsmitglieder und die anfallenden ' +
        'Aufgaben eintragen kann. Jedes Mitglied soll Zugriff haben, aber nur die Eltern die Aufgaben eintragen ' +
        'und bearbeiten können. Die Mitglieder sollen eintragen können, ob ihre Aufgaben erledigt sind, sodass alle ' +
        'Einsicht haben, was noch zu erledigen ist.'
    },
    {
      title: 'Tamagotchi',
      text: 'Ein Tamagotchi ist ein virtuelles Haustier, um das man sich kümmern muss, ' +
        'sobald es geschlüpft ist. Es möchte gefüttert werden, man muss mit ihm spielen und braucht Zuwendung. ' +
        'Kümmert man sich zu lange nicht, so stirbt es.'
    },
  ];

  randomStartValue = Math.round(Math.random() * 100);

  scrollIntoView(id: string): void {
    const view = document.querySelector('#' + id) as HTMLElement;
    view.scrollIntoView({behavior: 'smooth'});
  }

  scrollToTop(): void {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  sizeByIndex(i: number): string {
    if (i % 3 === 0) {
      return 'small';
    } else if (i % 3 === 1) {
      return 'medium';
    } else {
      return 'large';
    }
  }

}

export interface Project {
  title: string;
  text: string;
  url: string;
  github: string;
  img: string;
  tag: string[];
}

export interface ProjectIdeas {
  title: string;
  text: string;
}
