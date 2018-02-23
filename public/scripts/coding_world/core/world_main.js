define([
    'toxilibs/event_bus_queued',
    './instrument',
    './pattern',
    './tune',
    './timeline_tab'
], function (globalEventBus, createInstrumentConstructor, createPatternConstructor, createTuneConstructor, createTabConstructor) {


    function World (name, challengeCode) {

        var eventBus = globalEventBus(name)

        this.name = name

        this.api = {
            Tune:       createTuneConstructor(eventBus),
            Instrument: createInstrumentConstructor(eventBus),
            Pattern:    createPatternConstructor(eventBus),
            Tab:        createTabConstructor(eventBus),
            eventBus:   eventBus
        }
        this.eventBus = eventBus
        this.code     = challengeCode

        eventBus.emit('world ready', this)
    }

    World.prototype.startCode = function () {
        return this.code.start
    }


    World.prototype.exposedCode = function () {
        var code = this.code.exposed
        if (typeof code === 'object') {
            return code.join('\n')
        } else {
            return code
        }
    }


    World.prototype.endCode = function () {
        return this.code.end
    }




    return World

})
