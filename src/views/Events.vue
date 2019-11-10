<template>
  <div>
    <h1>Events Manager Admin</h1>
    <div class="actionBar">
      <button
        class="actionButton"
        v-bind:disabled="isDelete === true || isUpdate === true"
      >
        Add
      </button>
      <button
        class="actionButton"
        @click="deleteActive()"
        v-if="isDelete === false"
        v-bind:disabled="isUpdate === true"
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
        v-bind:disabled="isDelete === true || isUpdate === true"
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
          <td>{{ event.id }}</td>
          <td>{{ event.name }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.code }}</td>
          <td v-show="isDelete === true">
            <a @click="deleteEvent()"
              ><font-awesome-icon class="faForTable" icon="trash-alt" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDelete: false,
      isSave: false,
      isCancel: false,
      isUpdate: false,
      isAdd: false,
      test: "hey",

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
    addEvent: function() {},
    deleteEvent: function() {
      this.test = "now";
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
</style>
