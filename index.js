////// Default setting //////
const defaultName = 'name'
const defaultVerbs = ['CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND']
const defaultEvents = ['START', 'SUCCESS', 'FAILED']
const defaultExtras = ['LOADING', 'CURRENT', 'THEME', 'DISABLE', 'HIDE']


/////// Function ///////
const actionGen = (types={}) => {

    let actions = {}
    Object.keys(types).forEach( key => {
        const keyLowercase = key.toLowerCase()
        actions = {
            ...actions,
            [keyLowercase]: (data, route) => ({
                [`type`]: types[key],
                [`payload`]: data,
                [`route`]: route
            })
        }
    })

    return actions;
};

////// Function: Type genrator //////
const typeGen = ({
    name='',
    verbs=[],
    events=[],
    extras=[],
}) => {

    // Create main [verb_name]: 'verb_name_events'
    let mainSet = {};
    verbs.forEach( v => {
        events.forEach( e => {
            mainSet = {
                ...mainSet,
                [`${v}_${e}`]: `${v}_${name}_${e}`
            }
        })
    })

    // Create extra [extras]: 'name_extras'
    let extraSet = {}
    extras.forEach( ex => {
        extraSet = {
            ...extraSet,
            [`${ex}`]: `${name}_${ex}`
        }
    })

    // Return all
    return {
        ...mainSet,
        ...extraSet
    }
};


///// Utils: Uppercase in arrays /////
const arrUpperCase = (arr=[]) => {
    arr = arr.map( x => x.toUpperCase() )
    return arr
}

////// Default function //////
const genReduxType = ({
    name=defaultName,
    verbs,
    events,
    extras,
    addDefaultVerbs=false,
    addDefaultEvents=false,
    addDefaultExtras=false,
    setDefaultVerbs,
    setDefaultEvents,
    setDefaultExtras
}={}) => {

    // Check setDefault from outside
    let dVerbs = (!setDefaultVerbs  ?  defaultVerbs : setDefaultVerbs )
    let dEvents = (!setDefaultEvents ? defaultEvents : setDefaultEvents )
    let dExtras = (!setDefaultExtras ? defaultExtras : setDefaultExtras )

    // Check blank as default, Check addDefault or not when not blank
    verbs = (!verbs ? dVerbs : (addDefaultVerbs==true ? [...dVerbs, ...verbs] : verbs))
    events = (!events ? dEvents : (addDefaultEvents==true ? [...dEvents, ...events] : events))
    extras = (!extras ? dExtras : (addDefaultExtras==true ? [...dExtras, ...extras] : extras))

    // All uppercase
    let newName = name.toUpperCase();
    let newVerbs = arrUpperCase(verbs);
    let newEvents = arrUpperCase(events);
    let newExtras = arrUpperCase(extras);

    console.log(verbs)
    console.log(events)
    console.log(extras)

    console.log(newName)
    console.log(newVerbs)
    console.log(newEvents)
    console.log(newExtras)


    // Execute types and actions
    const types = typeGen({ name: newName, verbs: newVerbs, events: newEvents, extras: newExtras});
    const actions = actionGen(types);
    return [types, actions];
};



export default genReduxType