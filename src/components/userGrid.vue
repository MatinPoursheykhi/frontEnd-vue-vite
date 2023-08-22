<template>
  <div class="wrapper">
    <ul>
      <li v-for="item of data">
        <h4>
          firstName:<span>{{ item.firstName }}</span>
        </h4>
        <h4>
          lastName:<span>{{ item.lastName }}</span>
        </h4>
        <h4>
          age:<span>{{ item.age }}</span>
        </h4>
        <h4>
          mobile:<span>{{ item.mobile }}</span>
        </h4>
        <h4>
          email:<span>{{ item.email }}</span>
        </h4>
        <div class="btnWrapper">
          <button @click="deleteRow(item)">Delete</button>
          <button @click="editInfo(item)">Edit</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  props: ['data'],
  setup(props) {
    el.data = props.data
  },
  methods: {
    editInfo(item) {
      this.$emit('editInfo', item)
    },
    deleteRow(item) {
      this.$emit('deleteRow', item)
    }
  },
}
const el = reactive({
  data: [],
  info: { id: "", firstName: "", lastName: "", age: 0, mobile: "", email: "" }
})

</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100;
}

ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
}

li {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 5px;
}
button{
  background-color: rgb(216, 216, 216);
  margin: 0 5px;
}
</style>
