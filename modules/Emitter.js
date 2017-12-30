class Emitter
{
    constructor()
    {
        this.event = {};
    }

    on(type, listener){
        this.event[type] = this.event[type] || [];
        this.event[type].push(listener);
    }
    emit(type){
        this.event[type].map( (listener) => listener() )
    }
}

module.exports = Emitter;