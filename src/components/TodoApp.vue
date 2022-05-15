<template>
    <div class="container">
        <h2 class="text-center mt-5">Awei's Todo App</h2>
        
        <div class="d-flex">
            <input v-model.trim="task" type="text" placeholder="Enter task" class="form-control"/>
            <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col" class="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>
                        <span :class="{'finished' : task.status === 'finished'}">
                            {{task.name}}
                        </span>
                    </td>
                    <td @click="changeStatus(index)" class="pointer" style="width: 120px" :class="[{'text-success' : task.status === 'in-progress'},{'text-warning' : task.status === 'to-do'}]">
                        <span>
                            {{firstCharUpper(task.status)}}
                        </span>
                    </td>
                    <td>
                        <div class="text-center" @click="editTask(index)">
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div class="text-center" @click="deleteTask(index)">
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

export default ({
    name: 'HelloWorld',
    props: {
        msg: String
    },

    data() {
        return {
            task: 'Hello World',
            editedTask: null,
            availableStatuses: ['to-do', 'in-progress', 'finished'],
            tasks: [
                {
                    name: 'Steal bananas from the store.',
                    status: 'to-do'
                },
                {
                    name: 'Eat 1kg chocolate in 1 hour',
                    status: 'in-progress'
                }
            ]
        }
    },

    methods: {
        submitTask() {
            if(this.task.length === 0) return;

            if(this.editedTask === null) {
                this.tasks.push({
                    name: this.task,
                    status: 'to-do'
                })
            } else {
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            
            this.task = '';
        },
        editTask(index) {
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },

        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        changeStatus(index) {
            let newIndex = this.availableStatuses.indexOf(this.tasks[index].status)
            newIndex = ++newIndex%3;
            this.tasks[index].status = this.availableStatuses[newIndex];
        },

        firstCharUpper(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }
})
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
.finished {
    text-decoration: line-through;
}
</style>