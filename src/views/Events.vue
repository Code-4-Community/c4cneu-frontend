<template>
  <div>
    <h1>Events Manager Admin</h1>
    <div class="actionBar">
      <button
        class="actionButton"
        v-bind:disabled="isDelete === true || isUpdate === true"
        v-if="isAdd === false"
        @click="addActive()"
      >
        Add
      </button>
      <button class="actionButton" @click="addActive()" v-if="isAdd === true">
        Scrap
      </button>
      <button
        class="actionButton"
        @click="deleteActive()"
        v-if="isDelete === false"
        v-bind:disabled="isUpdate === true || isAdd === true"
      >
        Delete
      </button>
      <button
        class="actionButton"
        @click="deleteActive()"
        v-if="isDelete === true"
      >
        Done
      </button>
      <button
        class="actionButton"
        v-bind:disabled="
          isDelete === true || isUpdate === true || isAdd === true
        "
        @click="updateActive()"
      >
        Update
      </button>
      <button
        class="actionButton"
        v-bind:disabled="isDelete === true || isUpdate === false"
        @click="saveActive()"
      >
        Save
      </button>
      <button
        class="actionButton"
        v-bind:disabled="isDelete === true || isUpdate === false"
        @click="saveActive()"
      >
        Cancel
      </button>
    </div>

    <div v-show="isAdd === true" class="addForm">
      <h1>Add A New Event</h1>
      <input v-model="newName" placeholder="Name of Event" />
      <datetime
        type="datetime"
        v-model="datetimeEmpty"
        use12-hour
        placeholder="Create Date"
      ></datetime>
      <button @click="addEvent()">Submit</button>
    </div>

    <table class="center">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Name of Event</th>
          <th>Date of Event</th>
          <th>Event Code</th>
          <th v-show="isDelete === true">Actions</th>
        </tr>
        <tr v-for="event in events" v-bind:key="event">
          <td>
            <input v-model="event.id" v-bind:disabled="isUpdate === false" />
          </td>
          <td>
            <input v-model="event.name" v-bind:disabled="isUpdate === false" />
          </td>
          <td>
            <input v-model="event.date" v-bind:disabled="isUpdate === false" />
          </td>
          <td>
            <input v-model="event.code" v-bind:disabled="isUpdate === false" />
          </td>
          <td v-show="isDelete === true">
            <a @click="deleteEvent()">
              <font-awesome-icon class="faForTable" icon="trash-alt" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
    //es-lint is complaing that I can use the name and date so I'm gonna leave it out
    addEvent: function() {
      //createEvent(name,date)
      this.isAdd = false;
      this.newName = "";
      this.datetimeEmpty = null;
    },
    deleteEvent: function() {
      this.test = "now";
    },
    addActive: function() {
      this.isAdd = !this.isAdd;
    },
    deleteActive: function() {
      this.isDelete = !this.isDelete;
    },
    saveActive: function() {
      this.isSave = !this.isSave;
      this.isCancel = !this.isCancel;
      this.isUpdate = !this.isUpdate;
    },
    cancelActive: function() {
      this.isCancel = !this.isCancel;
      this.isSave = !this.isSave;
      this.isUpdate = !this.isUpdate;
    },
    updateActive: function() {
      this.isUpdate = !this.isUpdate;
    }
  }
};
</script>

<style scoped>
@import "~vue-datetime/dist/vue-datetime.css";
table {
  border-collapse: collapse;
  width: 75%;
}

table.center {
  margin-left: auto;
  margin-right: auto;
}

.faForTable {
  margin-left: 10px;
  margin-right: 10px;
}

td,
th {
  border: 2px solid #dddddd;
  padding: 5px;
  text-align: center;
}

.actionBar {
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid;
  width: 30%;
  margin-left: 180px;
  margin-bottom: 20px;
}

.actionButton {
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.addForm {
  padding: 10px;
  font-size: 10px;
  border: solid;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>
