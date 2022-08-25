import { createStore } from 'vuex'

const defaultTask = [
    {id: '1', title: 'Go to Jebbu', state: TASK_INBOX},
    {id: '2', title: 'Go to Town', state: TASK_INBOX},
    {id: '3', title: 'Go to Gengre', state: TASK_INBOX},
    {id: '4', title: 'Go to Lagos', state: TASK_INBOX},
]

export default createStore({
    state: {
        tasks: defaultTask,
        status: 'idle',
        error: null,
    },

    mutations: {
        ARCHIVE_TASK:(state, id) {
            state.tasks.find(task => task.id === id).state === 'TASK_ARCHIVED'
        },
        PIN_TASK:(state,id) {
            state.task.find(task => task.id === id).state === 'TASK_PINNED'
        }
    },
    actions: {
        archiveTask({commit}, id) {
            commit('ARCHIVE_TASK', id)
        },
        pinTask({commit}, id) {
            commit('PIN_TASK', id)
        }
    }
})