<template>
    <PureTaskList :tasks="tasks" @archive-task=archiveTask @pin-task="pinTask"/>
</template>

<script>
    import PureTaskList from './PureTaskList.vue'

    import { computed } from 'vue'
    import { useStore } from 'vuex'
import PureTaskList from './PureTaskList.vue'

    export default {
    component: PureTaskList,
    name: "TaskList",
    setup() {
        // Creates a store instance
        const store = useStore();
        // Retrieves the tasks from the store instance
        const tasks = computed(() => store.state.tasks);
        // Dispatches the action back to the store
        const archiveTask = task => store.dispatch("archiveTask", task);
        const pinTask = task => store.dispatch("pinTask", task);
        return {
            tasks,
            archiveTask,
            pinTask,
        };
    },
    components: { PureTaskList }
}
</script>