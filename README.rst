===============================
Informations générales Pomodoro
===============================

:Auteur:               Poltergeist42
:Site_Web:             https://github.com/poltergeist42
:Projet:               Pomodoro
:Version:              200516
:dépôt GitHub:         https://github.com/poltergeist42/Pomodoro
:documentation:        https://poltergeist42.github.io/Pomodoro/
:Licence:              CC BY-NC-SA 4.0
:Liens:                https://creativecommons.org/licenses/by-nc-sa/4.0/

####

Description
===========

Ce projet est à la fois une lampe d’ambiance (le mode 'Lampe') et un outil d’aide à la
concentration (le mode 'Pomodoro').

En se connectant sur une interface WEB, on peut basculer entre les modes. Il est également
possible de personnaliser les différents modes.

Mode lampe d’ambiance (Lampe)
-----------------------------

La lampe diffuse une lumière douce qui évolue en permanence.Il
est possible choisir entre 3 « motifs » différents.


Mode aide à la concentration (Pomodoro)
---------------------------------------

Le mode Pomodoro permet de lancer un des cycles travail / pause. Par défaut ces cycles
sont de 25min de travail et 5 min de pause + une pause de 15min tous les 4 cycles. Ces
périodes peuvent être modifié pour s’adapter au mieux à notre cycle naturel. Il est
également possible de définir les tâches qui doivent être effectué par cycle de travail.


####

Arborescence du projet
======================

Pour aider à la compréhension de mon organisation, voici un bref descriptif de 
l'arborescence de ce projet. Cette arborescence est à reproduire si vous récupérez ce 
dépôt depuis GitHub. ::

    ProjectDir_Name        # Dossier racine du projet (non versionner)
    |
    +--project             # (Branch master) contient l'ensemble du projet en lui même
    |  |
    |  +--_1_userDoc       # Contiens toute la documentation relative au projet
    |  |   |
    |  |   \--source       # Dossier réunissant les sources utilisées par Sphinx
    |  |
    |  +--_2_modelisation  # Contiens tous les plans et toutes les modélisations du projet
    |  |
    |  +--_3_software      # Contiens toute la partie programmation du projet
    |  |
    |  +--_4_PCB           # Contient toutes les parties des circuits imprimés (routage,
    |  |                   # Implantation, typon, fichier de perçage, etc.)
    |  |
    |  +--_5_techDoc       # Contiens toutes les documentations techniques des différents
    |  |                   # composants ou éléments qui constituent le projet. Ces 
    |  |                   # éléments sont identifiés par un liens Web dans la
    |  |                   # documentation. Ce dossier n'est pas 'poussé' dans le dépôt
    |  |                   # distant (.gitignore).
    |  |
    |  +--_6_research      # Regroupe toutes les recherches relatives à l'élaboration ou
    |  |                   # au développement du projet. Ces éléments sont identifiés par  
    |  |                   # un liens Web dans la documentation. Ce dossier n'est pas
    |  |                   # 'poussé' dans le dépôt distant (.gitignore).
    |  |
    |  \--_7_rushes        # Contient tous les éléments qui seront potentiellement
    |                      # intégrés dans la doc ou dans le projet. Ce dossier n'est pas 
    |                      # 'poussé' dans le dépôt distant (.gitignore).
    |
    +--webDoc              # Dossier racine de la documentation qui doit être publiée
    |  |
    |  \--html             # (Branch gh-pages) C'est dans ce dossier que Sphinx va
    |                      # générer la documentation a publié sur internet
    |
    \--trash               # Se dossier sert à retirer des éléments du projet sans les
                           # supprimé réellement. Ce dossier n'est pas pris en compte par
                           # GIT ou par GitHub
