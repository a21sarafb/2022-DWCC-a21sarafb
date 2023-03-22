let id = 0
const app = Vue.createApp({
    data() {
        return {
            isActive: true,
            error: null,
          newTodo: '',
          hideCompleted: false,
          todos: [
            { id: id++, text: 'Learn HTML', done: true },
            { id: id++, text: 'Learn JavaScript', done: true },
            { id: id++, text: 'Learn Vue', done: false }
          ],
          list: [1, 2, 3, 4]
        }
      },
      mounted() {
        console.log(this.$refs.items);
        console.log(this.$refs.items[0]);
        this.$refs.items[0].innerHTML = 4;
      },
      computed: {
        filteredTodos() {
          return this.hideCompleted
            ? this.todos.filter((t) => !t.done)
            : this.todos
        },
        classObject() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
            }
      },
      methods: {
        addTodo() {
          this.todos.push({ id: id++, text: this.newTodo, done: false })
          this.newTodo = ''
        },
        removeTodo(todo) {
            console.log(todo);
          this.todos = this.todos.filter((t) => t !== todo)
        }
      }
    }).mount('#app')


    /*data() {
        return {
            isButtonDisabled: false,
            number: 1,
            count: 0,
            objectOfAttrs: {
                id: 'container',
                class: 'wrapper'
            }    
        }
    },
    methods: {
        say(message, evento) {
            console.log(message);
            console.log(evento.target);
            
        },
        submitForm(e) {
            //e.preventDefault()
            console.log("Enviado");
        },
            
        increment(){
            this.number++;
            this.count++;
        }
    }*/
    