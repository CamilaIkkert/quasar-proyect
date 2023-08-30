<template>
  <q-layout view="hHh Lpr lff">

    <q-header elevated class="bg-black row">

      <div class="col-4">
        <q-toolbar style="display: flex; justify-content: space-between;" class="row">
          <div class="col-12">
            <q-icon name="autorenew" style="font-size: 20px;" />
            <q-section>
              Dislocador
            </q-section>
            <q-toggle v-model="switchValue1" class="text-h6" on-color="green" off-color="grey-5"></q-toggle>
          </div>
        </q-toolbar>

        <q-toolbar style="display: flex; justify-content: space-between;" class="row">
          <div class="col-12">
            <q-icon name="phone_callback" style="font-size: 20px;" />
            <q-section style="color:red; font-size:10px;">
              2 llamados en cola
            </q-section>
            <q-toggle v-model="switchValue2" class="text-h6" on-color="green" off-color="grey-5"></q-toggle>
          </div>
        </q-toolbar>
      </div>

      <div class="row">
        <q-toolbar>
          <div>
            <q-btn :class="{ 'active-btn': activeButton === 'inbox' }" @click="activeButton = 'inbox'">
              <q-icon name="mdi-inbox" style="font-size: 40px; padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'filter' }" @click="activeButton = 'filter'">
              <q-icon name="mdi-filter-outline" style="font-size: 40px;padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'home' }" @click="activeButton = 'home'">
              <q-icon name="mdi-home-outline" style="font-size: 40px;padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'account' }" @click="activeButton = 'account'">
              <q-icon name="mdi-account-search-outline" style="font-size: 40px;padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'timer' }" @click="activeButton = 'timer'">
              <q-icon name="mdi-timer-outline" style="font-size: 40px;padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'calendar' }" @click="activeButton = 'calendar'">
              <q-icon name="mdi-calendar-month-outline" style="font-size: 40px;padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'trophy' }" @click="activeButton = 'trophy'">
              <q-icon name="mdi-trophy-outline" style="font-size: 40px;padding: 5px;opacity: 0.5;" />
            </q-btn>
            <q-btn :class="{ 'active-btn': activeButton === 'cog' }" @click="activeButton = 'cog'">
              <q-icon name="mdi-cog-outline" style="font-size: 40px;padding: 5px; opacity: 0.5;" />
            </q-btn>
          </div>
          <q-separator class="separtor" />
          <q-btn dense round icon="mdi-bell-outline" size="30px"
            style="margin-left: 20px; margin-right: 20px;opacity: 0.5;">
            <q-badge color="orange" floating
              style="color: black;border-radius: 50%;top: 10px; right: 10px; width: 20px; height: 20px;">{{
                notificaciones }}</q-badge>
          </q-btn>
          <q-separator class="separtor" />
          <q-section style="margin-left: 20px; font-size: 20px; opacity: 0.5; margin-right:20px;">
            microvoz
          </q-section>
          <q-avatar size="40px">
            <img src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000">
          </q-avatar>
        </q-toolbar>
      </div>

    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" bordered class="bg-secondary">
      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding class="text-info">
          <q-item clickable v-ripple>
            <q-item-section class="text-weight-bold" style="text-transform:uppercase">
              Modulos
            </q-item-section>
            <q-item-section>
              <q-toolbar>
                <q-btn flat @click="drawerMini = !drawerMini" round dense icon="menu" />
              </q-toolbar>
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/index" :active="link === 'starter'"
            @click="link = 'starter'; closeDrawer()" active-class="my-menu-link">

            <q-item-section :class="link === 'starter' ? 'text-weight-bold' : ''">
              Actividades starter
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'outbound'"
            @click="link = 'outbound'; closeDrawer()" active-class="my-menu-link" class="row">

            <q-item-section :class="link === 'outbound' ? 'text-weight-bold' : ''" class="col-10">
              Actividades outbound
            </q-item-section>

            <q-item-section avatar class="col-2">
              <q-icon name="navigate_next" />
            </q-item-section>
          </q-item>
          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'inbound'"
            @click="link = 'inbound'; closeDrawer()" active-class="my-menu-link" class="row">

            <q-item-section :class="link === 'inbound' ? 'text-weight-bold' : ''" class="col-10">
              Actividades inbound
            </q-item-section>

            <q-item-section avatar class="col-2">
              <q-icon name="navigate_next" />
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'bpm'"
            @click="link = 'bpm'; closeDrawer()" active-class="my-menu-link">

            <q-item-section :class="link === 'bpm' ? 'text-weight-bold' : ''">
              BPM
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'dashboards'"
            @click="link = 'dashboards'; closeDrawer()" active-class="my-menu-link">

            <q-item-section :class="link === 'dashboards' ? 'text-weight-bold' : ''">
              Dashboards
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'reportes'"
            @click="link = 'reportes'; closeDrawer()" active-class="my-menu-link" class="row">

            <q-item-section :class="link === 'reportes' ? 'text-weight-bold' : ''" class="col-10">
              Reportes
            </q-item-section>

            <q-item-section avatar class="col-2">
              <q-icon name="navigate_next" />
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/crm" :active="link === 'crm'"
            @click="link = 'crm'; closeDrawer()" active-class="my-menu-link">

            <q-item-section :class="link === 'crm' ? 'text-weight-bold' : ''">
              CRM
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'auditoria'"
            @click="link = 'auditoria'; closeDrawer()" active-class="my-menu-link">

            <q-item-section :class="link === 'auditoria' ? 'text-weight-bold' : ''">
              Auditoría
            </q-item-section>
          </q-item>

          <q-item v-if="!drawerMini" clickable v-ripple to="/:catchAll(.*)*" :active="link === 'general'"
            @click="link = 'general'; closeDrawer()" active-class="my-menu-link" class="row">

            <q-item-section :class="link === 'general' ? 'text-weight-bold' : ''" class="col-10">
              General
            </q-item-section>

            <q-item-section avatar class="col-2">
              <q-icon name="navigate_next" />
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'



export default {
  setup() {
    const drawer = ref(false)
    const link = ref('starter')
    const drawerMini = ref(true)
    const closeDrawer = () => {
      drawerMini.value = true
    }
    const activateLink = (clickedLink) => {
      link.value = clickedLink
      closeDrawer()
    }
    const switchValue1 = ref(false)
    const switchValue2 = ref(true)
    const switchColor = ref('grey')
    const activeButton = ref('cog')

    const switchToggle = () => {
      switchValue1.value = !switchValue1.value
      if (switchValue1.value) {
        switchColor.value = 'green'
      } else {
        switchColor.value = 'grey'
      }
      switchValue2.value = !switchValue2.value
      if (switchValue2.value) {
        switchColor.value = 'green'
      } else {
        switchColor.value = 'grey'
      }
    }
    const notificaciones = ref(3)

    return {
      drawer,
      link,
      drawerMini,
      activateLink,
      switchValue1,
      switchValue2,
      switchColor,
      switchToggle,
      activeButton,
      notificaciones
    }

  }

}
</script>


<style lang="scss">
.my-menu-link {
  color: black;
  background: white;
}

.q-drawer-content {
  height: calc(100vh - 64px);
  overflow: hidden;
}

.active-btn {
  border-bottom: 5px solid white;
}

.q-separator {
  height: 40px;
  width: 1px;
  background-color: white;
  margin-left: 20px;
}

.q-focus-helper {
  background-color: transparent;
}
</style>

