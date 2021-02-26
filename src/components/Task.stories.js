import Task from './Task';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Task',
    component: Task,
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const actionsData = {
    onPinTask: action('pin-task'),
    onArchiveTask: action('archive-task'),
};

const Template = (args, { argTypes }) => ({
    components: { Task },
    props: Object.keys(argTypes),
    methods: actionsData,
    template: '<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};


const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
