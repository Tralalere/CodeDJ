define([
    'jquery',
    'toxilibs/event_bus_queued',
    'music_timeline/music_timeline',
    'music_timeline/timeline_bar',
    'music_player/volume_view',
    'coding_world/core/timeline_tab',
    'coding_world/core/user_to_core',
    'perfectScrollbarJQuery'
], function ($, globalEventBus, Timeline, TimelineBar, initVolumeSlider, createTabConstructor, userToCoreKeys) {


    //=============Variables=============

    var eventBus = globalEventBus('view')

    var $view
    var $endScreen
    var $viewApp
    var $world2
    var $tabContainer

    var patterns    = {}
    var timelines   = {}
    var tabsBySound = {}
    var tabs        = {}
    var defaultTimelineTab
    var lastSelectedTabName

    var timelineBar

    var Tab = createTabConstructor(eventBus)



    //=============Events=============

    eventBus.on('html ready',  init)
    eventBus.on('monde3',  worldThree)

    eventBus.on('userWorld code ready', clearView)
    eventBus.on('sandboxWorld code ready', clearView)
    eventBus.on('new pattern', addPattern)
    eventBus.on('ready to display notes', updateTimelines)
    eventBus.on('code execution requested', clearView)
    eventBus.on('patterns compared', displayEndScreen)
    eventBus.on('tab creation requested', addTab)
    eventBus.on('add instrument to tab', associateInstrumentWithTab)
    eventBus.on('tab copied', replaceTab)
    eventBus.on('timeline tab changed', onTabChanged)
    eventBus.on('user to core values updated', updateUserToCore)

    eventBus.on('switch view tab', function (tabId) {
        $('.timeline-tab[data-id="'+tabId+'"]').click()
    })

    eventBus.on('change name first Tab', function (pattern) {
        console.log('switch view tab', pattern)
        $('.timeline-tab[data-id="'+pattern.id+'"]').text(pattern.name)
    })

    //=============Initialization=============

    function init () {
        $view         = $('#view')
        $endScreen    = $('#end_screen')
        $viewApp      = $('#viewApp')
        $world2       = $('#world2')
        $tabContainer = $('#tabs_container')
        $('body').addClass('secondBack')
        $('.loader').addClass('invisible')
        $viewApp.empty()
        $viewApp.prepend($world2)
        if (!$('#mp3').hasClass('invisible')) {
            $('#mp3').addClass('invisible')
        }
        initDomEvents()

        timelineBar = new TimelineBar({
            container: $view,
            loopTime: 16 * 60 / userToCoreKeys.tempo * 1000  //TODO: no magic number => (mesuresCount * beatPerMesure) * 60 / tempo * 1000
        })

        // defaultTimelineTab = new Tab()

        initVolumeSlider()

        eventBus.on('pattern beat played', launchTimelineBar)
        eventBus.on('loop stop requested', stopTimelineBar)
        clearView()
    }


    function initDomEvents () {
        $('.logoImg').on('click', function () {
            $('#viewApp').empty()
            window.location.href = '.?monde'
        })
        $('.btnPrevious').click(function () {
            window.location.href = '.?monde=select'
            return false
        })


        $('#previousTab').on('click', function () {
            var elemWidth = elementWidth($($tabContainer))
            var widthItem = 140;
            var cssPosition = parseInt($($tabContainer).css('left'), 10);
            var translate = widthItem - cssPosition;

            if(elemWidth.parent < elemWidth.child){
                if(elemWidth.parent - 370 < elemWidth.child + cssPosition){
                    $('#tabs_container').css({'right': 'auto','left': '-'+translate+'px'})
                }
            }
        })


        $('#nextTab').on('click', function () {
            var elemWidth = elementWidth($($tabContainer))
            var widthItem = 140;
            var cssPosition = parseInt($($tabContainer).css('right'), 10);
            var cssLeftPosition = parseInt($($tabContainer).css('left'), 10);
            var translate = cssPosition - widthItem;

            if(cssPosition !== 0) {
                if (elemWidth.parent < elemWidth.child) {
                    if (cssLeftPosition < 0) {
                            if (elemWidth.parent - 370 < elemWidth.child + cssPosition) {
                                $('#tabs_container').css({'left': 'auto','right': translate + 'px'})
                            }
                    }
                }
            }
        })
    }

    function elementWidth(elem) {
        return {
            parent : elem[0].parentElement.clientWidth,
            child : elem[0].clientWidth
        }
    }

    function worldThree () {
        $('#view').addClass('customHeightTimeline')
        $('#mp3').removeClass('invisible')
    }



    //=============Patterns=============

    function addPattern (pattern) {
        patterns[pattern.id] = $('<table data-id="'+pattern.id+'" class="pattern">')

        $view.append(patterns[pattern.id])
    }



    //=============Timelines=============

    function updateTimelines (notes) {
        for (var i in notes) {
            displayNote(notes[i])
        }
    }


    function displayNote (note) {
        var timeline = timelines[note.soundName + note.pattern.id]
        if (!timeline) {
            timeline = addTimeline(note.soundName, note.pattern)
            refreshTimelineBar()
        }

        timeline.displayNote({
            beat: note.start,
            class: htmlClass(note)
        })
    }


    function launchTimelineBar () {
        timelineBar.loopTime = 16 * 60 / userToCoreKeys.tempo * 1000
        if (!timelineBar.moving) {
            timelineBar.play()
        }
    }


    function stopTimelineBar () {
        timelineBar.stop()
    }


    function refreshTimelineBar () {
        timelineBar.updateHeight()
        timelineBar.setStartOffset($('.timeline-container').find('th:visible:last').outerWidth(true))
    }


    function addTimeline (sampleName, pattern) {
        var timeline = new Timeline({
            sampleName: sampleName,
            beats: pattern.totalBeats,
            container: patterns[pattern.id]
        })
        timelines[sampleName + pattern.id] = timeline

        addTimelineToTabs(sampleName, timeline)

        return timeline
    }



    //=============Tabs=============

    function addTab (tabName) {
        var tab = new Tab(tabName)
        tab.init()

        $tabContainer.append(tab.view)

        tabs[tabName] = tab

        return tab
    }


    function replaceTab (params) {
        $tabContainer.find(params.old.view).remove()
    }


    function addTimelineToTabs (sampleName, timeline) {
        var tabsList = tabsBySound[sampleName]
        if (tabsList) {
            for (var index in tabsList) {
                var tab = tabsList[index]
                tab.addTimeline(timeline)
            }
        } else {
            defaultTimelineTab.addTimeline(timeline)
        }
    }


    function associateInstrumentWithTab (params) {
        var tab = tabs[params.tabName]
        for (var patternID in patterns) {
            var timeline = timelines[params.soundName + patternID]
            var tabsList = tabsBySound[params.soundName]

            if (tabsList) {
                tabsList.push(tab)
            } else {
                tabsBySound[params.soundName] = [tab]
            }

            if (timeline) {
                tab.addTimeline(timeline)
            }
        }
    }


    function onTabChanged (tab) {
        lastSelectedTabName = tab.name
        refreshTimelineBar()
    }





    //=============Others=============

    function htmlClass (note) {
        if (note.isCorrect) {
            return 'correct'
        }
        if (note.isSolutionNote) {
            return 'missing'
        }
        return 'wrong'
    }


    function displayEndScreen (codeHasErrors) {     //TODO: Display Win Screen
        if (codeHasErrors) {
            $endScreen.html('')
        } else {
            $endScreen.html('WIN')
        }
    }


    function clearView () {
        patterns    = {}
        timelines   = {}
        tabsBySound = {}
        tabs        = {}
        $view.find('.pattern').remove()
        $tabContainer.find('.timeline-tab').remove()
        defaultTimelineTab = addTab(lang === 'fr' ? 'Global' : 'Default')
        if (lastSelectedTabName) {
            eventBus.emit('tab switch requested', lastSelectedTabName)
        }
    }


    function getAvailablesSounds (callback) {
        $.getJSON('/samples', callback)
    }


    function displaySounds () {
        getAvailablesSounds(function (data) {
            var samplesPath = data.samples
            for (var i = 0; i < samplesPath; i++) {
                var path = samplesPath[i]

                //TODO: display all samples path
            }

            var loopsPath = data.loops
            for (var j = 0; j < loopsPath; j++) {
                var path = loopsPath[j]

                //TODO: display all loops path
            }
        })
    }


    function updateUserToCore (keys) {
        userToCoreKeys = keys
    }

})
