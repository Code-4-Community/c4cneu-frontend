<template>
  <div>
    <h1>Events Manager</h1>
    <div class="action-bar">
      <button
        v-if="!isAdd"
        :disabled="isDelete || isUpdate"
        @click="toggleAdd()"
      >
        Add
      </button>

      <button @click="toggleAdd()" v-if="isAdd">
        Scrap
      </button>
      <button
        @click="toggleDelete()"
        v-if="!isDelete"
        v-bind:disabled="isUpdate || isAdd"
      >
        Delete
      </button>

      <button @click="toggleDelete()" v-if="isDelete">
        Done
      </button>

      <button :disabled="isDelete || isUpdate || isAdd" @click="toggleUpdate()">
        Update
      </button>

      <button :disabled="isDelete || !isUpdate" @click="saveActive()">
        Save
      </button>

      <button :disabled="isDelete || !isUpdate" @click="saveActive()">
        Cancel
      </button>
    </div>

    <div v-show="isAdd">
      <h1>Add an Event</h1>
      <input v-model="newName" placeholder="Name" />
      <datetime
        type="datetime"
        v-model="datetimeEmpty"
        use12-hour
        placeholder="Create Date"
      ></datetime>
      <input v-model="newCode" placeholder="Code" />
      <button @click="addEvent()">Submit</button>
    </div>

    <table class="center">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Code</th>
          <th v-show="isDelete">Actions</th>
        </tr>
        <tr v-for="event in events" :key="event.id">
          <td>
            <input
              v-model="event.name"
              :disabled="!isUpdate"
              :class="{
                disabled: !isUpdate,
                tableInput: isUpdate
              }"
            />
          </td>
          <td>
            <input
              v-model="event.date"
              :disabled="!isUpdate"
              :class="{
                disabled: !isUpdate,
                tableInput: isUpdate
              }"
            />
          </td>
          <td>
            <input
              v-model="event.code"
              :disabled="!isUpdate"
              :class="{
                disabled: !isUpdate,
                tableInput: isUpdate
              }"
            />
          </td>
          <td v-show="isDelete">
            <button @click="deleteEvent()">
              <font-awesome-icon class="faForTable" icon="trash-alt" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//TICKET: Make the table display <p> instead of <input> when editing is disabled
//TICKET: Make the table autosave when a user clicks outside of input, and remove "update" and "save" buttons
//TICKET: Have delete button in each row to delete events, and remove "delete" button at top
import { Datetime } from "vue-datetime";
export default {
  components: {
    datetime: Datetime
  },

  data() {
    return {
      isDelete: false,
      isSave: false,
      isCancel: false,
      isUpdate: false,
      isAdd: false,
      datetimeEmpty: null,
      newName: "",
      newCode: null,

      events: [
        {
          id: 1,
          name: "Jack gives his first presentation",
          date: "305-917-1301",
          code: 1234
        },
        {
          id: 2,
          name: "Stephen's address to team",
          date: "210-684-8953",
          code: 4369
        },
        {
          id: 3,
          name: "Vue",
          date: "765-338-0312",
          code: 3345
        },
        {
          id: 4,
          name: "idk anymore",
          date: "714-541-3336",
          code: 9999
        },
        {
          id: 5,
          name: "Wayfair",
          date: "972-297-6037",
          code: 8592
        },
        {
          id: 6,
          name: "L's",
          date: "760-318-8376",
          code: 2344
        }
      ]
    };
  },

  methods: {
    //addEvent: adds an event
    //Needs testing
    addEvent: function() {
      //TICKET: Needs backend API implementation
      this.isAdd = false;
      this.newName = "";
      this.datetimeEmpty = null;
      this.newCode = null;
    },

    //deleteEvent: deletes an event
    //Needs testing
    deleteEvent: function() {
      //TICKET: Needs backend API implementation
      //TICKET: Needs to delete row in table
    },

    //toggleAdd: toggles isAdd
    toggleAdd: function() {
      this.isAdd = !this.isAdd;
    },

    //toggleDelete: toggles isDelete
    toggleDelete: function() {
      this.isDelete = !this.isDelete;
    },

    //toggleUpdate: toggles isUpdate
    toggleUpdate: function() {
      this.isUpdate = !this.isUpdate;
    },

    //saveActive: toggles isSave, isCancel, isUpdate. Used after saving updates
    saveActive: function() {
      this.isSave = !this.isSave;
      this.isCancel = !this.isCancel;
      this.isUpdate = !this.isUpdate;
    }
  }
};
</script>

<style scoped></style>
