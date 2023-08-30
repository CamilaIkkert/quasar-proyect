<template>
  <q-page>
    <h6 style="padding-left:30px;">Proceso</h6>
    <div class="tab-panels">
      <ul class="tabs">
        <li :class="{ active: activeTab === 'panel1' }" @click="activeTab = ('panel1')">Listado</li>
        <li :class="{ active: activeTab === 'panel2' }" @click="activeTab = ('panel2')">Asignar usuario</li>
      </ul>

      <div id="panel1" class="panel active bg-warning" v-show="activeTab === 'panel1'">
        <div style="padding-bottom: 20px;">
          <div class="row">
            <div class="col-4" style="display: flex; align-items: center;">
              <q-input outlined v-model="text" class="bg-white" label="Buscar"
                style="width: 100%; margin: 20px;padding: 0 5px 0 5px;">
              </q-input>
              <q-btn unelevated fab rounded><q-icon name="mdi-magnify" style="font-size: 25px; opacity: 0.8" /></q-btn>

            </div>

            <div class="col-4" style="display: flex; align-items: center;">
              <q-select v-model="etiqueta" :options="options1" label="Etiqueta" emit-value map-options
                style="width: 100%; margin: 20px;padding: 0 5px 0 5px;" class="bg-white" />
              <q-btn unelevated fab rounded><q-icon name="mdi-plus-circle-outline"
                  style="font-size: 25px; opacity: 0.8" /></q-btn>

            </div>

            <div class="col-4" style="display: flex; align-items: center;">
              <q-select v-model="carpeta" :options="options2" label="Carpeta" emit-value map-options
                style="width: 100%; margin: 20px;padding: 0 5px 0 5px;" class="bg-white" />
              <q-btn unelevated fab rounded><q-icon name="mdi-plus-circle-outline"
                  style="font-size: 25px; opacity: 0.8" /></q-btn>

            </div>
          </div>

          <q-btn label="Crear proceso"
            style="text-transform: none; border:2px solid var(--q-secondary); border-radius: 10px; color: var(--q-secondary); font-weight: bold;margin-top: 10px; margin-left: 10px; padding: 0 20px 0 20px;" />
        </div>
        <q-table :rows="tableRows" :columns="columns" v-model:pagination="pagination" :rows-per-page-options="[0]"
          hide-bottom>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>{{ props.row.Nombre }}</q-td>
              <q-td>{{ props.row.Tipo }}</q-td>
              <q-td>{{ props.row.CRM }}</q-td>
              <q-td>
                <q-btn unelevated fab rounded><q-icon name="mdi-pencil-outline" /></q-btn>
                <q-btn unelevated fab><q-icon name="mdi-bookmark-outline" /></q-btn>
                <q-btn unelevated fab><q-icon name="mdi-folder-outline" /></q-btn>
                <q-btn unelevated fab><q-icon name="mdi-content-copy" /></q-btn>
                <q-btn unelevated fab><q-icon name="mdi-delete-outline" /></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'



export default {
  setup() {
    const activeTab = ref('panel1')

    return {
      activeTab,
      tableRows: [
        {
          Nombre: 'Cobranza Banco Galicia',
          Tipo: "Asunto",
          CRM: "CRM 1",
        },
        {
          Nombre: 'Alta de cliente',
          Tipo: "Asunto",
          CRM: "CRM 2",
        },
        {
          Nombre: 'Modificación de servicio',
          Tipo: "Caso",
          CRM: "CRM 3",
        },
        {
          Nombre: 'Facturación Clientes',
          Tipo: "Asunto",
          CRM: "CRM 4",
        },
        {
          Nombre: 'Mesa de ayuda de soporte',
          Tipo: "Ticket",
          CRM: "CRM 1",
        },
        {
          Nombre: 'Tareas de desarrollo',
          Tipo: "Caso",
          CRM: "CRM 2",
        },
        {
          Nombre: 'Encuesta de satisfacción Banco Galicia',
          Tipo: "Asunto",
          CRM: "CRM 3",
        }
      ],
      columns: [
        {
          name: 'Nombre',
          label: 'Nombre',
          align: 'left',
          field: 'Nombre'
        },
        { name: 'Tipo', align: 'left', label: 'Tipo', field: 'Tipo' },
        { name: 'CRM', label: 'CRM', field: 'CRM', align: 'left' },
        { name: 'Acciones', label: 'Acciones', field: 'Acciones', align: 'left' }
      ],
      pagination: ref({
        rowsPerPage: 0
      }),
      text: ref('buscando proceso por nombre...'),
      etiqueta: ref(null),
      carpeta: ref(null),
      options1: [
        'Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3', 'Etiqueta 4', 'Etiqueta 5'
      ],
      options2: [
        'Carpeta 1', 'Carpeta 2', 'Carpeta 3', 'Carpeta 4', 'Carpeta 5'
      ]
    }

  },
  methods: {
    toggleTab(tab) {
      this.activeTab = tab;
    }
  }

}
</script>

<style lang="scss">
.tab-panels {
  width: 100%;
  height: 100%;
}

.tabs {
  padding: 0;
  margin: 0;
  display: block;
  margin-left: 2%;
}

.tabs li {
  font-size: 12px;
  font-weight: light;
  display: inline-block;
  list-style-type: none;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  padding: 5px 10px 5px 10px;
  text-align: center;
  color: var(--q-secondary);
  text-transform: uppercase;
  border: 1px solid var(--q-negative);
  border-bottom: none;
}

.tabs li.active {
  background-color: var(--q-info);
  font-weight: bold;
}

.panel {
  padding: 20px;
  border: 1px solid var(--q-negative);
  border-radius: 10px;
}

.q-table th {
  background-color: var(--q-secondary);
  color: white;
  width: calc(100% / 4);
}

.q-table :first-child {
  border-radius: 10px 0 0 10px;
}

.q-table :nth-child(4) {
  border-radius: 0 10px 10px 0;
}

.q-focus-helper {
  background-color: transparent;
}

.q-table {
  padding: 30px;
  border-radius: 20px;
}

.q-field__control {
  color: var(--q-secondary);
}
</style>
