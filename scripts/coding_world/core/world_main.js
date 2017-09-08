define([
    './instrument',
    './pattern',
    './tune'
], function (createInstrumentConstructor, createPatternConstructor, createTuneConstructor) {


    function World (eventBus, challengeCode) {
        this.api = {
            Tune:       createTuneConstructor(eventBus),
            Instrument: createInstrumentConstructor(eventBus),
            Pattern:    createPatternConstructor(eventBus),
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
