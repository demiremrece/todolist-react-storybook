import TaskInput from "../components/TaskInput";

export default {
  title: "TaskInput",
  argTypes: {
    label: { control: "text"}
  }
}

export const Basic = (args) => <TaskInput {...args}></TaskInput>
Basic.args = {
  label: 'Add a task'
}