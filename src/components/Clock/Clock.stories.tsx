import {Clock} from './Clock'

export default {
    title: 'Clock',
    component: Clock
}

export const Analog = () => {
    return <Clock mode={"analog"}/>
}

export const Digital = () => {
    return <Clock mode={"digital"}/>
}