<template>
    <q-page>
        <h6 style="padding-left:30px;">CRM/CRM 1</h6>
        <div class="tab-panels">
            <ul class="tabs">
                <li :class="{ active: activeTab === 'panel1' }" @click="activeTab = ('panel1')">Tablas</li>
                <li :class="{ active: activeTab === 'panel2' }" @click="activeTab = ('panel2')">Segmentaciones</li>
                <li :class="{ active: activeTab === 'panel3' }" @click="activeTab = ('panel3')">Eventos</li>
                <li :class="{ active: activeTab === 'panel4' }" @click="activeTab = ('panel4')">Bases</li>
                <li :class="{ active: activeTab === 'panel5' }" @click="activeTab = ('panel5')">Orden y prioridad</li>
                <li :class="{ active: activeTab === 'panel6' }" @click="activeTab = ('panel6')">Formularios</li>
                <li :class="{ active: activeTab === 'panel7' }" @click="activeTab = ('panel7')">Entidades a representar</li>
                <li :class="{ active: activeTab === 'panel8' }" @click="activeTab = ('panel8')">Organizaciones</li>
            </ul>

            <div id="panel1" class="panel active bg-warning" v-show="activeTab === 'panel1'">

                <div class="row" style="padding-bottom: 20px;">
                    <div class="col-4" style="display: flex; align-items: center;">
                        <q-input v-model="text" outlined class="buscador" label="Buscar">
                        </q-input>
                        <q-btn unelevated fab rounded><q-icon name="mdi-magnify"
                                style="font-size: 25px; opacity: 0.8" /></q-btn>
                    </div>
                    <div class="col-8">
                        <q-btn label="Detalles" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'detalles' }"
                            @click="activeButtonCrm = 'detalles'" />

                        <q-btn label="Datos" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'datos' }" @click="activeButtonCrm = 'datos'" />

                        <q-btn label="Datos eliminados" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'datos-eliminados' }"
                            @click="activeButtonCrm = 'datos-eliminados'" />

                        <q-btn label="Cargador-Actualizador" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'cargador' }"
                            @click="activeButtonCrm = 'cargador'" />

                        <q-btn label="Cargas" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'cargas' }"
                            @click="activeButtonCrm = 'cargas'" />

                        <q-btn label="Campos" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'campos' }"
                            @click="activeButtonCrm = 'campos'" />

                        <q-btn label="Triggers" class="btn-crm" unelevated
                            :class="{ 'active-btn-crm': activeButtonCrm === 'triggers' }"
                            @click="activeButtonCrm = 'triggers'" />
                    </div>
                </div>



                <div class="row q-gutter-lg">
                    <div class="col my-scroll ">
                        <q-virtual-scroll style="max-height: 400px;" :items="heavyList" separator v-slot="{ item }">
                            <q-item :key="index" dense>
                                <q-item-section>
                                    <q-item-label>
                                        {{ item.label }}
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-virtual-scroll>
                        <q-btn class="btn-crm2" unelevated><q-icon name="mdi-plus-circle-outline"
                                style="font-size: 20px; margin-right: 2px;" />Agregar</q-btn>
                    </div>


                    <div class="col table">
                        <q-table :rows="rows" :columns="columns" row-key="index" virtual-scroll
                            :virtual-scroll-item-size="48" :virtual-scroll-sticky-size-start="48" :pagination="pagination"
                            :rows-per-page-options="[0]" @virtual-scroll="onScroll" hide-bottom style="max-height: 400px;">
                            <template v-slot:body="props">
                                <q-tr :props="props">
                                    <q-td>{{ props.row.label }}</q-td>
                                    <q-td>{{ props.row.label }}</q-td>
                                </q-tr>
                            </template>
                        </q-table>
                        <q-btn class="btn-crm2" unelevated><q-icon name="mdi-plus-circle-outline"
                                style="font-size: 20px; margin-right: 2px;" />Agregar</q-btn>
                    </div>

                    <div class="col form q-gutter-lg">
                        <q-input v-model="text2" outlined label="Nombre">
                        </q-input>
                        <q-select v-model="tipo" :options="options3" label="Tipo" emit-value map-options outlined />
                        <q-input v-model="text2" outlined autogrow label="Descripción" class="form-text-area" />
                        <q-section class="col q-gutter-lg">
                            <q-label class="row" style="font-weight: bold;">
                                Propiedades
                            </q-label>
                            <q-checkbox v-model="right" label="Valor por defecto" class="row" />
                        </q-section>

                    </div>
                </div>



            </div>
        </div>
    </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const activeTab = ref('panel1')
        const activeButtonCrm = ref('campos')
        const maxSize = 50
        const heavyList = []

        for (let i = 0; i < maxSize; i++) {
            heavyList.push({
                label: 'Option ' + (i + 1)
            })
        }

        const rows = []
        for (let i = 0; i < maxSize; i++) {
            rows.push({
                label: 'Row ' + (i + 1)
            })
        }

        return {
            activeTab,
            activeButtonCrm,
            heavyList,
            rows,
            columns: [
                {
                    name: 'Nombre',
                    label: 'Nombre',
                    align: 'left',
                    field: 'Nombre'
                },
                { name: 'Tipo', align: 'left', label: 'Tipo', field: 'Tipo' }
            ],
            pagination: ref({
                rowsPerPage: 0
            }),
            text: ref('buscando...'),
            text2: ref('numero de cuenta'),
            etiqueta: ref(null),
            carpeta: ref(null),
            tipo: ref('numero de cuenta'),
            options1: [
                'Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3', 'Etiqueta 4', 'Etiqueta 5'
            ],
            options2: [
                'Carpeta 1', 'Carpeta 2', 'Carpeta 3', 'Carpeta 4', 'Carpeta 5'
            ],
            options3: [
                'numero de cuenta', 'numero de cuenta', 'numero de cuenta'
            ],
            right: ref(false),
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
    padding: 10px;
    border: 1px solid var(--q-negative);
    border-radius: 10px;
}

.buscador {
    width: 100%;
    font-size: 12px;
    border-radius: 5%;
    background-color: white;
}

.btn-crm {
    text-transform: uppercase;
    border: 1px solid var(--q-negative);
    border-radius: 10px;
    color: var(--q-secondary);
    padding: 0 20px 0 20px;
    margin-right: 5px;
    font-size: 12px;
    font-weight: light;
}

.active-btn-crm {
    background-color: var(--q-secondary);
    color: white;
    font-weight: bold;
}

::-webkit-scrollbar {
    width: 8px;
    height: 30%;
    overflow: auto;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background-color: var(--q-secondary);
    border-radius: 5px;
}

.my-scroll {
    padding: 20px;
    background-color: white;
    border: 1px solid var(--q-negative);
    border-radius: 10px;
}

.btn-crm2 {
    background-color: var(--q-secondary);
    margin-top: 10px;
    color: white;
    text-transform: none;
    border-radius: 10px;
}

.q-table th {
    background-color: var(--q-secondary);
    color: white;
    width: calc(100% / 2);
}

.q-table :first-child {
    border-radius: 10px 0 0 10px;
}

.q-table :nth-child(2) {
    border-radius: 0 10px 10px 0;
}

.q-focus-helper {
    background-color: transparent;
}

.table {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid var(--q-negative);
}

.form {
    height: fit-content;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid var(--q-negative);
}
</style>

