import PureTaskList from './PureTaskList.vue'
import * as TaskStories from './Task.stories'

export default {
    component: "PureTaskList",
    title: "PureTaskList",
    decorators: [() => ({template: '<div style="margin: 3em;"><story/></div>'})],
    argTypes: {
        onPinTask: {},
        onArchiveTask: {},
    }
}

const Template = args => ({
    components: {PureTaskList},
    setup() {
        return {args, ...TaskStories.actionsData}
    },
    template: '<PureTaskList v-bind="args"  />'
})

export const Default = Template.bind({})
Default.args = {
    /* 
    Shaping the stories through the args composition
    The data was inherited form the Default story in Task.stories.js.
    */
   tasks: [
    {...TaskStories.Default.args.tasks, id: 1, title: 'Task 1'},
    {...TaskStories.Default.args.tasks, id: 2, title: 'Task 2'},
    {...TaskStories.Default.args.tasks, id: 3, title: 'Task 3'},
    {...TaskStories.Default.args.tasks, id: 4, title: 'Task 4'},
    {...TaskStories.Default.args.tasks, id: 5, title: 'Task 5'},
    {...TaskStories.Default.args.tasks, id: 6, title: 'Task 6'},
   ],
}

export const WithPinnedTask = Template.bind({})
WithPinnedTask.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        {id: 6, title: 'Task 6 (pinned)', state: 'TASK_PINNED'}
    ]

}
export const WithArchivedTask = Template.bind({})
WithArchivedTask.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 3),
        {id: 4, title: 'Wash clothes', state: 'TASK_ARCHIVED'},
        {id: 5,  title: 'cooking',state: 'TASK_ARCHIVED'},
        {id: 6, title: 'Go to church', state: 'TASK_ARCHIVED'},
    ]
}

export const Loading = Template.bind({})
Loading.args = {
    tasks: [],
    loading: true
}

export const Empty = Template.bind({})
Empty.args = { 
    ...Loading.args,
    loading: false,
}