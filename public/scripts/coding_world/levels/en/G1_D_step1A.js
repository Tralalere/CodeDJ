define(function () {


    var musicLoops = [
        {
            loopName: 'G1_1piano',
            source:   'G1/1 - PIANO.mp3'
        },
        {
            loopName: 'G1_1voix2',
            source:   'G1/1 - VOIX 2.mp3'
        },
        {
            loopName: 'G1_2arp2',
            source:   'G1/2 - ARP 2.mp3'
        },
        {
            loopName: 'G1_2bass',
            source:   'G1/2 - BASS.mp3'
        },
        {
            loopName: 'G1_2synth2',
            source:   'G1/2 - SYNTH 2.mp3'
        },
        {
            loopName: 'G1_2voix1',
            source:   'G1/2 - VOIX 1.mp3'
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
            soundName: 'G1_SNARE',
            soundSource: 'samples/G1/SNARE.mp3'
        },
        {
            soundName: 'G1_CONGA_1',
            soundSource: 'samples/G1/CONGA_1.mp3'
        },
        {
            soundName: 'G1_CONGA_2',
            soundSource: 'samples/G1/CONGA_2.mp3'
        },
        {
            soundName: 'G1_CONGA_3',
            soundSource: 'samples/G1/CONGA_3.mp3'
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
        'var snare = new Instrument("G1_SNARE")',

        'var conga1 = new Instrument("G1_CONGA_1")',
        'var conga2 = new Instrument("G1_CONGA_2")',
        'var conga3 = new Instrument("G1_CONGA_3")'
    ]

    var portions = [
        {
            solution: [
                '// Putting 3 for the first line, and 11 for the second line, makes the rhythm right again',
                'pattern.addSound(conga3, 3)',
                'pattern.addSound(conga3, 11)'
            ],
            base: [
                '// Change a number on each line to play the sounds at the right moment',
                'pattern.addSound(conga3, 2)',
                'pattern.addSound(conga3, 15)'
            ]
        },
        {
            solution: [
                '// The numbers needed to follow one another to make the rhythm right again',
                '// 12,75 is an exception that plays the sound once more, in order to be synced with the music',
                'pattern.addSound(hh, 1)',
                'pattern.addSound(hh, 2)',
                'pattern.addSound(hh, 3)',
                'pattern.addSound(hh, 4)',
                'pattern.addSound(hh, 5)',
                'pattern.addSound(hh, 6)',
                'pattern.addSound(hh, 7)',
                'pattern.addSound(hh, 8)',
                'pattern.addSound(hh, 9)',
                'pattern.addSound(hh, 10)',
                'pattern.addSound(hh, 11)',
                'pattern.addSound(hh, 12)',
                'pattern.addSound(hh, 12.75)',
                'pattern.addSound(hh, 13)',
                'pattern.addSound(hh, 14)',
                'pattern.addSound(hh, 15)',
                'pattern.addSound(hh, 16)'
            ],
            base: [
                '// Change some numbers to play the sounds at the right moment',
                'pattern.addSound(hh, 1)',
                'pattern.addSound(hh, 1.5)',
                'pattern.addSound(hh, 3)',
                'pattern.addSound(hh, 4.5)',
                'pattern.addSound(hh, 5)',
                'pattern.addSound(hh, 6)',
                'pattern.addSound(hh, 7)',
                'pattern.addSound(hh, 8)',
                'pattern.addSound(hh, 9)',
                'pattern.addSound(hh, 11.5)',
                'pattern.addSound(hh, 11.75)',
                'pattern.addSound(hh, 12)',
                'pattern.addSound(hh, 12.75)',
                'pattern.addSound(hh, 13)',
                'pattern.addSound(hh, 14)',
                'pattern.addSound(hh, 15)',
                'pattern.addSound(hh, 16)'
            ]
        },
        {
            solution: [
                '// Putting 8.5 instead of 3.5, and 9 instead of 4.5, makes the rhythm right again',
                'pattern.addSound(conga1, 1)',
                'pattern.addSound(conga1, 2.5)',
                'pattern.addSound(conga1, 8.5)',
                'pattern.addSound(conga1, 9)',
                'pattern.addSound(conga1, 10.5)',
                'pattern.addSound(conga1, 16.5)'
            ],
            base: [
                '// Change some numbers to play the sounds at the right moment',
                'pattern.addSound(conga1, 1)',
                'pattern.addSound(conga1, 2.5)',
                'pattern.addSound(conga1, 3.5)',
                'pattern.addSound(conga1, 4.5)',
                'pattern.addSound(conga1, 10.5)',
                'pattern.addSound(conga1, 16.5)'
            ]
        },
        {
            solution: [
                '// Putting 5.5 instead of 3.5, and 10.75 instead of 9.75, makes the rhythm right again',
                'pattern.addSound(conga2, 2.75)',
                'pattern.addSound(conga2, 4.5)',
                'pattern.addSound(conga2, 4.75)',
                'pattern.addSound(conga2, 5.5)',
                'pattern.addSound(conga2, 5.75)',
                'pattern.addSound(conga2, 6.5)',
                'pattern.addSound(conga2, 6.75)',
                'pattern.addSound(conga2, 8.75)',
                'pattern.addSound(conga2, 10.75)',
                'pattern.addSound(conga2, 12.5)',
                'pattern.addSound(conga2, 12.75)',
                'pattern.addSound(conga2, 13.5)',
                'pattern.addSound(conga2, 13.75)',
                'pattern.addSound(conga2, 14.5)',
                'pattern.addSound(conga2, 14.75)',
                'pattern.addSound(conga2, 16.75)'
            ],
            base: [
                '// Change some numbers to play the sounds at the right moment',
                'pattern.addSound(conga2, 2.75)',
                'pattern.addSound(conga2, 4.5)',
                'pattern.addSound(conga2, 4.75)',
                'pattern.addSound(conga2, 3.5)',
                'pattern.addSound(conga2, 5.75)',
                'pattern.addSound(conga2, 6.5)',
                'pattern.addSound(conga2, 6.75)',
                'pattern.addSound(conga2, 8.75)',
                'pattern.addSound(conga2, 9.75)',
                'pattern.addSound(conga2, 12.5)',
                'pattern.addSound(conga2, 12.75)',
                'pattern.addSound(conga2, 13.5)',
                'pattern.addSound(conga2, 13.75)',
                'pattern.addSound(conga2, 14.5)',
                'pattern.addSound(conga2, 14.75)',
                'pattern.addSound(conga2, 16.75)'
            ]
        },
        {
            solution: [
                '// Putting 10 instead of 8, and 14 instead of 9, makes the rhythm right again',
                'pattern.addSound(rim, 2)',
                'pattern.addSound(rim, 6)',
                'pattern.addSound(rim, 10)',
                'pattern.addSound(rim, 14)'
            ],
            base: [
                '// Change some numbers to play the sounds at the right moment',
                'pattern.addSound(rim, 2)',
                'pattern.addSound(rim, 6)',
                'pattern.addSound(rim, 8)',
                'pattern.addSound(rim, 9)'
            ]
        },
        {
            solution: [
                '// Putting 5 instead of 7, and 9 instead of 10, makes the rhythm right again',
                'pattern.addSound(kick, 1)',
                'pattern.addSound(kick, 3.5)',
                'pattern.addSound(kick, 4.5)',
                'pattern.addSound(kick, 5)',
                'pattern.addSound(kick, 8.75)',
                'pattern.addSound(kick, 9)',
                'pattern.addSound(kick, 11.5)',
                'pattern.addSound(kick, 12.5)',
                'pattern.addSound(kick, 13)',
                'pattern.addSound(kick, 16.5)',
                'pattern.addSound(kick, 16.75)'
            ],
            base: [
                '// Change some numbers to play the sounds at the right moment',
                'pattern.addSound(kick, 1)',
                'pattern.addSound(kick, 3.5)',
                'pattern.addSound(kick, 4.5)',
                'pattern.addSound(kick, 7)',
                'pattern.addSound(kick, 8.75)',
                'pattern.addSound(kick, 10)',
                'pattern.addSound(kick, 11.5)',
                'pattern.addSound(kick, 12.5)',
                'pattern.addSound(kick, 13)',
                'pattern.addSound(kick, 16.5)',
                'pattern.addSound(kick, 16.75)'
            ]
        },
        {
            solution: [
                '// Putting 7 instead of 5, and 11 instead of 10, makes the rhythm right again',
                'pattern.addSound(snare, 3)',
                'pattern.addSound(snare, 7)',
                'pattern.addSound(snare, 11)',
                'pattern.addSound(snare, 15)'
            ],
            base: [
                '// Change some numbers to play the sounds at the right moment',
                'pattern.addSound(snare, 3)',
                'pattern.addSound(snare, 5)',
                'pattern.addSound(snare, 10)',
                'pattern.addSound(snare, 15)'
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
