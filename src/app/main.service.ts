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
      title: 'Hangman',
      text: 'Das ein Spiel, bei dem ein Wort gesucht ist. Man rät Buchstaben, um das Wort zu finden, ' +
        'möglichst bevor der "Hangman" fertig gezeichnet wurde.',
      img: 'assets/hangman.png',
      url: 'https://mb-hangman.web.app/',
      github: 'https://github.com/Mandy-Blaschke/hangman-game',
      tag: ['html', 'javascript', 'css']
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
  ];

  wipProjects: Project[] = [
    // TODO: Hosten
    {
      title: 'Portfolio',
      text: 'Hier handel es sich um die Seite, die sie gerade sehen. Da ich ständig neue Projekte erstelle, ' +
        'mit wechselnden Anforderungen und Anwendungsfällen, wird diese Seite den Status "fertig" ' +
        'wahrscheinlich nie erreichen.',
      img: '',
      url: '',
      github: 'https://github.com/Mandy-Blaschke/portfolio',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    // TODO: Responsive machen und Image ändern
    {
      title: 'Kundenverwaltung',
      text: 'Hier finden Sie eine einfache Kundenverwaltung. ' +
        'Diese wurde mir als Aufgabe gestellt und ich habe alle Anforderungen erfüllen können.' +
        'Sie diente, wie andere Projekte auch, der Übung von Vertiefung verschiedener Funktionen.',
      img: '',
      url: 'https://mb89-kundenverwaltung.web.app/',
      github: 'https://github.com/Mandy-Blaschke/kundenverwaltung',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
    // TODO: Responsive machen und Image ändern
    {
      title: 'Adressbuch',
      text: 'Diese App ist ähnlich aufgebaut wie die Kundenverwaltung und diente ' +
        'ebenso der Übung von Vertiefung.',
      img: '',
      url: 'https://mb89-adressbuch.web.app/',
      github: 'https://github.com/Mandy-Blaschke/adressbuch',
      tag: ['html', 'scss', 'javascript', 'typescript', 'angular']
    },
  ];

  projectIdeas: ProjectIdeas[] = [
    {
      title: 'Memory-Spiel',
      text: 'Dieses Projekt soll ein Spiel werden, wie das klassische Memory-Karten-Spiel.',
    },
    {
      title: 'Dame',
      text: 'Das Brettspiel. Zuerst soll man gegen einen anderen Spieler spielen können. ' +
        'Später soll dies dann aber um die klassischen Regeln erweitert werden.' +
        'Vielleicht schaffe ich es auch noch, dass man gegen den Computer spielen kann.'
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
