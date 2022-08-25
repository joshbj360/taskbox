<template>
    <div class="list-items">
        <template v-if="loading">
            <div v-for="t in 6" :key="t" class="loading-item">
                <span class="glow-checkbox" />
                <span class="glow-text">
                    <span>Loading...</span><span>cool</span><span>state</span>
                </span>
            </div>
        </template>
        <template v-else-if="isEmpty">
            <div class="wrapper-message">
                <span class="icon-check" />
                <p class="title-message">You have no task.</p>
                <p class="subtitle-message">Sit back and relax.</p>
            </div>
        </template>
        <template v-else>
            <Task
                v-for="task in tasksInOrder"
                :key="task.id"
                :task="task"
                @archive-task="onArchiveTask"
                @pin-task="onPinTask"
            ></Task>
        </template>
    </div>
</template>

<script>
    import { emit } from 'process';
import { computed, reactive } from 'vue';
import Task from './Task.vue'
    export default {
        name: "PureTaskList",
        components: { Task },
        props: { 
            tasks:{type: Array, required: true, default: () => []},
            loading: { type: Boolean, default: false }
        },

        emits: ['archive-task', 'pin-task'],

        setup(props, {emits}) {
            props = reactive(props)
            
            return {
                isEmpty: computed(() => props.tasks.length === 0),
                tasksInOrder: computed(() => {
                    return [
                        ...props.tasks.filter(t => t.state === "TASK_PINNED"),
                        ...props.tasks.filter(t => t.state !== "TASK_PINNED"),
                    ]
                }),

                /* 
                Event handler for OnArchiveTask
                */
                onArchiveTask(taskId) {
                    emit('archive-task', taskId)
                },
                /* 
                Event handler for OnPinTask
                */
                onPinTask(taskId) {
                    emit('pin-task', taskId)
                }
            }
        }
}
</script>