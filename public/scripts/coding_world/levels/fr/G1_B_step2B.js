define(function () {

    var musicLoops = [
        {
            loopName: 'G1_1arp1',
            source:   'G1/1 - ARP 1.mp3'
        },
        {
            loopName: 'G1_1bass',
            source:   'G1/1 - BASS.mp3'
        },
        {
            loopName: 'G1_1synth1',
            source:   'G1/1 - SYNTH 1.mp3'
        },
        {
            loopName: 'G1_1voix1',
            source:   'G1/1 - VOIX 1.mp3'
        },
        {
            loopName: 'G1_2piano',
            source:   'G1/2 - PIANO.mp3'
        }
    ]


    var sounds = [
        {
            soundName: 'G1_HITHAT',
            soundSource: 'samples/G1/HH.mp3'
        },
        {
            soundName: 'G1_KICK',
            soundSource: 'samples/G1/KICK.mp3'
        },
        {
            soundName: 'G1_RIM',
            soundSource: 'samples/G1/RIM.mp3'
        },
        {
            soundName: 'G1_SHAKER_1',
            soundSource: 'samples/G1/SHAKER_1.mp3'
        },
        {
            soundName: 'G1_SNARE',
            soundSource: 'samples/G1/SNARE.mp3'
        },
        {
            soundName: 'G1_TOM',
            soundSource: 'samples/G1/TOM.mp3'
        }
    ]


    var init = [
        'tempo = 130',
        'var pattern  = new Pattern({loopLimit: 2})',

        'var tune     = new Tune({ loop:true })',
        'tune.add(pattern)',

        'var hh = new Instrument("G1_HITHAT")',
        'var kick = new Instrument("G1_KICK")',
        'var rim = new Instrument("G1_RIM")',
        'var shaker1 = new Instrument("G1_SHAKER_1")',
        'var snare = new Instrument("G1_SNARE")',
        'var tom = new Instrument("G1_TOM")'
    ]

    var portions = [
        {
            solution: [
                '// La boucle for ne se répétait pas assez souvent. En ajoutant 1 à chaque répétition de la boucle for, avec i = i + 1, le son s\'est joué assez souvent pour composer la bonne musique.',
                'for (var i = 1; i < 17; i = i + 1)',
                '{',
                '    pattern.addSound(hh, i)',
                '}',
                '',
                'pattern.addSound(hh, 12.75)'
            ],
            base: [
                '// Les boucles for permettent de ne pas réécrire plusieurs fois des lignes de code semblables. Mais ici la boucle for ne se répète pas assez souvent. Essaie d\'utiliser un nombre plus petit que 4 dans i = i + 4',
                'for (var i = 1; i < 17; i = i + 4)',
                '{',
                '    pattern.addSound(hh, i)',
                '}',
                '',
                'pattern.addSound(hh, 12.75)'
            ]
        },
        {
            solution: [
                '// La boucle for se répétait trop souvent. En ajoutant 4 à chaque répétition de la boucle for, avec i = i + 4, le son s\'est joué assez souvent pour composer la bonne musique.',
                'for (var i = 1.75; i < 14; i = i + 4)',
                '{',
                '    pattern.addSound(kick, i)',
                '}',
                '',
                'pattern.addSound(kick, 1)',
                'pattern.addSound(kick, 2.5)',
                'pattern.addSound(kick, 3.5)',
                'pattern.addSound(kick, 4.5)',
                'pattern.addSound(kick, 5)',
                'pattern.addSound(kick, 6.5)',
                'pattern.addSound(kick, 7.5)',
                'pattern.addSound(kick, 9)',
                'pattern.addSound(kick, 10.5)',
                'pattern.addSound(kick, 11.5)',
                'pattern.addSound(kick, 13)',
                'pattern.addSound(kick, 14.5)',
                'pattern.addSound(kick, 15.5)',
                'pattern.addSound(kick, 16.25)'
            ],
            base: [
                '// Les boucles for permettent de ne pas réécrire plusieurs fois des lignes de code semblables. Mais ici la boucle for se répète trop souvent. Essaie d\'utiliser un nombre plus grand que 2 dans i = i + 2',
                'for (var i = 1.75; i < 14; i = i + 2)',
                '{',
                '    pattern.addSound(kick, i)',
                '}',
                '',
                'pattern.addSound(kick, 1)',
                'pattern.addSound(kick, 2.5)',
                'pattern.addSound(kick, 3.5)',
                'pattern.addSound(kick, 4.5)',
                'pattern.addSound(kick, 5)',
                'pattern.addSound(kick, 6.5)',
                'pattern.addSound(kick, 7.5)',
                'pattern.addSound(kick, 9)',
                'pattern.addSound(kick, 10.5)',
                'pattern.addSound(kick, 11.5)',
                'pattern.addSound(kick, 13)',
                'pattern.addSound(kick, 14.5)',
                'pattern.addSound(kick, 15.5)',
                'pattern.addSound(kick, 16.25)'
            ]
        },
        {
            solution: [
                '// La boucle for ne se répétait pas assez souvent. En ajoutant 1 à chaque répétition de la boucle for, avec i = i + 1, le son s\'est joué assez souvent pour composer la bonne musique.',
                'for (var i = 1; i < 17; i = i + 1)',
                '{',
                '    pattern.addSound(rim, i)',
                '}',
                '',
                'pattern.addSound(rim, 12.75)'
            ],
            base: [
                '// Les boucles for permettent de ne pas réécrire plusieurs fois des lignes de code semblables. Mais ici la boucle for ne se répète pas assez souvent. Essaie d\'utiliser un nombre plus petit que 3 dans i = i + 3',
                'for (var i = 1; i < 17; i = i + 3)',
                '{',
                '    pattern.addSound(rim, i)',
                '}',
                '',
                'pattern.addSound(rim, 12.75)'
            ]
        },
        {
            solution: [
                '// La boucle for ne se répétait pas assez souvent. En ajoutant 1 à chaque répétition de la boucle for, avec i = i + 1, le son s\'est joué assez souvent pour composer la bonne musique.',
                'for (var i = 1.5; i < 16; i = i + 1)',
                '{',
                '    pattern.addSound(shaker1, i)',
                '}'
            ],
            base: [
                '// Les boucles for permettent de ne pas réécrire plusieurs fois des lignes de code semblables. Mais ici la boucle for ne se répète pas assez souvent. Essaie d\'utiliser un nombre plus petit que 4 dans i = i + 4',
                'for (var i = 1.5; i < 16; i = i + 4)',
                '{',
                '    pattern.addSound(shaker1, i)',
                '}'
            ]
        },
        {
            solution: [
                '// La boucle for se répétait trop souvent. En ajoutant 4 à chaque répétition de la boucle for, avec i = i + 4, le son s\'est joué assez souvent pour composer la bonne musique.',
                'for (var i = 3; i < 16; i = i + 4)',
                '{',
                '    pattern.addSound(snare, i)',
                '}'
            ],
            base: [
                '// Les boucles for permettent de ne pas réécrire plusieurs fois des lignes de code semblables. Mais ici la boucle for se répète trop souvent. Essaie d\'utiliser un nombre plus grand que 1 dans i = i + 1',
                'for (var i = 3; i < 16; i = i + 1)',
                '{',
                '    pattern.addSound(snare, i)',
                '}'
            ]
        },
        {
            solution: [
                '// Il fallait mettre 16,75 entre parenthèse pour que le sample soit joué au bon moment.',
                'pattern.addSound(tom, 16.75)'
            ],
            base: [
                '//Respire ! Tu peux le faire. Et si tu changeais le nombre entre parenthèses ?',
                'pattern.addSound(tom, 12.75)'
            ]
        }
    ]

    var end = [

    ]


    return {
        init: init,
        portions: portions,
        end: end,
        musicLoops: musicLoops,
        sounds: sounds,
        minimumGoodAnswers: 2
    }


})