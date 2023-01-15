<script setup lang="ts">
import { Header } from "~/components/Table.vue";
import { User } from "~~/data/User";

const headers: Header[] = [
  { name: "#", value: "id" },
  { name: "name", value: "name" },
  { name: "email", value: "email" },
  { name: "phone", value: "phone" },
  { name: "role", value: "role" },
];

const formInputs = ref<User>({
  name: "",
  email: "",
  phone: "",
  role: "ADMIN",
});

const body = ref<User[]>([]);
const { pending, refresh, data } = await useFetch("/api/user");
const modal = ref(false);

const toggleModal = () => {
  modal.value = !modal.value;
};

const createUser = async () => {
  try {
    $fetch("/api/user/create", {
      method: "POST",
      body: formInputs.value,
    });
    refresh();
    toggleModal();
    formInputs.value = {
      name: "",
      email: "",
      phone: "",
      role: "ADMIN",
    };
  } catch (e: any) {
    alert("Something went wrong");
  }
};

watch([pending], () => {
  body.value = data?.value || [];
});

const onItemClicked = async (item: any) => {
  // this will auto-delete the user after a click event, no warning, no validation.
  try {
    await $fetch("/api/user/remove", {
      method: "DELETE",
      body: {
        item,
      },
    });

    refresh();
  } catch (e) {
    console.error(e);
  }
};

refresh();
</script>
<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-2xl">Users ({{ body.length }})</h1>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        type="button"
        class="btn"
        @click="toggleModal()"
      >
        create user
      </button>
      <Modal
        :visible="modal"
        title="Create a new user"
        @on-close="toggleModal()"
      >
        <form class="space-y-6" method="POST" action="#">
          <div>
            <label
              for="Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="Name"
              name="Name"
              id="Name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter the user full name"
              v-model="formInputs.name"
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="something@mail.com"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="formInputs.email"
            />
          </div>
          <div>
            <label
              for="phoneNumber"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Phone Number</label
            >
            <input
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="+123456788876"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="formInputs.phone"
            />
          </div>
          <div>
            <label
              for="role"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Role</label
            >
            <select
              type="role"
              name="role"
              id="role"
              placeholder="Role"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="formInputs.role"
            >
              <option value="0" disabled>Please select one</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button type="button" @click="createUser()" class="btn w-full">
            CREATE USER
          </button>
        </form>
      </Modal>
    </div>
    <Table
      :headers="headers"
      :data="body"
      @on-item-clicked="onItemClicked($event)"
    />
  </div>
</template>

<style scoped>
.btn {
  @apply uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}

.btn-delete {
  @apply uppercase text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800;
}
</style>
